import type { DayCode, Weekday } from "./DayCode";

// 弱い型定義
export type CalendarEntry = { code: DayCode };

// 強い型定義
export type CalendarEntry2 = {
	code: DayCode;
	weekday: Weekday | null; // 祝日・会社休日は null
};
