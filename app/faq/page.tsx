import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問 | OpenDroneDiary",
  description: "OpenDroneDiaryについてよくある質問とその回答",
};

export default function FAQ() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-deep-blue">
                プライバシーポリシー
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-deep-blue mb-8">よくある質問</h1>
          
          <p className="text-gray-600 mb-8">
            OpenDroneDiaryについてよくいただく質問とその回答をまとめました。
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">基本的な使用方法について</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: OpenDroneDiaryとは何ですか？</h3>
              <p className="text-gray-700">
                A: OpenDroneDiaryは、ドローンの飛行記録を管理するためのオープンソースアプリケーションです。
                飛行日時、場所、気象条件、機体情報などを記録し、統計情報を確認することができます。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 利用料金はかかりますか？</h3>
              <p className="text-gray-700">
                A: OpenDroneDiaryは完全無料で利用できます。オープンソースソフトウェアのため、
                誰でも自由にダウンロード、使用、改変することができます。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: どのような端末で利用できますか？</h3>
              <p className="text-gray-700">
                A: Webブラウザが動作する端末であれば、パソコン、タブレット、スマートフォンなど
                様々な端末で利用できます。インターネット接続が必要です。
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">飛行記録の管理について</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: どのような情報を記録できますか？</h3>
              <p className="text-gray-700">
                A: 以下の情報を記録できます：
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>飛行日時</li>
                <li>飛行場所（住所、GPS座標）</li>
                <li>気象条件（天気、風速、気温など）</li>
                <li>使用機体の情報</li>
                <li>飛行時間</li>
                <li>飛行目的</li>
                <li>特記事項やメモ</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 過去の飛行記録を検索できますか？</h3>
              <p className="text-gray-700">
                A: はい。日付、場所、機体などの条件で過去の飛行記録を検索・フィルタリングできます。
                また、統計情報として月別の飛行時間や回数なども確認できます。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 飛行記録をエクスポートできますか？</h3>
              <p className="text-gray-700">
                A: はい。飛行記録をCSVファイルとしてエクスポートできます。
                これにより、他のアプリケーションでの分析や、バックアップとしての保存が可能です。
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">法的要件・コンプライアンスについて</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 航空法に対応していますか？</h3>
              <p className="text-gray-700">
                A: OpenDroneDiaryは飛行記録の管理を支援するツールですが、
                航空法の遵守については利用者の責任となります。
                飛行前には必ず関連法規を確認し、必要な許可を取得してください。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 飛行記録の保存期間はどのくらいですか？</h3>
              <p className="text-gray-700">
                A: 航空法では、特定の飛行について3年間の記録保存が求められています。
                OpenDroneDiaryでは、削除しない限り記録は永続的に保存されますが、
                法的要件に応じて適切な期間保存してください。
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">セキュリティ・データ保護について</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: データはどこに保存されますか？</h3>
              <p className="text-gray-700">
                A: OpenDroneDiaryはオープンソースソフトウェアのため、
                データの保存場所は導入方法によって異なります。
                一般的には、自分のサーバーやクラウドサービスに保存されます。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: データのバックアップは必要ですか？</h3>
              <p className="text-gray-700">
                A: はい。大切な飛行記録を失わないよう、定期的なバックアップを強く推奨します。
                データベースのバックアップやエクスポート機能を活用してください。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 他のユーザーとデータを共有できますか？</h3>
              <p className="text-gray-700">
                A: 基本的に、各ユーザーのデータは独立して管理されます。
                ただし、設定により同じシステムを複数のユーザーで共有することも可能です。
                データ共有時は、プライバシーに十分注意してください。
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">技術的な質問</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: どのような技術で開発されていますか？</h3>
              <p className="text-gray-700">
                A: OpenDroneDiaryは主にNext.js（React）とTypeScriptで開発されています。
                データベースはPostgreSQLを使用しており、現代的なWeb技術スタックを採用しています。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: カスタマイズできますか？</h3>
              <p className="text-gray-700">
                A: はい。オープンソースソフトウェアのため、
                ソースコードを改変して独自の機能を追加することができます。
                GitHubリポジトリからソースコードを取得してください。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 不具合を発見した場合はどうすればよいですか？</h3>
              <p className="text-gray-700">
                A: GitHubリポジトリのIssuesページで不具合の報告を受け付けています。
                できるだけ詳細な情報（発生条件、エラーメッセージ、環境情報など）をお知らせください。
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">その他</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 機能の改善要望はどこで受け付けていますか？</h3>
              <p className="text-gray-700">
                A: GitHubリポジトリのIssuesページで機能改善の要望を受け付けています。
                コミュニティの議論を通じて、より良いソフトウェアの開発に貢献してください。
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-deep-blue mb-2">Q: 開発に参加できますか？</h3>
              <p className="text-gray-700">
                A: はい。オープンソースプロジェクトのため、誰でも開発に参加できます。
                プログラミング、ドキュメント作成、テスト、翻訳など、様々な形で貢献できます。
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600">
              その他のご質問は、<a href="https://github.com/cyrus07424/openDroneDiary/issues" className="text-deep-blue hover:underline" target="_blank" rel="noopener noreferrer">GitHubのIssuesページ</a>からお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}