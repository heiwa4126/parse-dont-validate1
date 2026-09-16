import type { CalendarEntry2 } from "./CalendarEntry";
import { weekdayLabelMap, type Weekday } from "./DayCode";

// シフト表で、指定した曜日の予定だけラベル表示する。祝日・会社休日は対象外
export const findLabel = (entries: CalendarEntry2[], filter: { days: Weekday[] }) => {
	const w = entries
		.map((e) => e.weekday)
		.find((w): w is Weekday => w !== null && filter.days.includes(w));
	return w === undefined ? undefined : weekdayLabelMap[w];
};
