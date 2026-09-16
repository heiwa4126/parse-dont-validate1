import { weekdayLabelMap, type DayCode, type Weekday } from "./day_code_type";

// 弱い型定義
export type CalendarEntry = { code: DayCode };

// 9個から7個を選り分けるための関数(実行時にキー存在チェック)
const weekdayFromCode = (code: DayCode): Weekday | undefined =>
	code in weekdayLabelMap ? (code as Weekday) : undefined;

// 呼び出し箇所1: ラベル生成
const weekdayLabel = (code: DayCode): string | undefined => {
	const w = weekdayFromCode(code);
	return w === undefined ? undefined : weekdayLabelMap[w];
};

// 呼び出し箇所2: フィルタ一致判定
const matchesFilter = (entry: CalendarEntry, filter: { days: Weekday[] }): boolean => {
	const w = weekdayFromCode(entry.code);
	return w !== undefined && filter.days.includes(w);
};

// シフト表で、指定した曜日の予定だけラベル表示する。祝日・会社休日は対象外
export const findLabel = (entries: CalendarEntry[], filter: { days: Weekday[] }) => {
	// weekdayLabel を2回呼んでいる
	const matched = entries.filter((e) => matchesFilter(e, filter));
	const target = matched.find((e) => weekdayLabel(e.code) !== undefined);
	return target === undefined ? undefined : weekdayLabel(target.code);
};
