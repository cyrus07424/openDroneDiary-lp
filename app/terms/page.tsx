import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "利用規約",
  description: "OpenDroneDiaryの利用規約について",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-deep-blue mb-8">利用規約</h1>
          
          <p className="text-gray-600 mb-6">
            最終更新日: 2025年1月1日
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第1条（適用）</h2>
            <p className="text-gray-700 mb-4">
              本利用規約（以下「本規約」）は、OpenDroneDiary（以下「当サービス」）の利用条件を定めるものです。
              利用者（以下「ユーザー」）は、当サービスを利用することで、本規約に同意したものとみなされます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第2条（利用登録）</h2>
            <p className="text-gray-700 mb-4">
              当サービスは、オープンソースソフトウェアとして提供されており、誰でも自由に利用することができます。
              ただし、各自で適切なセキュリティ対策を講じることを推奨します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第3条（利用料金）</h2>
            <p className="text-gray-700 mb-4">
              当サービスは無料で提供されています。ただし、インターネット接続料金や電気料金などの
              利用環境に関わる費用は、ユーザーの負担となります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第4条（禁止事項）</h2>
            <p className="text-gray-700 mb-4">
              ユーザーは、当サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>他人の知的財産権、肖像権、プライバシーその他の権利を侵害する行為</li>
              <li>当サービスのセキュリティ機能を破壊し、または無効化する行為</li>
              <li>その他、当サービスの運営を妨害する行為</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第5条（免責事項）</h2>
            <p className="text-gray-700 mb-4">
              当サービスは現状有姿で提供されており、明示的か黙示的かを問わず、
              いかなる保証もなされません。データの損失、システムの停止、
              その他当サービスに関連して生じた損害について、一切の責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第6条（オープンソースライセンス）</h2>
            <p className="text-gray-700 mb-4">
              当サービスはオープンソースソフトウェアとして公開されており、
              適用されるオープンソースライセンスの条件に従って利用することができます。
              詳細については、GitHubリポジトリをご確認ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第7条（プライバシー）</h2>
            <p className="text-gray-700 mb-4">
              当サービスは、ユーザーのプライバシーを尊重します。
              データの取り扱いについては、別途定めるプライバシーポリシーをご確認ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第8条（規約の変更）</h2>
            <p className="text-gray-700 mb-4">
              本規約は、必要に応じて変更される場合があります。
              変更された規約は、GitHubリポジトリでの公開をもって効力を生じます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-deep-blue mb-4">第9条（準拠法・管轄裁判所）</h2>
            <p className="text-gray-700 mb-4">
              本規約の解釈にあたっては、日本国法を準拠法とします。
              本規約に関して紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600">
              以上
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}