import { findLabel } from "./code1";
import type { CalendarEntry } from "./type_weak";

const entries: CalendarEntry[] = [
	{ code: "holiday" },
	{ code: "mon" },
	{ code: "wed" },
	{ code: "company_holiday" },
	{ code: "fri" }
];

// 月・水・金だけを対象にする
const filter = { days: ["mon", "wed", "fri"] as ("mon" | "wed" | "fri")[] };

const result = findLabel(entries, filter);
console.log(result); // => "月" (最初にマッチした mon のラベル)

// フィルタに一致するものがない場合
const noMatch = findLabel(entries, { days: ["sat", "sun"] });
console.log(noMatch); // => undefined
