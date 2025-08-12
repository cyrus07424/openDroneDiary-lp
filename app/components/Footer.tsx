import Link from "next/link";

export default function Footer() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || '#';

  return (
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
            © 2025 OpenDroneDiary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}