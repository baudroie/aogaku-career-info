# 青学学生向け LINE 情報登録 LP

公開URL: https://baudroie.github.io/aogaku-career-info/

## 内容
青山学院大学の学生向けに、IT業界・就活のヒント・限定セミナーの情報登録を案内するLPです。

## 開発
```sh
npm ci
npm run dev
npm run build
```
`index.html` に文章・導線、`src/styles.css` にレイアウト、`src/main.js` にメニューと初回表示アニメーションがあります。ビルド結果は `dist/client/`、GitHub Pagesの配信対象は `docs/` です。更新後はビルド結果を `docs/` へ同期してください。

## 素材
`public/assets/` 内の校舎・学生・情報カテゴリのイラストは、このLP用にAI生成した素材です。校舎は間島記念館をモチーフにしたイラストで、写真ではありません。配信用に透過WebPへ圧縮しています。CTAの丸い手描き線・3本線は既存LP素材を継承。雲・木・長い下線・二重線・曲線矢印は追加生成。Noto Sans JP 400/700/900とYomogiはGoogle Fonts公式ソースから本ページの文字をサブセット化（同梱OFL参照）。矢印・メニュー・電球はPhosphor Icons（MIT、同梱LICENSE参照）。

## LINE導線
全CTAはこのLP専用に作成したLMessage登録URLへ接続しています。
管理名: 青学情報LP｜IT・就活・限定イベント / QRアクションID: 552859
https://s.lmes.jp/landing-qr/1657893371-rRVdmjzQ?uLand=e8Y1Ze
このリポジトリはLINE配信シナリオや自動応答を変更しません。流入計測は既存のalumni LPとは別です。配信メッセージ・ステップ配信は未設定です。セミナー欄はテーマ例であり、開催日程の告知ではありません。

## アクセシビリティ・動き
- 固定ヘッダー、キーボードフォーカス、Escapeで閉じるスマホメニュー。
- Hero装飾0.6秒、背景ラベル最大4px/1度で3.6秒、CTA装飾は0.4秒後から0.6秒。すべて初回のみ。文字自体は動かしません。
- ボタンhover0.2秒、上へ2px・矢印右へ3px。
- スマホは移動半減、画面外・非表示タブは停止。
- prefers-reduced-motionではアニメーション無効。文章・画像・CTAはJavaScriptなしで表示。

## 文字・装飾の照合
`typography-spec.json` に見出し81文字のサイズ倍率・上下位置・角度を保存。`review/glyph-audit.csv` に4画面幅での実測値、`review/` に同幅比較画像を保存。確認範囲と残る画像由来の差分は `design-qa.md` を参照してください。
