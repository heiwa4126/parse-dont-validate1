import type { CalendarEntry, CalendarEntry2 } from "./CalendarEntry";
import type { Weekday } from "./DayCode";
import { weekdayLabelMap } from "./DayCode";

// 偽DB元データ(slug)
const entries: CalendarEntry[] = [
	{ code: "holiday" },
	{ code: "mon" },
	{ code: "wed" },
	{ code: "company_holiday" },
	{ code: "fri" }
];

// 弱い型のまま返す
export const getEntries = (): CalendarEntry[] => entries;

// 強い型に変換して返す
// 「キャッシュ」ではなく「別の見え方を都度作るgetter」
export const getEntries2 = (): CalendarEntry2[] => entries.map(toEntry2);

const toEntry2 = (e: CalendarEntry): CalendarEntry2 => ({
	code: e.code,
	weekday: e.code in weekdayLabelMap ? (e.code as Weekday) : null
});
