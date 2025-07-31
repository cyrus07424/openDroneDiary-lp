import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold text-deep-blue">
            🛩️ OpenDroneDiary
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-gray-700 hover:text-deep-blue">
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
  );
}