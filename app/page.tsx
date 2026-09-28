import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || '#';

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="sky-gradient cloud-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center hero-text max-w-4xl mx-auto">
            <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 mb-6">
              オープンソース・MITライセンス
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              飛行のたびに、<br className="hidden sm:block" />
              日誌がきちんと整う。
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              OpenDroneDiaryは、ドローンの飛行記録・点検・機体情報を
              <br className="hidden md:block" />
              まとめて管理できるオープンソースの飛行日誌です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={appUrl}
                className="bg-sunset-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                アプリを試してみる <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://github.com/cyrus07424/openDroneDiary"
                className="bg-white hover:bg-gray-100 text-deep-blue px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ソースコードを見る
              </a>
            </div>
            <p className="text-sm text-white/80 mt-5">自分でホスト・改変・運用できる。まずはコードを確認できます。</p>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-deep-blue">3つの様式</p>
              <p className="text-gray-600 mt-1">飛行・日常点検・整備を一元管理</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-deep-blue">点検期限を可視化</p>
              <p className="text-gray-600 mt-1">機体ごとの状態をダッシュボードで確認</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-deep-blue">データを手元に</p>
              <p className="text-gray-600 mt-1">CSV出力・印刷・セルフホストに対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-horizon-blue mb-3">FEATURES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              飛行後の「あとでやる」を減らす
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              入力した記録を機体・パイロット・点検履歴につなげて、次のフライトに必要な情報をすぐ確認できます。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["📋", "機体ごとの飛行日誌", "登録記号・型式・製造番号などを機体台帳にまとめ、飛行記録と結びつけて管理。導入前の総飛行時間も引き継げます。"],
              ["✅", "飛行前の日常点検", "機体全般、プロペラ、通信系統、バッテリーなど9項目を「異常なし / 異常あり」で記録。特記事項も残せます。"],
              ["🔧", "点検・整備の履歴", "点検、修理、改造、整備の内容と実施者を記録。メーカー指定の整備間隔を設定し、期限の目安を確認できます。"],
              ["⏱️", "飛行時間を自動集計", "離陸・着陸時刻から飛行時間を計算し、製造後の総飛行時間へ反映。機体ごとの累計を追いやすくします。"],
              ["📤", "CSV出力・携行用印刷", "UTF-8 CSV（Excel向け）でデータを書き出し。同じ条件の飛行記録を複製したり、機体別の携行用ページを印刷できます。"],
              ["📊", "ダッシュボードで一目確認", "総飛行時間、点検整備の期限超過・間近・未記録を機体ごとに表示。次のフライト前に確認すべきことがわかります。"],
            ].map(([icon, title, description]) => (
              <div key={title} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-deep-blue mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-horizon-blue mb-3">HOW IT WORKS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                いつもの飛行を、<br />3ステップで記録
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                最初に機体とパイロットを登録すれば、あとは飛行のたびに記録を追加するだけ。過去の記録を探す時間や、整備時期の確認漏れを減らせます。
              </p>
            </div>
            <div className="space-y-5">
              {[
                ["01", "機体・パイロットを登録", "登録記号、型式、技能証明番号などを台帳に保存します。"],
                ["02", "飛行前後に記録", "日常点検と飛行内容を機体に紐づけて残します。"],
                ["03", "ダッシュボードで確認", "累計飛行時間と点検整備の状態をまとめて確認します。"],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-sky-blue/20 text-deep-blue font-bold">{number}</span>
                  <div>
                    <h3 className="text-lg font-bold text-deep-blue">{title}</h3>
                    <p className="text-gray-600 mt-1">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-sky-blue" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold tracking-widest text-white/80 mb-3">OPEN SOURCE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                自分の飛行データを、<br className="sm:hidden" />自分で管理する
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                MITライセンスで公開されたオープンソースプロジェクト。運用環境やデータの扱いを自分で選べるから、個人のパイロットにもチームにもフィットします。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white/10 rounded-2xl p-6 ring-1 ring-white/20">
                <h3 className="text-lg font-bold text-white mb-2">透明性</h3>
                <p className="text-white/85">ソースコードを確認し、仕組みを理解したうえで利用できます。</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 ring-1 ring-white/20">
                <h3 className="text-lg font-bold text-white mb-2">拡張性</h3>
                <p className="text-white/85">自分の運用に合わせて、自由に改変・拡張できます。</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 ring-1 ring-white/20">
                <h3 className="text-lg font-bold text-white mb-2">継続性</h3>
                <p className="text-white/85">特定のサービスだけに依存せず、データと運用を守れます。</p>
              </div>
            </div>
            <p className="text-center text-sm text-white/75 mt-8">
              ※ 記録項目は国土交通省の飛行日誌ガイドラインに寄せています。法令への適合や許可・承認の要否を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            次のフライトから、記録を変える
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
            飛行日誌をもっと簡単に、もっと自分らしく。まずはアプリを開くか、GitHubで仕組みを確認してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={appUrl} className="bg-sunset-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-block" target="_blank" rel="noopener noreferrer">
              アプリを開く <span aria-hidden="true">→</span>
            </a>
            <a href="https://github.com/cyrus07424/openDroneDiary" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-block ring-1 ring-white/30" target="_blank" rel="noopener noreferrer">
              GitHubを見る
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
