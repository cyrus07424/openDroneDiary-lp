# OpenDroneDiary Landing Page

OpenDroneDiary（オープンソースドローン飛行日誌管理ツール）のランディングページです。

## 概要

このプロジェクトは、[OpenDroneDiary](https://github.com/cyrus07424/openDroneDiary)のためのランディングページ（LP）です。Next.js 15とTailwind CSS 4を使用して構築されており、空をモチーフとした美しいデザインで、ドローン飛行日誌管理ツールの魅力を伝えます。

## 機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **空をモチーフとしたデザイン**: 空のグラデーションと雲のパターンを使用
- **環境変数対応**: アプリケーションURLを環境変数で設定可能
- **法的コンテンツ**: 利用規約とプライバシーポリシーを含む
- **多言語対応**: 日本語でのコンテンツ提供
- **SEO対応**: 適切なメタデータとタイトル設定

## 使用技術

- Next.js 15
- TypeScript
- Tailwind CSS 4
- React 19

## セットアップ

### 前提条件

- Node.js 18.x以上
- npm または yarn

### インストール

```bash
npm install
```

### 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
NEXT_PUBLIC_APP_URL=https://your-drone-diary-app.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

- `NEXT_PUBLIC_APP_URL`: アプリケーションのURL（必須）
- `NEXT_PUBLIC_GTM_ID`: Google Tag ManagerのコンテナID（オプション）

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてランディングページを確認できます。

### ビルド

```bash
npm run build
```

### 静的ファイルの生成

```bash
npm run build
```

`out` ディレクトリに静的ファイルが生成されます。

## ページ構成

- **ホーム（/）**: メインのランディングページ
- **利用規約（/terms）**: サービスの利用規約
- **プライバシーポリシー（/privacy）**: プライバシーポリシー

## デザイン

### カラーパレット

- **空の青**: #87ceeb (Sky Blue)
- **雲の白**: #ffffff (Cloud White)
- **地平線の青**: #4a90e2 (Horizon Blue)
- **夕焼けのオレンジ**: #ff8c42 (Sunset Orange)
- **深い青**: #2c5282 (Deep Blue)

### テーマ

- 空をモチーフとしたグラデーション背景
- 雲のパターンを使用したヒーローセクション
- 直感的で親しみやすいUI/UX

## カスタマイズ

### アプリケーションURLの変更

`NEXT_PUBLIC_APP_URL`環境変数を変更することで、「今すぐ始める」ボタンのリンク先を変更できます。

### デザインの変更

`app/globals.css`のCSS変数を変更することで、カラーテーマをカスタマイズできます。

## デプロイ

このプロジェクトは静的サイトとして生成されるため、以下のプラットフォームで簡単にデプロイできます：

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## ライセンス

MIT License - 詳細は[LICENSE](LICENSE)ファイルをご確認ください。

## 貢献

プルリクエストやIssueを歓迎します。改善提案がございましたら、お気軽にお知らせください。

## 関連リンク

- [OpenDroneDiary（メインアプリケーション）](https://github.com/cyrus07424/openDroneDiary)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
