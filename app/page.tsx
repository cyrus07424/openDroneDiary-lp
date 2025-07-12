import Link from "next/link";

export default function Home() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || '#';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-deep-blue">
                🛩️ OpenDroneDiary
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-deep-blue">
                機能
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-deep-blue">
                よくある質問
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

      {/* Hero Section */}
      <section className="sky-gradient cloud-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center hero-text">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              オープンソース<br />
              ドローン飛行日誌管理ツール
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              誰でも簡単に使えるドローン飛行日誌管理ツール。<br />
              飛行記録を安全に管理し、空の冒険を記録しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={appUrl}
                className="bg-sunset-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                今すぐ始める
              </a>
              <a
                href="https://github.com/cyrus07424/openDroneDiary"
                className="bg-white hover:bg-gray-100 text-deep-blue px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub で見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              主な機能
            </h2>
            <p className="text-xl text-gray-600">
              ドローン飛行を安全かつ効率的に管理するための機能をご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-light-gray">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-deep-blue mb-2">
                飛行記録管理
              </h3>
              <p className="text-gray-600">
                飛行日時、場所、気象条件、機体情報などを詳細に記録・管理できます。
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-light-gray">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-deep-blue mb-2">
                飛行エリア記録
              </h3>
              <p className="text-gray-600">
                飛行エリアを地図上で記録し、過去の飛行場所を簡単に確認できます。
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-light-gray">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-deep-blue mb-2">
                統計・分析
              </h3>
              <p className="text-gray-600">
                飛行時間、回数、機体使用状況などの統計情報を自動で集計・表示します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-sky-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              オープンソースだからできること
            </h2>
            <p className="text-xl text-white mb-8">
              OpenDroneDiaryは完全にオープンソースで開発されています。
              誰でも自由に使用・改変・配布でき、コミュニティによる継続的な改善が行われています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">✅ 無料で使用可能</h3>
                <p className="text-white">
                  完全無料で全ての機能をご利用いただけます。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🔧 カスタマイズ可能</h3>
                <p className="text-white">
                  ソースコードが公開されているため、自由にカスタマイズできます。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🔒 プライバシー保護</h3>
                <p className="text-white">
                  データは完全にあなたの管理下に置かれ、プライバシーが保護されます。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🌍 コミュニティ</h3>
                <p className="text-white">
                  世界中の開発者やドローン愛好家とつながることができます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            今すぐ始めませんか？
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            OpenDroneDiaryを使って、あなたのドローン飛行記録を効率的に管理しましょう。
          </p>
          <a
            href={appUrl}
            className="bg-sunset-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            アプリを開始する
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-deep-blue mb-4">
                🛩️ OpenDroneDiary
              </div>
              <p className="text-gray-600 mb-4">
                オープンソースのドローン飛行日誌管理ツール
              </p>
              <p className="text-gray-600">
                誰でも簡単に使えるドローン飛行記録管理システム
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-deep-blue mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <a href={appUrl} className="text-gray-600 hover:text-deep-blue" target="_blank" rel="noopener noreferrer">
                    アプリ
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cyrus07424/openDroneDiary" className="text-gray-600 hover:text-deep-blue" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-deep-blue mb-4">法的事項</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-deep-blue">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-deep-blue">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-deep-blue">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 OpenDroneDiary. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
