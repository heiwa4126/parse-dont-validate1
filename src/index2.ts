import { findLabel, type CalendarEntry } from "./code_strong";

const entries: CalendarEntry[] = [
	{ code: "holiday", weekday: null },
	{ code: "mon", weekday: "mon" },
	{ code: "wed", weekday: "wed" },
	{ code: "company_holiday", weekday: null },
	{ code: "fri", weekday: "fri" }
];

// 月・水・金だけを対象にする
const filter = { days: ["mon", "wed", "fri"] as ("mon" | "wed" | "fri")[] };

const result = findLabel(entries, filter);
console.log(result); // => "月" (最初にマッチした mon のラベル)

// フィルタに一致するものがない場合
const noMatch = findLabel(entries, { days: ["sat", "sun"] as ("sat" | "sun")[] });
console.log(noMatch); // => undefined
