import { weekdayLabelMap, type DayCode, type Weekday } from "./day_code_type";

// 強い型定義
export type CalendarEntry = {
	code: DayCode;
	weekday: Weekday | null; // 祝日・会社休日は null
};

// シフト表で、指定した曜日の予定だけラベル表示する。祝日・会社休日は対象外
export const findLabel = (entries: CalendarEntry[], filter: { days: Weekday[] }) => {
	const w = entries
		.map((e) => e.weekday)
		.find((w): w is Weekday => w !== null && filter.days.includes(w));
	return w === undefined ? undefined : weekdayLabelMap[w];
};
