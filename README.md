# 選考管理ツール（GAS）

就活の選考状況をスプシで管理し、毎朝Gmailで通知するGASツール。

## 機能
- 登録中の企業一覧をメール通知
- 提出期限3日前にリマインド
- 提出期限3日前にSlack通知
- 時間トリガーで毎朝自動実行
- Googleフォーム送信時にSlack通知（onFormSubmitトリガー）
- スプシの次回日時をGoogleカレンダーに自動登録（重複スキップ・30分前リマインダー付き）

## ファイル
- `mailNotifier.gs` - メール通知関連（sendTestMail, sendTodayMail, sendUrgentMail）
- `slackNotifier.gs` - Slack通知関連（sendSlackTest, sendUrgentSlack）
- `onFormSubmit.gs` - フォーム送信時の自動Slack通知
- `calendarSync.gs` - Googleカレンダー自動登録（addToCalendar）

## 動作環境
- Google Workspaceアカウント
- Slackワークスペース
- Gmail

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