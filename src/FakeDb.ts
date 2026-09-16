import type { CalendarEntry, CalendarEntry2 } from "./CalendarEntry";
import type { Weekday } from "./DayCode";
import { weekdayLabelMap } from "./DayCode";

const entries: CalendarEntry[] = [
	{ code: "holiday" },
	{ code: "mon" },
	{ code: "wed" },
	{ code: "company_holiday" },
	{ code: "fri" }
];

export const getEntries = (): CalendarEntry[] => entries;

const toEntry2 = (e: CalendarEntry): CalendarEntry2 => ({
	code: e.code,
	weekday: e.code in weekdayLabelMap ? (e.code as Weekday) : null,
});

export const getEntries2 = (): CalendarEntry2[] => entries.map(toEntry2);
