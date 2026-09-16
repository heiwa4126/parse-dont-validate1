export type DayCode =
	| "mon"
	| "tue"
	| "wed"
	| "thu"
	| "fri"
	| "sat"
	| "sun"
	| "holiday"
	| "company_holiday"; // 9件
export type CalendarEntry = { code: DayCode };
