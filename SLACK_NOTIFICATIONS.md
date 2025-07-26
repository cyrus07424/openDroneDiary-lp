# Slack Notification System

このドキュメントでは、OpenDroneDiary Landing Pageに実装されたSlack通知システムの使用方法について説明します。

## 概要

Slack通知システムは以下の機能を提供します：

- ユーザー新規登録通知
- ユーザーログイン通知
- データ登録通知
- データ更新通知

各通知には、ユーザー情報、IPアドレス、ユーザーエージェント情報が含まれます。

## 環境設定

### 1. Slack Webhook URLの設定

`.env.local`ファイルに以下の環境変数を追加してください：

```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

### 2. Slackでのwebhook設定手順

1. Slackワークスペースの管理者として、[Slack API](https://api.slack.com/apps)にアクセス
2. 「Create New App」をクリック
3. 「From scratch」を選択
4. アプリ名とワークスペースを設定
5. 「Incoming Webhooks」機能を有効化
6. 「Add New Webhook to Workspace」でチャンネルを選択
7. 生成されたWebhook URLを環境変数に設定

## API エンドポイント

### 1. ユーザー登録通知

```http
POST /api/notifications/user-registration
Content-Type: application/json

{
  "userId": "user-123",
  "username": "山田太郎",
  "email": "yamada@example.com",
  "additionalData": {
    "registrationSource": "ランディングページ"
  }
}
```

### 2. ユーザーログイン通知

```http
POST /api/notifications/user-login
Content-Type: application/json

{
  "userId": "user-123",
  "username": "山田太郎",
  "email": "yamada@example.com",
  "additionalData": {
    "loginMethod": "メール・パスワード"
  }
}
```

### 3. データ登録通知

```http
POST /api/notifications/data-registration
Content-Type: application/json

{
  "userId": "user-123",
  "username": "山田太郎",
  "email": "yamada@example.com",
  "dataType": "ドローン飛行記録",
  "dataInfo": {
    "flightDuration": "15分",
    "location": "東京都千代田区"
  },
  "additionalData": {
    "droneModel": "DJI Mini 3"
  }
}
```

### 4. データ更新通知

```http
POST /api/notifications/data-update
Content-Type: application/json

{
  "userId": "user-123",
  "username": "山田太郎",
  "email": "yamada@example.com",
  "dataType": "ドローン飛行記録",
  "dataInfo": {
    "flightDuration": "20分（更新）",
    "location": "東京都千代田区"
  },
  "additionalData": {
    "updateReason": "飛行時間修正"
  }
}
```

### 5. テスト通知

```http
GET /api/test-notifications
```

すべての通知タイプをテストし、結果を返します。

## プログラムでの使用

### サーバーサイド

```typescript
import { slackService } from '@/app/lib/slack';
import { getUserInfoFromRequest } from '@/app/lib/user-info';

// ユーザー登録通知
const userInfo = getUserInfoFromRequest(request, {
  userId: 'user-123',
  username: '山田太郎',
  email: 'yamada@example.com'
});

await slackService.notifyUserRegistration(userInfo, {
  registrationSource: 'ランディングページ'
});
```

### クライアントサイド

```typescript
import { notificationClient } from '@/app/lib/notification-client';

// ユーザー登録通知
await notificationClient.notifyUserRegistration({
  userId: 'user-123',
  username: '山田太郎',
  email: 'yamada@example.com',
  additionalData: {
    registrationSource: 'ランディングページ'
  }
});
```

## 通知内容

Slackに送信される通知には以下の情報が含まれます：

### 基本情報
- 通知タイプ（登録/ログイン/データ登録/データ更新）
- ユーザー情報（ID、名前、メールアドレス）
- 実行時刻（日本時間）

### 技術情報
- IPアドレス
- ユーザーエージェント
- ブラウザ情報（ブラウザ、OS、デバイスタイプ）

### 追加データ
- 各通知タイプ固有の追加情報
- カスタムデータ

## エラーハンドリング

- Slack Webhook URLが設定されていない場合、警告ログが出力され、通知は送信されません
- ネットワークエラーや認証エラーの場合、エラーログが出力されます
- APIエンドポイントは適切なHTTPステータスコードを返します

## セキュリティ

- 環境変数でのWebhook URL管理
- IPアドレスの適切な取得（プロキシ対応）
- ユーザーエージェント情報の長さ制限

## 静的サイトとしてのデプロイ

静的サイトとしてデプロイする場合は、`next.config.ts`で`output: 'export'`を設定してください。
その場合、API routesは利用できませんが、クライアントサイドライブラリを使用して外部のSlack統合サービスと連携できます。

## トラブルシューティング

### Webhook URLが正しく設定されているか確認

```bash
curl http://localhost:3000/api/test-notifications
```

レスポンスの`slackConfigured`が`true`であることを確認してください。

### Slackチャンネルでの確認

テスト通知を送信して、指定したSlackチャンネルに通知が届くことを確認してください。