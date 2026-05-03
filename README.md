# 選考管理ツール（GAS）

就活の選考状況をスプシで管理し、毎朝Gmailで通知するGASツール。

## 機能
- 登録中の企業一覧をメール通知
- 提出期限3日前にリマインド
- 提出期限3日前にSlack通知
- 時間トリガーで毎朝自動実行
- Googleフォーム送信時にSlack通知（onFormSubmitトリガー）

## ファイル
- `sendTestMail.gs` - 選考管理（メール・Slack通知）
- `onFormSubmit.gs` - フォーム送信時の自動Slack通知 ← New!

## 使い方
1. Googleスプレッドシートを作成
2. 拡張機能 → Apps Script でスクリプトエディタを開く
3. このファイルの内容をコピペ
4. トリガーで自動実行を設定

## セットアップ
1. Googleスプレッドシートを作成
2. 拡張機能 → Apps Scriptでコードを貼り付け
3. プロパティサービスに `SLACK_WEBHOOK_URL` を登録
4. トリガーで自動実行を設定