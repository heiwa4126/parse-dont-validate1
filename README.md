# parse-dont-validate1

- [境界を強い型にして実装をシンプルにしよう](https://zenn.dev/my_vision/articles/29d90ef97f162e)
- [Parse, don’t validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)

の "弱い型を引き回すことで補正コードが増殖する" をテストしてみる。

## 強い型にする、とは?

「データが 1 個増える」のと引き換えに、「判定ロジックが使用箇所の数だけ複製される」問題を消す。

- フィールドが 1 個増えるコストは固定
- だが、判定コードの複製は使う場所が増えるたびに増え続ける

後者を境界(データを作る側)に寄せてしまう、というのが元記事の言う「強い型にする」。

「増えたフィールド 1 個」と「消えた関数 3 つ×呼び出し箇所の数」を比べると、
後者の方がずっと大きい、という主張。

増えたフィールドは毎回計算されるので、
無効化・整合性の問題はない("キャッシュ"ではない)。

計算コスト・レイテンシを使って関数を減らす。

## 開発

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts  # 弱い型
bun run src/index2.ts # 強い型
```

This project was created using `bun init` in bun v1.4.2.
[Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
