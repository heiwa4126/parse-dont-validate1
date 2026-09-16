import { getEntries } from "./FakeDb";
import { findLabel } from "./LibWeak";

const entries = getEntries();

// 月・水・金だけを対象にする
const filter = { days: ["mon", "wed", "fri"] as ("mon" | "wed" | "fri")[] };

const result = findLabel(entries, filter);
console.log(result); // => "月" (最初にマッチした mon のラベル)

// フィルタに一致するものがない場合
const noMatch = findLabel(entries, { days: ["sat", "sun"] });
console.log(noMatch); // => undefined
