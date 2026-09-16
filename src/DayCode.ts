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

export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun"; // 7件

export const weekdayLabelMap: Record<Weekday, string> = {
	mon: "月",
	tue: "火",
	wed: "水",
	thu: "木",
	fri: "金",
	sat: "土",
	sun: "日"
};
