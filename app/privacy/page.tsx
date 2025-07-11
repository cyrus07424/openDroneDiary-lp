import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | OpenDroneDiary",
  description: "OpenDroneDiaryのプライバシーポリシーについて",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-deep-blue">
              🛩️ OpenDroneDiary
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-deep-blue">
                ホーム
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-deep-blue">
                利用規約
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-deep-blue mb-8">プライバシーポリシー</h1>
          
          <p className="text-gray-600 mb-6">
            最終更新日: 2024年1月1日
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">1. 基本方針</h2>
            <p className="text-gray-700 mb-4">
              OpenDroneDiary（以下「当サービス」）は、ユーザーのプライバシーを尊重し、
              個人情報の保護に努めています。本プライバシーポリシーは、
              当サービスにおける個人情報の取り扱いについて説明するものです。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">2. 情報の収集</h2>
            <p className="text-gray-700 mb-4">
              当サービスは、以下の情報を収集する場合があります：
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>ユーザーが入力した飛行記録データ（日時、場所、機体情報など）</li>
              <li>アプリケーションの使用状況に関する情報</li>
              <li>技術的なログ情報（IPアドレス、ブラウザ情報など）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">3. 情報の利用目的</h2>
            <p className="text-gray-700 mb-4">
              収集した情報は、以下の目的で利用されます：
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>サービスの提供および機能の改善</li>
              <li>ユーザーサポートの提供</li>
              <li>セキュリティの維持および不正利用の防止</li>
              <li>統計情報の作成（個人を特定できない形式）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">4. 情報の保存と管理</h2>
            <p className="text-gray-700 mb-4">
              当サービスはオープンソースソフトウェアとして提供されており、
              データの保存と管理は各ユーザーの責任となります。
              以下の点にご注意ください：
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>データはユーザーの環境（ローカルデバイスまたは選択したサーバー）に保存されます</li>
              <li>適切なバックアップを取ることを強く推奨します</li>
              <li>セキュリティ対策は各ユーザーが実施する必要があります</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">5. 第三者への情報提供</h2>
            <p className="text-gray-700 mb-4">
              当サービスは、以下の場合を除き、ユーザーの個人情報を第三者に提供しません：
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">6. クッキーの使用</h2>
            <p className="text-gray-700 mb-4">
              当サービスは、ユーザーエクスペリエンスの向上のため、
              クッキーを使用する場合があります。
              ユーザーは、ブラウザの設定によりクッキーの使用を制御できます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">7. オープンソースの特性</h2>
            <p className="text-gray-700 mb-4">
              当サービスはオープンソースソフトウェアです。
              そのため、以下の点にご注意ください：
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>ソースコードは公開されており、誰でもアクセスできます</li>
              <li>セキュリティの実装は、各導入者の責任となります</li>
              <li>データの暗号化や保護は、各環境での設定が必要です</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">8. 法的な要件</h2>
            <p className="text-gray-700 mb-4">
              当サービスを利用する際は、以下の法的要件を遵守してください：
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>航空法その他の関連法令の遵守</li>
              <li>プライバシーに関する法令の遵守</li>
              <li>飛行記録に含まれる個人情報の適切な管理</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">9. ポリシーの変更</h2>
            <p className="text-gray-700 mb-4">
              本プライバシーポリシーは、必要に応じて変更される場合があります。
              変更された内容は、GitHubリポジトリでの公開をもって効力を生じます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">10. お問い合わせ</h2>
            <p className="text-gray-700 mb-4">
              本プライバシーポリシーに関するお問い合わせは、
              GitHubリポジトリのIssueからお寄せください。
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600">
              以上
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}