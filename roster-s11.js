// シーズン11 公式ヒーロー資料・バランスノートに基づく追加50人。
(() => {
  const data = window.MR_WIKI_DATA;
  data.sources.push(...[
  {
    "id": "official-gorr-the-god-butcher",
    "label": "Marvel Rivals — ゴア・ザ・ゴッド・ブッチャー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/3srgsedhnqwpy/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-the-hood",
    "label": "Marvel Rivals — ザ・フッド スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/1bw3qyyoyzg69/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-jubilee",
    "label": "Marvel Rivals — ジュビリー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0v334i0a6c44e/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-black-cat",
    "label": "Marvel Rivals — ブラックキャット スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/03kacngf2fr99/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-white-fox",
    "label": "Marvel Rivals — ホワイトフォックス スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0jhzg2kej6tzh/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-elsa-bloodstone",
    "label": "Marvel Rivals — エルサ・ブラッドストーン スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/1a68bjjit9agr/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-rogue",
    "label": "Marvel Rivals — ローグ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0arjd4dso01gy/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-gambit",
    "label": "Marvel Rivals — ガンビット スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/1e3akq165rqt0/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-daredevil",
    "label": "Marvel Rivals — デアデビル スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0ecye05qgza4p/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-angela",
    "label": "Marvel Rivals — アンジェラ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2g4bea0bj96lx/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-blade",
    "label": "Marvel Rivals — ブレイド スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/34s5ggd4at7n9/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-phoenix",
    "label": "Marvel Rivals — フェニックス スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/3jcs8kuv4wzpi/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-ultron",
    "label": "Marvel Rivals — ウルトロン スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/3967ycx3ftnjf/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-emma-frost",
    "label": "Marvel Rivals — エマ・フロスト スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/1zvubw4gcz9v9/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-the-thing",
    "label": "Marvel Rivals — ザ・シング スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/3g61jk7soo18x/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-human-torch",
    "label": "Marvel Rivals — ヒューマン・トーチ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0y3irl675pm6t/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-mister-fantastic",
    "label": "Marvel Rivals — ミスター・ファンタスティック スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/109bxrqivqg25/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-invisible-woman",
    "label": "Marvel Rivals — インビジブル・ウーマン スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2zwnmbtspadzd/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-squirrel-girl",
    "label": "Marvel Rivals — スクイレル・ガール スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2oorwtc594su0/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-black-widow",
    "label": "Marvel Rivals — ブラック・ウィドウ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/023s6ao1s3qto/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-wolverine",
    "label": "Marvel Rivals — ウルヴァリン スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/09hxm7p0c7nmn/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-cloak-and-dagger",
    "label": "Marvel Rivals — クローク＆ダガー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/26wq9lvvt43cn/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-iron-fist",
    "label": "Marvel Rivals — アイアン・フィスト スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/3qm0npe20wgl7/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-hawkeye",
    "label": "Marvel Rivals — ホークアイ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0k4tfqxvuk48o/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-psylocke",
    "label": "Marvel Rivals — サイロック スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0igyncbe3223v/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-hulk",
    "label": "Marvel Rivals — ハルク スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/26wbd16jct7y3/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-iron-man",
    "label": "Marvel Rivals — アイアンマン スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2dtihs4hzomix/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-moon-knight",
    "label": "Marvel Rivals — ムーンナイト スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0n19dqb03eafq/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-namor",
    "label": "Marvel Rivals — ネイモア スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/14srzf1eun6qj/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-star-lord",
    "label": "Marvel Rivals — スター・ロード スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/1w5x2xvuh39tq/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-scarlet-witch",
    "label": "Marvel Rivals — スカーレット・ウィッチ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/20s4uxvi8x721/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-winter-soldier",
    "label": "Marvel Rivals — ウィンター・ソルジャー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/29jechwuy3hum/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-spider-man",
    "label": "Marvel Rivals — スパイダーマン スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0lnmr1uivtdwz/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-magik",
    "label": "Marvel Rivals — マジック スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/28nlw6cpjo8pz/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-black-panther",
    "label": "Marvel Rivals — ブラックパンサー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2se8196a55ypo/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-hela",
    "label": "Marvel Rivals — ヘラ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2ggfqgft8uagz/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-storm",
    "label": "Marvel Rivals — ストーム スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0szgnvcxspazm/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-the-punisher",
    "label": "Marvel Rivals — パニッシャー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/004fazux9pvyb/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-jeff-the-land-shark",
    "label": "Marvel Rivals — ジェフ・ザ・ランド・シャーク スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0qmdlat6ntsoy/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-luna-snow",
    "label": "Marvel Rivals — ルナ・スノー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2medpbnf8yfaj/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-loki",
    "label": "Marvel Rivals — ロキ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/1d6lxkihe5j49/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-mantis",
    "label": "Marvel Rivals — マンティス スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/25xs3w66dq13a/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-peni-parker",
    "label": "Marvel Rivals — ペニー・パーカー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/3d57v7spb7z92/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-thor",
    "label": "Marvel Rivals — ソー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0eez9a3uaamlz/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-magneto",
    "label": "Marvel Rivals — マグニートー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0wgpqtfwmiobl/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-venom",
    "label": "Marvel Rivals — ヴェノム スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/0igspdjvuz3u1/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-groot",
    "label": "Marvel Rivals — グルート スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/3ab3nnuhj0l01/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-captain-america",
    "label": "Marvel Rivals — キャプテン・アメリカ スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2la9l05kjlraq/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-nightcrawler",
    "label": "Marvel Rivals — ナイトクローラー スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/2mpwiwa9ct6hn/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  },
  {
    "id": "official-adam-warlock",
    "label": "Marvel Rivals — アダム・ウォーロック スキル詳細",
    "type": "公式",
    "shortLabel": "スキル",
    "url": "https://www.marvelrivals.com/heroes/366w78k4i4gap/index.html",
    "note": "数値・効果は英語の公式ヒーローページを参照。スキル名は英語、効果の日本語は参考訳です。"
  }
]);
  Object.assign(data.portraits, {
  "gorr-the-god-butcher": {
    "image": "./assets/3srgsedhnqwpy.png",
    "source": "https://www.marvelrivals.com/heroes/3srgsedhnqwpy/index.html"
  },
  "the-hood": {
    "image": "./assets/1bw3qyyoyzg69.png",
    "source": "https://www.marvelrivals.com/heroes/1bw3qyyoyzg69/index.html"
  },
  "jubilee": {
    "image": "./assets/0v334i0a6c44e.png",
    "source": "https://www.marvelrivals.com/heroes/0v334i0a6c44e/index.html"
  },
  "black-cat": {
    "image": "./assets/03kacngf2fr99.png",
    "source": "https://www.marvelrivals.com/heroes/03kacngf2fr99/index.html"
  },
  "white-fox": {
    "image": "./assets/0jhzg2kej6tzh.png",
    "source": "https://www.marvelrivals.com/heroes/0jhzg2kej6tzh/index.html"
  },
  "elsa-bloodstone": {
    "image": "./assets/1a68bjjit9agr.png",
    "source": "https://www.marvelrivals.com/heroes/1a68bjjit9agr/index.html"
  },
  "rogue": {
    "image": "./assets/0arjd4dso01gy.png",
    "source": "https://www.marvelrivals.com/heroes/0arjd4dso01gy/index.html"
  },
  "gambit": {
    "image": "./assets/1e3akq165rqt0.png",
    "source": "https://www.marvelrivals.com/heroes/1e3akq165rqt0/index.html"
  },
  "daredevil": {
    "image": "./assets/0ecye05qgza4p.png",
    "source": "https://www.marvelrivals.com/heroes/0ecye05qgza4p/index.html"
  },
  "angela": {
    "image": "./assets/2g4bea0bj96lx.png",
    "source": "https://www.marvelrivals.com/heroes/2g4bea0bj96lx/index.html"
  },
  "blade": {
    "image": "./assets/34s5ggd4at7n9.png",
    "source": "https://www.marvelrivals.com/heroes/34s5ggd4at7n9/index.html"
  },
  "phoenix": {
    "image": "./assets/3jcs8kuv4wzpi.png",
    "source": "https://www.marvelrivals.com/heroes/3jcs8kuv4wzpi/index.html"
  },
  "ultron": {
    "image": "./assets/3967ycx3ftnjf.png",
    "source": "https://www.marvelrivals.com/heroes/3967ycx3ftnjf/index.html"
  },
  "emma-frost": {
    "image": "./assets/1zvubw4gcz9v9.png",
    "source": "https://www.marvelrivals.com/heroes/1zvubw4gcz9v9/index.html"
  },
  "the-thing": {
    "image": "./assets/3g61jk7soo18x.png",
    "source": "https://www.marvelrivals.com/heroes/3g61jk7soo18x/index.html"
  },
  "human-torch": {
    "image": "./assets/0y3irl675pm6t.png",
    "source": "https://www.marvelrivals.com/heroes/0y3irl675pm6t/index.html"
  },
  "mister-fantastic": {
    "image": "./assets/109bxrqivqg25.png",
    "source": "https://www.marvelrivals.com/heroes/109bxrqivqg25/index.html"
  },
  "invisible-woman": {
    "image": "./assets/2zwnmbtspadzd.png",
    "source": "https://www.marvelrivals.com/heroes/2zwnmbtspadzd/index.html"
  },
  "squirrel-girl": {
    "image": "./assets/2oorwtc594su0.png",
    "source": "https://www.marvelrivals.com/heroes/2oorwtc594su0/index.html"
  },
  "black-widow": {
    "image": "./assets/023s6ao1s3qto.png",
    "source": "https://www.marvelrivals.com/heroes/023s6ao1s3qto/index.html"
  },
  "wolverine": {
    "image": "./assets/09hxm7p0c7nmn.png",
    "source": "https://www.marvelrivals.com/heroes/09hxm7p0c7nmn/index.html"
  },
  "cloak-and-dagger": {
    "image": "./assets/26wq9lvvt43cn.png",
    "source": "https://www.marvelrivals.com/heroes/26wq9lvvt43cn/index.html"
  },
  "iron-fist": {
    "image": "./assets/3qm0npe20wgl7.png",
    "source": "https://www.marvelrivals.com/heroes/3qm0npe20wgl7/index.html"
  },
  "hawkeye": {
    "image": "./assets/0k4tfqxvuk48o.png",
    "source": "https://www.marvelrivals.com/heroes/0k4tfqxvuk48o/index.html"
  },
  "psylocke": {
    "image": "./assets/0igyncbe3223v.png",
    "source": "https://www.marvelrivals.com/heroes/0igyncbe3223v/index.html"
  },
  "hulk": {
    "image": "./assets/26wbd16jct7y3.png",
    "source": "https://www.marvelrivals.com/heroes/26wbd16jct7y3/index.html"
  },
  "iron-man": {
    "image": "./assets/2dtihs4hzomix.png",
    "source": "https://www.marvelrivals.com/heroes/2dtihs4hzomix/index.html"
  },
  "moon-knight": {
    "image": "./assets/0n19dqb03eafq.png",
    "source": "https://www.marvelrivals.com/heroes/0n19dqb03eafq/index.html"
  },
  "namor": {
    "image": "./assets/14srzf1eun6qj.png",
    "source": "https://www.marvelrivals.com/heroes/14srzf1eun6qj/index.html"
  },
  "star-lord": {
    "image": "./assets/1w5x2xvuh39tq.png",
    "source": "https://www.marvelrivals.com/heroes/1w5x2xvuh39tq/index.html"
  },
  "scarlet-witch": {
    "image": "./assets/20s4uxvi8x721.png",
    "source": "https://www.marvelrivals.com/heroes/20s4uxvi8x721/index.html"
  },
  "winter-soldier": {
    "image": "./assets/29jechwuy3hum.png",
    "source": "https://www.marvelrivals.com/heroes/29jechwuy3hum/index.html"
  },
  "spider-man": {
    "image": "./assets/0lnmr1uivtdwz.png",
    "source": "https://www.marvelrivals.com/heroes/0lnmr1uivtdwz/index.html"
  },
  "magik": {
    "image": "./assets/28nlw6cpjo8pz.png",
    "source": "https://www.marvelrivals.com/heroes/28nlw6cpjo8pz/index.html"
  },
  "black-panther": {
    "image": "./assets/2se8196a55ypo.png",
    "source": "https://www.marvelrivals.com/heroes/2se8196a55ypo/index.html"
  },
  "hela": {
    "image": "./assets/2ggfqgft8uagz.png",
    "source": "https://www.marvelrivals.com/heroes/2ggfqgft8uagz/index.html"
  },
  "storm": {
    "image": "./assets/0szgnvcxspazm.png",
    "source": "https://www.marvelrivals.com/heroes/0szgnvcxspazm/index.html"
  },
  "the-punisher": {
    "image": "./assets/004fazux9pvyb.png",
    "source": "https://www.marvelrivals.com/heroes/004fazux9pvyb/index.html"
  },
  "jeff-the-land-shark": {
    "image": "./assets/0qmdlat6ntsoy.png",
    "source": "https://www.marvelrivals.com/heroes/0qmdlat6ntsoy/index.html"
  },
  "luna-snow": {
    "image": "./assets/2medpbnf8yfaj.png",
    "source": "https://www.marvelrivals.com/heroes/2medpbnf8yfaj/index.html"
  },
  "loki": {
    "image": "./assets/1d6lxkihe5j49.png",
    "source": "https://www.marvelrivals.com/heroes/1d6lxkihe5j49/index.html"
  },
  "mantis": {
    "image": "./assets/25xs3w66dq13a.png",
    "source": "https://www.marvelrivals.com/heroes/25xs3w66dq13a/index.html"
  },
  "peni-parker": {
    "image": "./assets/3d57v7spb7z92.png",
    "source": "https://www.marvelrivals.com/heroes/3d57v7spb7z92/index.html"
  },
  "thor": {
    "image": "./assets/0eez9a3uaamlz.png",
    "source": "https://www.marvelrivals.com/heroes/0eez9a3uaamlz/index.html"
  },
  "magneto": {
    "image": "./assets/0wgpqtfwmiobl.png",
    "source": "https://www.marvelrivals.com/heroes/0wgpqtfwmiobl/index.html"
  },
  "venom": {
    "image": "./assets/0igspdjvuz3u1.png",
    "source": "https://www.marvelrivals.com/heroes/0igspdjvuz3u1/index.html"
  },
  "groot": {
    "image": "./assets/3ab3nnuhj0l01.png",
    "source": "https://www.marvelrivals.com/heroes/3ab3nnuhj0l01/index.html"
  },
  "captain-america": {
    "image": "./assets/2la9l05kjlraq.png",
    "source": "https://www.marvelrivals.com/heroes/2la9l05kjlraq/index.html"
  },
  "nightcrawler": {
    "image": "./assets/2mpwiwa9ct6hn-close.png",
    "source": "https://www.marvelrivals.com/heroes/2mpwiwa9ct6hn/index.html"
  },
  "adam-warlock": {
    "image": "./assets/366w78k4i4gap.png",
    "source": "https://www.marvelrivals.com/heroes/366w78k4i4gap/index.html"
  }
});
  data.heroes.push(...[
  {
    "id": "gorr-the-god-butcher",
    "name": "ゴア・ザ・ゴッド・ブッチャー",
    "title": "ゴア・ザ・ゴッド・ブッチャー",
    "en": "Gorr the God Butcher",
    "role": "duelist",
    "portraitId": "gorr-the-god-butcher",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-gorr-the-god-butcher"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "175 HP ＋ 回復型シールド 175"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "All-Black",
        "normal": [
          "タイプ 近接攻撃",
          "ダメージ 1/3ヒット目で40",
          "2/4ヒット目で60",
          "攻撃間隔 1/3ヒット目は0.4秒",
          "2/4ヒット目は0.6秒",
          "最大距離 7 m",
          {
            "text": "オールブラック・ザ・ネクロスソードで最大4ストライクの素早いコンボを繰り出す",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Necro-Power",
        "normal": [
          "ダメージ 30",
          "バーサーカー召喚範囲 半径12 m",
          "ブラックバーサーカーの近接ダメージ 1ヒットあたり20",
          "2ヒット",
          "遅い効果 2秒間15%",
          {
            "text": "大量のシンビオートを前方に突撃して発射します。敵を攻撃すると、近くの黒バーサーカーが遅くなりテレポートするか、新しいバーサーカーが出現します。到着したバーサーカーは、遠距離モードに戻る前に、2回攻撃の近接攻撃を放ち、近くの敵を打ち上げます。",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "F",
        "name": "Shadow Harvest",
        "normal": [
          "最大選択距離 22 m",
          "ボーナスHP 黒のバーサーカーの残りの体力の 50%",
          "最大 50",
          "ボーナスHP上限をBerserker Swarmと共有",
          "爆発ダメージ 5 + 5% 最大HP",
          "爆発範囲 半径5メートル",
          "影の鎌ダメージ 50 + 2% 最大HP",
          "シャドウサイズの攻撃間隔 0.6秒",
          "シャドウサイスの最大距離 8 m",
          "衝撃波ダメージ 55",
          {
            "text": "選択した黒のバーサーカーにワープし、その体力の半分に等しいボーナスHPを犠牲にして、シンビオートの爆発を引き起こします。 Shadow Sythe のロックを簡単に解除します。前方に鋭い衝撃波を発射します。その後、オールブラックは設定された持続時間または 4 回の斬撃の間鎌になります。",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "E",
        "name": "Black Berserker",
        "normal": [
          "召喚期間 6秒",
          "最大HPを召喚する 150",
          "召喚ダメージ 1ヒットあたり7.5",
          "召喚攻撃間隔 0.7秒",
          "召喚攻撃範囲 半径30 m",
          "ブラックバーサーカーの近接ダメージ 1ヒットあたり20",
          "2ヒット",
          {
            "text": "着地時にブラックバーサーカーを生成するシンビオートの塊を攻撃し、すぐに近くの敵を撃ちます。ネクロパワーを介して敵の隣に召喚された場合、代わりに2回攻撃の近接攻撃を繰り出します",
            "detail": true
          }
        ],
        "cooldown": "2回の充電、それぞれ10秒間の充電。"
      },
      {
        "key": "Shift",
        "name": "Living Abyss",
        "normal": [
          "持続時間 1.5秒",
          "移動速度上昇 10 m/秒",
          "狂乱のバーサーカーの攻撃速度ブースト 40%",
          "壊死ダメージ 30/秒",
          "ネクロバース範囲 半径10 m",
          "ダメージ/体力変換 100%",
          "最大50",
          {
            "text": "無敵のシンビオートの塊として突進し、黒のバーサーカーを置き去りにして、アクティブなバーサーカー全員を狂乱状態に追い込みます。着陸すると、閉じ込められた敵に継続的にダメージを与えるネクロバースを発現させ、敵をボーナスHPに変換します",
            "detail": true
          }
        ],
        "cooldown": "13秒"
      },
      {
        "key": "パッシブ",
        "name": "Berserker Swarm",
        "normal": [
          "召喚ダメージ/体力変換 100%",
          "最大 50",
          "ボーナスHP上限をShadow Harvestと共有",
          {
            "text": "Black Berserker のダメージにより Gorr の体力ボーナスが得られます。敵を倒すと即座にその場所に黒いバーサーカーが出現します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Twilight of the Gods",
        "normal": [
          "ULT必要コスト 3400",
          "最大持続時間 10",
          "バーサーカーのスポーン範囲 半径10 m",
          "ネクロバース範囲 半径30 m",
          "アナイヒラブレイドのダメージ 65 + 10% 最大HP",
          "アナイヒラブレイドの攻撃間隔 0.6秒",
          "アナイヒラブレイドの最大距離 10 m",
          {
            "text": "距離減衰は8 mから開始",
            "detail": true
          },
          {
            "text": "10 mで基礎ダメージの80%",
            "detail": true
          },
          {
            "text": "オールブラックの真の力の封印を解き、アニヒラブブレイドに変身させます。アクティブ化すると、拡大するネクロバースが形成され、内部に捕らえられたすべての敵の隣に黒いバーサーカーが即座に生成されます。アクティブな間、アニヒラブブレードのあらゆる斬撃は壊滅的なダメージを与えます。ネクロバースはゴーとともに動きます。フィールド内のバーサーカーは期限切れにならず、永続的な狂乱状態にロックされたままになります。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Ragnarök",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "接地期間 1秒",
          "掃引範囲 半径5メートル",
          "広範囲にわたるダメージ 45",
          "連携強化時　ボーナスHP 1回の使用につき10個",
          "連携強化時　シャドウサイス最大距離ブースト 2 m",
          {
            "text": "基本効果　Gain a new ability to morph the All-Black into a scythe and execute a sweeping strike, damaging and briefly Grounding nearby enemies. The weapon stays in scythe form for a short duration.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Hela, the scythe's attack range is expanded. Each hit scatters symbiote fragments, granting Bonus Health to Gorr and nearby allies",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Hive Mind",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "シンビオートクロー最大飛距離 25 m",
          "シンビオートの爪によるダメージ 発射時40",
          "格納時20",
          "連携強化時　黒のバーサーカーのダメージブースト 33%",
          "連携強化時　減速率 1秒間30%",
          {
            "text": "基本効果　Gain a new ability to fire a Symbiote Claw forward, dealing piercing damage to enemies in its path. Upon reaching max distance, it retracts, Launching caught enemies toward Gorr.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Venom, Black Berserkers receive a slight Damage Boost and apply a Slow effect to enemies they strike",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "the-hood",
    "name": "ザ・フッド",
    "title": "ザ・フッド",
    "en": "the Hood",
    "role": "vanguard",
    "portraitId": "the-hood",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-the-hood"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "550"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Accursed Pistols",
        "normal": [
          "射撃ダメージ 1発あたり26個",
          "撮影間隔 0.2秒",
          "悪魔のエネルギーが50%を超えた後の射撃ダメージ 1発あたり21個",
          "魔力50%超え後の射撃間隔 0.15秒",
          {
            "text": "距離減衰は8 mから開始",
            "detail": true
          },
          {
            "text": "20 mで基礎ダメージの55%",
            "detail": true
          },
          "装弾数 40",
          {
            "text": "二刀流のピストルを前方に撃ちます。悪魔のエネルギーが50%を超えると攻撃速度が増加します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Leaded Transformation",
        "normal": [
          "射撃ダメージ 1発あたり3.5",
          "撮影間隔 0.05秒",
          "ライフスティール率 10%",
          "リード変換ダメージ/ボーナスHP変換 40%",
          "最大100",
          "弾丸の拡散半径 10回連続発射で拡散半径0.5 mに達します(距離10 mで計算)",
          {
            "text": "距離減衰は8 mから開始",
            "detail": true
          },
          {
            "text": "20 mで基礎ダメージの80%",
            "detail": true
          },
          {
            "text": "ハーフデーモン状態に入り、腕を悪魔のライフルに変えて鉛の雨を降らせます。これらのライフルは攻撃速度と無限の弾薬が増加しています。敵に当たるすべての弾丸がライフスティールをトリガーします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Mantle of Oblivion",
        "normal": [
          "最大持続時間 1秒",
          "球の半径 2 m",
          "悪魔のエネルギーが50%を超えた後の球の半径 3 m",
          {
            "text": "マントを広げて球状のバリアを形成し、敵の攻撃をブロックします。魔力が50%を超えると球の半径がさらに広がります。",
            "detail": true
          }
        ],
        "cooldown": "12"
      },
      {
        "key": "E",
        "name": "Abyssal Veil",
        "normal": [
          "召喚期間 6秒",
          "ベールのサイズ 幅：8 m",
          "高さ：3.5 m。",
          "ダメージ軽減 20%",
          "治癒力の低下 20%",
          "リード変換ライフスティール率 10%",
          "呪われたピストルが命中するごとにエネルギー獲得量が増加 0.75",
          "ブラインド期間 1秒",
          "ダメージ 60.00",
          {
            "text": "着地時にベールを生成する闇の魔法球を投げる。それを通過する呪われたピストルのショットはより多くの悪魔のエネルギーを生成し、鉛の変換からの弾丸は増加したライフスティールを獲得します。敵の発射物が通過すると、ダメージと回復量が減少します。ベールを通過した敵はダメージを受け、盲目になります",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "Shift",
        "name": "Void Walk",
        "normal": [
          "移動速度上昇 アビリティ中は 40%",
          "終了後は 2 秒で 0% に減衰します",
          "ダメージ 40",
          "効果範囲 球面半径4.5 m",
          "最大持続時間 1.2秒",
          {
            "text": "自由飛行のためにボイドに入ります。再出現すると、減衰する移動ブーストを獲得し、周囲の敵にダメージを与える",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "パッシブ",
        "name": "Ruinous Pact",
        "normal": [
          "最大エネルギー 100",
          "呪われたピストルが命中するたびに得られるエネルギー 2",
          "忘却のマントル ブロック ダメージ/エネルギー変換 3.75%",
          "ボイドウォークによるエネルギー獲得 20",
          {
            "text": "Accursed Pistols でダメージを与えたり、Mantle of Oblivion で攻撃をブロックしたり、Void Walk を使用して悪魔のエネルギーを蓄積します。フルエネルギーに達すると、自動的にハーフデーモン状態がトリガーされます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Demon of the End",
        "normal": [
          "ULT必要コスト 3400",
          "最大持続時間 12",
          "悪魔の状態の健康状態 1000",
          "最初の5発のダメージ ターゲットの最大HPの 90 + 10%",
          "最終ラウンドのダメージ 140 + ターゲットの最大HPの 15%",
          "発砲ごとにボーナスHP 50",
          "ダメージ/ボーナスHP変換 50%",
          "ボーナスHP範囲 半径8 m",
          "最大ボーナスHP 200",
          {
            "text": "フルデーモン状態に入る。敵や障壁を貫通する強力なショットを最大 6 発発射し、最後のショットが最も強力です。敵を攻撃すると、自分自身と近くの味方にボーナスHPを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Chaos Collision",
        "key": "C",
        "cooldown": "16",
        "lines": [
          "最大選択距離 20 m",
          "最大テレポート距離 30 m",
          "効果範囲の持続時間 4秒",
          "効果範囲 半径5 mの球体",
          "ダメージ 1 ヒットあたり 20",
          "1 秒あたり 2 ヒット",
          "ダメージ軽減 ヒットごとに 5%",
          "最大 40%",
          "治癒力の低下 ヒットごとに 5%",
          "最大 40%",
          "連携強化時　一回限りのダメージ 60",
          {
            "text": "基本効果　Gain a New Ability. Create an arcane zone that continuously damages enemies and applies stacking Damage and Healing Reduction. Reactivate to teleport to the zone's center.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Scarlet Witch, after teleporting, unleash a magical shockwave, dealing one-time damage to nearby enemies while launching them towards The Hood",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "New Moon's Shadow",
        "key": "E",
        "cooldown": "",
        "lines": [
          "召喚獣の健康状態 200",
          "爆発ダメージ 30",
          "ダメージ軽減 35%",
          "治癒力の低下 35%",
          "爆発範囲 半径8 mの球面",
          "連携強化時　召喚獣の健康状態 300",
          "連携強化時　最大バウンス距離 6 m",
          "連携強化時　最大バウンス数 3",
          {
            "text": "連携強化時　バウンスごとのダメージ減衰 50%",
            "detail": true
          },
          {
            "text": "基本効果　Enhances Abyssal Veil into a Lunar Barrier that blocks projectiles. Upon breaking, it detonates, damaging enemies and applying Damage and Healing Reduction. Enemies passing through take damage and are briefly Blinded.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Moon Knight, the Lunar Barrier has greater shield value, and The Hood's attacks that pass through it gain a bounce effect",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "jubilee",
    "name": "ジュビリー",
    "title": "ジュビリー",
    "en": "Jubilee",
    "role": "strategist",
    "portraitId": "jubilee",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-jubilee",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,300"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Energy Plasmoids",
        "normal": [
          "連射速度 1秒あたり8",
          "弾速 200 m/秒",
          "ダメージ 1ヒットあたり11",
          "癒し 1ヒットあたり15",
          "エネルギー 48",
          "速度ブースト: 発射速度 1秒あたり32",
          "スピードブースト:ダメージ ヒットごとに 5",
          "スピードブースト：治癒 1ヒットあたり6.5",
          {
            "text": "距離減衰は10 mから開始",
            "detail": true
          },
          {
            "text": "30 mで基礎ダメージの70%",
            "detail": true
          },
          "スパークルマーク発動ごとの攻撃速度ブースト持続時間 6秒",
          {
            "text": "ファイアルミキネティックの爆発的な光が前方に発射され、友人を回復し、敵にダメージを与えます。スパークルマークを発動すると攻撃速度が一時的に上昇し、エネルギーを消費せずに射撃が可能になります",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Blooming Ball",
        "normal": [
          "オーブの最大持続時間 6秒",
          "初めて最大チャージに達すると",
          "持続時間が6秒増加します",
          "オーブのチャージに必要なエネルギー 250 回復/ダメージ",
          "範囲 半径 4 メートル、エネルギーに応じて直線的に増加",
          "最大エネルギー時で最大 8 メートル",
          "癒し 35/秒、エネルギーに比例して増加します",
          "最大エネルギーで最大 50/秒",
          "ダメージ 1秒あたり10回",
          "リコール時にエネルギーが戻った 0",
          "エネルギーに比例して増加し",
          "オーブの残り持続時間が 6 秒を超えると最大値に達し",
          "1 チャージを回復します",
          {
            "text": "吸血鬼のエネルギーの追跡オーブを発射し、敵にダメージを与え、半径内の味方を回復します。オーブを攻撃するか、その近くのターゲットを攻撃すると、オーブがチャージされ、サイズと治癒力の両方が増加します。 F を押して手動で呼び出します。",
            "detail": true
          }
        ],
        "cooldown": "2回の充電で、各充電には12秒かかります。"
      },
      {
        "key": "Shift",
        "name": "Sparking Sprint",
        "normal": [
          "スピードブースト乗数 40%",
          "自己回復量 25/秒",
          "最大エネルギー 12",
          "消費エネルギー 4/秒",
          "エネルギー回収 1/秒",
          "効果範囲 半径5 mの球体",
          "ダメージ 45",
          "回復量 30",
          {
            "text": "吸血鬼のエネルギーで身を包み、スピードブーストを獲得します。アクティブの間、ジャンプの高さと攻撃速度が増加し、コストなしでエネルギーブラストを発射できるようになります",
            "detail": true
          }
        ],
        "cooldown": "4秒"
      },
      {
        "key": "E",
        "name": "Dazzling Detonation",
        "normal": [
          "効果範囲 選択した Orb の現在の範囲と一致します",
          "ダメージ 50",
          "ブラインド期間 0.8秒",
          "脆弱性 3秒間10%",
          "治癒魔法フィールド生成間隔 0.2秒",
          "1回の回復量 65",
          "時間経過による回復量 25/秒",
          "3秒間",
          "スピードブースト乗数 3秒間40%",
          {
            "text": "花火のエネルギー オーブを爆発させ、エリア内の敵にダメージを与え、ブラインド効果を適用します。エネルギーは味方に転送することもでき、味方に治癒とスピードブーストを与えます。",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "パッシブ",
        "name": "Sparkle Mark",
        "normal": [
          {
            "text": "マーク爆発時の味方の被回復量増加 効果廃止",
            "changes": [
              {
                "value": "効果廃止",
                "previous": "20%",
                "kind": "nerf"
              }
            ]
          },
          "ボーナスHP 50",
          "一回限りのダメージ 25",
          {
            "text": "Dazzling Detonation と Firework Finale でターゲットを攻撃すると、スパークル マークが付与されます。エネルギー プラズモイドはマークを爆発させ、敵にバースト ダメージを与えながら味方にボーナス ヘルスを与えることができます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Firework Finale",
        "normal": [
          {
            "text": "範囲内の回復 190/秒",
            "changes": [
              {
                "value": "190/秒",
                "previous": "180/秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "外側のプラズマ弾の回転速度 25 m/秒",
            "changes": [
              {
                "value": "25 m/秒",
                "previous": "20 m/秒",
                "kind": "buff"
              }
            ]
          },
          "ULT必要コスト 4300",
          "持続時間 10秒",
          "効果範囲 内円半径6 m",
          "外周半径10 m",
          "範囲ダメージ 20/秒",
          "花火クラスター範囲 半径2 m",
          "花火クラスター回復量 1ヒットあたり40",
          "花火クラスター被害 1ヒットあたり25",
          "花火クラスター量 5",
          {
            "text": "チャージして外側に飛び出す花火の塊の巨大な輪を解き放ち、近くの敵をノックバックします。これらのクラスターはプレイヤーを周回して、敵にダメージを与え、味方を回復するフィールドを作成します。クラスターの半径を外側に拡張すると、攻撃を受けた敵が打ち上げられます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Hellfire Sparks",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "ヒットスキャン攻撃ダメージ 1回の使用につき5個",
          "ヒットスキャン攻撃の回復 1回の使用につき6.5ダメージ",
          {
            "text": "距離減衰 フォールオフは 10 メートルで始まり",
            "detail": true
          },
          {
            "text": "30 メートルで 70% に低下します",
            "detail": true
          },
          "ヒット時の回復 2/ショット",
          {
            "text": "連携強化時　特殊効果 ヴォイドマジックマークは決して消えない",
            "detail": true
          },
          {
            "text": "基本効果　When Attack Speed is enhanced, Energy Plasmoids transform into a hitscan attack that grants self-healing on hit and is capable of dealing critical hits.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with The Hood, the Void Magic Mark is never cleared, allowing her to indefinitely sustain the hitscan attack form.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Vampiric Kin",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "フィールド範囲 半径12 mの球状効果範囲",
          "持続時間 6秒",
          "ライフスティール率（自分と範囲内の味方） 40%",
          "継続回復 15/秒",
          {
            "text": "連携強化時　ライフスティール率 40%",
            "changes": [
              {
                "value": "40%",
                "previous": "30%",
                "kind": "buff"
              }
            ]
          },
          "連携強化時　継続回復 25/秒",
          {
            "text": "基本効果　Deploy a Vampiric Field. Allies standing within the field gain Life Steal when attacking enemies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Blade, allies inside the field receive an additional Continuous Healing effect.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "black-cat",
    "name": "ブラックキャット",
    "title": "ブラックキャット",
    "en": "Black Cat",
    "role": "duelist",
    "portraitId": "black-cat",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-black-cat",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "150 HP ＋ 回復型シールド 125"
      },
      {
        "label": "グローブ装備時のHP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Feline Fury",
        "form": "通常",
        "normal": [
          {
            "text": "1回の最大フォーチュン獲得量 75",
            "changes": [
              {
                "value": "75",
                "previous": "50",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 35",
          "最大距離 3.5 m",
          {
            "text": "かみそりのような鋭い爪で前方にスワイプ",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Calling Card",
        "form": "通常",
        "normal": [
          "ULT必要コスト 3100",
          "最大ダッシュ距離 40 m",
          "フォアスイングダメージ軽減 50%",
          "持続時間 10秒",
          "最大ターゲット距離 8 m",
          "1回目のクローストライクダメージ 30",
          "2回目のクローストライクダメージ 70",
          {
            "text": "敵全員にコーリングカードを発行します。視界内と範囲内の敵に即座にダッシュし、爪で敵を引き裂いてダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Cat's Cradle",
        "form": "通常",
        "normal": [
          "最大ダッシュ距離 15 m",
          "ダメージ 40",
          {
            "text": "爪をむき出しにして前方に突進し、行く手に捕らえられた敵を切り裂く",
            "detail": true
          }
        ],
        "cooldown": "1 回の充電で、再充電には 8 秒かかります"
      },
      {
        "key": "E",
        "name": "Turn of Fortune",
        "form": "通常",
        "normal": [
          "フックスピード 120 m/秒",
          "フック最大距離 30 m",
          "フックの損傷 30",
          "フックヒットによるボーナスHP 50",
          {
            "text": "グラップリングフックを前方に発射し、衝撃で敵にダメージを与え、ブラックキャットに引き戻す前にフォーチュンを盗みます。",
            "detail": true
          }
        ],
        "cooldown": "5秒"
      },
      {
        "key": "Space",
        "name": "Thieving Grace",
        "form": "通常",
        "normal": [
          {
            "text": "二段ジャンプをする",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Fortune's Favor",
        "form": "通常",
        "normal": [
          "グラップルスワイプフォーチュン消費 150",
          "幻の追跡 幸運の消費 250",
          {
            "text": "フォーチュンを費やして、グラップル スワイプまたはファントム パースートのいずれかを解き放ちます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Space",
        "name": "Stealthy Catwalk",
        "form": "通常",
        "normal": [
          {
            "text": "{ジャンプ}を押し続けると垂直面を這い上がります",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Malkin Misfortune",
        "form": "通常",
        "normal": [
          {
            "text": "ヒット時に敵にジンクストを適用します。ジンクセドフォエはブラックキャットにクリティカルヒットを与えるとボーナスダメージを失う可能性があります",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Claw Whip",
        "form": "グローブ装備時",
        "normal": [
          "効果範囲 半径7.5 m",
          "高さ2.5 mの150°円錐効果範囲",
          "範囲ダメージ 65",
          "攻撃間隔 1ヒットあたり0.6秒",
          {
            "text": "距離減衰 フォールオフは 30° で始まり",
            "detail": true
          },
          {
            "text": "75° で最大ダメージの 30% に低下します。",
            "detail": true
          },
          "ヒットごとにボーナスHP 25",
          "最大ボーナスHP 50",
          {
            "text": "つながれた爪を発射し、破壊的な弧を描いて前方に鞭打ちし、範囲内に捕らえられたすべての敵にダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Calling Card",
        "form": "グローブ装備時",
        "normal": [
          "ULT必要コスト 3100",
          "最大ダッシュ距離 60 m",
          "フォアスイングダメージ軽減 50%",
          "持続時間 10秒",
          "最大ターゲット距離 8 m",
          "1回目のクローストライクダメージ 30",
          "2回目のクローストライクダメージ 70",
          {
            "text": "敵全員にコーリングカードを発行します。視界内と範囲内の敵に即座にダッシュし、爪で敵を引き裂いてダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Cat's Cradle",
        "form": "グローブ装備時",
        "normal": [
          "最大ダッシュ距離 15 m",
          "ダメージ 40",
          {
            "text": "爪をむき出しにして前方に突進し、行く手に捕らえられた敵を切り裂く",
            "detail": true
          }
        ],
        "cooldown": "1 回の充電で、再充電には 8 秒かかります"
      },
      {
        "key": "E",
        "name": "Phantom Pursuit",
        "form": "グローブ装備時",
        "normal": [
          "ダッシュ持続時間 0.25秒",
          "ダメージ 70",
          "最大ダッシュ距離 20 m",
          {
            "text": "特殊効果 Phantom Pursuit のキャスト中に 50% のダメージ軽減と Unstoppable を付与します",
            "detail": true
          },
          {
            "text": "素早く敵に向かってダッシュし、爪攻撃を連打して開始位置にフラッシュバックします。",
            "detail": true
          }
        ],
        "cooldown": "2秒"
      },
      {
        "key": "Space",
        "name": "Thieving Grace",
        "form": "グローブ装備時",
        "normal": [
          {
            "text": "二段ジャンプをする",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Fortune's Favor",
        "form": "グローブ装備時",
        "normal": [
          "グラップルスワイプフォーチュン消費 150",
          "幻の追跡 幸運の消費 250",
          {
            "text": "フォーチュンを費やして、グラップル スワイプまたはファントム パースートのいずれかを解き放ちます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Space",
        "name": "Stealthy Catwalk",
        "form": "グローブ装備時",
        "normal": [
          {
            "text": "{ジャンプ}を押し続けると垂直面を這い上がります",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Malkin Misfortune",
        "form": "グローブ装備時",
        "normal": [
          {
            "text": "ヒット時に敵にジンクストを適用します。ジンクセドフォエはブラックキャットにクリティカルヒットを与えるとボーナスダメージを失う可能性があります",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Gilded Deal",
        "form": "取引アイテム",
        "normal": [
          {
            "text": "空間共鳴装置を使用してエルダー ゴッドの次元へのポータルを開き、フォーチュンを消費してゴールデン エルダーと取引し、ニューヨーク盗賊ギルドの金庫からアイテムを入手します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Tablet of Destinies",
        "form": "取引アイテム",
        "normal": [
          {
            "text": "特殊効果 幸運をランダムに0/50/200/500獲得",
            "detail": true
          },
          "財産の消費 100",
          {
            "text": "ランダムな量のフォーチュンを獲得する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Helm of Hades",
        "form": "取引アイテム",
        "normal": [
          "財産の消費 200",
          "不可視期間 2.5秒",
          "移動速度ブースト持続時間 2.5秒",
          "移動速度上昇 60%",
          "2.5秒で0まで低下",
          {
            "text": "設定された期間、Invisiblestate に入ります",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Faltine Flame Orb",
        "form": "取引アイテム",
        "normal": [
          "財産の消費 200",
          "健康を召喚する 50",
          "最大召喚数 1",
          {
            "text": "神秘的なファルティーンの炎のオーブを召喚して、近くの敵すべてをリヴィアランドにマークします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Chernobog's Crystal",
        "form": "取引アイテム",
        "normal": [
          "財産の消費 300",
          {
            "text": "特殊効果 アクティブなコントロールエフェクトを削除します",
            "detail": true
          },
          {
            "text": "自分自身を浄化し、アクティブな制御効果を即座に除去します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Ring of Zona",
        "form": "取引アイテム",
        "normal": [
          "財産の消費 300",
          {
            "text": "表面にポータルを開き、反対側へ瞬時に移動できるようにします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Mento-Fish",
        "form": "取引アイテム",
        "normal": [
          "財産の消費 300",
          {
            "text": "発動方式 衝撃時に効果範囲を生成する発射物",
            "detail": true
          },
          "弾速 30 m/秒",
          "効果範囲 半径5 m",
          "高さ40 mの円筒形の魔法フィールド。",
          "遅い比率 35%",
          {
            "text": "催眠フィールドを作成します。速度低下を与え、移動能力を無効にし、中に捕らえられた敵を地上に飛ばす",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Sticky Paws",
        "form": "取引アイテム",
        "normal": [
          "ターゲットの命中ごとに得られる幸運（猫の怒り） 50",
          "最大75",
          "ターゲットの命中ごとに得られる幸運（クローウィップ） 50",
          "最大100",
          "ターゲットに命中するたびに得られる財産（ファントム追跡） 125",
          "最大125",
          "ヒットごとに得られる幸運（運命のターン） 300",
          "ヒットごとに得られる財産 (テレホンカード) 300",
          "死によって失われる財産 敗北するとフォーチュンの 50% を失い",
          "最低 200 の控除が発生します",
          "ヒットごとに得られる幸運 (ネコ同盟) 100",
          "最大200",
          {
            "text": "攻撃が敵に当たるたびに一定量のフォーチュンを盗む",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Feline Alliance",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          {
            "text": "発動時のボーナスHP 50",
            "changes": [
              {
                "value": "50",
                "previous": "25",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "敵1体に命中したときのフォーチュン 100",
            "changes": [
              {
                "value": "100",
                "previous": "50",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "フォーチュン獲得上限 200",
            "changes": [
              {
                "value": "200",
                "previous": "100",
                "kind": "buff"
              }
            ]
          },
          "被ダメージ閾値 50",
          "効果範囲 半径8 mの球状魔法フィールド",
          "範囲ダメージ 45",
          "移動速度上昇 3 m/秒",
          "3 秒かけて 0 に減衰",
          {
            "text": "連携強化時　特殊効果 エネルギー蓄積率による制限はもうありません",
            "detail": true
          },
          {
            "text": "連携強化時　いつでもキャストできる",
            "detail": true
          },
          {
            "text": "基本効果　Taking damage accumulates Vibranium Energy. Upon reaching a specific threshold, Black Cat can unleash a violent explosion, damaging and Knocking back surrounding enemies while gaining a brief Speed Boost and Bonus Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Black Panther, this explosion is no longer restricted by the energy threshold and can be triggered at any time.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Binding Ties",
        "key": "E",
        "cooldown": "2回のチャージ、各5秒間",
        "lines": [
          "マークトリガーにボーナスダメージ 45",
          "連携強化時　懲役期間 0.5秒",
          {
            "text": "基本効果　Turn of Fortune is replaced by Spider-Web Grapple, which has 2 charges. Landing the grapple on an enemy steals Fortune and applies a Spider-Tracer. If Black Cat hits an enemy carrying a Spider-Tracer with any other ability, she triggers the mark to deal bonus damage.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Spider-Man, using Spider-Web Grapple to hit an enemy already marked with a Spider-Tracer temporarily Immobilizes them in place.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "white-fox",
    "name": "ホワイトフォックス",
    "title": "ホワイトフォックス",
    "en": "White Fox",
    "role": "strategist",
    "portraitId": "white-fox",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-white-fox",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,300"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Yeowoo Guseul",
        "form": "通常・狐覚醒",
        "normal": [
          "弾速 120 m/秒",
          "弾丸の跳ね返り速度 80 m/秒",
          "最大距離 35 m",
          "弾丸の最大バウンド距離 6 m",
          "回復量 直撃: 1発あたり55発",
          "バウンスヒット: 1発あたり40",
          "ダメージ 直撃: 1発あたり40発",
          "バウンスヒット: 1発あたり25",
          "連射速度 1発あたり0.45秒",
          {
            "text": "フォックス マーブルを前方に発射し、地形やヒーローに跳ね返り、近くのヒーローに狙いを定めます。敵にダメージを与え、味方を回復し、スピリットテールエネルギーを回復します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Claw Strike",
        "form": "通常・狐覚醒",
        "normal": [
          {
            "text": "覚醒時の単発ダメージ 40",
            "changes": [
              {
                "value": "40",
                "previous": "35",
                "kind": "buff"
              }
            ]
          },
          "攻撃間隔 1回の使用につき0.45秒",
          "攻撃範囲 4 m",
          {
            "text": "覚醒中、前方に斬りつける連続攻撃",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Spectral Surge",
        "form": "通常・狐覚醒",
        "normal": [
          {
            "text": "味方への無敵付与 効果廃止",
            "changes": [
              {
                "value": "効果廃止",
                "previous": "",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "魅了の半径 0.4 m",
            "changes": [
              {
                "value": "0.4 m",
                "previous": "0.6 m",
                "kind": "nerf"
              }
            ]
          },
          "弾速 60 m/秒",
          "ダメージ/回復範囲 3 m",
          "ダメージ 65",
          "回復量 65",
          "チャーム持続時間 0.4秒",
          "最大距離 35 m",
          "自己回復量 50",
          {
            "text": "スピリット テールを 1 つ消費して、スペクトル フォックスを前方に送ります。無敵を与えずに通過する味方を回復し、敵にダメージを与えて魅了し、敵をホワイトフォックスに向かって強制的に移動させます",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "E",
        "name": "Fox Form Awakening",
        "form": "通常・狐覚醒",
        "normal": [
          {
            "text": "覚醒の基本持続時間 8秒",
            "changes": [
              {
                "value": "8秒",
                "previous": "7秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "尻尾1本あたりの延長 2秒",
            "changes": [
              {
                "value": "2秒",
                "previous": "1秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "覚醒の最大持続時間 12秒",
            "changes": [
              {
                "value": "12秒",
                "previous": "9秒",
                "kind": "buff"
              }
            ]
          },
          "攻撃生成回復魔法フィールド範囲 半径10 mの球状魔法フィールド",
          "回復量 1ヒットあたり40",
          "術者を囲む治癒効果範囲 半径10 mの球状魔法フィールド",
          "回復量 25/秒",
          {
            "text": "覚醒状態に入り、精霊の尾が物理的な尾に変化します。アクティブな間、スピリット テール エネルギーを継続的に消耗し、近くの味方を回復します。敵を攻撃すると追加のエリア回復が得られます",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "Shift",
        "name": "Spirit Sanctuary",
        "form": "通常・狐覚醒",
        "normal": [
          {
            "text": "シールド耐久値 100",
            "changes": [
              {
                "value": "100",
                "previous": "200",
                "kind": "nerf"
              }
            ]
          },
          "1回の回復量 50",
          "最大距離 30 m",
          "治癒魔法のフィールド範囲 半径5 mの球状魔法フィールド",
          "召喚の最大期間 5秒",
          {
            "text": "特殊効果 シールドがアクティブな間、シールドの範囲内の味方 (ホワイト フォックスを含む) に 20/秒の治癒を継続的に提供します",
            "detail": true
          },
          {
            "text": "選択した味方にテレポートし、シールドを生成しながらエリア内の味方を即座に回復します",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "右クリック",
        "name": "Tail Sweep",
        "form": "通常・狐覚醒",
        "normal": [
          "攻撃範囲 5 m",
          "ダメージ 50",
          {
            "text": "覚醒中、尻尾を前方に振り上げてヒットした敵を打ち上げる",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "Shift",
        "name": "Predatory Pounce",
        "form": "通常・狐覚醒",
        "normal": [
          "ダッシュ持続時間 10 m",
          "ダメージ 40",
          "ダッシュ持続時間 15 m",
          "ダメージ 40",
          {
            "text": "覚醒中、前方にダッシュする。敵を攻撃して速度を低下させ、敵をノックバックする 2 回目のダッシュを可能にします",
            "detail": true
          }
        ],
        "cooldown": {
          "text": "4秒",
          "changes": [
            {
              "value": "4秒",
              "previous": "6秒",
              "kind": "buff"
            }
          ]
        }
      },
      {
        "key": "Q",
        "name": "Kumiho Unleashed",
        "form": "通常・狐覚醒",
        "normal": [
          {
            "text": "変身中の最大HP 1,000",
            "changes": [
              {
                "value": "1,000",
                "previous": "1,200",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "変身中 味方から回復を受けられる",
            "changes": [
              {
                "value": "味方から回復を受けられる",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "ULT必要コスト 4300",
          "継続回復魔法のフィールド範囲 半径10 mの球状魔法フィールド",
          "回復量 85/秒",
          {
            "text": "特殊効果 詠唱後",
            "detail": true
          },
          {
            "text": "半径 10 m 以内の味方全員に Blessed by the Nine 効果を 3 秒間自動的に適用します。",
            "detail": true
          },
          {
            "text": "九尾の狐の完全な姿を現し、近くの味方を継続的に回復します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Ninefold Slam",
        "form": "ULT変身",
        "normal": [
          "最大攻撃範囲 5 m",
          "ダメージ 1ヒットあたり50",
          "爆発ダメージ 1ヒットあたり50",
          "攻撃間隔 1秒あたり1",
          "攻撃生成回復魔法フィールド範囲 半径10 mの球状魔法フィールド",
          "爆発魔法のフィールド範囲 半径6 mの球状魔法フィールド",
          "回復量 ヒットごとに 100",
          {
            "text": "クミホフォームで地面を叩きつけ、爆発的な衝撃波を引き起こす。敵を攻撃するか召喚すると、自分と近くの味方に1回限りの回復を与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Blessed by the Nine",
        "form": "ULT変身",
        "normal": [
          "最大選択距離 50 m",
          "時間経過による回復量 40/秒",
          "アンストッパブル状態の持続時間 3秒",
          "ライフスティール率 0.25",
          {
            "text": "クミホフォームで味方を選択すると、短時間継続回復、アンストッパブル、ライフスティールが付与されます",
            "detail": true
          }
        ],
        "cooldown": "2秒"
      }
    ],
    "teamups": [
      {
        "name": "Lucky Loan",
        "key": "C",
        "cooldown": "25秒",
        "lines": [
          "効果範囲の持続時間 5秒",
          "ダメージ 10/秒",
          "回復量 15/秒",
          "減速率 2秒間20%",
          "移動速度上昇 2秒間20%",
          "受動的エネルギーの回復 1",
          "連携強化時　持続時間 6秒",
          {
            "text": "基本効果　White Fox receives an Orb of Life from Black Cat. Upon use, it recovers Spirit Tail energy and converts life energy into Nine-Tailed Aura that shoots out in all directions. This automatically tracks nearby allies and enemies, granting Speed and Healing to allies while damaging and Slowing enemies.\nnhanced Effect: When teaming up with Black Cat, using the Orb triggers a state where Spirit Tail Energy is no longer consumed for a duration, allowing free use of Spectral Surge and Fox Form Awakening.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Psionic Fox",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "フォックスフォーム覚醒CD 15秒",
          "持続時間 12秒",
          "連携強化時　フォックスフォーム覚醒CD 12秒",
          {
            "text": "基本効果　Activating Fox Form Awakening no longer consumes Spirit Tail energy, and grants the maximum possible duration immediately upon use.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Psylocke, the cooldown for Fox Form Awakening is drastically reduced.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "elsa-bloodstone",
    "name": "エルサ・ブラッドストーン",
    "title": "エルサ・ブラッドストーン",
    "en": "Elsa Bloodstone",
    "role": "duelist",
    "portraitId": "elsa-bloodstone",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-elsa-bloodstone",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Double-Barrel Blaster",
        "normal": [
          {
            "text": "距離減衰の開始 10 m。30 mで基礎ダメージの70%",
            "detail": true,
            "changes": [
              {
                "value": "10 m",
                "previous": "20 m",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 瞬時に命中するショットガンの発射体",
            "detail": true
          },
          "ダメージ 1発あたり4.5",
          "キャストごとに発射される弾丸 10",
          "十字線の広がり半径(10 mの場合) 0.13 m",
          "連射速度 発砲間隔は0.12秒",
          "各発砲の間隔は0.8秒です。",
          "装弾数 12",
          "クリティカル あり",
          {
            "text": "ショットガンを前方に発射します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Monster-Piercer",
        "normal": [
          {
            "text": "発動方式 瞬時に命中するショットガンの発射体",
            "detail": true
          },
          "ダメージ 敵の最大HPの 12+0.8%",
          "キャストごとに発射される弾丸 5",
          "10 m先での弾の拡散半径 6 m",
          "クリティカル なし",
          {
            "text": "エレファントガンを前方に発射します。弾丸が敵を貫通し、高いダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Inherited Instinct",
        "normal": [
          "コスからの本能 100",
          "コスからのさらなる本能がスモーキーなスネアに捕らえられる 200",
          "ダメージ/本能変換率 0.009",
          {
            "text": "特殊効果1 インスティンクトは100に達すると最大3レベルまでレベルアップします",
            "detail": true
          },
          {
            "text": "特殊効果2 Instinct レベルが上がるごとに、Helix Advance のクールダウンが 2 秒減少します",
            "detail": true
          },
          {
            "text": "ダメージを与えると狩猟本能が増加します。スモーキー・スネアに捕まった敵を倒すと追加の本能が得られます。より高い本能により、Helix Advance のクールダウンが短縮されます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Ruthless Pursuit",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "最大ダッシュ速度 40 m/秒",
          "最大ダッシュ持続時間 0.3秒",
          "ダメージ 30",
          {
            "text": "特殊効果1 命中した敵を打ち上げ",
            "detail": true
          },
          {
            "text": "5秒以内に追撃を発動",
            "detail": true
          },
          {
            "text": "特殊効果2 どちらかのステージを使用すると、次のダブルバレル ブラスターが強化され、モンスター ピアサーに変わります。",
            "detail": true
          },
          "ボーナスHP 無慈悲な追跡とヘリックス アドバンスを解放するたびに",
          "25 のボーナス ヘルスが付与されます",
          "最大ボーナスHPは75です",
          "最大ダメージ距離 8 m",
          "ダメージ 30",
          "ダッシュ速度 15 m/秒",
          {
            "text": "前方にダッシュしてボーナスHPを獲得し、敵を攻撃します。ダブルバレルブラスターショットでフォローアップすると、後方に推進し、敵の速度を低下させます。どちらかのステージを使用すると、次のダブルバレル ブラスターが強化され、モンスター ピアサーに変わります。",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "Shift",
        "name": "Helix Advance",
        "normal": [
          "最大ダッシュ速度 27.5 m/秒",
          "最大ダッシュ持続時間 0.28秒",
          {
            "text": "特殊効果 ヘリックス アドバンスを解放してから 6 秒以内に、次のダブルバレル ブラスターがモンスター ピアサーになります。",
            "detail": true
          },
          {
            "text": "特殊効果2 無慈悲な追跡とヘリックス アドバンスを解放するたびに",
            "detail": true
          },
          {
            "text": "25 のボーナス ヘルスが付与されます",
            "detail": true
          },
          {
            "text": "最大ボーナスHPは75です",
            "detail": true
          },
          {
            "text": "前にダッシュします。次のダブルバレルブラスターはモンスターピアサーになります",
            "detail": true
          }
        ],
        "cooldown": "11秒"
      },
      {
        "key": "右クリック",
        "name": "Living Bullet",
        "normal": [
          "弾速 60 m/秒",
          "弾のダメージ 60",
          {
            "text": "特殊効果1 敵に命中した後、発射物はいくつかの弾丸に分割され、範囲内の敵を追跡します",
            "detail": true
          },
          "トレース範囲 半径8 mの球状魔法フィールド",
          "最大分割数 3",
          {
            "text": "特殊効果2 発射物はシールドと敵に 40 の追加ダメージを与え、体力にボーナスを与える",
            "detail": true
          },
          "スピードブースト 1秒間",
          "移動速度が40%増加する",
          {
            "text": "衝撃で分裂するリビングバレット弾を発射し、近くの敵を探し出し、それぞれにスペクトラルシギルをマークします。ダブルバレルブラスターまたはモンスターピアサーでマークされたターゲットを攻撃すると、エルサの速度が短時間ブーストされます。リビングバレットは、ボーナスHPを持つシールドと敵に追加のダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "F",
        "name": "Smoky Snare",
        "normal": [
          "トラップのヘルス 100",
          "最大固定持続時間 1.2秒",
          {
            "text": "特殊効果1 トラップは 1 秒の展開後に透明化され、無敵になります。",
            "detail": true
          },
          "誘発されたトラップダメージ 0.2秒ごとに5ダメージを与え",
          "最後は1.2秒",
          "召喚獣の健康状態 50",
          {
            "text": "特殊効果2 召喚を倒すとImmobolized状態が早期に終了します",
            "detail": true
          },
          {
            "text": "特殊効果 3 エルサはトラップを発動した敵に向かってダッシュすることができます",
            "detail": true
          },
          "最大選択距離 30 m",
          "ダッシュの最大持続時間 0.25秒",
          "最大ダッシュ速度 60 m/秒",
          {
            "text": "モンスターディアブロを含むトラップを起動します。展開すると、透明かつ無敵になります。敵がそれを誘発すると、ディアブロは敵を動けなくしてダメージを与えます。捕らえられた敵に向かってダッシュするために使用します。敵はディアブロを破壊して自由になることができます",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "Q",
        "name": "Apex Predator",
        "normal": [
          "ULT必要コスト 3400",
          "グラトロックス健康 400",
          "グラトロックス捕捉ダメージ 75",
          "グラトロックス咬傷ダメージ 125",
          {
            "text": "特殊効果1 グラルトロクスに捕らえられた敵は、動きが止まるまで能力を使用できません",
            "detail": true
          },
          {
            "text": "特殊効果2 エルサはいつでもグラトロックスを思い出すことができます",
            "detail": true
          },
          {
            "text": "特殊効果 3 グラトロックスが地形に衝突したり、戻ってきたり、ダッシュ持続時間が最大に達したりすると、激しく噛みつき",
            "detail": true
          },
          {
            "text": "大きなダメージを与えます",
            "detail": true
          },
          {
            "text": "グラトロックスが倒された場合、バイトは発動しません",
            "detail": true
          },
          "グラトロックスの移動速度 15 m/秒",
          "グラトロックスの最大ダッシュ持続時間 ダッシュとリターンの最大持続時間はそれぞれ 3.5 秒です。",
          {
            "text": "特殊効果 グラトロックスはクリティカルヒットにならない",
            "detail": true
          },
          {
            "text": "最大 8 つのターゲットをドラッグします",
            "detail": true
          },
          {
            "text": "グラトロックスを召喚して前進します。グラルトロックスをリコールしてエルサに向かって突撃することができます。地形への衝突時や復帰時に激しく噛みつき、大ダメージを与える。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Prehistoric Trap",
        "key": "F",
        "cooldown": "15秒",
        "lines": [
          "トラップトリガー範囲 半径5メートル",
          "トラップダメージ 30",
          "致死性ガス範囲 半径3 m",
          "致死ガスの持続時間 2秒",
          "致命的なガスダメージ 35/秒",
          {
            "text": "連携強化時　強化時のF「Smoky Snare」のCD 12秒。追加チャージの付与は廃止",
            "changes": [
              {
                "value": "12秒",
                "previous": "15秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "基本効果　After deploying the Smoky Snare trap, Diablo will monitor the area. If enemies approach, Diablo Immobilizes and Damages them. He also releases a lethal gas, causing continuous area damage.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Devil Dinosaur and activating Prehistoric Trap, Smoky Snare no longer gains an additional ability charge; its cooldown is reduced from 15秒 to 12秒.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Loudmouth Mercs",
        "key": "右クリック",
        "cooldown": "8秒",
        "lines": [
          "弾のダメージ 60",
          "分割弾丸ダメージ 40",
          "時間の経過によるダメージ 20/秒",
          "2秒間",
          "遅い効果 2秒間25%",
          "連携強化時　ダメージによるエネルギー獲得倍率 0.0012",
          {
            "text": "基本効果　Living Bullet changes to special rounds that Taunt targets with Deadpool's chatter, while Slowing, and damaging nearby enemies over time. After a timer, the bullet auto-recalls, healing Elsa based on the damage dealt while adding one extra gauge block to her Inherited Instinct passive cap.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Deadpool, Deadpool breaks the fourth wall, significantly boosting Instinct acquisition rate.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "rogue",
    "name": "ローグ",
    "title": "ローグ",
    "en": "Rogue",
    "role": "vanguard",
    "portraitId": "rogue",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-rogue",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "350 HP ＋ 回復型シールド 275"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Power Surge Punch",
        "normal": [
          {
            "text": "1・2発目のダメージ 40。3発目 45",
            "changes": [
              {
                "value": "40",
                "previous": "35",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "最大距離 4.5 m",
          "攻撃速度 最初の 2 つのストライク: 0.33 秒/ヒット",
          "3ストライク: 0.73秒/ヒット",
          {
            "text": "両拳で前方にパンチする",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Defensive Stance",
        "normal": [
          {
            "text": "ダメージ吸収半径 1.2 m",
            "changes": [
              {
                "value": "1.2 m",
                "previous": "2 m",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "被ダメージからエネルギーへの変換率 60%",
            "changes": [
              {
                "value": "60%",
                "previous": "55%",
                "kind": "buff"
              }
            ]
          },
          "ダメージ軽減 60%",
          "最大エネルギー 100",
          "エネルギー回復速度 25/秒",
          "エネルギー消費 60/秒",
          "能力を発動するために必要なエネルギー 30",
          {
            "text": "特殊効果 減少したダメージはバックラッシュエネルギーに変わり、次のサザンブロウルをパワーアップします。",
            "detail": true
          },
          "最大バックラッシエネルギー 100",
          {
            "text": "最大バックラッシュエネルギー減衰 20/秒",
            "detail": true
          },
          {
            "text": "近くの発射物を吸収し、受けるダメージを軽減します。吸収されたダメージにより、次の南部乱闘がパワーアップします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Southern Brawl",
        "normal": [
          "ダッシュ距離 8 m",
          "基礎ダメージ 40",
          "バックラッシュエネルギー-追加ダメージ変換率 0.75",
          {
            "text": "特殊効果 ヒットした敵を打ち上げる",
            "detail": true
          },
          "最大距離 8 m",
          {
            "text": "ディフェンススタンス中に前方にダッシュして前方の敵を叩きつけ、範囲ダメージを与える",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "E",
        "name": "Chrono Kick Combo",
        "normal": [
          "効果範囲 箱型の魔法フィールド",
          "長さ: 6.5 m",
          "幅: 4.5 m",
          "高さ: 2 m",
          "範囲ダメージ 30",
          {
            "text": "特殊効果 ヒットした敵を打ち上げ、飛行に入ります",
            "detail": true
          },
          {
            "text": "次の 2 つのパワー サージ パンチ攻撃は遠距離攻撃になり、クロノ キック コンボを再び放つことができます。",
            "detail": true
          },
          "最大飛行時間 3秒",
          "効果範囲ダメージをノックダウンする 30",
          "効果範囲範囲をノックダウンする 半径6 mの球状魔法フィールド",
          "弾のダメージ 60",
          "弾速 100 m/秒",
          "発射体の最大飛距離 20 m",
          {
            "text": "前方にダッシュして敵を打ち上げ、飛行に入ります。再びアクティブにして近くの敵をノックダウンします。次の 2 つのパワー サージ パンチ攻撃は遠距離攻撃になり、敵を貫通し、ボーナス ヘルスを与えます。",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "Shift",
        "name": "Fatal Attraction",
        "normal": [
          "ダッシュ距離 10 m",
          "ダッシュダメージ 30",
          {
            "text": "特殊効果 ヒットした敵を打ち上げる",
            "detail": true
          },
          "効果範囲範囲を広げる 高さ3 mの円筒形の魔法フィールド",
          "0.8秒後に半径8 mに拡大",
          "効果範囲ダメージを拡散する 40/秒",
          "効果範囲ダメージを回復する 30",
          {
            "text": "前にダッシュします。もう一度押すとクロノビウム パワーが爆発し、近くの敵に継続的なダメージを与えます。遅れてエネルギーが後退し、すべての敵をローグに引き寄せます",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "F",
        "name": "Ability Absorption",
        "normal": [
          "ダッシュ距離 8 m",
          {
            "text": "特殊効果 ターゲットをノックダウンします",
            "detail": true
          },
          {
            "text": "ローグは吸収中にアンストッパブルになります。",
            "detail": true
          },
          "時間の経過による吸収ダメージ 30/秒",
          "時間の経過とともに吸収治癒 60/秒",
          "吸収された能力の持続時間 10秒",
          "前衛のアビリティ吸収によるブースト 最大HP 150",
          "前衛吸収対象にデバフ 最大HPを20減らす",
          "デュエリストアビリティ吸収によるブースト 20%ダメージブースト",
          "デュエリスト吸収ターゲットへのデバフ 与えるダメージを3%軽減",
          "軍師の能力吸収によるブースト 自己回復 20/秒",
          "戦略家の吸収ターゲットへのデバフ 与えられる回復量を4%減らす",
          "吸収プロセス 0.75秒",
          {
            "text": "特殊効果 吸収後、能力吸収をいずれかの能力に置き換えるか、致命的な魅力を更新します。",
            "detail": true
          },
          {
            "text": "前方にダッシュしてターゲットを倒し、エネルギーを吸収します。吸収後、能力吸収を能力の1つと置き換えるか、致命的な魅力を更新します。役割に応じて体力とステータスも吸収します",
            "detail": true
          }
        ],
        "cooldown": "25秒"
      },
      {
        "key": "Q",
        "name": "Heartbreaker",
        "normal": [
          "持続時間 8秒",
          "ULT必要コスト 3400",
          "究極能力エネルギー吸収速度 毎秒究極能力エネルギーの 4% を吸収する",
          "前衛から盗まれた最大ステータス 最大HP400",
          "デュエリストから盗まれた最大ステータス 35%ダメージブースト",
          "戦略家から盗んだ最大の統計 自己回復 75/秒",
          "効果範囲 半径8 mの球状魔法フィールド",
          "範囲ダメージ 15/秒",
          {
            "text": "近くの敵から究極の能力エネルギーを継続的に吸収し、役割に基づいてステータスを盗みます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Mr. & Mrs. X",
        "key": "C",
        "cooldown": {
          "text": "15秒",
          "changes": [
            {
              "value": "15秒",
              "previous": "30秒",
              "kind": "buff"
            }
          ]
        },
        "lines": [
          {
            "text": "爆発1回のダメージ 3＋対象の最大HPの1%",
            "changes": [
              {
                "value": "3＋対象の最大HPの1%",
                "previous": "5＋対象の最大HPの1%",
                "kind": "nerf"
              }
            ]
          },
          "持続時間 8秒",
          "効果範囲 半径8 mの球面",
          "癒し 10",
          {
            "text": "連携強化時　周囲の味方の回復 10",
            "changes": [
              {
                "value": "10",
                "previous": "15",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "連携強化時　特殊効果 ハートを一つの状態として永続的に維持します",
            "detail": true
          },
          {
            "text": "基本効果　After activation, every attack triggers a kinetic explosion, dealing area damage to surrounding enemies while simultaneously healing nearby allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Gambit, Rogue remains permanently locked in the \"Hearts as One\" state.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Explosive Entanglement",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "ダメージ軽減 75%",
          "連携強化時　壁衝突ボーナスダメージ 60",
          {
            "text": "基本効果　Defensive Stance is fortified. Activating the ability expands a magnetic field, drastically boosting the Damage Reduction ratio of Defensive Stance. Furthermore, all damage absorbed by the field is converted directly into damage for Southern Brawl.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Magneto, Southern Brawl Knocks back enemies. Extra damage is dealt if they're propelled into a wall.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "gambit",
    "name": "ガンビット",
    "title": "ガンビット",
    "en": "Gambit",
    "role": "strategist",
    "portraitId": "gambit",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-gambit",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "派生スキルのHP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,500"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Kinetic Cards",
        "form": "通常",
        "normal": [
          {
            "text": "中央と外側のカードの角度 3°",
            "changes": [
              {
                "value": "3°",
                "previous": "2°",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "アンリーズごとに起動されるカード アンリーズごとに 3 枚のカード",
          "カードのダメージ 1発あたり20ダメージ",
          "カードヒーリング ラウンドごとに体力が 30",
          "連射速度 1発あたり0.45秒",
          "装弾数 21",
          "クリティカル なし",
          "弾速 150 m/秒",
          "最大距離 60 m",
          {
            "text": "キネティックチャージされた 3 枚のカードを前方に弧を描いて発射します。各カードは着弾時に爆発し、敵にダメージを与え、味方を回復する単一ターゲットの爆発を引き起こします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Ragin' Royal Flush",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "ULT必要コスト 4500",
          "範囲 円錐形効果範囲",
          "角度範囲：110°",
          "長さ：30 m",
          {
            "text": "特殊効果 ガンビットと対象の味方は浄化とジャンプブーストの効果を受けます。",
            "detail": true
          },
          "一度きりの癒し 100",
          "移動速度上昇率 30%",
          "強化されたダメージ率 20%",
          "ダメージトリガー間隔 0.5秒",
          "継続回復 55/秒",
          "究極能力チャージ加速率 20%",
          "効果範囲の持続時間 8秒",
          {
            "text": "視界内の味方をロックオンし、回復と浄化を行う複数のエースを解き放ちます。どちらもキネティックトランスファー状態に入り、移動速度とジャンプブーストの増加をもたらし、追加の単一ターゲット爆発ダメージで攻撃を強化し、味方に究極の能力チャージ加速を提供します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Cajun Charge",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "ダッシュ持続時間 8 m",
          {
            "text": "杖を手にサイドステップで前に進み、短距離をダッシュする",
            "detail": true
          }
        ],
        "cooldown": "2回の充電で、各充電には12.5秒かかります。"
      },
      {
        "key": "E",
        "name": "Healing Hearts",
        "form": "通常",
        "normal": [
          {
            "text": "効果中の自己回復 20/秒",
            "changes": [
              {
                "value": "20/秒",
                "previous": "30/秒",
                "kind": "nerf"
              }
            ]
          },
          "最大持続時間 6秒",
          {
            "text": "特殊効果 持続時間内に、スライ オブ ハンドのスタックを 1 つ消費すると、ブリッジ ブーストと浄化ピックアップを使用できます。",
            "detail": true
          },
          {
            "text": "スライ・オブ・ハンドのスタックを 1 つ消費してハート カードを召喚し、ヒーリング ハート デッキに切り替えます",
            "detail": true
          }
        ],
        "cooldown": "4回の充電で、各充電には7秒かかります。"
      },
      {
        "key": "F",
        "name": "Breaking Spades",
        "form": "通常",
        "normal": [
          "自己ダメージブースト 10%",
          "最大持続時間 6秒",
          {
            "text": "特殊効果 持続時間内に",
            "detail": true
          },
          {
            "text": "スライハンドのスタックを 1 つ消費して、爆発トリックと入札弾幕を使用します",
            "detail": true
          },
          {
            "text": "スライハンドのスタックを 1 つ消費してスペード カードを召喚し、ダメージ ブーストを獲得し、ブレイキング スペード デッキに切り替えます",
            "detail": true
          }
        ],
        "cooldown": "4 回の充電、各充電の再充電には 7 秒かかります"
      },
      {
        "key": "右クリック",
        "name": "Bayou Bash",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 術者を囲むシングルキャストの効果範囲",
            "detail": true
          },
          "効果範囲 半径5 mの球体",
          "ダメージ 60",
          "癒し 味方へ：60",
          "自分: 60",
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "ダッシュ距離 12 m",
          "効果範囲生成量 3",
          "効果範囲の生成間隔 0.1",
          "範囲 半径5 mの球体",
          "ダメージ フィールドごとに 25 個",
          "癒し 味方と自分に：15/hit",
          {
            "text": "運動エネルギーをボー スタッフに流し込み、全面攻撃後に地面に叩きつけて衝撃波を発生させ、近くの敵にダメージを与え、味方を回復します",
            "detail": true
          }
        ],
        "cooldown": "2回の充電、各充電の再充電には8秒かかります"
      },
      {
        "key": "E",
        "name": "Bridge Boost",
        "form": "派生スキル",
        "normal": [
          {
            "text": "発動方式 直線的な軌道で発射する発射体。",
            "detail": true
          },
          {
            "text": "特殊効果 発射体は自動的に味方を追跡し、衝撃を受けると味方の間で跳ね返ります",
            "detail": true
          },
          {
            "text": "単一のターゲットに対するブリッジ ブーストのバウンスは最大 2 に設定されます",
            "detail": true
          },
          "弾速 120 m/秒",
          "最大跳弾数 6",
          "癒し 1発あたり55",
          "回復力上昇率 0.15",
          "持続時間 4秒",
          {
            "text": "ヒーリング ハート デッキがアクティブな間、フラッシュ エンパワーメントをトリガーしてカードをスプリングし、デッキ全体を前方に発射します。カードは衝撃を受けると味方の間で跳ね返り、体力と治癒ブーストを付与します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Purifying Pick-Up",
        "form": "派生スキル",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する発射物。",
            "detail": true
          },
          "生成された発射体の数 10",
          "弾速 100 m/秒",
          "最大距離 15 m",
          "効果範囲 半径5 mの球体",
          "範囲回復 フィールドあたり 70",
          {
            "text": "特殊効果 効果範囲は衝撃時に味方に浄化を適用します",
            "detail": true
          },
          {
            "text": "味方に最大2回",
            "detail": true
          },
          {
            "text": "自分に最大1回効果を与えることができる。",
            "detail": true
          },
          {
            "text": "Healing Hearts デッキがアクティブな間、Raise Empowerment をトリガーして、カードのクラスターを前方に弧を描いて発射します。爆発は近くの味方を回復し、浄化します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Explosive Trick",
        "form": "派生スキル",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する発射物",
            "detail": true
          },
          "弾速 150 m/秒",
          "効果範囲 半径5 mの球体",
          "ダメージ 70",
          "治癒率の低下 0.25",
          "治癒期間の短縮 4秒",
          {
            "text": "ブレイキング スペード デッキがアクティブな間、フラッシュ エンパワーメントをトリガーしてカードのフルセットを前方に発射します。カードは衝撃を受けると爆発し、ダメージを与えながら回復力の低下を与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Bidding Barrage",
        "form": "派生スキル",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する発射物",
            "detail": true
          },
          "発射体の数 10",
          "弾速 100 m/秒",
          "最大距離 15 m",
          "効果範囲 半径5 mの球体",
          "ダメージ 70",
          {
            "text": "特殊効果 ヒット時に敵を打ち上げます",
            "detail": true
          },
          {
            "text": "効果は 1 回だけです。",
            "detail": true
          },
          {
            "text": "Breaking Spades デッキがアクティブな間、Raise Empowerment をトリガーして、カードを全方向に弧を描いて散らします。爆発で敵にダメージを与え、打ち上げる",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Favorable Odds",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "効果範囲 半径5 mの球体",
          "効果範囲の持続時間 5秒",
          "回復量 55/秒",
          "ダメージ 50/秒",
          "連携強化時　一回限りのダメージ 40",
          "連携強化時　一度きりの癒し 60",
          {
            "text": "基本効果　Throw two magnetic playing cards forward. Upon hitting the environment or a character, the two cards magnetically repel and unfurl, spinning in place for a duration. They heal allies they hit, while damaging and Launchingenemies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Magneto, after the duration ends, the magnetic poles of the two cards reverse. They violently slam back together and explode, providing an extra burst of healing to allies and damage to enemies.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Sparkling Staff",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          "持続時間 2秒",
          "ダメージ効果範囲範囲 半径5 mの球体",
          "ダメージ 45/秒",
          "治癒魔法のフィールド範囲 半径8 mの球状魔法フィールド",
          "回復量 70/秒",
          "連携強化時　ボーナスヒーリング 10/秒",
          "連携強化時　3秒間",
          {
            "text": "基本効果　Twirl your firework-energy enhanced bo staff. The radiating firework sparks provide healing to nearby allies. Concurrently, the staff deals damage to close-range enemies, and the rapid spinning blocks incoming damage from most projectiles.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Jubilee, both Bayou Bashand Big Easy Impactgain an additional Continuous Healingaura.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "daredevil",
    "name": "デアデビル",
    "title": "デアデビル",
    "en": "Daredevil",
    "role": "duelist",
    "portraitId": "daredevil",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-daredevil"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "150 HP ＋ 回復型シールド 150"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Justice Jab",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 35",
          "最大距離 4.5 m",
          {
            "text": "特殊効果 ヒット時に15のフューリーを獲得",
            "detail": true
          },
          {
            "text": "ビリー・クラブを前方に振ります。ヒット時にフューリーを獲得",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Righteous Cross",
        "normal": [
          "最大ダッシュ距離 6 m",
          "範囲ダメージ 50",
          "効果範囲の最大距離 6 m",
          {
            "text": "特殊効果 ヒット時に15のフューリーを獲得",
            "detail": true
          },
          {
            "text": "ビリークラブを交差させて前に進みましょう。ヒット時にフューリーを獲得",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Objection!",
        "normal": [
          "持続時間 1.2秒",
          {
            "text": "特殊効果 正面からのダメージをブロックし、発射物を反射し、このスタンス中に入ってくるすべての危害を免れます",
            "detail": true
          },
          {
            "text": "攻撃をブロックすることに成功すると",
            "detail": true
          },
          {
            "text": "60 の怒りを獲得します。",
            "detail": true
          },
          {
            "text": "タイトなガードでビリークラブを回転させて正面からのダメージをブロックし、発射物を反射し、このスタンス中に入ってくるすべての危害を免れ、フューリーを獲得します",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "Shift",
        "name": "Devil's Latch",
        "normal": [
          "最大距離 25 m",
          "弾速 180 m/秒",
          {
            "text": "特殊効果 この能力を使用した後",
            "detail": true
          },
          {
            "text": "5秒以内に正義の十字架を有効にします",
            "detail": true
          },
          {
            "text": "30の怒りを得る",
            "detail": true
          },
          {
            "text": "グラップリングラインを発射し、デアデビルとターゲットをお互いに引き寄せます。完了すると、フューリーを獲得し、一時的にクロス尋問を有効にします",
            "detail": true
          }
        ],
        "cooldown": "12"
      },
      {
        "key": "E",
        "name": "Infernal Fury",
        "normal": [
          {
            "text": "特殊効果 アクティベーション中、デアデビルはデビルズ チェーンまたはデビルズ スローを放つことができます",
            "detail": true
          },
          {
            "text": "このアビリティ使用後 5 秒以内に正義の十字架を有効にする",
            "detail": true
          },
          "発動には激怒が必要 60",
          "ボーナス最大HP 100",
          {
            "text": "ボーナスHP減少 フォールオフは 5 秒で始まり",
            "detail": true
          },
          {
            "text": "30/秒ずつ減少します",
            "detail": true
          },
          "効果範囲 箱型の魔法フィールド",
          "長さ: 8 m",
          "幅: 4 m",
          "高さ: 4 m",
          "高ダメージ効果範囲範囲 端に半径2 mの球状の効果範囲",
          "ダメージ/ボーナスHP変換 0.7",
          "ボーナスHPを獲得 25",
          "ダメージ 40. ターゲットが高ダメージ範囲に捕まった場合",
          "65 ダメージを与える",
          "弾速 150 m/秒",
          "弾のダメージ 30",
          "最大跳弾数 4. ターゲットがない場合は最大 2 回の跳弾",
          {
            "text": "特殊効果 Devil's Throwはヒット時に敵の速度を低下させる",
            "detail": true
          },
          "減速率 20%",
          "ボーナスHPを獲得 50",
          {
            "text": "怒りを消費して、悪魔の鎖または悪魔の投げを解き放ちます。 Devil's Chain はダメージをボーナスHPに変換し、Devil's Throw はヒット時に敵を遅くし、一時的にクロス尋問を有効にします。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Sonic Pursuit",
        "normal": [
          "移動速度上昇 2.1メートル/秒",
          "フォールオフはターゲットから 10 m 離れたところで始まり",
          "ターゲットから 40 m では 0.9 m/秒 に減少します。",
          "自身のダメージ軽減 10%",
          "範囲を選択 40 m",
          "ダッシュのクールダウン 15秒",
          "ダッシュ選択範囲 12 m",
          "最大ダッシュ速度 100 m/秒",
          "ダッシュダメージ範囲 半径1 mの球状魔法フィールド",
          "ダッシュダメージ 20",
          {
            "text": "特殊効果 デアデビルがターゲットを倒した場合、クールダウンを更新します",
            "detail": true
          },
          {
            "text": "ダッシュ後にフューリーを 60 獲得",
            "detail": true
          },
          {
            "text": "ターゲットをロックオンし、速度が増加します。そして攻撃されたときのダメージ軽減。範囲内にいる間、ターゲットにダッシュしてターゲットを盲目にし、フューリーを回復します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Radar Sense",
        "normal": [
          "最大検出距離 40 m",
          {
            "text": "設定した半径内の敵の動きを感知する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Space",
        "name": "Blind Ascent",
        "normal": [
          "壁を這うスピード 10 m/秒",
          {
            "text": "壁に沿って走り、飛び降りて位置を変更します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Let the Devil Out",
        "normal": [
          "最大ブラインドレンジとダメージに達するまでに必要な時間 3秒",
          "効果範囲の持続時間 8秒",
          "最大距離 15 m",
          "ULT必要コスト 3400",
          "ダメージ 50/秒",
          "最大ダメージに達すると毎秒 85 ダメージを与える",
          "ブラインド効果 視程は35 m、ブラインド効果が最大に達すると10 mに減少します。",
          "怒りの回復速度 30/秒",
          {
            "text": "野獣を内に抱きしめてください。デアデビルの視線内の敵はダメージを受け、急速なブラインド効果を受けます。アクティブ中に継続的にフューリーを獲得",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Comprehensive Defense",
        "key": "右クリック",
        "cooldown": "",
        "lines": [
          {
            "text": "特殊効果 無敵状態になりながらあらゆる方向からの発射物を逸らします",
            "detail": true
          },
          "連携強化時　回復量 60/秒",
          {
            "text": "基本効果　Objection! is enhanced. Whirling billy clubs now damage all enemies in range while deflecting Projectiles from all directions. Successfully deflecting attacks recovers Fury.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Iron Fist, Daredevil passively recovers Health for the entire duration of the ability.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Devilish Affair",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          "効果範囲 半径8.5 m",
          "高さ5 m",
          "120°のコーン効果範囲",
          "ダメージ 55",
          "減速率 1.5秒間40%",
          "連携強化時　効果範囲 半径8.5 m",
          "連携強化時　高さ5 m",
          "連携強化時　180°コーン効果範囲",
          {
            "text": "基本効果　Swings Devil's Chain in a criss-cross pattern, dealing damage to enemies in front and inflicting a Slow.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Black Widow, the damage radius is expanded, and landing hits recovers Fury.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "angela",
    "name": "アンジェラ",
    "title": "アンジェラ",
    "en": "Angela",
    "role": "vanguard",
    "portraitId": "angela",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-angela",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "350 HP ＋ 回復型シールド 200"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Spear of Ichors",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 45",
          "チャージダメージ変換率 35%",
          "最大距離 7 m",
          "攻撃間隔 1ヒットあたり0.96秒",
          {
            "text": "特殊効果 フルチャージすると、イコルの槍は敵を打ち上げ",
            "detail": true
          },
          {
            "text": "20 の追加ダメージを与えることができます。",
            "detail": true
          },
          {
            "text": "槍を持って前方に突進し、攻撃チャージによって増加するダメージを与えます。フルチャージすると、イコルの槍は敵を打ち上げることができます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Axes of Ichors",
        "normal": [
          {
            "text": "斧コンボ1〜3段目 35。4段目 50",
            "changes": [
              {
                "value": "35",
                "previous": "30",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "双斧の命中1回あたりのボーナスHP 55",
            "changes": [
              {
                "value": "55",
                "previous": "50",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "チャージダメージ変換率 50%",
          "最大距離 4 m",
          "攻撃間隔 最初の 3 ストライク: 1 ヒットあたり 0.4 秒",
          "4 回目のストライク: 1 ヒットあたり 0.6 秒。",
          {
            "text": "特殊効果 4 回目の攻撃で、素早いダッシュで前進します。",
            "detail": true
          },
          {
            "text": "二軸で前方に交互に強力な攻撃を繰り出し、アタックチャージが増加するにつれて与えるダメージも増加します。 4 回目の攻撃で、素早いダッシュで前進します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Shielded Stance",
        "normal": [
          "シールドの最大値 350",
          "破壊時CD 4秒",
          "リリース後の回復が遅い 2秒",
          "回復速度 60/秒",
          "ダメージ耐性電荷変換率 35%",
          {
            "text": "イコルをシールドに変換し、ダメージを吸収すると攻撃チャージを獲得します",
            "detail": true
          }
        ],
        "cooldown": "1秒"
      },
      {
        "key": "パッシブ",
        "name": "Seraphic Soar",
        "normal": [
          "グライドに入るまでの所要時間 0.1秒",
          "グライド発動条件 5 m/秒以上の前進速度を1秒間維持する",
          "滑空速度 10 m/秒",
          "滑空中に得られる受動的エネルギー 22.2/秒",
          {
            "text": "空中を自由に滑空します。連続飛行でアタックチャージを構築",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Divine Judgement",
        "normal": [
          {
            "text": "領域内の継続ダメージ 15/秒。着弾ダメージ 30",
            "changes": [
              {
                "value": "15/秒",
                "previous": "12.5/秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "領域の外でも移動速度とボーナスHPの効果を維持 6秒。E「Wingblade Ascent」で解除",
            "changes": [
              {
                "value": "6秒",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "時間経過によるダメージ 効果範囲範囲 半径8 m",
          "高さ2 mの円筒形の魔法フィールド。",
          "移動力ブースト（自身） 35%",
          "効果範囲の持続時間 6秒",
          "ボーナスHP Divine Judgement をアクティブにした後の 6 秒のバフ中に、アンジェラのイコルの斧がヒットするたびに",
          "アンジェラ自身に 55 のボーナス ヘルスが付与され",
          "エリア内の味方に 25 のボーナス ヘルスが付与されます",
          "彼女はゾーン内に留まる必要はありません",
          "ウイングブレードアセントを使用するとバフが解除されます。",
          "ボーナス最大HP 200",
          {
            "text": "下に飛び込み、ツイン軸に切り替え、地面にイコルを注入して、衝撃時に神の裁きゾーンを作成します。アクティブ化すると、強化されたスピードが得られ、攻撃すると、ゾーン内に留まらなくても、自分と近くの味方にボーナスHPが6秒間付与されます。この間にウィングブレードアセントを使用すると、これらのバフが削除されます",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "E",
        "name": "Wingblade Ascent",
        "normal": [
          "上昇高さ 8 m",
          "上昇時間 0.35秒",
          "上昇仰角 60°",
          {
            "text": "イコルの槍に切り替えて空へ飛び立つ",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Assassin's Charge",
        "normal": [
          "最大エネルギー 100",
          "エネルギー回復速度 12.5/秒",
          "消費エネルギー 25/秒",
          "敵を貫通するとき 75/秒",
          "1回限りのエネルギーコスト 20",
          "能力を発動するために必要なエネルギー 30",
          "回復遅延 2",
          "ダッシュ状態の速度 18 m/秒",
          "最大の敵を運ぶことができます 2",
          "ダッシュ中に得られるパッシブエネルギー 25/秒",
          {
            "text": "特殊効果 貫通されたすべての敵は",
            "detail": true
          },
          {
            "text": "アンジェラに 50/秒のパッシブ エネルギー回復を与えます。",
            "detail": true
          },
          "貫通ダメージ 30",
          {
            "text": "加速ダッシュ状態になり、正面からぶつかった敵は短い距離だけ空中に運ばれる",
            "detail": true
          }
        ],
        "cooldown": "4秒"
      },
      {
        "key": "Q",
        "name": "Heven's Retribution",
        "normal": [
          "ULT必要コスト 3100",
          "弾速 60 m/秒",
          "範囲ダメージ 40",
          "効果範囲 半径8 mの球面",
          "地面にダメージを与える 100",
          "ヒットグラウンド効果範囲範囲 半径8 mの球面",
          {
            "text": "特殊効果 リボンで縛られた敵の移動能力は無効になります",
            "detail": true
          },
          {
            "text": "槍の周囲の一定距離内の敵の速度が低下します。",
            "detail": true
          },
          "減速率 80%",
          "弾のダメージ 30",
          "召喚獣の健康状態 650",
          {
            "text": "槍をリボンで包み、勢いよく投げます。衝撃を受けると、リボンが近くの敵を拘束します。アンジェラは槍の位置にジャンプし、周囲の敵にダメージを与え、神の裁きゾーンを作成できます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Asgardians of the Galaxy",
        "key": "C",
        "cooldown": "25秒",
        "lines": [
          "効果範囲の範囲を明らかにする 半径50 mの球状魔法フィールド",
          "グランドスラム効果範囲範囲 半径10 mの球状魔法フィールド",
          "グラウンドスラムダメージ 65",
          "グラウンドバインド持続時間 2秒",
          "連携強化時　ボーナスHP ターゲットの命中ごとに 75 のボーナス ヘルスを獲得 (最大 200)",
          {
            "text": "基本効果　Activation grants Reveal within a targeted area. Activating the ability again performs a slam attack; enemies hit by the slam are Grounded.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Star-Lord, Angela gains Bonus Health scaling with the number of enemies struck by the slam.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Odin's Unacknowledged",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "イリュージョン最大ダメージ吸収 150",
          {
            "text": "連携強化時　特殊効果 この能力は2チャージを得る",
            "detail": true
          },
          {
            "text": "基本効果　Project an Illusion forward. The illusion utilizes Assassin's Charge to thrust at enemies. Enemies struck head-on will be carried through the air for a short while.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Loki, the ability gains two charges.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "blade",
    "name": "ブレイド",
    "title": "ブレイド",
    "en": "Blade",
    "role": "duelist",
    "portraitId": "blade",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-blade"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "350"
      },
      {
        "label": "ULT必要コスト",
        "value": "2,800"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Ancestral Sword",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 1 回の斬撃で 26 ダメージを与えます",
          "ダブルストライクは一撃あたり 13 ダメージを与える",
          "最大距離 5 m",
          "攻撃間隔 1秒あたり2回の攻撃",
          {
            "text": "刃の祖先剣で前方に斬りかかる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Hunter's Shotgun",
        "normal": [
          {
            "text": "発動方式 直線の軌道で発射し、一定の距離に達すると破片に砕ける発射体",
            "detail": true
          },
          "初期発射体の最大距離 8 m",
          "弾丸の初速 180 m/秒",
          "初期の発射ダメージ 45",
          "破片の量 11",
          "破片当たりのダメージ 8",
          "破片の発射速度 150 m/秒",
          {
            "text": "破片のダメージ減衰 フォールオフは 15 メートルで始まり",
            "detail": true
          },
          {
            "text": "30 メートルで 50% に減少します。",
            "detail": true
          },
          {
            "text": "ショットガンを使って敵を攻撃する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Scarlet Shroud",
        "normal": [
          "最大エネルギー 120",
          "消費エネルギー 60/秒",
          "エネルギー回復速度 15/秒",
          "アクティベーション費用 15",
          "止められない持続時間 起動後 1 秒",
          "ダメージ軽減 80%",
          {
            "text": "特殊効果 200 ダメージを抵抗するごとに、Daywalker Dash のチャージが 1 回付与されます",
            "detail": true
          },
          {
            "text": "Ancestral Sword で受け流すと短期間アンストッパブルになり、正面から受けるダメージが軽減され、Daywalker Dash のクールダウンが減少します。",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "E",
        "name": "Bloodline Awakening",
        "normal": [
          {
            "text": "特殊効果 左クリック/Shift キーのアビリティヒットにより、攻撃速度バフレベルが蓄積されます",
            "detail": true
          },
          {
            "text": "血統の覚醒期間中、攻撃はライフスティールと移動速度のブーストを獲得しますが",
            "detail": true
          },
          {
            "text": "回復量が減少します。",
            "detail": true
          },
          "ライフスティールの割合 70%",
          "回復力減少の影響を受ける",
          "治癒率を自己減少させる 25%",
          "移動速度ブースト 1.5 m/秒",
          "最大攻撃速度ブーストバフスタック 10",
          "左クリックヒットバフスタック 1",
          "シフトヒットバフスタック 5",
          "各バフスタックによる攻撃速度ブースト割合 10%",
          "各バフスタックの持続時間 1秒",
          "旋風斬りダメージ 64",
          "ヒットで旋風斬りを発動 5",
          {
            "text": "特殊効果 Whirlwind Slash の 4 ヒットすべてを当てると",
            "detail": true
          },
          {
            "text": "1 つの斬撃速度スタックが付与されます",
            "detail": true
          },
          {
            "text": "超過ライフスティール付与ボーナスHP(最大 75",
            "detail": true
          },
          {
            "text": "変換率 50%)",
            "detail": true
          },
          {
            "text": "ダンピールの血脈が覚醒し、連続攻撃時の斬撃速度が向上し、旋風斬りを発動できる。旋風斬りをすべて命中させるとさらに攻撃速度が上昇する。この状態では回復力が低下しますが、攻撃を受けるとライフスティールが得られます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Daywalker Dash",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          {
            "text": "命中した敵にダメージと特殊効果を与える",
            "detail": true
          },
          "ダッシュ距離 15 m",
          "ダメージ 30",
          {
            "text": "特殊効果 銃を使いながら攻撃すると、敵にスロー効果を与えます",
            "detail": true
          },
          {
            "text": "剣を振りながら攻撃すると敵に回復力減少を与える",
            "detail": true
          },
          "治癒減少率 攻撃ごとに 8% の回復量減少を適用 (すべてヒットした場合は合計 32%)",
          "治癒短縮期間 4秒",
          "減速率 40%",
          "持続時間が遅い 1.5秒",
          "銃の二撃目ダメージ 50",
          "剣の二段目ダメージ 1ヒットあたり10",
          "合計4ヒット",
          "2段目ダメージ範囲 6.5 m",
          {
            "text": "前にダッシュします。銃を使用している場合は、衝撃時に敵を撃ち、治癒減少効果を適用します。剣を使用している場合は、切断攻撃を繰り出し、Slow を与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Thousand-Fold Slash",
        "normal": [
          "ULT必要コスト 2800",
          "自分は遅い 25%",
          "最大充電時間 3秒",
          "最大距離までの充電時間 1秒",
          "ダッシュ距離 フル充電後10 m",
          "最大到達距離24 m。",
          "直撃ダメージ 100",
          "効果範囲の時間経過によるダメージ 225/秒",
          "効果範囲 長さ: ダッシュの最大距離",
          "幅: 6 m",
          "高さ：4.5 m",
          "効果範囲の持続時間 2秒",
          "治癒減少率 20%",
          "治癒短縮期間 4秒",
          {
            "text": "パワーをチャージしてドラキュラの剣を素早く抜き、前方にダッシュしながら強力な居合攻撃を実行し、剣が自動的に敵を攻撃する斬撃ゾーンを残します。攻撃を受けた敵は回復力が減少する",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Blade of Khonshu",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          "ダッシュ持続時間 0.15",
          "最大ダッシュ速度 60 m/秒",
          "ダッシュダメージ 30",
          "ダークムーンブレードのダメージ 40",
          "ダークムーンブレードの飛行速度 150 m/秒",
          "ダークムーンブレードが発射される 4",
          {
            "text": "バウンスごとのダメージ減衰 -35%",
            "detail": true
          },
          {
            "text": "連携強化時　特殊効果 それぞれの旋風斬りは追加の三日月刃を生成します",
            "detail": true
          },
          {
            "text": "基本効果　Perform a heavy forward cleave with the Ancestral Sword while performing a short dash. At the end of the dash, swiftly slash four times, each strike sending a Darkmoon Blade forward. When a Darkmoon Blade hits an enemy, it bounces to nearby targets.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Moon Knight, each Whirlwind Slash triggered generates one additional Darkmoon Blade.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Bleed for Battle",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "受けたダメージによって得られる血統の覚醒スタック スタックごとに 40 個",
          "血統の覚醒最大スタック増加 2",
          "連携強化時　血統の覚醒最大スタック増加 4",
          "連携強化時　ヘルスパーセンテージのしきい値 65%",
          "連携強化時　獲得したボーナススタック 5",
          {
            "text": "基本効果　For every set amount of damage taken, Blade builds a stack of Bloodline Awakening.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Captain America, taking critical damage instantly triggers the Bloodline Awakening state, gaining bonus stacks while raising the overall stack cap.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "phoenix",
    "name": "フェニックス",
    "title": "フェニックス",
    "en": "Phoenix",
    "role": "duelist",
    "portraitId": "phoenix",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-phoenix",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Cosmic Flames",
        "normal": [
          {
            "text": "火花爆発の直撃ダメージ 40",
            "changes": [
              {
                "value": "40",
                "previous": "45",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "火花爆発の範囲ダメージ 15",
            "changes": [
              {
                "value": "15",
                "previous": "20",
                "kind": "nerf"
              }
            ]
          },
          "ダメージ 65",
          {
            "text": "距離減衰は10 mから開始",
            "detail": true
          },
          {
            "text": "30 mで基礎ダメージの65%",
            "detail": true
          },
          "連射速度 1発あたり0.435秒",
          {
            "text": "特殊効果 命中した敵にスパークを1つ適用します",
            "detail": true
          },
          {
            "text": "クリティカルヒットは 2 つのスパークを適用します",
            "detail": true
          },
          {
            "text": "スパークが 3 つになると、フェニックスは激しい爆発を引き起こし",
            "detail": true
          },
          {
            "text": "周囲の敵にスパークを 1 つ適用します",
            "detail": true
          },
          {
            "text": "爆発による火花は短期間では蓄積しません。",
            "detail": true
          },
          "爆発範囲 半径4 mの球状魔法フィールド",
          "爆発後の自己ボーナスHP 5/秒",
          "4秒間",
          {
            "text": "燃えるような発射体を前方に発射し、命中した敵に 1 スパークを適用します。クリティカルヒットは 2 つのスパークを適用します。スパークが 3 つになると、フェニックスは激しい爆発を引き起こし、周囲の敵にスパークを 1 つ適用し、自分自身に時間の経過による治癒を適用します。爆発による火花は短期間では蓄積しない",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Telekinesis Burst",
        "normal": [
          "ターゲットの爆発ダメージ 20",
          "目標爆発範囲 半径2 m",
          "高さ4 mの円筒形の魔法フィールド。",
          "その後の爆発ダメージ 20",
          "その後の爆発範囲 半径3 m",
          "高さ6 mの円筒形の魔法フィールド。",
          {
            "text": "特殊効果 最初の爆発は敵を気絶させ",
            "detail": true
          },
          {
            "text": "その後の 2 回の爆発は鈍化を与えます。",
            "detail": true
          },
          "気絶持続時間 0.3秒",
          "遅い効果 2秒間30%のスローを与える。",
          {
            "text": "ターゲット領域を超音波エネルギーでマークし、続いて一連の激しい爆発を引き起こします。最初の爆発は敵を気絶させ、その後の 2 回の爆発は鈍化を与えます。命中した敵にスパークを1つ適用する",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "E",
        "name": "Dark Ascent",
        "normal": [
          {
            "text": "特殊効果 持続時間内にフリーフライト状態に入る",
            "detail": true
          },
          {
            "text": "50%の移動力ブーストを得る",
            "detail": true
          },
          "最大エネルギー 1200",
          "消費エネルギー 400/秒",
          "エネルギー回収 120/秒",
          {
            "text": "フェニックスと合体し、自由飛行状態に入る。移動力の向上を得る",
            "detail": true
          }
        ],
        "cooldown": "1秒"
      },
      {
        "key": "Shift",
        "name": "Telepathic Illusion",
        "normal": [
          "ダッシュ距離 8 m",
          "爆発ダメージ 50",
          "爆発範囲 半径3 mの球状魔法フィールド",
          {
            "text": "特殊効果 爆発により",
            "detail": true
          },
          {
            "text": "命中した敵にスパークが 1 つ適用されます。",
            "detail": true
          },
          {
            "text": "幻想を残して、瞬時に希望の方向にテレポートし、その後、幻想を爆発させます。攻撃を受けた敵にはスパークが 1 つ適用されます",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "Q",
        "name": "Endsong Inferno",
        "normal": [
          {
            "text": "衝撃波が付与する火花のスタック 1",
            "changes": [
              {
                "value": "1",
                "previous": "2",
                "kind": "nerf"
              }
            ]
          },
          "ULT必要コスト 3100",
          "爆発ダメージ 150",
          "爆発範囲 半径10 mの球状魔法フィールド",
          "衝撃波ダメージ 50",
          "召喚獣の健康状態 500",
          {
            "text": "特殊効果 衝撃波は敵の召喚獣、シールド、ボーナスHPを破壊します",
            "detail": true
          },
          {
            "text": "爆発効果範囲に当たった敵には2つのスパークが適用されます",
            "detail": true
          },
          {
            "text": "衝撃波を受けた敵にはスパークが 1 つ適用されます。",
            "detail": true
          },
          "自己回復量 250",
          {
            "text": "フェニックスと一緒に空に舞い上がり、選択したエリアに激突し、敵に壊滅的なダメージを与えながら、敵の召喚獣、シールド、ボーナスHPを破壊する衝撃波を発生させます。爆発効果範囲に当たった敵には2つのスパークが適用されます。衝撃波を受けた敵には1スパークが適用される",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Circle of Life",
        "key": "右クリック",
        "cooldown": "10秒",
        "lines": [
          "最初の効果範囲ダメージ 15",
          "2番目と3番目の効果範囲ダメージ 20",
          "気絶持続時間 0.3秒",
          "回復量減少量 40%",
          "治癒短縮期間 3秒",
          "連携強化時　ヒットごとに追加される残り火スタック 2",
          {
            "text": "基本効果　Psionic Detonation is replaced by Phoenix Netherfire, applying a Telekinetic Mark to the targeted location. Upon hitting, it triggers an initial small explosion that briefly Stuns enemies, followed by two larger explosions that apply a Healing Reduction effect. Every single blast inflicts Sparks onto the enemies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Hela, every blast in the sequence applies multiple stacks of Sparks to enemies caught within.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Telekinetic Beatdown",
        "key": "C",
        "cooldown": "10秒",
        "lines": [
          "直撃ダメージ 55",
          "バウンスダメージ 55",
          "バウンス効果範囲の検出範囲 半径8 m",
          "自己健康回復 50",
          "ヒットごとに追加されるスパークスタック 1",
          "最大バウンス数 3",
          "連携強化時　ヒット時にスパークスタックが追加される 2",
          "連携強化時　最大バウンス数 4",
          "連携強化時　自己回復量 65",
          {
            "text": "基本効果　Fire a telekinetic shockwave forward. If it lands, the Phoenix Force rushes the enemy and delivers a powerful punch. If there are other targets nearby, the Phoenix Force rapidly blinks between them to strike them as well, inflicting Sparks on each victim while healing Phoenix.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Rogue, the width of the telekinetic shockwave expands, and the Phoenix Force's target detection range is increased.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "ultron",
    "name": "ウルトロン",
    "title": "ウルトロン",
    "en": "Ultron",
    "role": "strategist",
    "portraitId": "ultron",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-ultron",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,300"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Encephalo-Ray",
        "normal": [
          {
            "text": "発動方式 最初の一定ビーム",
            "detail": true
          },
          {
            "text": "2番目のシングルキャスト円筒形効果範囲",
            "detail": true
          },
          "装弾数 6",
          "ダメージ 最初のビームは 0.5 秒で 6 発",
          "1 ヒットにつき 12 発",
          "2番目のシングルキャスト効果範囲はヒットごとに75",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "30 mで基礎ダメージの75%",
            "detail": true
          },
          "連射速度 1発あたり1.58秒",
          {
            "text": "燃えるようなエネルギービームを放つ",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Imperative: Firewall",
        "normal": [
          {
            "text": "味方へのボーナスHP 25",
            "changes": [
              {
                "value": "25",
                "previous": "40",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "選択した味方の移動速度上昇 10%",
            "changes": [
              {
                "value": "10%",
                "previous": "20%",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          "ウルトロンにボーナスHPを与える 40",
          "範囲 半径8 mの球状魔法フィールド",
          {
            "text": "ボーナスHPの減少は次から始まります 3秒",
            "detail": true
          },
          {
            "text": "ボーナスHP減少速度 40/秒",
            "detail": true
          },
          {
            "text": "特殊効果 ウルトロンとドローンを中心とした範囲内のウルトロンと味方にボーナスHPを付与します",
            "detail": true
          },
          {
            "text": "選択した味方の移動速度が 10% 増加し",
            "detail": true
          },
          {
            "text": "ダメージが 10% 増加します。",
            "detail": true
          },
          "自己回復量 1秒あたり20",
          "自己修復期間 3秒",
          {
            "text": "Imperative: Patch でマークされた味方にドローンを配備し、速度とダメージを増加させます。さらに、あなたの範囲内のすべての味方と選択したチームメイトはボーナスHPを受け取ります。",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "E",
        "name": "Imperative: Patch",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "目標距離 25 m",
          "対象の味方の回復量 40/秒",
          "範囲内の他の味方への回復量 35/秒",
          "ドローンヒーリングレンジ 半径8 mの球状魔法フィールド",
          "最大の視力 30 m",
          "視界外での最大許容期間 5秒",
          {
            "text": "特殊効果 必須: パッチは最大 2 台のドローンを展開できるため",
            "detail": true
          },
          {
            "text": "一度に 2 人の味方をサポートできます。",
            "detail": true
          },
          {
            "text": "最大 2 台の巨大なドローンに 2 人の味方をフォローするように命令し、その半径内の味方を常に回復し、指定された味方にはより多くの回復を与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Dynamic Flight",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          {
            "text": "特殊効果 ダイナミック フライトは",
            "detail": true
          },
          {
            "text": "1 回のダッシュとそれに続く一定の加速効果をトリガーできます。",
            "detail": true
          },
          "ダッシュ方向 キー入力と組み合わせたレティクル方向",
          "ダッシュ距離 12 m",
          "継続時間を加速する 6秒",
          "移動速度上昇 40%",
          "ボーナスHP（自分） 50",
          {
            "text": "進行方向に素早く飛行し、加速状態に入る",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "Q",
        "name": "Rage of Ultron",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体。",
            "detail": true
          },
          "弾速 120 m/秒",
          "ビームダメージ ウルトロンのエンセファロ光線 18",
          "ドローンのエンセファロ光線 12",
          {
            "text": "距離減衰 エンセファロ光線が爆発した後 1.5 メートルの距離から始まり",
            "detail": true
          },
          {
            "text": "3 メートルで最大 50% まで減衰します。",
            "detail": true
          },
          "ビーム回復量 40",
          "総光線量 5",
          "1ショットあたりの光線量 5",
          "ショット間の発射間隔 0.2秒",
          "究極の総射撃数 5発",
          "ラウンド間の射撃間隔 0.5秒",
          "効果範囲 半径3 mの球状魔法フィールド",
          "持続時間 9秒",
          "ULT必要コスト 4300",
          "究極の自己治癒力 50/秒",
          {
            "text": "特殊効果 究極の持続時間内に、ウルトロンはアンストッパブル効果を付与します",
            "detail": true
          },
          {
            "text": "ボーナスHPに 125% のダメージを与える",
            "detail": true
          },
          {
            "text": "ウルトロン ドローンを召喚してエンセファロ光線を発射し、敵にダメージを与えたり、味方を回復したりします",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Stark Protocol",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "持続時間 8秒",
          "光線ダメージ 70/秒",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "30 mで基礎ダメージの75%",
            "detail": true
          },
          "光線回復量 70/秒",
          "連携強化時　CD 12",
          "連携強化時　ミサイルが発射されました 4",
          "連携強化時　ミサイル爆発のダメージ範囲 半径1.5 mの球面",
          "連携強化時　ミサイル爆発ダメージ 10",
          {
            "text": "基本効果　Upgrade Encephalo-Ray to Nano-Ray, firing multiple damaging nano-projectiles forward.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Iron Man, Imperative: Firewall fires powerful homing missiles at enemies in range, causing area damage.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Sp//dr Sync",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "持続時間 3秒",
          "対象の味方の回復量 40/秒",
          "範囲内の他の味方への回復量 15/秒",
          "連携強化時　右クリックのクールダウン 12秒",
          {
            "text": "基本効果　Apply Imperative: Patch to all allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Peni Parker, Imperative: Firewall applies to all Drones, allowing the ability effects to be triggered multiple times simultaneously.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "emma-frost",
    "name": "エマ・フロスト",
    "title": "エマ・フロスト",
    "en": "Emma Frost",
    "role": "vanguard",
    "portraitId": "emma-frost",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-emma-frost",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "675"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Telepathic Pulse",
        "normal": [
          {
            "text": "発動方式 チャネリングされた",
            "detail": true
          },
          "装弾数 70",
          "ダメージ ダメージはエネルギーに応じて増加します: 0 - 70/秒",
          "99 - 110/秒",
          "フルエネルギー - 140/秒",
          "攻撃範囲 20 m",
          "弾薬の消費 10/秒",
          {
            "text": "特殊効果 エネルギー獲得: ヒーローヒット: 12/秒",
            "detail": true
          },
          {
            "text": "センティエンスヒット: 18/秒",
            "detail": true
          },
          {
            "text": "コモン召喚ヒット: 5/秒",
            "detail": true
          },
          {
            "text": "シールドヒット: 6/秒",
            "detail": true
          },
          {
            "text": "敵に当たらないと 4 秒後にフォールオフが始まり",
            "detail": true
          },
          {
            "text": "30/秒の速度で発生します",
            "detail": true
          },
          {
            "text": "サイオニックビームを発射してダメージを与えます。ビームが長く当たるほどダメージが大きくなる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Mind's Aegis",
        "normal": [
          {
            "text": "シールド耐久値 350",
            "changes": [
              {
                "value": "350",
                "previous": "400",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "シールド回復速度 65/秒",
            "changes": [
              {
                "value": "65/秒",
                "previous": "80/秒",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 展開可能なシールド",
            "detail": true
          },
          "リリース後の回復が遅い 2秒",
          "クールダウンの位置を変更する 1秒",
          "破壊時CD 4秒",
          {
            "text": "指定された場所に浮遊バリアを作成する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Psychic Spear",
        "normal": [
          {
            "text": "分身破壊時の本体へのダメージ 60＋対象の最大HPの10%。槍の直撃 5",
            "changes": [
              {
                "value": "60＋対象の最大HPの10%",
                "previous": "対象の最大HPの25%",
                "kind": "rework"
              }
            ]
          },
          {
            "text": "発動方式 シングルキャスト遅延発射体",
            "detail": true
          },
          "弾速 80 m/秒",
          "最大距離 24 m",
          "感覚の健康 ターゲットの現在の体力 25%",
          {
            "text": "特殊効果 ターゲットとその知覚の間の距離が15 mを超えると、それらのリンクが切れる可能性があります",
            "detail": true
          },
          {
            "text": "敵の知覚の制御を掌握します。知覚に与えられたダメージは物理的な形態に連鎖し、テレパシーパルスによって貫通される可能性があります。センティエンスが粉々になると、所有者に追加のダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Diamond Form",
        "normal": [
          {
            "text": "発動方式 スイッチフォーム",
            "detail": true
          },
          "持続時間 8秒",
          {
            "text": "特殊効果 ダイヤモンド形態でのダメージを 25% 軽減",
            "detail": true
          },
          {
            "text": "ダイヤモンド フォームをアクティブにして攻撃スタイルを変革し、ダメージ軽減を獲得してアンストッパブルになります。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "左クリック",
        "name": "Faceted Fury",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "ダメージ 最初と2番目のヒット: 50",
          "3番目のヒット: 70",
          "4番目のヒット: 80",
          "攻撃範囲 4 m",
          {
            "text": "ダイヤモンドフォームで敵に強烈な両拳攻撃を与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Crystal Kick",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "ヒット範囲 5 m",
          "ダメージ 打撃ダメージ: 40",
          "ターゲットが壁に衝突するとダメージが90に増加する",
          {
            "text": "特殊効果 最大ノックバック距離：10 m",
            "detail": true
          },
          {
            "text": "ダイヤモンドフォームでは、前方に飛び蹴りを放ち、敵をノックバックします。壁に衝突すると追加ダメージが与えられる",
            "detail": true
          }
        ],
        "cooldown": "2秒"
      },
      {
        "key": "E",
        "name": "Carbon Crush",
        "normal": [
          {
            "text": "発動方式 ダッシュベースのコントロール",
            "detail": true
          },
          "ダメージ 30",
          "最大距離 8.5 m",
          {
            "text": "特殊効果 コントロール効果持続時間：1.6秒",
            "detail": true
          },
          {
            "text": "ダイヤモンドフォームでは、前方に突進して敵を掴み、バックスラムを実行してダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "Q",
        "name": "Psionic Seduction",
        "normal": [
          {
            "text": "発動方式 広範囲永続魔法フィールド",
            "detail": true
          },
          "持続時間 6秒",
          "範囲 円錐形効果範囲",
          "角度範囲：80°",
          "長さ：30 m",
          "ダメージ 基本ダメージ 80/秒",
          "距離減衰: 減衰は 10 m で始まり",
          "30 m で 70% に減少します",
          "角度フォールオフ: フォールオフはビューの中心から 7° で始まり",
          "20° で 80% に減少します。",
          "ULT必要コスト 3100",
          {
            "text": "特殊効果 この能力にさらされると",
            "detail": true
          },
          {
            "text": "敵は 1 秒あたり 10 スタックを蓄積し",
            "detail": true
          },
          {
            "text": "敵がさらされるとスタックは 1 秒あたり 10 スタックずつ減少します",
            "detail": true
          },
          {
            "text": "15 スタックでコントロール効果が発動します",
            "detail": true
          },
          {
            "text": "各敵は、究極のアクティベーションごとに 1 回だけ制御できます",
            "detail": true
          },
          {
            "text": "アビリティ中に 25% のダメージ軽減を獲得します。",
            "detail": true
          },
          {
            "text": "敵を気絶させ、究極の能力の解放を妨げる前方の精神的攻撃を投影します。効果が長引くと、徐々に彼らの心を征服し、エマ・フロストに向かって強制的に移動させます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Spirit Breaker",
        "key": "E",
        "cooldown": "",
        "lines": [
          "ダメージによるボーナスHP変換率 150%",
          "連携強化時　マインドコントロールCD削減 2秒",
          "連携強化時　1回限りのボーナスHP 100",
          {
            "text": "基本効果　Deals damage to the summoned Soul Crystal, which can be converted into Bonus Healthfor yourself.",
            "detail": true
          },
          {
            "text": "連携強化時　When Emma Frost teams up with Mantis, shattering the Soul Crystalgrants a one-time Bonus Healthand reduces the cooldown of Mind Control.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Iced Out Diamond",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          {
            "text": "氷のシールド耐久値 300",
            "changes": [
              {
                "value": "300",
                "previous": "350",
                "kind": "nerf"
              }
            ]
          },
          "召喚獣の健康状態 300",
          "効果範囲 半径8 m",
          "高さ3 m",
          "60°のコーン効果範囲",
          "範囲ダメージ 50",
          "減速率 2秒間25%",
          "連携強化時　ダイヤモンドフォームダメージ量が遅い 2秒間20%",
          "連携強化時　テレパシーパルスのスロー効果を追加 エネルギーに応じて拡張",
          "連携強化時　エネルギー 100 で最大 10%",
          {
            "text": "基本効果　Emma Frost releases winter energy forward, dealing damage and Slowto enemies. She can also enhance her diamond form, condensing frost in front of her to form Zero Diamondthat blocks enemy attacks and movement.",
            "detail": true
          },
          {
            "text": "連携強化時　When Emma Frost teams up with Luna Snow, after activating Diamond Form, all ability damage applies Slow, and Soul Wavealso applies Slow.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "the-thing",
    "name": "ザ・シング",
    "title": "ザ・シング",
    "en": "the Thing",
    "role": "vanguard",
    "portraitId": "the-thing",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-the-thing"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "725"
      },
      {
        "label": "ULT必要コスト",
        "value": "2,800"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Rocky Jab",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "ダメージ ダブルストライク",
          "1ヒットあたり40",
          "攻撃範囲 4 m",
          "攻撃間隔 ダブルストライク 攻撃間は0.33秒",
          "セット間は1秒。",
          {
            "text": "素早く前方にパンチする",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Stone Haymaker",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "ダメージ ヒットごとに敵の最大HPの 55+8%",
          "攻撃範囲 8 m",
          {
            "text": "特殊効果 パンチをしながら3メートル前に進む",
            "detail": true
          },
          {
            "text": "与えたダメージに等しいボーナスHPを得る (最大 150)",
            "detail": true
          },
          {
            "text": "一度ヒットすると、この能力は飛行中の敵を地面にノックダウンすることができます",
            "detail": true
          },
          {
            "text": "破壊的な強打を与えます。飛んでいる敵をノックダウンできる。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Yancy Street Charge",
        "normal": [
          "移動速度上昇 100%",
          "持続時間 5秒",
          "ダメージ チャージ: 30",
          "グラウンドスラム: 20",
          "固定化ゾーン: 15 あたり/秒",
          "効果範囲 グラウンドスラム：半径8 m",
          "高さ2.5 mの円筒形の効果範囲",
          "行動不能化ゾーン: 半径 8 m",
          "高さ 4 m の円筒形効果範囲",
          {
            "text": "特殊効果 スキル発動中に200のボーナスHPを獲得",
            "detail": true
          },
          {
            "text": "継続的に前方に突進し、敵を打ち上げ、最終位置に移動能力の使用を妨げるゾーンを残す",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "E",
        "name": "Embattled Leap",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 20 m",
          {
            "text": "特殊効果 3秒間",
            "detail": true
          },
          {
            "text": "自身に20%のダメージ軽減効果を適用し",
            "detail": true
          },
          {
            "text": "着地点から5 m以内の味方全員に20%のダメージ軽減効果を適用する",
            "detail": true
          },
          {
            "text": "味方に向かってジャンプし、着地エリア内の自分と味方にダメージ軽減を適用する",
            "detail": true
          }
        ],
        "cooldown": "基本クールダウン 3 秒、1 回の使用につき 10 秒の料金がかかります"
      },
      {
        "key": "F",
        "name": "Battle Blitz",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 20 m",
          {
            "text": "特殊効果 着地点から5 m以内にいるすべての敵に3秒間20%の脆弱性を与える",
            "detail": true
          },
          {
            "text": "敵に向かってジャンプし、着地エリア内の敵に脆弱性を適用します",
            "detail": true
          }
        ],
        "cooldown": "基本クールダウン 3 は、1 回の使用につき 10 秒かかり、E キーの能力と同じクールダウンを共有します。"
      },
      {
        "key": "Q",
        "name": "Clobberin' Time",
        "normal": [
          "ULT必要コスト 2800",
          "範囲 ステップ効果範囲：高さ3 m",
          "幅10 m",
          "0.1秒ごとに2 m進み",
          "最大18 mまで",
          "ダメージ 100",
          {
            "text": "特殊効果 気絶持続時間 2.5秒",
            "detail": true
          },
          {
            "text": "巨大な力を使用して、シングの前にいるすべての敵を空中に打ち上げます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Unyielding Will",
        "normal": [
          {
            "text": "特殊効果 打ち上げ、ノックバック、その他の変位効果に対する耐性",
            "detail": true
          },
          {
            "text": "打ち上げ、ノックバック、その他の変位効果に対する耐性",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Two in One",
        "key": "C",
        "cooldown": "18秒",
        "lines": [
          "ロックジャブの最大攻撃範囲 6 m",
          "ストーンヘイメーカーの最大攻撃範囲 9.5 m",
          "持続時間 8秒",
          {
            "text": "特殊効果 ロックジャブとストーンヘイメーカーのキャスト速度が増加します",
            "detail": true
          },
          "連携強化時　CD 30秒",
          "連携強化時　効果範囲 半径8 mの球面",
          "連携強化時　ダメージ 45",
          "連携強化時　気絶持続時間 1秒",
          "連携強化時　飛行速度 12 m/秒",
          {
            "text": "基本効果　Enter an enhanced state upon activation. For the duration, The Thing's fists are violently engulfed in flames. Every Rocky Jab deals splash damage, and every Stone Haymaker creates an explosion, dealing damage in a frontal cone.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Human Torch, Human Torch can lift The Thing into the air and slam him down, dealing damage and Stun to enemies. The Thing then automatically enters his flaming enhanced state upon landing.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Unbreakable Forces",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "持続時間 5秒",
          "ボーナスHP回復 15/ヒット",
          "ボーナスHP生成頻度 1秒あたり5回",
          {
            "text": "特殊効果 体力が50%に達すると",
            "detail": true
          },
          {
            "text": "ボーナスHPの生成頻度が100%増加します",
            "detail": true
          },
          "連携強化時　ボーナスHP回復 1ヒットあたり20",
          "連携強化時　回復を引き起こすために必要なダメージを受ける 125",
          "連携強化時　回復量 80",
          "連携強化時　治癒魔法のフィールド範囲 半径8 m",
          {
            "text": "基本効果　Generate a layer of Psionic Armor upon activation, granting Bonus Health scaling off currently missing Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up Invisible Woman, the Psionic Armor is fortified. While active, every time The Thing takes a set amount of damage, the armor pulses out a wave of area healing for allies. Furthermore, the conversion ratio for missing Health into Bonus Health is increased.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "human-torch",
    "name": "ヒューマン・トーチ",
    "title": "ヒューマン・トーチ",
    "en": "Human Torch",
    "role": "duelist",
    "portraitId": "human-torch",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-human-torch",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,000"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Fire Cluster",
        "normal": [
          {
            "text": "弾の拡散パターン 固定",
            "changes": [
              {
                "value": "固定",
                "previous": "ランダム",
                "kind": "rework"
              }
            ]
          },
          {
            "text": "発動方式 バーストプロジェクタイル",
            "detail": true
          },
          "チャージ数 6",
          "充電速度 1秒間ファイアクラスターを使用しなかった場合、すべてのファイアクラスターエネルギーを即座に回復します",
          "連射速度 1発あたり0.5秒",
          "弾速 150 m/秒",
          "ショットダメージ 1発あたり5.5",
          {
            "text": "距離減衰は15 mから開始",
            "detail": true
          },
          {
            "text": "20 mで基礎ダメージの60%",
            "detail": true
          },
          "10 m先での弾の拡散半径 0.33 m",
          "クリティカル あり",
          {
            "text": "固定発射体の拡散で分割可能な火の玉を前方に発射します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Blazing Blast",
        "normal": [
          {
            "text": "発動方式 衝撃時に球状の効果範囲を生成する直線の発射体。",
            "detail": true
          },
          "チャージ数 3",
          "充電速度 攻撃ごとに 2.5 秒",
          "燃えるような爆発速度 80 m/秒",
          "燃えるような爆風ダメージ 45",
          "火炎フィールド範囲 半径3 mの球体",
          "火炎フィールドの持続時間 6秒",
          "火炎フィールド継続ダメージ 20/秒",
          {
            "text": "火の玉を発射して、ターゲットエリアに火炎フィールドを作成します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Flaming Meteor",
        "normal": [
          "最大ダッシュ速度 80 m/秒",
          "範囲 半径5 mの球体",
          "ダメージ 40",
          "火炎フィールドの爆発範囲 半径3 mの球体",
          "火炎フィールド爆発ダメージ 55",
          "ボーナスHP 50",
          {
            "text": "地面に向かって飛び込み、敵にダメージを与え、火炎フィールドのヒットを爆発させます",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "Shift",
        "name": "Plasma Body",
        "normal": [
          "移動速度上昇 2.5 m/秒",
          "持続時間 4秒",
          "最大距離 10 m",
          {
            "text": "加速上昇状態に入る",
            "detail": true
          }
        ],
        "cooldown": "2回の充電、各充電の再充電には8秒かかります"
      },
      {
        "key": "E",
        "name": "Pyro-Prison",
        "normal": [
          "最大リンク距離 40 m",
          "最大リンク高さ 2 m",
          "防火壁の持続時間 5秒",
          "防火壁の損傷 65",
          "パイロプリズン継続ダメージ 40/秒",
          {
            "text": "ファイヤーフィールドの間にファイアウォールを形成し、敵を燃やします",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "Q",
        "name": "Supernova",
        "normal": [
          "ULT必要コスト 4000",
          "持続時間 8秒",
          "発動衝撃波範囲 半径20 mの球面",
          "活性化波動ダメージ 75",
          "炎の竜巻が放つスピード 1回の使用あたり0.7秒",
          "火炎竜巻範囲 半径3 mの球体",
          "高さ8 mのカプセル型効果範囲。",
          "火炎竜巻連続ダメージ 110/秒",
          "超新星ダメージ軽減 -30%",
          {
            "text": "宇宙の火を爆発させて範囲内の敵にダメージを与えます。スキルが発動すると、すべてのフレイムフィールドがフレイムトルネードに変化し、追加ダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Fiery Sparks",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "持続時間 5秒",
          "効果範囲 半径10 mの球体",
          "ティックレート 1回の使用あたり0.1秒",
          "火花ダメージ 1発あたり7個",
          "連携強化時　スパークによるボーナスHP増進 ラウンドごとに 4 個",
          {
            "text": "基本効果　Passively detect enemies in the immediate vicinity and launch tracking Sparks to chip away their health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Jubilee, successfully landing a Firework Spark on an enemy grants Human Torch Bonus Health.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Storming Ignition",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "シングルキャスト効果範囲 30",
          "時間の経過によるダメージ 5/ヒット",
          "1秒あたり5回",
          "効果範囲の持続時間 4秒",
          "効果範囲 半径5メートル",
          "連携強化時　炎などダメージ 35/ヒット",
          "連携強化時　1秒あたり2回",
          "連携強化時　火炎竜巻範囲 半径3 m",
          "連携強化時　高さ6 m",
          "連携強化時　灼熱のハリケーン被害 1ヒットあたり75ダメージ",
          "連携強化時　1秒あたり2ヒット",
          "連携強化時　火炎フィールド通過による持続時間増加 2秒",
          "連携強化時　バーニングハリケーンの最大持続時間 11秒",
          "連携強化時　燃えるハリケーンの半径 10 m",
          {
            "text": "基本効果　Unleash a storm-driven blaze of fire forward, generating a persistent Fire Vortex upon impact that continuously damages and pulls in enemies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Storm, her Omega Hurricane ignites into a Burning Hurricane if it crosses a Flame Tornado. Furthermore, any Omega Hurricane, Jeff-Nado, or Flame Tornado that sweeps across a Flame Field left by Human Torch will instantly generate a new Flame Tornado.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "mister-fantastic",
    "name": "ミスター・ファンタスティック",
    "title": "ミスター・ファンタスティック",
    "en": "Mister Fantastic",
    "role": "duelist",
    "portraitId": "mister-fantastic",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-mister-fantastic"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "375"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Stretch Punch",
        "normal": [
          {
            "text": "発動方式 ストレート効果範囲",
            "detail": true
          },
          "範囲ダメージ 70",
          "効果範囲 15 m",
          "攻撃間隔 1ヒットあたり1.1秒",
          "装弾数 無限",
          "クリティカル なし",
          "弾力性が増した 8",
          {
            "text": "特殊効果 腕を振ると複数のターゲットを攻撃できる",
            "detail": true
          },
          {
            "text": "前方にパンチを伸ばして敵を攻撃する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Distended Grip",
        "normal": [
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "弾速 60 m/秒",
          "初期の発射範囲 20 m",
          "二次リリース最大距離 25 m",
          "初期の発射ダメージ 20",
          "二次的な発射ダメージ 20",
          "単一ターゲットのプル範囲 10 m",
          "単体プルダメージ 50",
          "二重対象のプルダメージ 30",
          "弾力性が増した 30",
          {
            "text": "特殊効果 ディステンデッドグリップで敵を引き寄せることに成功すると",
            "detail": true
          },
          {
            "text": "ターゲットは 1 秒間の行動不能効果に見舞われます。",
            "detail": true
          },
          {
            "text": "腕を前に伸ばして敵を絡め、プライマリアタックを押してヒットした敵を引き寄せるか、別の敵を選択して引っ張り、空中で互いに叩きつけます。命中したターゲットは動けなくなります",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "E",
        "name": "Flexible Elongation",
        "normal": [
          "最大選択距離 15 m",
          "ボーナスHP（自分） 75",
          "ボーナスHP（味方） 75",
          "ダメージ 30",
          "弾力性が増した 20",
          "チャージ数 2",
          {
            "text": "シールドを獲得し、ターゲットを選択してそれに向かってダッシュし、敵にダメージを与えるか、味方にシールドを与えます",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "Shift",
        "name": "Reflexive Rubber",
        "normal": [
          "シールド耐久値 300",
          "最大持続時間 3秒",
          "セルフスローレート -35%",
          "吸収されたダメージ - 反射されたダメージの変換率 60%",
          "反射弾の速度 80 m/秒",
          {
            "text": "蓄積されたダメージをターゲット方向に発射する前に、体を伸ばしてダメージを吸収します",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "Q",
        "name": "Brainiac Bounce",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "範囲 半径10 mの球体",
          "範囲ダメージ 初期70",
          "各追加飛躍+14",
          "最大140",
          {
            "text": "距離減衰 3 メートルから開始",
            "detail": true
          },
          {
            "text": "10 メートルで 71.4% 減衰",
            "detail": true
          },
          "減速率 リープごと -10%、スタック可能",
          "最大 -60%",
          "持続時間が遅い 3秒",
          "最小飛躍 3",
          "最大の飛躍 6",
          "ULT必要コスト 3100",
          {
            "text": "特殊効果 最小回数のジャンプの後、追加の各ジャンプは敵にヒットして次のジャンプをトリガーする必要があります",
            "detail": true
          },
          {
            "text": "特殊効果 ミスター・ファンタスティックがブレイニアック・バウンス（アルティメット・アビリティ）を使用すると、インフレート状態になったときに得られるものと同じボーナス・ヘルスを即座に獲得します",
            "detail": true
          },
          {
            "text": "上に飛び上がって地面を叩きつけ、範囲内の敵の動きを遅くします。ミスター・ファンタスティックはヒットすると再び跳ぶことができる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Elastic Strength",
        "normal": [
          "最大の弾性 100",
          "膨らんだ期間 6秒",
          "ダメージ 80",
          "最大距離 8 m",
          "攻撃間隔 1ヒットあたり0.92秒",
          {
            "text": "特殊効果 350 の最大HPと 350 の 1 回限りの回復を獲得します",
            "detail": true
          },
          {
            "text": "これはインフレ状態を終了すると削除されます。",
            "detail": true
          },
          "移動速度上昇 20%",
          {
            "text": "アビリティを使用すると弾性が発生し、攻撃力が上昇します。弾性が最大に達すると、膨張状態がトリガーされ、最大HPが増加し、ダメージがさらに増加し、反射ゴムの使用が可能になります。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Fantastic Amplifier",
        "key": "F",
        "cooldown": "",
        "lines": [
          "アクティブなインフレクールダウン 8秒",
          "最大の弾性 200",
          "インフレ状態の弾性減衰 12.5/秒",
          {
            "text": "連携強化時　特殊効果 Brainiac Bounce で敵を空中に吹き飛ばす",
            "detail": true
          },
          {
            "text": "基本効果　Equips the Fantastic Amplifier. For the duration, Mister Fantastic's maximum Elasticity is increased, and he can actively enter Inflation State.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Rocket Raccoon, Brainiac Bounce Launches hit enemies.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Clobberin' Research Dept.",
        "key": "C",
        "cooldown": "",
        "lines": [
          "乱闘パンチダメージ フル充電時65",
          "100",
          "フル充電までの時間 0.75秒",
          "最大保持時間 0.75秒",
          "ダメージによるボーナスHP変換率 0.75",
          "最大ボーナスHP 75",
          "連携強化時　膨張したハンマーのクールダウン 3秒",
          "連携強化時　膨張したハンマーのダメージ フル充電時70",
          "連携強化時　100",
          "連携強化時　フル充電までの時間 1秒",
          "連携強化時　最大保持時間 1秒",
          "連携強化時　ダメージによるボーナスHP変換率 0.75",
          "連携強化時　最大ボーナスHP 75",
          {
            "text": "基本効果　In brawler stance, Stretch Punch becomes a charged ability, firing a forward Brawling Punch. Hitting an enemy grants Bonus Health scaling with damage, and a full charge Launches hit enemies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with The Thing, while in the brawling stance, Distended Grip also becomes a charged ability, slamming down a Distended Hammer. Hitting enemies grants Bonus Health based on damage, and Launches enemies at full charge.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "invisible-woman",
    "name": "インビジブル・ウーマン",
    "title": "インビジブル・ウーマン",
    "en": "Invisible Woman",
    "role": "strategist",
    "portraitId": "invisible-woman",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-invisible-woman",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,300"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Orb Projection",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体。",
            "detail": true
          },
          {
            "text": "特殊効果 オーブはヒーローを貫通し、最大距離に達すると透明人間の元に戻ることができます",
            "detail": true
          },
          {
            "text": "敵にダメージを与え",
            "detail": true
          },
          {
            "text": "チームメイトを回復します",
            "detail": true
          },
          "ダメージ 撃たれると 1 ヒットにつき 30 ダメージを与え",
          "帰還時には 1 ヒットにつき 15 ダメージを与えます。",
          {
            "text": "距離減衰 フォールオフなし",
            "detail": true
          },
          "回復量 撃たれるとヒットごとに 50 ヘルスが回復し",
          "その帰りにヒットごとに 40 ヘルスが回復します。",
          "連射速度 1ヒットあたり0.5秒",
          "弾速 150 m/秒",
          "最大飛距離 35 m",
          "装弾数 10",
          "クリティカル なし",
          {
            "text": "ヒーローを貫通できるフォースフィールドオーブを発射し、インビジブルウーマンに戻る前に最大距離まで飛行します。敵にダメージを与え、チームメイトを回復する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Guardian Shield",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "回復量 50/秒",
          "セルフ 20/秒",
          "範囲 半径3 m",
          "減速率 35%",
          "持続時間が遅い 3秒",
          "シールドの最大値 200",
          {
            "text": "特殊効果1 シールドが破壊される前に、インビジブルウーマンはいつでも選択したチームメイトにシールドを再投影することを選択できます",
            "detail": true
          },
          {
            "text": "特殊効果2 シールドが損傷した後、Invisible Woman は F キーを押してシールドを取り戻し",
            "detail": true
          },
          {
            "text": "その価値を回復できます。",
            "detail": true
          },
          {
            "text": "特殊効果 3 ガーディアン シールドが存在しない場合、リコール キーを押すと、インビジブル ウーマンの前にシールドが展開されるようになりました。",
            "detail": true
          },
          "1秒あたりの回復シールド値 34",
          "破壊時CD 6秒",
          {
            "text": "選択した味方の前または自分の前にフォース シールドを生成します。シールドはダメージをブロックし、近くの味方に時間の経過とともに治癒を与えることができます。シールドを通過する敵は遅くなる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Psionic Vortex",
        "normal": [
          {
            "text": "中心の減速率 40%",
            "changes": [
              {
                "value": "40%",
                "previous": "50%",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "外縁の減速率 20%",
            "changes": [
              {
                "value": "20%",
                "previous": "0%",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体で、効果範囲も生成します",
            "detail": true
          },
          "弾速 80 m/秒",
          "効果範囲 半径5メートル",
          "範囲ダメージ 35/秒",
          "効果範囲の持続時間 4秒",
          {
            "text": "特殊効果 効果範囲内の敵にスロー効果を適用します",
            "detail": true
          },
          {
            "text": "フィールドの中心に近づくほど、スロー効果が大きくなります。",
            "detail": true
          },
          {
            "text": "サイオニック エネルギーを集めてキャストし、衝撃を与えるかアビリティ キーをもう一度押すと、サイオニック ボルテックスが噴出し、継続的に敵を引きつけてダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "E",
        "name": "Force Physics",
        "normal": [
          {
            "text": "発動方式 円筒形の魔法フィールド",
            "detail": true
          },
          "範囲 半径1.5 m",
          "長さ35 m",
          "ダメージ 50",
          "プッシュ範囲 10 m",
          "プルレンジ 7 m",
          {
            "text": "超常エネルギーを操作して目の前の敵を押したり引いたりする",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "Q",
        "name": "Invisible Boundary",
        "normal": [
          {
            "text": "発動方式 ターゲットを指定すると、円筒形の効果範囲が生成されます",
            "detail": true
          },
          "パススルー速度が遅い 55%",
          "持続時間が遅い 1秒",
          "回復量 200/秒",
          "範囲 半径10 m",
          "高さ40 m",
          "持続時間 8秒",
          {
            "text": "特殊効果 範囲内の敵の動きを20%遅くする",
            "detail": true
          },
          "ULT必要コスト 4300",
          {
            "text": "選択したエリア内に目に見えない力場を出現させ、内部の味方を敵に発見されないようにして、時間の経過とともに治癒を提供します。フィールドを通過する敵の速度が低下する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Covert Advance",
        "normal": [
          "回復量 30/秒",
          {
            "text": "戦闘から離脱してからしばらくすると透明状態になり、時間の経過とともに治癒が得られます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Space",
        "name": "Veiled Step",
        "normal": [
          {
            "text": "特殊効果 インビジブル状態に入った後の最初の 1 秒間は",
            "detail": true
          },
          {
            "text": "ダメージを受けてもステルスが解除されなくなります。",
            "detail": true
          },
          {
            "text": "足元にフォースフィールドを生成し、それを踏むと彼女をインビジブル状態に推進します。",
            "detail": true
          }
        ],
        "cooldown": {
          "text": "8秒",
          "changes": [
            {
              "value": "8秒",
              "previous": "6秒",
              "kind": "nerf"
            }
          ]
        }
      }
    ],
    "teamups": [
      {
        "name": "United Siblings",
        "key": "右クリック",
        "cooldown": "",
        "lines": [
          "貫通ダメージ上昇率 20%",
          "シールドの最大値 300",
          "連携強化時　シールドの最大値 400",
          {
            "text": "基本効果　Generate a Flame Shield for a targeted ally that blocks incoming damage while providing a Continuous Healing aura to everyone nearby. Projectiles from teammates shot through the Flame Shield receive a Damage Boost. Enemies that pass though the shield are Slowed",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Human Torch, the Flame Shield boasts a larger radius and heavily increased shield value.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "First Family",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "持続時間 4秒",
          "回復量 25/秒",
          "移動速度上昇 1.2 m/秒",
          "連携強化時　持続時間 6秒",
          "連携強化時　回復量 25/秒",
          "連携強化時　移動速度上昇 1.8 m/秒",
          {
            "text": "基本効果　Invisible Woman and surrounding allies enter Invisible state, gaining healing and a Speed Boost. The effect ends if they take damage or the duration expires. Disengaging from combat for a duration will reenter the Invisible state.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Mister Fantastic, the healing and Speed Boost effects are enhanced, and the Invisible state duration is increased",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "squirrel-girl",
    "name": "スクイレル・ガール",
    "title": "スクイレル・ガール",
    "en": "Squirrel Girl",
    "role": "duelist",
    "portraitId": "squirrel-girl",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-squirrel-girl",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "2,800"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Burst Acorn",
        "normal": [
          {
            "text": "ダメージ 95",
            "changes": [
              {
                "value": "95",
                "previous": "110",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "爆心から3 mでのダメージ倍率 60%",
            "detail": true,
            "changes": [
              {
                "value": "60%",
                "previous": "70%",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 衝撃時に効果範囲を生成する円弧状の発射体",
            "detail": true
          },
          "弾速 80 m/秒",
          "効果範囲 半径3 mの球体",
          "範囲ダメージ 95",
          "連射速度 1秒あたり1.49個のドングリ",
          "装弾数 12",
          "クリティカル なし",
          {
            "text": "跳ねるバーストドングリを撃つ",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Unbeatable Squirrel Tsunami",
        "normal": [
          "持続時間 10秒",
          "範囲 長さ：3 m",
          "幅：5 m",
          "高さ：1.75 m",
          "ダメージ 150",
          "リスの大群の健康 300",
          "リスの大群の移動速度 9 m/秒",
          "ULT必要コスト 2800",
          {
            "text": "特殊効果 リスはランダムに跳ね返るのではなく、跳ねた後に最も近い敵に向かって突進します。",
            "detail": true
          },
          {
            "text": "リスの大群を召喚して前方に突進し、構造物に跳ね返りながらダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Tail Bounce",
        "normal": [
          {
            "text": "発動時のボーナスHP 25",
            "changes": [
              {
                "value": "25",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "ジャンプの高さ 9 m",
          {
            "text": "尻尾を跳ね上げて上向きにロケットし、起動時に 25 のボーナス ヘルスを獲得します",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "E",
        "name": "Mammal Bond",
        "normal": [
          {
            "text": "攻撃速度上昇 100%。持続5秒",
            "changes": [
              {
                "value": "100%",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          {
            "text": "効果中の弾速 150 m/秒",
            "changes": [
              {
                "value": "150 m/秒",
                "previous": "80 m/秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "効果中の左クリック「Burst Acorn」の単発ダメージ 通常の65%。効果中は弾が重力で落下しない",
            "changes": [
              {
                "value": "通常の65%",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "最大持続時間 5秒",
          {
            "text": "バーストドングリをリロードすると、短い期間に 1 回、クールダウンなしでアビリティを使用できるようになります。発動すると、5秒間100%の攻撃速度ブーストが得られます。この間、バースト ドングリの発射速度は 150 m/秒 に増加し、ドングリあたりのダメージは通常の 65% になり、発射体は重力の影響を受けません。このブーストは、更新された能力を使用した後でも、持続時間が終了するまで持続します。",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "右クリック",
        "name": "Squirrel Blockade",
        "normal": [
          {
            "text": "弾速 60〜90 m/秒",
            "changes": [
              {
                "value": "60〜90 m/秒",
                "previous": "20〜60 m/秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "拘束時間 0.8秒",
            "changes": [
              {
                "value": "0.8秒",
                "previous": "1.3秒",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "命中ダメージ 25",
            "changes": [
              {
                "value": "25",
                "previous": "50",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "命中時のどんぐりの雨 半径5 m",
            "changes": [
              {
                "value": "半径5 m",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          {
            "text": "どんぐりの雨のダメージ 30/秒。持続2秒、減速20%",
            "changes": [
              {
                "value": "30/秒",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          {
            "text": "発動方式 円弧軌道を描く装填発射体",
            "detail": true
          },
          "最大充電時間 1.5秒",
          {
            "text": "ドングリを発射してリスガードを解き放ち、最初に攻撃した敵を閉じ込めます。攻撃を当てると、敵の現在位置を中心にどんぐりの雨を降らせ、エリア内の敵に継続的にダメージを与え、速度を低下させます。",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      }
    ],
    "teamups": [
      {
        "name": "Squirrel Missile",
        "key": "C",
        "cooldown": "15",
        "lines": [
          "ダメージ 70",
          "飛行速度 40 m/秒",
          "爆発範囲 半径8 m",
          {
            "text": "連携強化時　特殊効果 リスガールがリス封鎖を使用すると、同時にリスミサイルを発射します",
            "detail": true
          },
          {
            "text": "基本効果　Squirrel Girl gains the Squirrel Missile ability. She directs a squirrel to ride Iron Man's nanotech glove as a homing missile. Upon hit, the squirrel flees just before a fiery explosion.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Iron Man, using Squirrel Blockade simultaneously fires a Squirrel Missile.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Esu Alumnus",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "効果範囲 半径4 mの球体",
          "範囲ダメージ 65",
          "持続時間が遅い 3秒",
          "減速率 35%",
          "連携強化時　Webエリアの範囲 半径4 mの球体",
          "連携強化時　ウェブエリアの損傷 2.5/ヒット",
          "連携強化時　1秒あたり10回",
          "連携強化時　Web エリアの継続時間 3秒",
          {
            "text": "連携強化時　特殊効果 ウェブゾーンに 2 秒間留まると気絶する",
            "detail": true
          },
          {
            "text": "基本効果　Spider-Man gives Squirrel Girl a web bomb. She can launch it to unleash an explosion upon contact with the environment or an enemy, briefly Slowing and damaging enemies caught in the blast.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Spider-Man, Squirrel Girl receives more Web Fluid. After throwing Webbed Acorn, viscous web fluid coats the ground alongside the explosion, leaving behind a sticky Web Area. Enemies within suffer a continuous Slow that scales into a Stun if they linger too long.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "black-widow",
    "name": "ブラック・ウィドウ",
    "title": "ブラック・ウィドウ",
    "en": "Black Widow",
    "role": "duelist",
    "portraitId": "black-widow",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-black-widow",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Widow's Bite Baton",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 45",
          "最大距離 3 m",
          "連射速度 1秒あたり2回の攻撃",
          {
            "text": "強化された電気警棒で攻撃する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Red Room Rifle",
        "normal": [
          {
            "text": "発動方式 単発直撃",
            "detail": true
          },
          "ダメージ 1発あたり40ダメージ",
          {
            "text": "距離減衰は10 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの65%",
            "detail": true
          },
          "連射速度 1ヒットあたり0.25秒",
          "装弾数 20",
          "クリティカル あり",
          {
            "text": "レッドルームライフルで攻撃する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Assassin's Focus",
        "normal": [
          "ULT必要コスト 3100",
          "弾丸ダメージ 160",
          "ラウンド 6",
          "クリティカル あり",
          "クリティカルヒット倍率 1.5x",
          "連射速度 0.8秒/ラウンド",
          "最大持続時間 12秒",
          {
            "text": "レッドルームライフルをスナイパーモードに切り替えます。この状態で発射されたショットはターゲットを貫通し、与えるダメージが増加します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Electro-Plasma Blast",
        "normal": [
          {
            "text": "爆発ダメージ 55〜75",
            "changes": [
              {
                "value": "55〜75",
                "previous": "50〜70",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 発射物を遅らせて突進的に放出します。",
            "detail": true
          },
          "弾速 100 m/秒",
          "爆発範囲 半径3.5 m～5 mの球状魔法フィールド",
          "減速率 -0.40",
          "最大充電時間 1秒",
          {
            "text": "エレクトロプラズマを前方に発射します。環境または敵に当たると爆発し、スロー効果を適用します。",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "E",
        "name": "Edge Dancer",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "スピニングキックダメージ 35",
          "最大距離 5 m",
          "飛び蹴りの飛距離 12 m",
          "2回目の飛び蹴りダメージ 35",
          "飛び蹴りのスタン持続時間 0.2秒",
          {
            "text": "飛び蹴りキャストウィンドウ 5秒",
            "detail": true
          },
          {
            "text": "回転キックを放ち、敵を打ち上げます。ヒットを当てると、グラップリング フックでターゲットに向かって飛び、2 回目のキックを行うことができます。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "F",
        "name": "Widow's Bite Slam",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "ダメージ 30",
          "ダメージ範囲 半径5メートル",
          {
            "text": "ターゲットエリアに向かって飛び上がり、ウィドウズバイトガントレットで地面を叩きつけ、範囲内の敵にダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      }
    ],
    "teamups": [
      {
        "name": "Allied Agents",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          {
            "text": "集中状態の与ダメージからボーナスHPに変換 50%",
            "changes": [
              {
                "value": "50%",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          {
            "text": "変換によるボーナスHPの上限 75",
            "changes": [
              {
                "value": "75",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "クリティカルに集中する 2スタック",
          "レッドルームライフルの命中への集中 1スタック",
          "集中状態の弾丸ダメージ 1発あたり55ダメージ",
          "ダメージからボーナスへのヘルス変換 50%",
          "最大75",
          {
            "text": "連携強化時　特殊効果 クリティカルヒットを当てると集中状態が期限切れになるのを防ぎ、クリティカルを逃すまで強化射撃を継続できるようになります。",
            "detail": true
          },
          {
            "text": "基本効果　Landing hits with Red Room Rifle builds Focus. At three stacks, enter a Focused state where the next bullet gains the Hunter's Sight effect, granting Damage Boost and pierce effects. Black Widow gains Bonus Health equal to 50% of the damage dealt by a Focused bullet, up to 75.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Hawkeye, landing a critical hit prevents the Focused state from expiring, allowing continuous enhanced fire until missing a crit.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Burning Bullets",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          {
            "text": "プラズマ砲のダメージ 75",
            "changes": [
              {
                "value": "75",
                "previous": "70",
                "kind": "buff"
              }
            ]
          },
          "連射速度の増加 15%",
          "プラズマキャノンのクールダウン 10秒",
          "プラズマキャノンレンジ 半径5 mの球体",
          "プラズマキャノンのスローエフェクト 3秒間40%",
          {
            "text": "連携強化時　特殊効果 プラズマキャノンは2回チャージ可能",
            "detail": true
          },
          {
            "text": "基本効果　Activation grants the Red Room Rifle a Fire Rate Boost. Additionally, the Plasma Cannon projectile becomes a hitscan laser that no longer requires charging.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Phoenix, her Plasma Cannon gains a second ability charge.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "wolverine",
    "name": "ウルヴァリン",
    "title": "ウルヴァリン",
    "en": "Wolverine",
    "role": "duelist",
    "portraitId": "wolverine",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-wolverine",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "350"
      },
      {
        "label": "ULT必要コスト",
        "value": "2,800"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Savage Claw",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "基礎ダメージ 攻撃ごとに 18 ダメージ",
          "ダメージ割合 ターゲットの最大HPの 1.5% に等しいダメージを与え、さらに Rage ポイントごとに 0.062% の追加ダメージを与える",
          "最大距離 3.5 m",
          "攻撃間隔 最初の 3 回のストライク間の間隔は 0.27 秒ですが",
          "4 回目のストライクは 3 回目のストライクから 0.84 秒の間隔があります。",
          {
            "text": "アダマンチウムの爪で斬りつけてクローストライク。 Feral Leapを解き放つと、短期間Berserk Claw Strikeに強化されます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Last Stand",
        "normal": [
          {
            "text": "着地時、怒り1ポイントあたりの追加ダメージ 敵最大HPの0.2%",
            "changes": [
              {
                "value": "敵最大HPの0.2%",
                "previous": "敵最大HPの0.3%",
                "kind": "nerf"
              }
            ]
          },
          "ノックバック範囲 半径8 mの球面",
          "ノックバックダメージ 50",
          "時間の経過とともにダメージを奪う 20/秒",
          "衝撃範囲 半径8 mの球面",
          "衝撃ベースのダメージ 50",
          "衝撃パーセンテージダメージ ターゲットの最大HPの 10% に等しいダメージを与え、さらに Rage ポイントごとに 0.2% の追加ダメージを与える",
          "ノックダウン時間 0.75秒",
          "ULT必要コスト 2800",
          {
            "text": "空中で前方の敵を吹き飛ばし、空中を螺旋状に旋回させ、進路に沿って敵を一掃し、着地地点に壊滅的な衝撃を与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Feral Leap",
        "normal": [
          "ひったくりダメージ 35",
          "スマッシュダメージ 35",
          "ノックダウン持続時間 0.75秒",
          "バーサククローの攻撃持続時間 5秒",
          "バーサククローストライクベースダメージ 攻撃ごとに 8 ダメージ",
          "バーサーククローのストライク割合ダメージ ターゲットの最大HPの 1% に等しいダメージを与え、さらに Rage ポイントごとに 0.025% の追加ダメージを与える",
          "バーサーククローの攻撃最大距離 3.5 m",
          "バーサククローストライクの攻撃間隔 1 秒あたり 5.88 打撃",
          {
            "text": "動物のように飛び跳ねて最初の敵を捕まえ、地面に叩きつけます。この能力を解放すると、通常の攻撃が短期間バーサーククローストライクに強化されます",
            "detail": true
          }
        ],
        "cooldown": {
          "text": "15秒",
          "changes": [
            {
              "value": "15秒",
              "previous": "12秒",
              "kind": "nerf"
            }
          ]
        }
      },
      {
        "key": "E",
        "name": "Undying Animal",
        "normal": [
          "持続時間 5秒",
          "ダメージ軽減 40%",
          {
            "text": "激しい咆哮を放ち、受けるダメージを一時的に軽減します",
            "detail": true
          }
        ],
        "cooldown": "16秒"
      },
      {
        "key": "右クリック",
        "name": "Vicious Rampage",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "平均速度 44 m/秒",
          "最大距離 7.5 m",
          "範囲 3 m",
          "基礎ダメージ 攻撃ごとに 15 ダメージ",
          "ダメージ割合 ターゲットの最大HPの 1.5% に等しいダメージを与え、さらに Rage ポイントごとに 0.057% の追加ダメージを与える",
          {
            "text": "前方にダッシュしてクローストライクを繰り出す",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "パッシブ",
        "name": "Regenerative Healing Factor",
        "normal": [
          "ボーナスHP 300",
          "ボーナスHP持続時間 3秒",
          "ボーナスHP/ヒーリング変換 1",
          "koが発動するたびにクールダウンが減少 10秒",
          {
            "text": "大量のボーナスHPで回復と上昇を開始し、すべてのデバフを振り払います。しばらくすると、残っているボーナス ヘルスが 1 回限りのヒールに変わり、彼の怒りがゼロになります。 KO をアシストすると、このクールダウンが短縮されます",
            "detail": true
          }
        ],
        "cooldown": "90秒"
      },
      {
        "key": "パッシブ",
        "name": "Berserker Rage",
        "normal": [
          "最大の怒り 100",
          "サベージクローヒットごとの怒り 10",
          "悪質な暴れヒットに対する怒り 15",
          "フェラル リープ スナッチごとの怒り 10",
          "バーサーククローストライクヒットあたりの怒り 5",
          "ラストスタンドノックバックあたりの怒り 25",
          "被弾あたりの怒り 8",
          "攻撃を受けると怒りが増加する 1秒あたり2",
          {
            "text": "ウルヴァリンが攻撃するか打撃を受けると怒りが蓄積し、クローストライクのダメージと再生治癒因子によるボーナスHPが増加します。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Blast Slash",
        "key": "C",
        "cooldown": "20",
        "lines": [
          "持続時間 8秒",
          "攻撃範囲増加 1 m",
          "キネティッククローのクールダウン 3秒",
          "キネティッククローのダメージ 激怒ポイントあたりのダメージとして最大HPの 5 + 0.012%",
          "キネティッククローの持続時間 1秒",
          {
            "text": "連携強化時　特殊効果 ブラストスラッシュは永続的に有効です。",
            "detail": true
          },
          {
            "text": "基本効果　Activation extends the attack range of Savage Claw and Berserk Claw Strike. Vicious Rampage is replaced with Kinetic Claws, granting a brief forward lunge that unleashes a flurry of slashes around.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Cyclops, Blast Slash is permanently active.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Pair of Threes",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          "持続時間 5秒",
          "移動速度上昇 35%",
          "ボーナスジャンプ高さ 350",
          "ボーナスダメージのティック間隔 0.5",
          "ボーナスダメージ 15%",
          "連携強化時　回復量 25/秒",
          {
            "text": "基本効果　Upon activation, Wolverine receives Kinetic Enhancement, gaining increased Movement Speed and a Jump Boost. Attacking enemies applies Kinetic Particles that detonate after a short delay for bonus damage. The effect lasts for duration.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Gambit, Wolverine receives Continuous Healing for the entire duration of the ability.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "cloak-and-dagger",
    "name": "クローク＆ダガー",
    "title": "クローク＆ダガー",
    "en": "Cloak&dagger",
    "role": "strategist",
    "portraitId": "cloak-and-dagger",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-cloak-and-dagger",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,500"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Darkforce Cloak",
        "form": "クローク",
        "normal": [
          {
            "text": "ダメージ 85/秒",
            "changes": [
              {
                "value": "85/秒",
                "previous": "80/秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 円筒形の魔法フィールド",
            "detail": true
          },
          {
            "text": "特殊効果 攻撃は十字線に最も近い敵をターゲットにし",
            "detail": true
          },
          {
            "text": "ダメージを与えます",
            "detail": true
          },
          "範囲 20 m",
          "装弾数 ∞",
          "クリティカル なし",
          {
            "text": "敵に継続的なダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Eternal Bond",
        "form": "クローク",
        "normal": [
          {
            "text": "発動方式 永続的な効果範囲",
            "detail": true
          },
          "ダメージ 30/秒",
          "回復量 250/秒",
          "範囲 半径4 m",
          "長さ15 mの円筒形の魔法フィールド",
          "持続時間 11秒",
          "ULT必要コスト 4500",
          {
            "text": "4 回の素早いダッシュを実行し、道に沿って味方を回復し、敵にダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Light's Embrace",
        "form": "クローク",
        "normal": [
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          {
            "text": "ダガーに切り替える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Terror Cape",
        "form": "クローク",
        "normal": [
          {
            "text": "視界妨害の持続 1秒",
            "changes": [
              {
                "value": "1秒",
                "previous": "1.5秒",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "弾速 35 m/秒",
            "changes": [
              {
                "value": "35 m/秒",
                "previous": "20 m/秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "命中1回につき右クリック「Dagger Storm」のCDを短縮 0.6秒",
            "changes": [
              {
                "value": "0.6秒",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          {
            "text": "発動方式 効果範囲",
            "detail": true
          },
          {
            "text": "特殊効果 効果範囲は詠唱経路に沿って進みます",
            "detail": true
          },
          "ダメージ 55",
          "範囲 10 mを超えると視界が遮られる",
          "脆弱性 20%",
          "脆弱性の存続期間 3秒",
          "範囲 幅：6 m",
          "高さ：4.5 m",
          "最大距離 25 m",
          {
            "text": "ダークフォースのベールを展開して接触時に敵にダメージを与え、ブラインドを適用して視界を狭め、脆弱性を適用して受けるダメージを増幅します",
            "detail": true
          }
        ],
        "cooldown": "Veil of Lightforce と Terror Cape はチャージを共有し、上限は 2 で、それぞれのチャージには 10 秒かかります。どちらかを使用すると、両方の能力が 2 秒のクールダウンに入ります"
      },
      {
        "key": "右クリック",
        "name": "Dark Teleportation",
        "form": "クローク",
        "normal": [
          {
            "text": "発動方式 永続的な効果範囲",
            "detail": true
          },
          {
            "text": "特殊効果 エリア内の味方は透明化と移動ブーストを得る",
            "detail": true
          },
          "持続時間 2秒",
          "範囲 半径10 mの球体",
          {
            "text": "近くの味方をダークフォース ディメンションに包み込み、フェイズ状態に陥らせ、ターゲットにできなくなり、敵に見えなくなり、移動力のブーストを与えます。",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "左クリック",
        "name": "Lightforce Dagger",
        "form": "ダガー",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成するシングルキャスト発射体",
            "detail": true
          },
          {
            "text": "特殊効果 この発射体には引き付け効果があり、照準に最も近いターゲットを引き寄せ、衝撃時に効果範囲を作成します",
            "detail": true
          },
          {
            "text": "この効果範囲は治癒効果をもたらします",
            "detail": true
          },
          "ダメージ 1発あたり18ダメージ",
          "命中ごとの回復 1ヒットあたり15",
          "効果範囲治癒 1ヒットあたり20",
          "範囲 半径8 mの球面",
          "連射速度 1 秒あたり 2.27 ヒット",
          "装弾数 12",
          "クリティカル なし",
          {
            "text": "跳ねるライトフォースダガーを放ち、敵にダメージを与え、近くの味方を回復します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Eternal Bond",
        "form": "ダガー",
        "normal": [
          {
            "text": "発動方式 永続的な効果範囲",
            "detail": true
          },
          "ダメージ 30/秒",
          "回復量 250/秒",
          "範囲 半径4 m",
          "長さ15 mの円筒形の魔法フィールド",
          "持続時間 13秒",
          "ULT必要コスト 4500",
          {
            "text": "4 回の素早いダッシュを実行し、道に沿って味方を回復し、敵にダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Shadow's Embrace",
        "form": "ダガー",
        "normal": [
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          {
            "text": "クロークに切り替える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Veil of Lightforce",
        "form": "ダガー",
        "normal": [
          {
            "text": "弾速 35 m/秒",
            "changes": [
              {
                "value": "35 m/秒",
                "previous": "20 m/秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "命中1回につき右クリック「Dagger Storm」のCDを短縮 0.6秒",
            "changes": [
              {
                "value": "0.6秒",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          {
            "text": "発動方式 効果範囲",
            "detail": true
          },
          {
            "text": "特殊効果 効果範囲は詠唱経路に沿って進みます",
            "detail": true
          },
          "回復量 50",
          "治癒ブースト 20%",
          "持続時間 4秒",
          "範囲 幅：6 m",
          "高さ：4.5 m",
          "最大距離 25 m",
          {
            "text": "特殊効果 味方または敵がヒットするたびに、ダガー ストームのクールダウンが 0.6 秒減少します。",
            "detail": true
          },
          {
            "text": "ライトフォースのベールを展開して、接触時に味方を癒し、治癒ブーストを与えます",
            "detail": true
          }
        ],
        "cooldown": "Veil of Lightforce と Terror Cape はチャージを共有し、上限は 2 で、それぞれのチャージには 10 秒かかります。どちらかを使用すると、両方の能力が 2 秒のクールダウンに入ります"
      },
      {
        "key": "右クリック",
        "name": "Dagger Storm",
        "form": "ダガー",
        "normal": [
          {
            "text": "自己回復 35/秒",
            "changes": [
              {
                "value": "35/秒",
                "previous": "50/秒",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体で、効果範囲も生成します",
            "detail": true
          },
          "回復量(味方) 50/秒",
          "持続時間 6秒",
          "範囲 半径5 mの球体",
          {
            "text": "特殊効果 効果範囲が作成されると",
            "detail": true
          },
          {
            "text": "範囲内の味方は60のワンタイムヒーリングを獲得します",
            "detail": true
          },
          {
            "text": "ダガーの一斉射撃を発射し、衝撃エリアに時間の経過とともに治癒フィールドを作成します",
            "detail": true
          }
        ],
        "cooldown": {
          "text": "15秒",
          "changes": [
            {
              "value": "15秒",
              "previous": "12秒",
              "kind": "nerf"
            }
          ]
        }
      }
    ],
    "teamups": [
      {
        "name": "Oblivion Shroud",
        "key": "E",
        "cooldown": "",
        "lines": [
          {
            "text": "新効果 ベールが通過経路上の敵をノックバック",
            "changes": [
              {
                "value": "ベールが通過経路上の敵をノックバック",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "ライトベールの敵ダメージ軽減 20%",
          "ダークベール敵回復量減少 20%",
          "ベール持続時間 4秒",
          "ベール範囲 幅6メートル",
          "高さ4.5メートル",
          "連携強化時　ダメージブースト 15%",
          "連携強化時　ベール範囲 幅8メートル",
          "連携強化時　高さ6メートル",
          {
            "text": "基本効果　Veil of Lightforce and Terror Cape are warped by hellfire energy, changing into Veil of Light and Veil of Darkness while retaining their original effects. Both veils knock back enemies hit along their path. After traveling a set distance, the veils halt in place. Enemy damage passing through the Veil of Light is weakened, while enemy healing passing through the Veil of Darkness suffers Healing Reduction.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with The Hood, the width of both the Veil of Light and Veil of Darkness expands. Additionally, allies passing through the veils are empowered by hellfire energy, gaining Damage Boost for a duration.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Frozen Haven",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "持続時間 2秒",
          "効果範囲 半径8 m",
          "回復量 50/秒",
          "連携強化時　回復量 90/秒",
          {
            "text": "基本効果　Channel frost energy outward to encase yourself in an absolute block of ice. This offers great protection, but Freezes you in place. While frozen, you can be healed and emit a weak healing aura to nearby allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Luna Snow, the healing aura provided to allies while Frozen becomes significantly stronger.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "iron-fist",
    "name": "アイアン・フィスト",
    "title": "アイアン・フィスト",
    "en": "Iron Fist",
    "role": "duelist",
    "portraitId": "iron-fist",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-iron-fist"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "300"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Jeet Kune Do",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 最初の 4 回の攻撃はそれぞれ 38 ダメージを与え",
          "5 回目の攻撃は 60 ダメージを与えます。",
          "最大距離 3 m",
          "攻撃間隔 最初の 4 つのストライク間の間隔は 0.45 秒ですが",
          "5 番目のストライクと 4 番目のストライクの間隔は 0.67 秒です。",
          "最大引き込み距離 6 m",
          "ヒットごとのドラゴンの防御クールダウン減少 1.2秒",
          {
            "text": "ターゲットの敵をジークンドーで攻撃し、ヒットするたびにブロックとストライクのクールダウンを短縮します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Yat Jee Chung Kuen",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "持続時間 5秒",
          "最大引き込み距離 11 m",
          "ターゲットのないダッシュ速度 12 m/秒",
          "ターゲットなしでのダッシュ距離 3 m",
          "範囲 3 m",
          "ダメージ 攻撃ごとに 8 基本ダメージ + 敵の最大HPの 3.1%",
          "攻撃速度 1秒あたり7回の攻撃",
          {
            "text": "前方にダッシュして狙った敵を追跡し、連続攻撃を繰り出します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Living Chi",
        "normal": [
          "持続時間 12秒",
          "ヤット・ジー・チュンクエンのボーナス範囲 100%",
          "クンルンキックのボーナス範囲 100%",
          "ダメージブースト 30%",
          "移動速度上昇 20%",
          "ヤット・ジー・チュンクエンのクールダウン短縮 -80%",
          "ULT必要コスト 3100",
          {
            "text": "生きた気になるとスピード、ダメージ、攻撃範囲が向上し、ドラゴンの防御のクールダウンを短縮しながらより強力なパンチを繰り出すことができます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "K'un-Lun Kick",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "ダッシュスピード 40 m/秒",
          "最大ダッシュ距離 12 m",
          "最初の飛び蹴りダメージ 40",
          "2回目の飛び蹴りダメージ 35 - 70 (最大ダメージはターゲットの体力が 50% のときに達成されます)",
          {
            "text": "前方にダッシュし、敵に当たるか全範囲に到達したときに飛び蹴りを繰り出し、近くの敵にダメージを与えます。敵の体力が低いほどダメージが増加する",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "E",
        "name": "Harmony Recovery",
        "normal": [
          "持続時間 3秒",
          "毎秒の治癒 100",
          "過剰回復/最大HP変換 100",
          {
            "text": "足を組んで気を流し、ゆっくりとボーナスHPを獲得します",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "Space",
        "name": "Crane Leap",
        "normal": [
          {
            "text": "空中で最大 3 回連続ジャンプを実行する",
            "detail": true
          }
        ],
        "cooldown": "3 回の充電、各充電の再充電には 1 秒かかります"
      },
      {
        "key": "右クリック",
        "name": "Dragon's Defense",
        "normal": [
          "ブロックタイム 1.2秒",
          "ダメージ軽減 30%",
          "ボーナスHP/ダメージブロック変換 1.3",
          "最大HP/ダメージのブロックされた変換 175",
          {
            "text": "気のブーストで防御姿勢をとり、入ってくる攻撃をブロックしてダメージ軽減を獲得し、ヤット・ジー・チュン・クエンで反撃します。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "Space",
        "name": "Wall Runner",
        "normal": [
          "壁を這うスピード 9 m/秒",
          {
            "text": "壁に沿って水平に走る",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Chi Absorption",
        "normal": [
          "ボーナスHP 50",
          {
            "text": "敵を倒すのを支援すると、敵の気を吸収し、ボーナスHPを得ることができます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Iron & Stone",
        "key": "C",
        "cooldown": "8秒",
        "lines": [
          "ダメージ距離 5 m",
          "ダメージ 45",
          "連携強化時　ダメージ距離 5 m",
          "連携強化時　ダメージ 50",
          {
            "text": "基本効果　Unleash a powerful uppercut to Launch Up enemies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up The Thing, unleashing the uppercut can be chained directly into a sweeping leg sweep for a follow-up attack.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Kumiho Palm",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "回復量 6",
          "効果範囲 半径6 mの球体",
          "連携強化時　ターゲットレスダッシュ速度増加 4 m/秒",
          "連携強化時　ターゲット選択の最大範囲の増加 2 m",
          "連携強化時　回復量 7.5",
          {
            "text": "基本効果　Hitting an enemy with Yat Jee Chung Kuen provides a burst of healing to nearby allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up White Fox, the lock-on distance for Yat Jee Chung Kuen is significantly increased.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "hawkeye",
    "name": "ホークアイ",
    "title": "ホークアイ",
    "en": "Hawkeye",
    "role": "duelist",
    "portraitId": "hawkeye",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-hawkeye"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Piercing Arrow",
        "normal": [
          {
            "text": "発動方式 円弧軌道を描く装填発射体",
            "detail": true
          },
          "充電中の速度が遅い -20%",
          "最低充電時間 0.7秒",
          "弾速 140 - 210 m/秒 (0.9秒の充電後に最大速度に達します)",
          "ダメージ 28 - 70 (最大ダメージは 0.9 秒のチャージ後に達成されます)",
          "装弾数 無限",
          "クリティカル あり",
          {
            "text": "強力な矢を射る",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Blast Arrow",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する円弧状の発射体",
            "detail": true
          },
          "充電中の速度が遅い -20%",
          "弾速 60 m/秒",
          "弾のダメージ 16",
          "範囲 半径3 mの球体",
          "範囲ダメージ 34",
          "キャストごとに矢を発射する 3",
          "広がり角 11.3°",
          "チャージ数 3",
          {
            "text": "爆発性の矢を3本放つ",
            "detail": true
          }
        ],
        "cooldown": "0.5秒"
      },
      {
        "key": "Q",
        "name": "Hunter's Sight",
        "normal": [
          "持続時間 10秒",
          "残像発生間隔 0.5秒",
          "残像持続時間 3秒",
          "描画速度ブースト乗数 1.5",
          "ULT必要コスト 3100",
          {
            "text": "特殊効果 ハンターズサイトが有効な間、弓の引き速度が増加します",
            "detail": true
          },
          {
            "text": "彼の視界に敵の残像を捉えます。残像に与えられたダメージは対応する敵に伝達される",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Crescent Slash",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "最大距離 8 m",
          "ダメージ 40",
          {
            "text": "刀を抜いて前方に斬り込み、命中した敵を打ち上げる",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "E",
        "name": "Hypersonic Arrow",
        "normal": [
          {
            "text": "発動方式 効果範囲を伴う直線投射物",
            "detail": true
          },
          "弾速 150 m/秒",
          "最初の魔法フィールド範囲 長さ：3 m",
          "幅：5 m",
          "高さ：2.7 m",
          "最初のダメージ 55",
          "2番目の効果範囲範囲 長さ：3 m",
          "幅：5 m",
          "高さ：1.6 m",
          "二次ダメージ 55",
          "減速率 -40%",
          "持続時間が遅い 1秒",
          {
            "text": "極超音速の矢を放ち、その経路上の敵に 2 回のダメージを与え、スローを与えます。この能力は飛行ヒーローをノックダウンすることができます",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "V",
        "name": "Ronin Slash",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "最大距離 3 m",
          {
            "text": "特殊効果 この能力は、ヒット時の爆発や発射物によって作成される効果をブロックすることはできません",
            "detail": true
          },
          {
            "text": "脇差を振って正面の敵を攻撃し、入ってくるすべての発射物を逸らします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Space",
        "name": "Skyward Leap",
        "normal": [
          {
            "text": "進行方向に二段ジャンプをする",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "パッシブ",
        "name": "Archer's Focus",
        "normal": [
          "ボーナスダメージ 0 - 90 (最大ダメージは照準の 0.9 秒後に達成されます)",
          "トリガー距離 40 m",
          "クリティカル あり",
          {
            "text": "特殊効果 ピアシングアローの基本ダメージにボーナスダメージを適用します",
            "detail": true
          },
          {
            "text": "敵を狙うと集中力が高まり、ピアシングアローが与えるダメージが増加します",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Senbonzakura Strike",
        "key": "左クリック",
        "cooldown": "",
        "lines": [
          "矢ごとのチャージ時間 (秒) 0.09",
          "スプレッドタイプ 固定スプレッド",
          "放たれたサイオニックアロー 5",
          "サイオニックアローダメージ 33/ショット",
          "連携強化時　矢ごとのチャージ時間 (秒) 0.07",
          "連携強化時　サイオニックアローダメージ 24/ショット",
          "連携強化時　サイオニックアローの爆発ダメージ 1発あたり8ダメージ",
          "連携強化時　爆発範囲 半径2 mの球状魔法フィールド",
          {
            "text": "基本効果　Upgrade Blast Arrow to Psionic Arrow. While drawn, Hawkeye can continuously bank extra Psionic Arrows. Releasing the bowstring rapidly fires all accumulated arrows forward in sequence.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Psylocke, the nocking speed for each Psionic Arrow is significantly quickened, and they explode upon hitting enemies or the environment.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Moonlit Slash",
        "key": "Shift",
        "cooldown": "",
        "lines": [
          "光刃ダメージ 65",
          "脆弱性率 4秒間15%",
          "光刃の治癒 65",
          "治癒上昇率 4秒間15%",
          "連携強化時　光刃ダメージ 35/ショット",
          "連携強化時　合計 3 ショット",
          "連携強化時　脆弱性率 4秒間15%",
          "連携強化時　剣のオーラの治癒 35/ショット",
          "連携強化時　合計 3 ショット",
          "連携強化時　治癒上昇率 4秒間15%",
          {
            "text": "基本効果　Upgrade Crescent Slash to Moonlit Slash, projecting a radiant slash outward. It heals and boosts healing for allies, while damaging enemies and applying Vulnerability.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Cloak & Dagger, Moonlit Slash can be chained into a three-hit combo, firing off three consecutive sweeping light blades.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "psylocke",
    "name": "サイロック",
    "title": "サイロック",
    "en": "Psylocke",
    "role": "duelist",
    "portraitId": "psylocke",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-psylocke"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "150 HP ＋ 回復型シールド 100"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Psionic Crossbow",
        "normal": [
          {
            "text": "発動方式 スプレッド付きダブル発射体",
            "detail": true
          },
          "ダメージ 1発あたり12ダメージ",
          {
            "text": "距離減衰は8 mから開始",
            "detail": true
          },
          {
            "text": "30 mで基礎ダメージの70%",
            "detail": true
          },
          "キャストごとに発射される弾丸 4",
          "10 m先での弾の拡散半径 0.2 m",
          "連射速度 発砲間隔は0.2秒",
          "各発砲の間隔は0.6秒です。",
          "装弾数 16",
          "クリティカル あり",
          "クリティカルダメージ 150%",
          "ヒット時のクールダウン短縮 1ヒットあたり0.3秒",
          {
            "text": "サイオニッククロスボウでボルトを放ち、敵にダメージを与え、すべての能力のクールダウンを短縮します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Dance of the Butterfly",
        "normal": [
          "範囲 半径10 mの球体",
          "持続時間 4秒",
          "減速率 -15%",
          "攻撃間隔 1秒あたり2ヒット",
          "ダメージ 1ヒットあたり160ダメージ",
          "ULT必要コスト 3400",
          {
            "text": "特殊効果 サイロックはランダムな敵を斬り、最も攻撃を受けていない敵を優先します。",
            "detail": true
          },
          {
            "text": "サイオニックカタナで近くの敵を斬り、大ダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Psi-Blade Dash",
        "normal": [
          "平均速度 43 m/秒",
          "最大距離 12 m",
          "ダメージ 50",
          "チャージ数 2",
          {
            "text": "特殊効果 この能力を発動すると、自動的にウィングシュリケンが呼び出されます",
            "detail": true
          },
          {
            "text": "手裏剣はまずサイロックの開始位置に移動してから、彼女の元に戻ります。",
            "detail": true
          },
          {
            "text": "前方にダッシュし、サイオニックブレードで道に沿って敵を切り裂きます",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "E",
        "name": "Psychic Stealth",
        "normal": [
          "持続時間 2秒",
          "移動速度上昇 50%",
          {
            "text": "特殊効果 ステルス中に攻撃されると、サイロックはステルス状態を維持しますが、短時間の間だけ可視化されます。",
            "detail": true
          },
          {
            "text": "ステルス状態に入り、移動力のブーストを得る",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "右クリック",
        "name": "Wing Shurikens",
        "normal": [
          {
            "text": "発動方式 直線的な軌道で発射する発射体。",
            "detail": true
          },
          "発射体の数 5",
          "リコールウィンドウ 3秒",
          "ボーナスHP ラウンドごとに 10 ボーナスHP",
          {
            "text": "特殊効果 発射体がリコールされると、サイロックに戻る前に十字線に向かって 20 秒移動します。",
            "detail": true
          },
          "ダメージ 1発あたり10ダメージ",
          "弾速 120 m/秒",
          "広がり角 0.86°",
          "最大距離 25 m",
          {
            "text": "距離減衰は15 mから開始",
            "detail": true
          },
          {
            "text": "25 mで基礎ダメージの80%",
            "detail": true
          },
          "ダメージ ヒットごとに 10",
          "弾速 150 m/秒",
          {
            "text": "敵にくっつくサイオニック手裏剣の一斉射撃を発射し、ダメージを与え、自身にボーナスHPを与えます。もう一度押すと手裏剣を呼び出します",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      }
    ],
    "teamups": [
      {
        "name": "Mental Projection",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "フレックスアップ 0.5",
          "幻覚ダメージ 15%",
          "磁気投射の最大持続時間 3秒",
          {
            "text": "連携強化時　特殊効果 イリュージョンが存在している間、サイオニック イリュージョンと場所を交換する能力を 1 回まで再アクティブ化します",
            "detail": true
          },
          {
            "text": "基本効果　Create an illusory projection that automatically dashes forward to use Psi-Blade Dash, while Psylocke enters Stealth. If Psylocke attacks, the illusion mimics her strikes.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Emma Frost, Psylocke's mental powers are elevated, allowing her to reactivate the ability to instantly swap places with her illusion.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Light & Dark Darts",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "弾のダメージ 30",
          "回復量 20",
          "フィールド持続時間 5秒",
          "フィールド範囲 半径6 mの球体",
          "サイオニッククロスボウのショットごとの基本ダメージ 13",
          "連携強化時　フィールド範囲 半径8 mの球面",
          {
            "text": "基本効果　Unleash a ring of Light Darts in all directions that damage enemies and restore Psylocke's Health upon impact, leaving behind a Shadow Domain. Staying inside the domain for a short time will re-enter Stealth.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Cloak & Dagger, the radius of the Shadow Domain expands, and each time re-entering Stealth, the Light Darts are fired in all directions again.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "hulk",
    "name": "ハルク",
    "title": "ハルク",
    "en": "Hulk",
    "role": "vanguard",
    "portraitId": "hulk",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-hulk"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "200"
      },
      {
        "label": "ヒーロー・ハルクのHP",
        "value": "400 HP ＋ 回復型シールド 300"
      },
      {
        "label": "モンスター・ハルクのHP",
        "value": "1400"
      },
      {
        "label": "バナーのULT必要コスト",
        "value": "600"
      },
      {
        "label": "ヒーロー・ハルクのULT必要コスト",
        "value": "3,700"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Gamma Ray Gun",
        "form": "ブルース・バナー",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体",
            "detail": true
          },
          "弾速 120 m/秒",
          "ダメージ 16",
          "連射速度 1秒あたり5発",
          "装弾数 25",
          "クリティカル あり",
          {
            "text": "ガンマ線銃で発砲する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Puny Banner",
        "form": "ブルース・バナー",
        "normal": [
          {
            "text": "発動方式 変身",
            "detail": true
          },
          "ULT必要コスト 600",
          {
            "text": "特殊効果 術者は変身プロセス中に動けなくなり、無敵を獲得します",
            "detail": true
          },
          {
            "text": "ブルース・バナーからヒーロー・ハルクに変身",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Gamma Grenade",
        "form": "ブルース・バナー",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する下向きの遅延を備えたシングルキャスト発射体",
            "detail": true
          },
          "ダメージ 40",
          "範囲 半径3 mの球体",
          {
            "text": "特殊効果 術者が効果範囲に入ると",
            "detail": true
          },
          {
            "text": "100ガンマエネルギーが回復します",
            "detail": true
          },
          {
            "text": "ガンマ手榴弾を発射してダメージを与え、敵を打ち上げます",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "左クリック",
        "name": "Heavy Blow",
        "form": "ヒーロー・ハルク",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "ダメージ 45",
          "範囲 4.5 m",
          "攻撃間隔 0.467秒",
          {
            "text": "拳を前に振り上げて敵を殴る",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Hulk Smash!",
        "form": "ヒーロー・ハルク",
        "normal": [
          {
            "text": "発動方式 変身",
            "detail": true
          },
          "持続時間 12秒",
          "ULT必要コスト 3700",
          {
            "text": "特殊効果 術者は変身プロセス中に動けなくなり、無敵を獲得します",
            "detail": true
          },
          {
            "text": "蓄積されたガンマ エネルギーを解放し、期間限定でヒーロー ハルクからモンスター ハルクに変身します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Indestructible Guard",
        "form": "ヒーロー・ハルク",
        "normal": [
          {
            "text": "発動方式 術者を囲むシングルキャストの効果範囲",
            "detail": true
          },
          "範囲 半径5 mの球体",
          "キャスターのシールド値 200",
          "味方のシールド値 100",
          "シールドの最大持続時間 2.5秒",
          {
            "text": "特殊効果 術者のシールドがダメージを受けると",
            "detail": true
          },
          {
            "text": "ダメージの 130% がガンマ エネルギーに変換されます",
            "detail": true
          },
          {
            "text": "味方のシールドがダメージを受けると",
            "detail": true
          },
          {
            "text": "ダメージの 10% がガンマ エネルギーに変換されます",
            "detail": true
          },
          {
            "text": "ヒーローハルクと近くの仲間のためにガンマシールドを生成し、ダメージを吸収してハルクスマッシュのエネルギーに変換します",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "E",
        "name": "Radioactive Lockdown",
        "form": "ヒーロー・ハルク",
        "normal": [
          {
            "text": "発動方式 シングルキャスト発射体。",
            "detail": true
          },
          "弾速 100 m/秒",
          "ダメージ 5",
          "最大持続時間 2秒",
          {
            "text": "特殊効果 ヘビーブローとガンマバーストは",
            "detail": true
          },
          {
            "text": "照射された敵を検出してダメージを与え、ステータスを早期に削除することができます",
            "detail": true
          },
          {
            "text": "ガンマエネルギーを放出して敵を照射し、敵を動けなくし、すべての能力の影響を受けないようにする。ヘビーブローまたはガンマバーストを使用すると、このステータスが早期に解除されます",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "Space",
        "name": "Incredible Leap",
        "form": "ヒーロー・ハルク",
        "normal": [
          {
            "text": "発動方式 チャージダッシュ",
            "detail": true
          },
          "最低充電時間 0.4秒",
          "最大充電時間 1.7秒",
          "最小充電時間での速度 19 m/秒",
          "最大充電時間での速度 25 m/秒",
          {
            "text": "特殊効果 Incredible Leap 中にスペースを押すと、遭遇した壁にしがみつきます",
            "detail": true
          },
          {
            "text": "スペースを長押しすると、ヒーローのハルクが飛んでいる敵を地面にノックアウトできるチャージジャンプを実行できます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Gamma Burst",
        "form": "ヒーロー・ハルク",
        "normal": [
          {
            "text": "発動方式 敵を貫通する単発発射弾",
            "detail": true
          },
          "弾速 80 m/秒",
          "ダメージ 65",
          {
            "text": "特殊効果 直撃するたびに、不滅のガードのクールダウンが 1 秒減少します",
            "detail": true
          },
          {
            "text": "ガンマ線バーストを発射してダメージを与えます。ヒット時のIndestructible Guardのクールダウンを短縮",
            "detail": true
          }
        ],
        "cooldown": "基本クールダウンは 2 秒、1 回の使用につき 6 秒の料金がかかります。"
      },
      {
        "key": "左クリック",
        "name": "Heavy Blow",
        "form": "モンスター・ハルク",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "ダメージ 70",
          "範囲 5 m",
          "攻撃間隔 0.52秒",
          {
            "text": "拳を前に振り上げて敵を殴ったり打ち上げたりする",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "World Breaker",
        "form": "モンスター・ハルク",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "ダメージ 5 ヒットを与え",
          "それぞれ 40 ダメージを与える",
          "持続時間 5秒",
          "範囲 5 m",
          {
            "text": "特殊効果 スマッシュを実行している間",
            "detail": true
          },
          {
            "text": "ハルクは 30% のダメージ軽減を獲得します。",
            "detail": true
          },
          {
            "text": "目の前の敵を掴んで打ち砕く",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Radioactive Lockdown",
        "form": "モンスター・ハルク",
        "normal": [
          {
            "text": "発動方式 シングルキャスト発射体",
            "detail": true
          },
          "弾速 150 m/秒",
          "ダメージ 5",
          "最大持続時間 2秒",
          {
            "text": "特殊効果 ヘビーブローとガンマバーストは",
            "detail": true
          },
          {
            "text": "照射された敵を検出してダメージを与え、ステータスを早期に削除することができます",
            "detail": true
          },
          {
            "text": "ガンマエネルギーを放出して敵を照射し、敵を動けなくし、すべての能力の影響を受けないようにする。ヘビーブローまたはガンマバーストを使用すると、このステータスが早期に解除されます",
            "detail": true
          }
        ],
        "cooldown": "5秒"
      },
      {
        "key": "Space",
        "name": "Incredible Leap",
        "form": "モンスター・ハルク",
        "normal": [
          {
            "text": "発動方式 チャージダッシュ",
            "detail": true
          },
          "最低充電時間 0.7秒",
          "最大充電時間 1.5秒",
          "最小充電時間での速度 19.4 m/秒",
          "最大充電時間での速度 25 m/秒",
          {
            "text": "特殊効果 Incredible Leap 中にスペースを押すと、遭遇した壁にしがみつきます",
            "detail": true
          },
          {
            "text": "スペースを長押しすると、モンスターハルクが飛行中の敵を地面にノックアウトできるチャージジャンプを実行できます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Gamma Burst",
        "form": "モンスター・ハルク",
        "normal": [
          {
            "text": "発動方式 敵を貫通する単発発射弾",
            "detail": true
          },
          "弾速 60 m/秒",
          "ダメージ 125",
          {
            "text": "ガンマ線バーストを発射してダメージを与える",
            "detail": true
          }
        ],
        "cooldown": "1秒"
      }
    ],
    "teamups": [
      {
        "name": "Savage Slam",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "発射速度 60 m/秒",
          "着地ダメージ範囲 半径8 mの球状魔法フィールド",
          "着地ダメージ 40",
          "ガンマバーストCDリダクション 400 HP で 1 秒",
          "最大 3 秒",
          "放射性ロックダウン CD 削減 400 HP で 1 秒",
          "最大 3 秒",
          "不滅のガード CD削減 400 HP で 2 秒",
          "最大 5 秒",
          "連携強化時　着地ダメージ 50",
          "連携強化時　脆弱性率 3秒間20%",
          {
            "text": "基本効果　Leap high and smash the ground, dealing damage to enemies and reducing the cooldowns of other abilities based on remaining Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Captain America, the ground slam additionally applies Vulnerability to enemies hit.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Gamma Fastball",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "猛烈な持続時間 6秒",
          "移動速度ブースト 25%",
          "攻撃速度ブースト 25%",
          "止められない閾値 400",
          "止められない持続時間 6秒",
          "アンストッパブルCD 45秒",
          {
            "text": "基本効果　Enter a Furious state upon activation, gaining Speed Boost and Attack Speed for a duration. Also unlocks the Dances With Werewolves ability, granting Unstoppable for a period when Health drops to a certain threshold.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Wolverine, unlocks the Fastball Special. Upon mutual confirmation, Hulk hurls Wolverine forward",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "iron-man",
    "name": "アイアンマン",
    "title": "アイアンマン",
    "en": "Iron Man",
    "role": "duelist",
    "portraitId": "iron-man",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-iron-man"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Repulsor Blast",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "装弾数 100",
          "クリティカル なし",
          {
            "text": "スペシャルメカニック1 片手用リパルサーを 2 回連続で発射した後",
            "detail": true
          },
          {
            "text": "次の攻撃で 2 つのリパルサーを同時に発射します",
            "detail": true
          },
          {
            "text": "スペシャルメカニック2 リパルサー ブラストとユニビームは同じ弾薬数を共有します",
            "detail": true
          },
          "弾速 60 m/秒",
          "ダメージ 35",
          "範囲 半径3 mの球体",
          "範囲ダメージ 45",
          {
            "text": "効果範囲ダメージ減衰 3 m で 40% 減衰",
            "detail": true
          },
          "連射速度 毎秒1.67発",
          "弾薬の消費 1発あたり10ダメージ",
          "弾速 80 m/秒",
          "ダメージ 50",
          "範囲 半径5 mの球体",
          "範囲ダメージ 50",
          {
            "text": "効果範囲ダメージ減衰 5 m で 40% 減衰",
            "detail": true
          },
          "連射速度 1.39 ラウンド/秒",
          "弾薬の消費 1発あたり16ダメージ",
          {
            "text": "ナノパルス砲を前方に発射する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Repulsor Blast (armor Overdrive)",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "装弾数 無限",
          "クリティカル なし",
          "弾速 80 m/秒",
          "ダメージ 45",
          "範囲 半径5 mの球体",
          "範囲ダメージ 60",
          {
            "text": "効果範囲ダメージ減衰 5 m で 40% 減衰",
            "detail": true
          },
          "連射速度 毎秒1.33発",
          {
            "text": "ナノパルス砲を前方に発射する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Unibeam",
        "normal": [
          {
            "text": "発動方式 チャネリングされた",
            "detail": true
          },
          "装弾数 100",
          "クリティカル なし",
          {
            "text": "特殊効果 リパルサー ブラストとユニビームは同じ弾薬数を共有します",
            "detail": true
          },
          "ビームの長さ 25 m",
          "ダメージ 1秒あたり140ダメージ",
          "弾薬の消費 10/秒",
          {
            "text": "ナノパルス砲を前方に発射する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Unibeam (armor Overdrive)",
        "normal": [
          {
            "text": "発動方式 チャネリングされた",
            "detail": true
          },
          "装弾数 無限",
          "クリティカル なし",
          "ビームの長さ 25 m",
          "ダメージ 180/秒",
          {
            "text": "ナノパルス砲を前方に発射する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Invincible Pulse Cannon",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "ULT必要コスト 3400",
          "弾速 25 m/秒",
          "分散魔法フィールド 長さ：15 m",
          "幅：5 m",
          "高さ：5 m",
          "時間の経過によるダメージ 300/秒",
          "爆発範囲 半径10 mの球体",
          "爆発ダメージ 1000",
          {
            "text": "効果範囲ダメージ減衰 10 m で 5% 減衰",
            "detail": true
          },
          {
            "text": "特殊効果 発射物が移動するにつれて",
            "detail": true
          },
          {
            "text": "近くの敵に時間の経過とともにダメージを与える分散型効果範囲を作成します",
            "detail": true
          },
          {
            "text": "ターゲット方向に破壊的なパルス砲を発射し、衝撃を受けるとターゲット領域に壊滅的なダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Hyper-Velocity",
        "normal": [
          "移動速度上昇 100%",
          "最大エネルギー 120",
          "消費エネルギー 15/秒",
          "エネルギー回復速度 10/秒",
          {
            "text": "Hyper-Velocity 状態をアクティブにして、素早く前進飛行します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Hyper-Velocity (armor Overdrive)",
        "normal": [
          "移動速度上昇 100%",
          "最大エネルギー 無限",
          {
            "text": "Hyper-Velocity 状態をアクティブにして、素早く前進飛行します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Armor Overdrive",
        "normal": [
          "持続時間 10秒",
          "ボーナスHP 100",
          {
            "text": "特殊効果 アーマーオーバードライブがアクティブな間にKOされるたびに",
            "detail": true
          },
          {
            "text": "その持続時間が2秒延長されます",
            "detail": true
          },
          {
            "text": "アーマーオーバードライブ状態をアクティブにし、リパルサーブラストとユニビームのダメージを強化します",
            "detail": true
          }
        ],
        "cooldown": "20秒"
      },
      {
        "key": "F",
        "name": "Micro-Missile Barrage",
        "normal": [
          {
            "text": "発動方式 着弾時に効果範囲を生成する散布型発射体",
            "detail": true
          },
          "ミサイル 16",
          "弾速 60 m/秒",
          "範囲 半径2 mの球体",
          "範囲ダメージ 1発あたり10ダメージ",
          {
            "text": "特殊効果 アイアンマンの真下にミサイルを発射",
            "detail": true
          },
          {
            "text": "ハイパーベロシティまたはアーマーオーバードライブを使用すると、アイアンマンはミサイル砲撃を開始できます",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "F",
        "name": "Micro-Missile Barrage (armor Overdrive)",
        "normal": [
          {
            "text": "発動方式 着弾時に効果範囲を生成する散布型発射体",
            "detail": true
          },
          "ミサイル 18",
          "弾速 60 m/秒",
          "範囲 半径2 mの球体",
          "範囲ダメージ 1発あたり10ダメージ",
          {
            "text": "特殊効果 アイアンマンの十字線の方向に発射",
            "detail": true
          },
          {
            "text": "ハイパーベロシティまたはアーマーオーバードライブを使用すると、アイアンマンはミサイル砲撃を開始できます",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      }
    ],
    "teamups": [
      {
        "name": "Gamma Charge",
        "key": "E",
        "cooldown": "20",
        "lines": [
          "持続時間 10秒",
          "アシスト/キルごとのアビリティ持続時間の延長 (秒) 2秒",
          "パルスキャノン砲弾ヒットダメージ 50",
          "パルスキャノン効果範囲ダメージ 65",
          "パルスキャノンの効果範囲範囲 半径5 mの球体",
          {
            "text": "パルスキャノンのダメージ減衰 フォールオフは 0.3 メートルで始まり",
            "detail": true
          },
          {
            "text": "5 メートルで 40% まで下がります",
            "detail": true
          },
          "ユニビームダメージ 20/ヒット",
          "1秒あたり10回",
          "連携強化時　ガンマシールドの健康状態 75",
          "連携強化時　ガンマシールドの最大持続時間 2秒",
          "連携強化時　散逸ダメージ 45",
          {
            "text": "基本効果　Upgrade Armor Overdrive to Gamma Overdrive. In this state, Iron Man gains a Gamma Shield and can fire significantly stronger Repulsor Blasts and Unibeams.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Hulk, releasing Invincible Invincible Pulse Cannon generates a Gamma Shield and heavily infuses the blast, creating a Gamma Pulse Cannon. Its radiation creates a massive damage increase while the projectile flies",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Thunder Overdrive",
        "key": "E",
        "cooldown": "",
        "lines": [
          "ユニビーム外輪範囲 半径0.75 m",
          "ユニビーム外輪損傷 8/ヒット",
          "1秒あたり10回",
          "ユニビームダメージ 14/ヒット",
          "1秒あたり10回",
          "サンダーオーバードライブ ユニビーム 外輪レンジ 半径1.2 m",
          "サンダーオーバードライブ ユニビーム 外輪レンジ 9/ヒット",
          "1秒あたり10回",
          "サンダーオーバードライブ ユニビーム 外輪レンジ 18/ヒット",
          "1秒あたり10回",
          "連携強化時　サンダー オーバードライブ CD リダクション 5秒",
          {
            "text": "基本効果　Enhance Unibeam both in and out of Armor Overdrive. When fired, a ring of volatile lightning energy forms, dealing bonus damage to enemies caught near the beam's edge.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Thor, Armor Overdrive cooldown is massively reduced.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "moon-knight",
    "name": "ムーンナイト",
    "title": "ムーンナイト",
    "en": "Moon Knight",
    "role": "duelist",
    "portraitId": "moon-knight",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-moon-knight"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Crescent Dart",
        "normal": [
          {
            "text": "発動方式 直線的な弾道で発射するトリプルショット",
            "detail": true
          },
          "弾速 150 m/秒",
          "連射速度 発砲間隔は 0.05 秒",
          "各発砲の間隔は 0.57 秒です。",
          "ダメージ 1発あたり25ダメージ",
          {
            "text": "距離減衰は30 mから開始",
            "detail": true
          },
          {
            "text": "50 mで基礎ダメージの50%",
            "detail": true
          },
          "最大バウンス距離 7 m",
          "最大バウンス数 3",
          {
            "text": "バウンスごとのダメージ減衰 -20%",
            "detail": true
          },
          "装弾数 30",
          "クリティカル あり",
          {
            "text": "クレセントダーツを前方に放ち、敵とアンクの間で跳ね返り、敵にダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Hand of Khonshu",
        "normal": [
          {
            "text": "発動方式 遅延球状効果範囲",
            "detail": true
          },
          "持続時間 4.5秒",
          "下降範囲 半径8 m",
          "周波数 1秒あたり4ヒット",
          "ヒット数 18",
          "範囲 半径5 mの球体",
          "ダメージ 1ヒットあたり150ダメージ",
          {
            "text": "距離減衰 1.5 m から開始",
            "detail": true
          },
          {
            "text": "5 m で 70% 減衰",
            "detail": true
          },
          "ULT必要コスト 3100",
          {
            "text": "ポータルを開いて、コンシュが爪で敵を攻撃できるようにします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Night Glider",
        "normal": [
          "水平方向の移動速度 8.7 m/秒",
          "下降速度 1.5 m/秒",
          {
            "text": "SHIFT を押したままにすると滑空します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Ancient Ankh",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "弾速 60 m/秒",
          "引き込み範囲 半径5 mの球体",
          "引き込みダメージ 20",
          "跳ねる範囲 半径7 mの球体",
          {
            "text": "アンクを発射して半径内の敵を中心に向かって打ち上げます。",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "F",
        "name": "Moonlight Hook",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "グラップリングフックの速度 120 m/秒",
          "グラップリングフックの長さ 25 m",
          "最大距離 21.5 m/秒",
          {
            "text": "前方にグラップリングフックを発射し、ムーンナイトを引き寄せます。",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "Space",
        "name": "Rising Leap",
        "normal": [
          {
            "text": "二段ジャンプをする",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "右クリック",
        "name": "Moon Blade",
        "normal": [
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "弾速 120 m/秒",
          "ダメージ 70",
          {
            "text": "距離減衰は30 mから開始",
            "detail": true
          },
          {
            "text": "50 mで基礎ダメージの50%",
            "detail": true
          },
          "最大バウンス距離 7 m",
          "最大バウンス数 3",
          {
            "text": "バウンスごとのダメージ減衰 -30%",
            "detail": true
          },
          "ボーナスHP 25",
          "最大 76 のボーナスHP",
          "クリティカル あり",
          "チャージ数 2",
          {
            "text": "ムーンブレードを前方に発射し、敵とアンクの間で跳ね返り、敵にダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "V",
        "name": "Triple Eclipse",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "最大距離 3 m",
          {
            "text": "警棒でコンボを実行すると、3 回目の攻撃で敵の攻撃をわずかに打ち上げます。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Luminous Moon",
        "key": "C",
        "cooldown": "12",
        "lines": [
          "ダッシュ持続時間 0.35秒",
          "ダッシュスピード 50 m/秒",
          "段階的な期間 0.25秒",
          "回復量 55",
          "治癒範囲 半径5メートル",
          "連携強化時　ダッシュ持続時間 0.35秒",
          "連携強化時　段階的な期間 0.35秒",
          "連携強化時　回復量 65、フェーズ状態を抜けた後",
          "連携強化時　3秒間20ヘルス/秒の治癒効果を得る",
          "連携強化時　治癒範囲 半径8 m",
          {
            "text": "基本効果　Enter Phased state and dash forward. Upon concluding, emit a Light Energy Healing Wave that heals Moon Knight and nearby allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Cloak & Dagger, the Phased state duration is extended, the dash distance increases, and the Light Energy Healing Wave boasts a larger radius and stronger healing output.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Blood Moon",
        "key": "C",
        "cooldown": "15",
        "lines": [
          "トラップのヘルス 100",
          "アンクの健康 125",
          "トラップが見えなくなるまでの時間 1秒",
          "コンシュ範囲の爪 半径5メートル",
          "ダメージ 70",
          "連携強化時　ダメージ 40",
          "連携強化時　コンシュの爪が生成されました 3",
          {
            "text": "基本効果　Deploy an Ankh Trap. Upon triggering, an Ankh materializes at the location, while summoning a single Talon of Khonshu to Launch enemies toward the trap's center.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Elsa Bloodstone, triggering the trap summons multiple Talons of Khonshu to bombard the area.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "namor",
    "name": "ネイモア",
    "title": "ネイモア",
    "en": "Namor",
    "role": "duelist",
    "portraitId": "namor",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-namor"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Trident of Neptune",
        "normal": [
          {
            "text": "発動方式 円弧軌道を描く発射体",
            "detail": true
          },
          "ダメージ 80",
          "弾速 150 m/秒",
          "連射速度 毎秒1.09発",
          "装弾数 無限",
          "クリティカル あり",
          "アクアティック・ドミニオンのヒットごとのチャージ 0.13",
          {
            "text": "トライデントを前方に投げると、敵が衝突したときのアクアティック ドミニオンのクールダウンが短縮されます。クリティカルヒットにより、モンストロスポーンは凶暴な状態になり、攻撃速度が増加します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Horn of Proteus",
        "normal": [
          {
            "text": "発動方式 円筒形の魔法フィールド",
            "detail": true
          },
          "最大距離 30 m",
          "範囲 内円半径3.5 m",
          "外円半径9 m",
          "高さ3 mの円筒形魔法フィールド",
          "ヒット遅延 1.5秒",
          "ダメージ インナーサークルダメージ: 500",
          "アウターサークルダメージ: 180",
          "持続時間の固定化 1.5秒",
          "ULT必要コスト 3100",
          {
            "text": "ギガントを召喚し、範囲内の敵の上に飛び乗って移動能力を無効化します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Blessing of the Deep",
        "normal": [
          "垂直移動距離 7 m",
          "最大持続時間 3秒",
          {
            "text": "上向きに飛行しながら防御バリアを召喚する",
            "detail": true
          }
        ],
        "cooldown": "20秒"
      },
      {
        "key": "E",
        "name": "Aquatic Dominion",
        "normal": [
          {
            "text": "発動方式 円弧軌道(モンストロスポーン召喚)、ダイレクトヒット(モンストロスポーン)",
            "detail": true
          },
          "発射速度（召喚モンスタースポーン） 30 m/秒",
          "モンスタースポーンの最大持続時間 8秒",
          "モンスタースポーンの健康状態 125",
          "モンスタースポーンの攻撃範囲 40 m",
          "モンスタースポーン最大数 2",
          "チャージ数 2",
          "デフォルトの充電速度 0.1/秒",
          "モンスターのスポーン発射速度 1秒あたり2発",
          "モンスタースポーンダメージ 18",
          {
            "text": "モンスタースポーンのダメージ減衰 フォールオフは 20 メートルで始まり",
            "detail": true
          },
          {
            "text": "40 メートルで 50% に減少します。",
            "detail": true
          },
          "持続時間 2秒",
          "モンスターのスポーン発射速度 1秒あたり5発",
          "モンスタースポーンダメージ 12",
          {
            "text": "モンスタースポーンのダメージ減衰 フォールオフは 20 メートルで始まり",
            "detail": true
          },
          {
            "text": "40 メートルで 30% に減少します。",
            "detail": true
          },
          {
            "text": "自律的に敵を攻撃できるモンスタースポーンを召喚します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Wrath of the Seven Seas",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する円弧状の発射体",
            "detail": true
          },
          "弾のダメージ 40",
          "弾速 150 m/秒",
          "範囲 半径3 mの球体",
          "範囲ダメージ 60",
          {
            "text": "効果範囲ダメージ減衰 3 m で 50% 減衰",
            "detail": true
          },
          "強化されたモンスタースポーン発射体のダメージ 60",
          "強化されたモンスターのスポーン発射速度 120 m/秒",
          {
            "text": "トライデントを前方に発射して近くの敵にダメージを与え、すべてのモンストロ スポーンに最も近い攻撃を受けた敵に強化攻撃を実行するように指示します。トライデントが敵に当たると、モンストロスポーンは凶暴な状態になり、攻撃速度が増加します。",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      }
    ],
    "teamups": [
      {
        "name": "Gamma Monstro",
        "key": "C",
        "cooldown": "25",
        "lines": [
          "ガンマモンスターの攻撃間隔 1回の使用あたり0.1秒",
          "ガンマモンスターの攻撃ダメージ 1ヒットあたり5.5",
          "ガンマモンスターの時間経過に伴うダメージ増加率 10%/秒",
          "ガンマモンスターの健康 150",
          "ガンマモンストロの狂乱攻撃ダメージ 3.5",
          "ガンマモンストロの狂乱攻撃間隔 0.05",
          "連携強化時　クールダウン回復速度ブースト 200%",
          "連携強化時　ガンマタコのダメージブースト率 25%",
          {
            "text": "基本効果　Summon an extra Gamma Monstro that continuously damages the nearest enemy. Upon landing critical hits, the Gamma Monstro gains increased Attack Speed. Hitting an enemy with Wrath of the Seven Seas prompts it to fire a powerful beam.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Hulk, casting Blessing of the Deep creates a water barrier infused with Gamma energy. Standing inside accelerates the Gamma Monstro cooldown and grants it a Damage Boost.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Chilling Charisma",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "凍潮被害 75",
          "減速率 2秒間25%",
          "霜潮の移動速度 17.5 m/秒",
          "霜潮の最大移動時間 1秒",
          "霜潮範囲 幅6メートル",
          "高さ3メートル",
          {
            "text": "特殊効果 Namor の Monstro Spawn を Frozen Spawn に置き換えます",
            "detail": true
          },
          {
            "text": "冷凍スポーン攻撃は",
            "detail": true
          },
          {
            "text": "ヒット時に 15% の低速効果を適用し",
            "detail": true
          },
          {
            "text": "1 秒間持続します",
            "detail": true
          },
          "連携強化時　最大距離での霜波ダメージ 50",
          "連携強化時　減速率 2秒間40%",
          {
            "text": "基本効果　Gain a new ability to summon a Frost Tide forward. The wave damages, Pushes Back, and inflicts a Slow on all enemies hit.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Luna Snow, the Frost Tide gains 1 charge and crashes down upon reaching its maximum range, dealing area damage and Slowing enemies caught near the endpoint.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "star-lord",
    "name": "スター・ロード",
    "title": "スター・ロード",
    "en": "Star-Lord",
    "role": "duelist",
    "portraitId": "star-lord",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-star-lord",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "150 HP ＋ 回復型シールド 125"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Element Guns",
        "normal": [
          {
            "text": "発動方式 拡散性のある連射ショット。",
            "detail": true
          },
          "ダメージ 1発あたり6.5ダメージ",
          {
            "text": "距離減衰は10 mから開始",
            "detail": true
          },
          {
            "text": "25 mで基礎ダメージの60%",
            "detail": true
          },
          "10 m先での弾の拡散半径 2 連続ショットの後",
          "広がりは 0.15 m に増加します",
          "5連射後",
          "スプレッドは0.24 mに拡大",
          "連射速度 毎秒40発",
          "装弾数 50",
          "クリティカル あり",
          {
            "text": "デュアルエレメントガンで敵を撃つ",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Galactic Legend",
        "normal": [
          {
            "text": "ULT中の装弾数 50",
            "changes": [
              {
                "value": "50",
                "previous": "40",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 速射砲。",
            "detail": true
          },
          "ダメージ 1発あたり6.5ダメージ",
          {
            "text": "距離減衰は25 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの75%",
            "detail": true
          },
          "連射速度 毎秒40発",
          "クリティカル なし",
          "持続時間 8秒",
          "移動速度上昇 20%",
          "リロード時間の短縮 70%",
          "最大ロック距離 40 m",
          "ULT必要コスト 3100",
          {
            "text": "特殊効果 この期間中、スターロードのリロード速度が大幅に増加します",
            "detail": true
          },
          {
            "text": "自由飛行を行い、視界内の敵をロックオンします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Rocket Propulsion",
        "normal": [
          "移動速度上昇 100%",
          "最大エネルギー 1800",
          "消費エネルギー 300/秒",
          "エネルギー回復速度 120/秒",
          {
            "text": "エネルギーを消費して移動ブーストを獲得し、前方に飛び立ちます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Blaster Barrage",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "持続時間 3秒",
          "範囲 半径8 mの球面",
          "攻撃間隔 ヒットごとに 0.1",
          "ダメージ 1ヒットあたり8ダメージ",
          {
            "text": "距離減衰は4 mから開始",
            "detail": true
          },
          {
            "text": "8 mで基礎ダメージの80%",
            "detail": true
          },
          {
            "text": "猛烈なショットを発射し、範囲内の敵にダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "右クリック",
        "name": "Stellar Shift",
        "normal": [
          "無敵時間 0.37秒",
          "チャージ数 2",
          "充電速度 1充電あたり5秒",
          {
            "text": "進行方向に回避して素早くリロードする",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Flora Munitions",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "生成されたトラップ 5",
          "トラップ生成の遅延 1",
          "トラップ持続時間 4",
          "懲役期間 0.8秒",
          "ダメージ 各30個",
          "連携強化時　生成されたトラップ 8",
          "連携強化時　ダメージ 各45個",
          {
            "text": "基本効果　Gain a new ability to toss Twisted Thorn Seeds forward. Upon landing, they rapidly Sprout and take root, generating Thorn Snares around the area. Enemies stepping on a snare take damage and suffer a Root effect.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Groot, the number of Thorn Snares deployed increases, and the damage dealt when an enemy steps on them is boosted.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Star-Soul",
        "key": "C",
        "cooldown": "25秒",
        "lines": [
          "リスポーンまでのクールダウン 105秒",
          "テレキネティックビーコンをキャンセルした後に交換するクールダウン 5秒",
          "連携強化時　KOあたりの能力CD減少 10秒",
          {
            "text": "基本効果　Gain a new ability to place a Telekinetic Beacon. You can teleport back to the location where the beacon is deployed from anywhere on the map. Upon defeat, Star-Lord will cocoon and respawn at the Telekinetic Beacon's coordinates.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Adam Warlock, every time Star-Lord participates in a KO, Telekinetic Beaconcooldown is reduced.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Cosmic Soul",
        "lines": [
          {
            "text": "復活のCD 105秒",
            "changes": [
              {
                "value": "105秒",
                "previous": "120秒",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "S11調整告知の記載。連携一覧で同名の技と操作キーを確認できていません。",
            "detail": true
          }
        ],
        "cooldown": {
          "text": "25秒",
          "changes": [
            {
              "value": "25秒",
              "previous": "30秒",
              "kind": "buff"
            }
          ]
        },
        "sourceIds": [
          "official-s11"
        ]
      }
    ]
  },
  {
    "id": "scarlet-witch",
    "name": "スカーレット・ウィッチ",
    "title": "スカーレット・ウィッチ",
    "en": "Scarlet Witch",
    "role": "duelist",
    "portraitId": "scarlet-witch",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-scarlet-witch"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Chaos Control",
        "normal": [
          {
            "text": "発動方式 円筒形の魔法フィールド",
            "detail": true
          },
          "範囲 半径3 m",
          "高さ20 mの円筒形の魔法フィールド",
          "連射速度 ヒットあたり 0.1 秒",
          "ダメージ 1ヒットあたり7.5",
          {
            "text": "距離減衰は10 mから開始",
            "detail": true
          },
          {
            "text": "20 mで基礎ダメージの90%",
            "detail": true
          },
          "ヒットあたりのchthonianバーストリチャージ ヒットあたり 0.15",
          "装弾数 無限",
          "クリティカル なし",
          {
            "text": "特殊効果1 範囲内で最も近い敵を攻撃する",
            "detail": true
          },
          {
            "text": "特殊効果2 カオスコントロールで攻撃するとクトニアンバーストをチャージする",
            "detail": true
          },
          "マークされた敵の引き込み範囲 120°コーン",
          {
            "text": "敵にカオスマジックを放ち、ダメージを与え、カオスエネルギーを回復します。範囲内のカオスマジックマークのある敵に同時にダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Reality Erasure",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "範囲 半径15 mの球体",
          "ダメージ 9999",
          "充電時間 4秒",
          "減速率 1.5 秒ずつ減速し始め",
          "効果は 3.5 秒までに -25% まで徐々に増加します",
          "ボーナスHP（自分） 100",
          {
            "text": "特殊効果 この間、スカーレット ウィッチはフリーフライト状態になり、キャスト チャージ中に近くの敵 (半径 15 メートル以内) を引き寄せます",
            "detail": true
          },
          {
            "text": "最大引っ張り速度は3 m/秒まで",
            "detail": true
          },
          "ULT必要コスト 3400",
          "時間の経過によるダメージ 50/秒",
          "4 秒かけて 80/秒に増加",
          "敵の攻撃チャンスに影響を与える 0.5%",
          {
            "text": "ボーナスHPを獲得し、エネルギーを充電しながら、自由飛行に参加してください。飛行中、継続的に近くの敵を引き寄せてカオスマークを与え、時間の経過とともに徐々に増加するダメージを与えます。その後、チャージされたエネルギーを解放して、広範囲に大ダメージを与えます。低確率でアルティメットの攻撃範囲内の敵からのダメージを受けなくなる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Mystic Projection",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "持続時間 1.5秒",
          "移動速度上昇 35%",
          "チャージ数 2",
          "充電速度 1充電あたり12秒",
          {
            "text": "特殊効果 この期間中、スカーレット ウィッチは投影状態になり",
            "detail": true
          },
          {
            "text": "チームメイトによって回復できます",
            "detail": true
          },
          {
            "text": "フリーフライトのフェーズ状態に入ります。早く終了するにはもう一度押します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Dark Seal",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "弾速 60 m/秒",
          "効果範囲生成の遅延 0.8秒",
          "範囲 半径3 mの球体",
          "効果範囲の持続時間 4.5秒",
          "検出間隔 1.25秒",
          "検出ごとのスタン持続時間 0.5秒",
          "ダメージ 20/秒",
          "減速率 30%",
          {
            "text": "ターゲットまたはシーンにヒットを当てるか、もう一度 {Ability1} を押してフォース フィールドを生成します。最初の爆発は範囲内の敵を気絶させ、残りの持続時間はスロー効果を適用し続けます。範囲内の敵にカオスマークを継続的に与える",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "Space",
        "name": "Telekinesis",
        "normal": [
          "水平方向の移動速度 6 m/秒",
          "下降速度 3.5 m/秒",
          {
            "text": "スペースを押し続けるとゆっくりと落下します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Chthonian Burst",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "弾速 120 m/秒",
          "弾のダメージ 40",
          "範囲 半径3 mの球体",
          "範囲ダメージ 35",
          "チャージ数 4",
          "デフォルトの充電速度 0.2/秒",
          {
            "text": "カオスエネルギーを消費して爆発性の魔法ミサイルを発射し、敵にダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Scarlet Hex",
        "normal": [
          "CD 10秒",
          "効果範囲 半径4 m",
          "長さ20 mの円筒状フィールド",
          "ダメージ 40",
          {
            "text": "カオス マジックの衝撃波を前方に放ち、ダメージを与え、敵にカオス マジック マークを適用します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Chaos Mark",
        "normal": [
          "ダメージ/体力変換 25%",
          {
            "text": "マークがアクティブな間、カオス コントロールを使用すると、マークされた敵にダメージを与えます。カオスマークを持つ敵にダメージを与えると、体力にボーナスが付与されます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Sorcerers Supreme",
        "key": "右クリック",
        "cooldown": "",
        "lines": [
          "発射間隔 0.12秒/ショット",
          "能力エネルギー 300",
          "1秒あたりの自然回復 15",
          "1秒あたりの自然減衰 50",
          "活性化するのに必要なエネルギー 15",
          "連携強化時　能力エネルギー 450",
          "連携強化時　1秒あたりの自然回復 22.5",
          "連携強化時　1秒あたりの自然減衰 56.5",
          "連携強化時　活性化するのに必要なエネルギー 22.5",
          "連携強化時　魔法マスタリーによって検出された敵ごとにチャージ 9",
          {
            "text": "基本効果　Chthonian Burst is replaced with Mystic Burst upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Doctor Strange, Scarlet Witch's maximum total Chaos Energy pool increases, and Chaos Control generates energy much faster when attacking.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Hex Fireworks",
        "key": "E",
        "cooldown": "12秒",
        "lines": [
          "爆発ダメージ 52",
          "脆弱性 15%",
          "脆弱性の存続期間 2秒",
          "爆発範囲 半径6 mの球体",
          "連携強化時　回復量 4.2/ヒット",
          "連携強化時　1秒あたり10回",
          {
            "text": "基本効果　Infuse firework energy into the Dark Seal forcefield, turning it into a Plasmoid Seal, allowing for a secondary blast. After expanding the Plasmoid Seal, pressing the {Ability1} key again while it persists will detonate the fireworks, dealing damage and inflicting Vulnerability.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Jubilee, Scarlet Witch receives constant healing from the firework energy while using Mystic Projection.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "winter-soldier",
    "name": "ウィンター・ソルジャー",
    "title": "ウィンター・ソルジャー",
    "en": "Winter Soldier",
    "role": "duelist",
    "portraitId": "winter-soldier",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-winter-soldier",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Roterstern",
        "normal": [
          {
            "text": "最大減衰に達する距離 30 m。減衰開始20 m",
            "detail": true,
            "changes": [
              {
                "value": "30 m",
                "previous": "40 m",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "最大減衰時のダメージ倍率 65%",
            "detail": true,
            "changes": [
              {
                "value": "65%",
                "previous": "70%",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "範囲ダメージ 40",
            "changes": [
              {
                "value": "40",
                "previous": "45",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "弾速 180 m/秒",
          "弾のダメージ 80",
          "範囲 半径5 m",
          "頂角90°の円錐形の魔法フィールド",
          "連射速度 1秒あたり2.5発",
          "装弾数 3",
          "クリティカル 発射体: はい",
          "効果範囲: いいえ",
          {
            "text": "特殊効果 発射物からダメージを受けた敵は",
            "detail": true
          },
          {
            "text": "効果範囲からダメージを受けなくなります",
            "detail": true
          },
          {
            "text": "ブラスター Roterstern で爆発弾を発射し、命中したターゲットとその背後の敵にダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Kraken Impact",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "範囲 半径5 mの球体",
          "範囲ダメージ 70",
          "カリング期間 5秒",
          "カリングしきい値 20% 健康",
          "淘汰後の次のクラーケン衝突 8秒",
          "ULT必要コスト 3100",
          {
            "text": "高く飛び上がり、前方にダッシュしてバイオニック アームで叩きつけ、範囲内の敵にダメージを与え、カリングのマークを付けます。マークされた敵は、健康状態が特定のしきい値を下回ると即座に消滅し、短期間内に別のクラーケンインパクトに備えてバイオニックアームを再充電します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Trooper's Fist",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "平均速度 30 m/秒",
          "最大距離 9 m",
          "ダメージを奪う 25",
          "範囲 長さ：4.5 m",
          "幅：4.5 m",
          "高さ：2 m",
          "ノックバックダメージ 65",
          {
            "text": "前方にダッシュし、道沿いの敵を捕らえ、ダッシュの先に敵を打ち上げる",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "E",
        "name": "Tainted Voltage",
        "normal": [
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "弾速 100 m/秒",
          "ダメージ 55",
          "減速率 -25%",
          "持続時間が遅い 2秒",
          {
            "text": "特殊効果 発射物は敵を貫通します",
            "detail": true
          },
          {
            "text": "チャージしてバイオニック アームでターゲット方向に強力な電気パンチを発射し、範囲内の敵にダメージを与え、速度を低下させます。この能力は飛行ヒーローをノックダウンすることができます",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "右クリック",
        "name": "Bionic Hook",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "弾速 80 m/秒",
          "充電時間 0.5秒 - 4秒",
          "範囲 発射体は 0.5 秒のチャージで最大 10 メートルまで移動できます",
          "充電時間が長くなると",
          "1秒の充電で最大20 mの距離に到達できます。",
          "弾のダメージ 15",
          "範囲 半径4.5 m",
          "頂角80°の円錐形の効果範囲",
          "範囲ダメージ 20",
          {
            "text": "チャージしてバイオニック アームでフックを発射し、最初に命中したターゲットと背後に潜む敵を巻き込みます。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "パッシブ",
        "name": "Ceaseless Charge",
        "normal": [
          "ボーナスHP（自分） 40 (バイオニックフック&テイントボルテージ)",
          "50 (トルーパーズフィスト、クラーケンインパクト)",
          {
            "text": "ロータースターンはバイオニック アームの動作中に自動的にリロードされ、ウィンター ソルジャーにボーナス ヘルスを与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Timeless Veterans",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          "バーストスパイクの最大攻撃範囲 15.25 m",
          "バーストスパイクダメージ 85",
          {
            "text": "連携強化時　特殊効果 バーストスパイクは接地効果を適用し、敵をさらにノックバックします",
            "detail": true
          },
          {
            "text": "基本効果　Unlocks the Burst Spike ability. Using the bionic arm emits forward electricity, dealing damage and Knocking Back enemies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with The Punisher, the electric burst applies a Grounded effect and Knocks Back enemies even further.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Expert Instinct",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "カリング本能スタックごとのその他の能力 CD 削減 1.5秒",
          "淘汰本能最大スタック 2",
          "間引き本能スタックで死亡ダメージを軽減 1",
          "エネルギースタックごとに必要な直接ダメージ 500",
          "連携強化時　ボーナスHP 55",
          {
            "text": "基本効果　Securing or participating in a KO grants a stack of Culling Instinct. Each stack reduces the cooldowns of Winter Soldier's other abilities. All stacks are lost upon defeat.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Elsa Bloodstone, the Bonus Health generated by Ceaseless Charge is increased.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "spider-man",
    "name": "スパイダーマン",
    "title": "スパイダーマン",
    "en": "Spider-Man",
    "role": "duelist",
    "portraitId": "spider-man",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-spider-man"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "2,800"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Spider-Power",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          {
            "text": "特殊効果 デフォルトの攻撃はパンチですが",
            "detail": true
          },
          {
            "text": "パンチを2回連続で当てると次の攻撃が飛び蹴りになります。",
            "detail": true
          },
          "ダメージ 25",
          "最大距離 3 m",
          "攻撃間隔 パンチあたり 0.37 秒",
          "ダメージ 40",
          "最大距離 4 m",
          "攻撃間隔 キックあたり 0.82 秒",
          {
            "text": "拳を前方に振り上げて攻撃し、スパイダー トレーサーで敵に追加ダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Web-Cluster",
        "normal": [
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "チャージ数 5",
          "充電速度 1ショットあたり2秒",
          "弾速 120 m/秒",
          "ダメージ 30",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの50%",
            "detail": true
          },
          "クリティカル なし",
          "スパイダートレーサーの持続時間 3秒",
          "スパイダートレーサーのダメージ 45",
          {
            "text": "ウェブクラスターを発射してダメージを与え、攻撃を受けた敵にスパイダートレーサーを取り付けます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Spectacular Spin",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "範囲 半径8 mの球面",
          "持続時間 2.4秒",
          "攻撃間隔 1ヒットあたり0.08秒",
          "ダメージ 1ヒットあたり15ダメージ",
          "ボーナスHP（自分） 250",
          "遅い効果 ヒットごとに -3%",
          "持続時間が遅い 1秒",
          "気絶させるために必要なヒット数 20",
          "気絶持続時間 1.5秒",
          "ULT必要コスト 2800",
          {
            "text": "特殊効果 敵を攻撃するとスタックスロー効果が適用され、一定のスタック数に達すると敵はスタン状態になります。",
            "detail": true
          },
          {
            "text": "ウェブクラスターを周囲に発射して敵にダメージを与え、気絶させます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Web-Swing",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "最大ウェビング長さ 30 m",
          "チャージ数 3",
          "充電速度 1充電あたり6秒",
          {
            "text": "ウェビングを発射してスイングします。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Get Over Here!",
        "normal": [
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "弾速 80 m/秒",
          "最大距離 20 m",
          "弾のダメージ 25",
          "蹴る距離 24 m",
          "キックダメージ 55",
          {
            "text": "特殊効果 スパイダートレーサーでマークされた敵を攻撃し、スパイダーマンを引き寄せて飛び蹴りをします。",
            "detail": true
          },
          {
            "text": "ウェビングを発射して、ヒットした敵を巻き取ります。敵がスパイダートレーサーでタグ付けされている場合、スパイダーマンは代わりに敵に引き寄せられます",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "F",
        "name": "Amazing Combo",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "範囲 半径4 mの球体",
          "ダメージ 70",
          "チャージ数 2",
          "充電速度 1充電あたり6秒",
          {
            "text": "スパイダートレーサーで敵を上向きに打ち上げ、敵に追加ダメージを与える",
            "detail": true
          }
        ],
        "cooldown": "1秒"
      },
      {
        "key": "Space",
        "name": "Thwip and Flip",
        "normal": [
          {
            "text": "特殊効果 着地後にのみ再キャスト可能",
            "detail": true
          },
          {
            "text": "二段ジャンプをする",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Spider-Sense",
        "normal": [
          "検出をトリガーするまでの消失時間 3秒",
          "範囲 半径8 mの球面",
          {
            "text": "周囲にいる敵に警告を発する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Space",
        "name": "Wall Crawl",
        "normal": [
          "壁を這うスピード 3 m/秒",
          "全力疾走のスピード 9 m/秒",
          {
            "text": "スペースを押して壁を這い、這いながら左クリックしてダッシュします",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Symbiote Bond",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "ダメージ軽減率 90%",
          "一回限りのダメージ 30",
          "時間の経過によるダメージ 10/ヒット",
          "毎秒 1 回",
          "ダメージ範囲 半径5 mの球体",
          "連携強化時　時間の経過によるダメージ 1/ヒット",
          "連携強化時　1秒あたり10回",
          "連携強化時　減速率 50%",
          {
            "text": "基本効果　Venom shares a part of his symbiote with Spider-Man, activating their symbiote abilities. Spider-Man can convert the symbiotes into explosive spikes that inflict harm on nearby enemies and relentlessly drive them back.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Venom, this triggers additional Touch of Klyntar tendrils that continuously tether and damage enemies on top of the base effect.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Parker Power-Up",
        "key": "C",
        "cooldown": "10秒",
        "lines": [
          "粘着スパイダーボムの爆発ダメージ 50",
          "ボーナスHP 50",
          "爆発カウントダウン 2秒",
          "連携強化時　爆発マークによるボーナスHP 40",
          {
            "text": "基本効果　Peni Parker whips up a Sticky Spider-Bomb for Spider-Man! Prime it, then toss it before the timer's up for a blast that damages nearby enemies and attaches a Spider-Tracer to them. If not thrown in time, it explodes on Spider-Man, recharging all Web-Cluster shots.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Peni Parker, Spider-Tracers applied by Web-Cluster are upgraded. Detonating these upgraded marks generates <Buff>Bonus Health for Spider-Man.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "magik",
    "name": "マジック",
    "title": "マジック",
    "en": "Magik",
    "role": "duelist",
    "portraitId": "magik",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-magik"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "150 HP ＋ 回復型シールド 125"
      },
      {
        "label": "ダークチャイルドのHP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Soulsword",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 75",
          "最大距離 6.5 m",
          {
            "text": "距離減衰は4.5 mから開始",
            "detail": true
          },
          {
            "text": "6.5 mで基礎ダメージの50%",
            "detail": true
          },
          "攻撃間隔 1ヒットあたり0.83秒",
          {
            "text": "ソウルソードで前方に斬りかかる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Darkchild",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 変身",
            "detail": true
          },
          "持続時間 12秒",
          "ULT必要コスト 3400",
          {
            "text": "特殊効果 Darkchild 状態になると、Magik のすべての能力が強化されます",
            "detail": true
          },
          {
            "text": "ダークチャイルドに変身し、すべての能力が強化されます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Stepping Discs",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "平均速度 12 m/秒",
          "最大距離 10 m",
          {
            "text": "コンボアビリティの発動ウィンドウ 3秒",
            "detail": true
          },
          "チャージ数 2",
          {
            "text": "特殊効果1 Magickは移動中は無敵です",
            "detail": true
          },
          {
            "text": "特殊効果2 Magick は、Eldritch Whirl または Demon's Rage のいずれかを選択して、特定の時間枠内でコンボ アビリティを実行できます。",
            "detail": true
          },
          {
            "text": "ステッピング ディスクを飛び越えて、進行方向に短い距離をテレポートします。テレポート中に無敵になる",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "E",
        "name": "Umbral Incursion",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "平均速度 46 m/秒",
          "最大距離 16 m",
          "上向きの斬撃ダメージ 85",
          {
            "text": "前方にダッシュして敵を打ち上げる",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "左クリック",
        "name": "Eldritch Whirl",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 近接範囲内の円筒形の効果範囲",
            "detail": true
          },
          "ダメージ 50",
          "範囲 半径6 m",
          "高さ5 mの円筒形の魔法フィールド",
          {
            "text": "ステッピングディスクから出た後、ソウルソードを振りながら回転する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Magik Slash",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 直線軌道で移動する装填された発射体",
            "detail": true
          },
          "最大充電時間 2秒",
          "弾速 80 m/秒",
          "ダメージ 45 - 81 (最大ダメージは 1.2 秒のチャージ後に達成されます)",
          {
            "text": "特殊効果 発射物は敵を貫通し、貫通した敵ごとにステッピング ディスクのクールダウンを 1 秒短縮します",
            "detail": true
          },
          {
            "text": "前方にエアスラッシュを放つ",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "右クリック",
        "name": "Demon's Rage",
        "form": "通常",
        "normal": [
          {
            "text": "発動方式 近接範囲内の直方体の効果範囲",
            "detail": true
          },
          "ダメージ 1ヒットあたり20ダメージ",
          "攻撃速度 1ヒットあたり0.25秒",
          "範囲 長さ：6.5 m",
          "幅：3 m",
          "高さ：3 m",
          "召喚の最大期間 4秒",
          "召喚獣の健康状態 100",
          {
            "text": "ステッピングディスクから出た後に敵を攻撃するリンボデーモンを召喚する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Limbo's Might",
        "form": "通常",
        "normal": [
          "コンバージョン率 30%",
          "ボーナス最大HP 150",
          {
            "text": "エネルギーコストの特殊効果 受けたダメージをボーナスHPに変換する",
            "detail": true
          },
          {
            "text": "敵に与えたダメージを自分自身のボーナスHPに変換する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Soulsword",
        "form": "ダークチャイルド",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 0.15秒間隔で3回のヒットを与え",
          "各ヒットで35のダメージを与える",
          "最大距離 10 m",
          {
            "text": "距離減衰は6 mから開始",
            "detail": true
          },
          {
            "text": "10 mで基礎ダメージの25%",
            "detail": true
          },
          "攻撃間隔 1秒あたり1ヒット",
          {
            "text": "ソウルソードで前方に斬りかかる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Stepping Discs",
        "form": "ダークチャイルド",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "平均速度 17 m/秒",
          "最大距離 10 m",
          {
            "text": "コンボアビリティの発動ウィンドウ 3秒",
            "detail": true
          },
          "チャージ数 2",
          {
            "text": "特殊効果1 Magickは移動中は無敵です",
            "detail": true
          },
          {
            "text": "特殊効果2 Magick は、Eldritch Whirl または Demon's Rage のいずれかを選択して、特定の時間枠内でコンボ アビリティを実行できます。",
            "detail": true
          },
          {
            "text": "ステッピング ディスクを飛び越えて、進行方向に短い距離をテレポートします。テレポート中に無敵になる",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "E",
        "name": "Umbral Incursion",
        "form": "ダークチャイルド",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "平均速度 60 m/秒",
          "最大距離 20 m",
          "上向きの斬撃ダメージ 140",
          {
            "text": "前方にダッシュして敵を打ち上げる",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "左クリック",
        "name": "Eldritch Whirl",
        "form": "ダークチャイルド",
        "normal": [
          {
            "text": "発動方式 近接範囲内の円筒形の効果範囲",
            "detail": true
          },
          "ダメージ 0.25秒間隔で3回のヒットを与え",
          "それぞれ45ダメージを与える",
          "範囲 半径12 m",
          "高さ5 mの円筒形の魔法フィールド",
          {
            "text": "ステッピングディスクから出た後、ソウルソードを振りながら回転する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Magik Slash",
        "form": "ダークチャイルド",
        "normal": [
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "最大充電時間 2秒",
          "弾速 100 m/秒",
          "ダメージ 90 - 180 (最大ダメージは 1.8 秒のチャージ後に達成されます)",
          {
            "text": "前方にエアスラッシュを放つ",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "右クリック",
        "name": "Demon's Rage",
        "form": "ダークチャイルド",
        "normal": [
          {
            "text": "発動方式 近接範囲内の直方体の効果範囲",
            "detail": true
          },
          "ダメージ 1ヒットあたり25ダメージ",
          "攻撃速度 1ヒットあたり0.25秒",
          "範囲 長さ：6 m",
          "幅：4 m",
          "高さ：4 m",
          "召喚の最大期間 4秒",
          "召喚獣の健康状態 200",
          {
            "text": "ステッピングディスクから出た後に敵を攻撃するリンボデーモンを召喚する",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Chain of Cyttorak",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "減速率 0% から始まり",
          "5 分で 40% まで増加します",
          "時間の経過によるチェーンの損傷 10/秒",
          "最大4秒",
          {
            "text": "連携強化時　特殊効果 Cyttorak Chains は複数の敵を一度にリンクし、同じ場所に引き寄せることができます",
            "detail": true
          },
          {
            "text": "基本効果　Chain of Cyttorak can tether two enemies simultaneously, dragging both targets to the same location.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Doctor Strange, Chain of Cyttorak can tether multiple enemies at once, pulling the entire group to a singular point.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Void Pentagram",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "持続時間 5秒",
          "魔法陣の範囲 半径8 m",
          "ヘルファイア・トレイル・エネルギーの払い戻し 0.5",
          "リンボデモの健康状態 100",
          "リンボデモの期間 4秒",
          "リンボデモの攻撃範囲 6.5 m",
          "ダメージ 20/ヒット",
          "1秒あたり4回",
          "連携強化時　ヘルフロンティアの悪魔の体力増加 25",
          "連携強化時　ヘルフロンティアの悪魔の攻撃範囲増加 2.5 m",
          {
            "text": "基本効果　Casting Stepping Discs within an Hellish Magic Circle refunds energy, and each use of Stepping Discs summons a Limbo Demon.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with The Hood, the summoned Limbo Demons have heavily increased Health and a wider attack range.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "black-panther",
    "name": "ブラックパンサー",
    "title": "ブラックパンサー",
    "en": "Black Panther",
    "role": "duelist",
    "portraitId": "black-panther",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-black-panther"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "150 HP ＋ 回復型シールド 125"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,300"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Vibranium Claws",
        "normal": [
          {
            "text": "発動方式 近接攻撃",
            "detail": true
          },
          "ダメージ 35",
          "最大距離 3 m",
          "攻撃間隔 1ヒットあたり0.44秒",
          {
            "text": "ヴィブラニウムの爪を前方にスライスします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Bast's Descent",
        "normal": [
          {
            "text": "発動方式 直方体の効果範囲",
            "detail": true
          },
          "範囲 長さ：22 m",
          "幅：20 m",
          "高さ：7 m",
          {
            "text": "キャストアングル 150°",
            "detail": true
          },
          "ダメージ 150",
          "ULT必要コスト 3300",
          {
            "text": "特殊効果 バストの降下開始アニメーション中にダメージが 50% 軽減される",
            "detail": true
          },
          {
            "text": "バストを召喚し、前方に飛び出してダメージを与え、スピリットレンドをリフレッシュしながら攻撃を受けた敵にヴィブラニウムマークを付けます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Spirit Rend",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "平均速度 50 m/秒",
          "最大距離 15 m",
          "ダメージ 80",
          "ボーナスHP 25",
          "ボーナス最大HP 75",
          {
            "text": "前方に突進して敵にダメージを与えます。ヴィブラニウムマークはボーナスHPを生成し、能力をリフレッシュします",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "E",
        "name": "Spinning Kick",
        "normal": [
          {
            "text": "発動方式 移動ベースのダメージ能力",
            "detail": true
          },
          "平均速度 15 m/秒",
          "最大距離 16 m",
          "ダメージ 75",
          {
            "text": "前方に螺旋を描き、命中した敵にヴィブラニウムマークを付ける",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "Space",
        "name": "Subtle Step",
        "normal": [
          "壁を這うスピード 10 m/秒",
          {
            "text": "壁を走るにはスペースを長押しします。壁から離れた後にジャンプを実行する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Spear Toss",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する円弧状の発射体",
            "detail": true
          },
          "弾速 60 m/秒",
          "範囲 半径5 mの球体",
          "ダメージ 50",
          "チャージ数 2",
          {
            "text": "ヴィブラニウム エネルギーの槍を前方に投げ、ヴィブラニウム フォース フィールドを作成し、その範囲内の敵にヴィブラニウム マークを付けます。",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "パッシブ",
        "name": "Panther's Cunning",
        "normal": [
          "トリガー条件 体力が100を下回る",
          "ダメージブースト 20%",
          {
            "text": "体力が低いときに与えるダメージが大きくなる",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Damisa-Yao",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "効果範囲 半径8 mの球面",
          "ダメージ 30",
          "減速率 2秒間35%",
          {
            "text": "連携強化時　特殊効果 ブラックパンサーがストームとチームを組むと、範囲内の敵を自分の方に引き寄せます",
            "detail": true
          },
          "連携強化時　減速率 2秒間45%",
          {
            "text": "基本効果　Triggers the elemental power within his armor, dealing damage and applying Slow to surrounding enemies while attaching Vibranium Marks.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Storm, enemies within range are launched toward Black Panther.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Dimensional Shortcut",
        "key": "C",
        "cooldown": "35秒",
        "lines": [
          "ボーナスHP 50",
          "爆発範囲 半径8 mの球状魔法フィールド",
          "ダメージ 40",
          {
            "text": "連携強化時　特殊効果 テレポート中に手動で停止可能",
            "detail": true
          },
          {
            "text": "基本効果　Activate a Limbo stepping disc to instantly return to your position from a few seconds ago, gaining Bonus Health in the process. When the teleport ends, the disc collapses in an explosion, damaging nearby enemies and applying Vibranium Marks.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Magik, the teleportation sequence can be manually canceled mid-transit.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "hela",
    "name": "ヘラ",
    "title": "ヘラ",
    "en": "Hela",
    "role": "duelist",
    "portraitId": "hela",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-hela"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,000"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Nightsword Thorn",
        "normal": [
          {
            "text": "発動方式 単発直撃",
            "detail": true
          },
          "ダメージ 80",
          {
            "text": "距離減衰は18 mから開始",
            "detail": true
          },
          {
            "text": "35 mで基礎ダメージの75%",
            "detail": true
          },
          "連射速度 1秒あたり2発",
          "装弾数 10",
          "クリティカル あり",
          {
            "text": "ナイトソードの棘を投げる",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Goddess of Death",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "持続時間 10秒",
          "ナストロンドカラスの健康 1200",
          "連射速度 1秒あたり1発",
          "弾速 80 m/秒",
          "爆発範囲 半径6 mの球体",
          "爆発ダメージ 140",
          {
            "text": "爆発ダメージ減衰 4 mを超えるとダメージは40%に低下します",
            "detail": true
          },
          "ULT必要コスト 4000",
          {
            "text": "空に舞い上がり、両手からナストロンド・クロウを自在に繰り出す",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Astral Flock",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "ダッシュ速度 15 m/秒",
          "ダッシュ距離 18 m",
          "ボーナスHP 25",
          {
            "text": "特殊効果 ナストロンクロウに変身して無敵を獲得",
            "detail": true
          },
          {
            "text": "Nastrond Crow に変身して前方に滑空し、もう一度押すと変身を元に戻します。変身終了時にボーナスHPを獲得",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "E",
        "name": "Soul Drainer",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する円弧状の発射体",
            "detail": true
          },
          "弾速 40 m/秒",
          "ダメージ 1",
          "範囲 半径3 mの球体",
          "範囲ダメージ 40",
          "気絶持続時間 0.3秒",
          {
            "text": "爆発性のヘル スフィアを発射して近くの敵を気絶させます。",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "右クリック",
        "name": "Piercing Night",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する直線の発射体",
            "detail": true
          },
          "発射体の数 4",
          "弾速 80 m/秒",
          "弾のダメージ 10",
          "爆発の遅延 2秒",
          "範囲 半径3 mの球体",
          "範囲ダメージ 1発あたり35ダメージ",
          {
            "text": "特殊効果 命中すると発射物が敵に張り付く",
            "detail": true
          },
          {
            "text": "遅延後に爆発する複数のナイトソードの棘を発射する",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "パッシブ",
        "name": "Nastrond Crowstorm",
        "normal": [
          "遅延 1.8秒",
          "範囲 半径5 mの球体",
          "ダメージ 90",
          {
            "text": "敵を倒すとナストロンクロウが生成され、一定時間後に爆発します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Space",
        "name": "Hel's Descent",
        "normal": [
          "水平方向の移動速度 6 m/秒",
          "下降速度 3.5 m/秒",
          {
            "text": "スペースを押し続けるとゆっくりと落下します",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Hel Tendrils",
        "key": "パッシブ",
        "cooldown": "10",
        "lines": [
          "重力場の範囲 半径3 mの球体",
          "最大重力持続時間 2秒",
          "気絶持続時間 0.5秒",
          "遅い効果 中心から2.5 mで20%",
          "最大40%",
          "ダメージ 50",
          "連携強化時　ナイトソードの棘増加 2",
          "連携強化時　健康が回復しました 1発あたり20個",
          {
            "text": "基本効果　Replace Soul Drainer with Hel Tendrils. Upon hit, tendrils pull nearby enemies toward the impact point and links them, Slowingenemies that try to escape.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Venom, Piercing Night fires a dense volley of symbiote-infused Nightsword Thorns. Each direct Nightsword Thorn hit restores a portion of Hela's Health",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Deep Wrath",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "アンデッドモンスターの健康状態 150",
          "アンデッドモンスターのダメージ 1発あたり10個",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの50%",
            "detail": true
          },
          "攻撃速度 1発あたり0.33秒",
          {
            "text": "連携強化時　特殊効果 Goddess of Death 中の各攻撃は、衝撃点でアンデッド モンストロを生成します。",
            "detail": true
          },
          {
            "text": "基本効果　Whenever Hela participates in a KO, an Undead Monstro spawns at the fallen enemy's position. While an Undead Monstro is present, casting Piercing Night will command the Monstro to spit a Nightsword Thorn at the nearest enemy.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Namor, each attack during Goddess of Death spawns an Undead Monstro at the point of impact.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "storm",
    "name": "ストーム",
    "title": "ストーム",
    "en": "Storm",
    "role": "duelist",
    "portraitId": "storm",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-storm"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Wind Blade",
        "normal": [
          {
            "text": "発動方式 直線軌道で発射する発射体",
            "detail": true
          },
          "弾速 150 m/秒",
          "ダメージ 1発あたり60ダメージ",
          {
            "text": "距離減衰は15 mから開始",
            "detail": true
          },
          {
            "text": "30 mで基礎ダメージの60%",
            "detail": true
          },
          "連射速度 1秒あたり2発",
          "装弾数 12",
          "クリティカル なし",
          {
            "text": "特殊効果 風の刃が敵を貫く",
            "detail": true
          },
          {
            "text": "前方に突き刺す風刃を発射する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Omega Hurricane",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "最大選択期間 5秒",
          "竜巻の継続時間 5秒",
          "範囲 半径8 mの球面",
          "攻撃間隔 1秒あたり2ヒット",
          "ダメージ 80",
          "ボーナスHP（自分） 450",
          "ULT必要コスト 3400",
          {
            "text": "特殊効果 天候効果はアルティメット中は無効になります",
            "detail": true
          },
          {
            "text": "ハリケーンに変身して近くの敵を引き寄せてダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Weather Control",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "範囲 半径15 mの球体",
          "移動力ブースト（自身） 16%",
          "移動力ブースト（味方） 8%",
          {
            "text": "特殊効果 このオーラの下でウィンドブレードとボルトラッシュを使用すると、ストームボーナスHPが得られます",
            "detail": true
          },
          {
            "text": "ダメージ変換率: 25%",
            "detail": true
          },
          {
            "text": "最大 75 ボーナスHP",
            "detail": true
          },
          "ダメージブースト(自身) 12%",
          "ダメージブースト(味方) 8%",
          {
            "text": "特殊効果 このオーラの下では、Wind Blade のヒットによりボルト ラッシュのクールダウンが 0.5 秒短縮されます (複数の敵を攻撃した場合でも",
            "detail": true
          },
          {
            "text": "キャストごとに 1 回のみ)",
            "detail": true
          },
          {
            "text": "ボルトラッシュの効果範囲範囲半径を1 mから1.5 mに増加",
            "detail": true
          },
          {
            "text": "天候を切り替えて味方に力を与えましょう。トルネードは移動力のブーストを与えます。サンダーはダメージブーストを付与します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Goddess Boost",
        "normal": [
          {
            "text": "発動方式 球状効果範囲",
            "detail": true
          },
          "範囲 半径15 mの球体",
          "持続時間 8秒",
          "移動力ブースト（自身） 40%",
          "移動力ブースト（味方） 20%",
          "敵の遅い速度 -15%",
          "ダメージブースト(自身) 25%",
          "ダメージブースト(味方) 15%",
          "攻撃頻度 攻撃ごとに 2 秒",
          "ダメージ 35",
          {
            "text": "天候の力を利用して嵐を強化します。トルネードは移動力のブーストを与え、敵に速度低下を与えます。サンダーはダメージブーストを付与し、稲妻を召喚してダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "右クリック",
        "name": "Bolt Rush",
        "normal": [
          {
            "text": "発動方式 ストレート効果範囲",
            "detail": true
          },
          "範囲 半径1 m",
          "高さ40 mの円筒形の魔法フィールド",
          "ダメージ 80",
          {
            "text": "前方に稲妻を放つ",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      }
    ],
    "teamups": [
      {
        "name": "God of Thunder",
        "key": "左クリック",
        "cooldown": "",
        "lines": [
          "ビームダメージ 45",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの75%",
            "detail": true
          },
          "クリティカル あり",
          "効果範囲 半径3 mの球体",
          "範囲ダメージ 15",
          "連携強化時　CD 6秒",
          "連携強化時　ボルトラッシュの攻撃範囲 60 m",
          "連携強化時　ボルトラッシュの跳ね返り範囲 半径8 m",
          "連携強化時　ボルトラッシュヒットダメージ 80",
          "連携強化時　ボルトラッシュバウンスダメージ 50",
          {
            "text": "基本効果　Upgrade Wind Blade into a hitscan beam that detonates upon striking a target.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Thor, Bolt Rush becomes Chain Lightning, allowing it to bounce from foe to foe",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Jaws of Fate",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "持続時間 8秒",
          "癒しの豪雨範囲 半径15 m",
          "自己修復率 35/秒",
          "味方の回復率 25/秒",
          "連携強化時　ジェフ・ナドのダメージ 80/ヒット",
          "連携強化時　1秒あたり2回",
          "連携強化時　ジェフ・ナドのアビリティ持続時間が増加 2秒",
          "連携強化時　ジェフ・ナド範囲 半径10 m",
          "連携強化時　ジェフ・ナドの味方回復率 10/秒",
          "連携強化時　ジェフ・ナドの自己治癒率 15/秒",
          "連携強化時　飲み込むのに必要な時間 2.5",
          {
            "text": "基本効果　Unleash a torrential downpour that continuously heals both herself and her teammates.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Jeff the Land Shark, casting Omega Hurricane allows Jeff to swim inside the cyclone, generating a localized Jeff-nado.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "the-punisher",
    "name": "パニッシャー",
    "title": "パニッシャー",
    "en": "the Punisher",
    "role": "duelist",
    "portraitId": "the-punisher",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-the-punisher"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "300"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Adjudication",
        "normal": [
          {
            "text": "発動方式 速射弾",
            "detail": true
          },
          "ダメージ 1発あたり19ダメージ",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの85%",
            "detail": true
          },
          "10 m先での弾の拡散半径 半径0.075 mまで。",
          "連射速度 1秒あたり10発",
          "装弾数 40",
          "クリティカル あり",
          {
            "text": "オートマチックライフル「アジュディケーション」で敵を攻撃する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "左クリック",
        "name": "Deliverance",
        "normal": [
          {
            "text": "発動方式 瞬時に命中するショットガンの発射体",
            "detail": true
          },
          "ダメージ 1発あたり9.5ダメージ",
          {
            "text": "距離減衰は8 mから開始",
            "detail": true
          },
          {
            "text": "15 mで基礎ダメージの40%",
            "detail": true
          },
          "キャストごとに発射される弾丸 16",
          "10 m先での弾の拡散半径 0.6 m",
          "連射速度 毎秒1.43発",
          "装弾数 8",
          "クリティカル あり",
          {
            "text": "ショットガンのデリバランスで敵を攻撃します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Final Judgement",
        "normal": [
          {
            "text": "発動方式 瞬時に命中し、追尾軌道を持つ連射弾",
            "detail": true
          },
          "持続時間 10秒",
          "アイドリング時の速度が遅い -10%",
          "撮影中の速度が遅い -30%",
          "ULT必要コスト 3400",
          "ダメージ 1発あたり8ダメージ",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの70%",
            "detail": true
          },
          "10 m先での弾の拡散半径 拡散半径は 0.6 m から開始し",
          "50 ショット後には 0.3 m に減少し",
          "100 ショット後にはさらに 0.15 m に減少します。",
          "連射速度 33.33 ラウンド/秒",
          "装弾数 無限",
          "クリティカル あり",
          "弾速 60 m/秒",
          "ダメージ 50",
          "ボレーの間隔 3秒",
          "ミサイルの間隔 0.3秒",
          "ボレー当たりのミサイルの最大数 8",
          "目標ごとにロックオンできるミサイルの最大数 3",
          "最大ロック距離 40 m",
          {
            "text": "2門のガトリング砲とミサイルを発射して敵を攻撃する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Vantage Connection",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "ケーブル取り付け角度 20° - 160°",
          "ケーブルの長さ 5 m - 35 m",
          "ダッシュ速度 25 m/秒",
          {
            "text": "フックを発射してケーブルを生成し、F を押すとパニッシャーが素早く移動できるようになります。",
            "detail": true
          }
        ],
        "cooldown": "20秒"
      },
      {
        "key": "E",
        "name": "Culling Turret",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する連射発射体",
            "detail": true
          },
          "ダメージ 1発あたり10ダメージ",
          "爆発ダメージ 1発あたり10ダメージ",
          "爆発範囲 半径3 mの球体",
          "10 m先での弾の拡散半径 拡散半径は0.2 mから開始し",
          "10発後に0.1 mに減少し",
          "20発後には0.05 mにさらに減少します。",
          "連射速度 1秒あたり12.5発",
          "装弾数 200",
          "砲塔の健康状態 600",
          {
            "text": "パニッシャーを接地させ、正面からのダメージをブロックしながら大きなダメージを与えるカリング タレットを展開します。",
            "detail": true
          }
        ],
        "cooldown": "20秒"
      },
      {
        "key": "右クリック",
        "name": "Scourge Grenade",
        "normal": [
          {
            "text": "発動方式 円弧軌道を描く発射体",
            "detail": true
          },
          "弾速 40 m/秒",
          "範囲 半径5 mの球体",
          "ダメージ 45",
          "後方ジャンプ距離 9 m",
          {
            "text": "特殊効果 視界を遮る一時的な煙幕を作成する",
            "detail": true
          },
          {
            "text": "発煙手榴弾を前方に投げて敵の視界を遮り、後方に飛び降りる",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "パッシブ",
        "name": "Warrior's Gaze",
        "normal": [
          {
            "text": "特殊効果 視界から消えた敵の視界を短時間維持する",
            "detail": true
          },
          "範囲 半径30 mの球面",
          "持続時間 3秒",
          {
            "text": "視界から消えた敵の視界を短時間維持する",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Bestial Hunt",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "裁定貫通ビームダメージ 1発あたり20ダメージ",
          "救出貫通ビームダメージ 1発あたり10ダメージ",
          "連携強化時　バリアへのボーナスダメージ 40%",
          {
            "text": "基本効果　Shoot piercing bullets that carry a Damage Boost effect.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Daredevil, the bullets break enemy summoned walls and shields more quickly.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Ammo Overload",
        "key": "C",
        "cooldown": "25秒",
        "lines": [
          "デバイスの効果範囲 半径5メートル",
          "裁定射撃速度ブースト 35%",
          "救出の発射速度ブースト 40%",
          {
            "text": "連携強化時　特殊効果 基本効果に無制限の弾薬を追加します",
            "detail": true
          },
          {
            "text": "基本効果　Throw an Ammo Overload Device in the target direction. Upon entering the device's range, receive Faster Firing.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Rocket Raccoon, the device grants Infinite Ammo.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "jeff-the-land-shark",
    "name": "ジェフ・ザ・ランド・シャーク",
    "title": "ジェフ・ザ・ランド・シャーク",
    "en": "Jeff the Land Shark",
    "role": "strategist",
    "portraitId": "jeff-the-land-shark",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-jeff-the-land-shark"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,500"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Joyful Splash",
        "normal": [
          {
            "text": "発動方式 速射、遅延発射体",
            "detail": true
          },
          "弾速 100 m/秒",
          "回復量 140/秒",
          "ダメージ 70/秒",
          {
            "text": "距離減衰 ダメージ減衰は 15 メートルで始まり",
            "detail": true
          },
          {
            "text": "30 メートルで最大 60% になります。",
            "detail": true
          },
          "連射速度 1秒あたり20発",
          "装弾数 100",
          {
            "text": "癒しのスプラッシュを放つ",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Aqua Burst",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体で、効果範囲も生成します",
            "detail": true
          },
          "ダメージ 投射物ダメージ: ラウンドあたり 30 ダメージ",
          "スペル フィールド ダメージ: キャストあたり 45 ダメージ",
          "範囲 半径3 mの球体",
          {
            "text": "距離減衰 フォールオフは 1 メートルで始まり",
            "detail": true
          },
          {
            "text": "3 メートルで 50% に減少します (発射体のダメージにはフォールオフはありません)。",
            "detail": true
          },
          "弾速 150 m/秒",
          "連射速度 毎秒1.75発",
          {
            "text": "特殊効果 直撃すると敵を打ち上げることができる",
            "detail": true
          },
          "クリティカル なし",
          {
            "text": "衝撃時に爆発する高速の水球を発射し、範囲内の敵にダメージを与える",
            "detail": true
          }
        ],
        "cooldown": "3 回の充電、各充電の再充電には 3 秒かかります"
      },
      {
        "key": "Q",
        "name": "It's Jeff!",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          {
            "text": "特殊効果1 味方と敵を飲み込んだ後",
            "detail": true
          },
          {
            "text": "ジェフは敵にダメージを与え",
            "detail": true
          },
          {
            "text": "効果期間中味方を回復します",
            "detail": true
          },
          {
            "text": "その間、かくれんぼの恩恵も受けます",
            "detail": true
          },
          {
            "text": "特殊効果2 ジェフだよ！ (アルティメット アビリティ) は",
            "detail": true
          },
          {
            "text": "発動時に半径 8 メートルのヒーリング プールを残し",
            "detail": true
          },
          {
            "text": "範囲内の味方を 130/秒回復します",
            "detail": true
          },
          {
            "text": "ヒーリングプールは8秒間持続します",
            "detail": true
          },
          "範囲 半径10 m",
          "高さ5 mの円筒形魔法フィールド",
          "ダメージ 25/秒",
          "回復量 225/秒",
          "ボーナスHP（味方） 飲み込まれた味方のオーバーフローヒーリングにより",
          "ボーナスHPとして毎秒45ヘルスが付与され",
          "最大150になります。",
          "持続時間 6秒",
          "ULT必要コスト 4500",
          {
            "text": "シーンに深く潜り、再び浮上して範囲内の敵と味方の両方を飲み込み、飲み込まれたヒーローを前方に排出する前に短時間かくれんぼをアクティブにします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Hide and Seek",
        "normal": [
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          {
            "text": "特殊効果 ダイブ中に、ジェフのヒットボックスが減少する一方で、アンストッパブル",
            "detail": true
          },
          {
            "text": "時間の経過による回復、および移動ブーストを獲得します",
            "detail": true
          },
          "移動速度上昇 60%",
          "最大エネルギー 120",
          "消費エネルギー 20/秒",
          "エネルギー回復速度 15/秒",
          "回復量 35/秒",
          {
            "text": "背びれだけを露出させた状態でシーンに飛び込み、自分自身に移動力のブーストを与えます。ジェフは水没中に回復でき、壁を這う能力を獲得します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Healing Bubble",
        "normal": [
          {
            "text": "発動方式 召喚",
            "detail": true
          },
          {
            "text": "特殊効果 バブルに触れるとすぐに効果が発動します",
            "detail": true
          },
          "回復量 30/秒",
          "治癒ブースト 15%",
          "移動速度上昇 60%",
          "バフ持続時間 4秒",
          "持続時間 180秒",
          {
            "text": "バブルを吐き出し、それを集めた味方を回復し、治癒ブーストと移動ブーストを与え、近くの敵を打ち上げます。",
            "detail": true
          }
        ],
        "cooldown": "3 回の充電、各充電の再充電には 6 秒かかります"
      },
      {
        "key": "パッシブ",
        "name": "Oblivious Cuteness",
        "normal": [
          "クリティカルヒットダメージ軽減 50%",
          {
            "text": "クリティカルヒットで受けるダメージを軽減",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Guardian of the Deep",
        "key": "C",
        "cooldown": "20",
        "lines": [
          "効果範囲 半径15 mの球体",
          "回復量 45/秒",
          "オーバーヒーリングからボーナスHPへの変換率 0.5",
          "持続時間 5秒",
          "一度きりの癒し 45",
          "連携強化時　時間の経過によるダメージ 35/秒",
          {
            "text": "基本効果　Shoot out healing tendrils; linked allies receive Continuous Healing, and excess healing is converted into Bonus Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Venom, symbiote tendrils can also lash out at nearby enemies within range, inflicting continuous damage.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Mr. Pool's Interdimensional Toy Box",
        "key": "C",
        "cooldown": "15",
        "lines": [
          "デッドプールぬいぐるみの持続時間 5秒",
          "デッドプールのぬいぐるみシリーズ 半径6 m",
          "回復量 30/秒",
          "連携強化時　ダメージ 30/秒",
          {
            "text": "基本効果　Gain a new ability to spit out a Deadpool Plushie. The plushie continuously Taunts nearby enemies while spraying a healing mist onto surrounding allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Deadpool, the Deadpool Plushie asserts a much stronger Taunt while concurrently damaging enemies caught in its radius.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "luna-snow",
    "name": "ルナ・スノー",
    "title": "ルナ・スノー",
    "en": "Luna Snow",
    "role": "strategist",
    "portraitId": "luna-snow",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-luna-snow",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,800"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Light & Dark Ice",
        "normal": [
          {
            "text": "発動方式 瞬時にヒットするトリプルショット",
            "detail": true
          },
          "ダメージ 1発あたり24ダメージ",
          "合計72ダメージ",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの70%",
            "detail": true
          },
          "回復量 ラウンドごとに 24 の体力",
          "合計 72 の体力",
          "連射速度 3ショットで0.5秒",
          "最初の 2 ショットの間隔は 0.05 秒です",
          "装弾数 30",
          "クリティカル あり",
          {
            "text": "アイスショットを発射して敵にダメージを与えたり、味方を回復したりする",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Fate of Both Worlds",
        "normal": [
          {
            "text": "発動方式 術者を囲む永続的な効果範囲",
            "detail": true
          },
          "回復量 250/秒",
          "ダメージブースト 40%",
          "キャストして味方を1回回復する 200",
          "シールド耐久値 250",
          "持続時間 10秒",
          "ULT必要コスト 4800",
          {
            "text": "ステージの中心に立って踊り始めましょう！押して 2 つのパフォーマンスを切り替えます: 味方を回復するかダメージブーストを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Ice Arts",
        "normal": [
          {
            "text": "発動方式 敵を貫通する単発魔法フィールド",
            "detail": true
          },
          {
            "text": "特殊効果 以前の光と闇の氷のキャストを置き換えます",
            "detail": true
          },
          "ダメージ 1発あたり50ダメージ",
          "回復量 ラウンドごとに体力 75",
          "範囲 半径1 m",
          "高さ40 mの円筒形の魔法フィールド",
          "連射速度 毎秒1.43発",
          "持続時間 6秒",
          {
            "text": "氷の破片を短時間発射し、敵にダメージを与えたり味方を回復したりしながら、自身の体力を回復します",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "E",
        "name": "Share the Stage",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "治癒ブースト 35%",
          {
            "text": "特殊効果 アイドルオーラのマークが付いた味方に癒しを提供します",
            "detail": true
          },
          {
            "text": "アイドルオーラを持つヒーローがKOに参加するたびに",
            "detail": true
          },
          {
            "text": "アイスアーツのクールダウンを2秒短縮します",
            "detail": true
          },
          {
            "text": "味方にアイドルオーラを付与する。ルナ スノウが他の人を癒しているとき、アイドル オーラを持つ同盟者も体力を回復します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Absolute Zero",
        "normal": [
          {
            "text": "凍結時間 1.5秒",
            "changes": [
              {
                "value": "1.5秒",
                "previous": "2.7秒",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体",
            "detail": true
          },
          "弾速 80 m/秒",
          "ダメージ 50",
          {
            "text": "特殊効果 敵を合計 1.5 秒間凍結させます",
            "detail": true
          },
          {
            "text": "それらを攻撃すると、フリーズを早期に終了することができます",
            "detail": true
          },
          {
            "text": "敵の攻撃ごとに 50 のボーナスHPを付与",
            "detail": true
          },
          {
            "text": "氷の塊を投げてヒットした敵を凍らせ、体力を回復します",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "パッシブ",
        "name": "Cryo Heart",
        "normal": [
          "回復量 35/秒",
          "3秒間",
          {
            "text": "アイスアーツまたは絶対零度の詠唱時に体力を自動的に回復する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Smooth Skate",
        "normal": [
          "スケートを始めるのに必要な時間 0.5秒",
          "スケートのスピード 9.6 m/秒",
          {
            "text": "前に進み続けてアイススケートを開始し、より高いジャンプを可能にします",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Number One Idol",
        "normal": [
          "治癒ブースト 10%",
          {
            "text": "治癒力を高める。他の人を癒すときに追加の癒しを得る",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Atlas Bond",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          {
            "text": "霊狐による敵への魅了 効果廃止",
            "changes": [
              {
                "value": "効果廃止",
                "previous": "",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "霊狐が味方に命中したときの回復 80",
            "changes": [
              {
                "value": "80",
                "previous": "70",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "霊狐が敵に命中したときのダメージ 45",
            "changes": [
              {
                "value": "45",
                "previous": "35",
                "kind": "buff"
              }
            ]
          },
          "回復量 80",
          "飛行速度 60 m/秒",
          "最大飛距離 40 m",
          "ダメージ範囲 3 m",
          "連携強化時　CD 10",
          {
            "text": "基本効果　Unleash a spirit fox forward that damages enemies without applying Charm while healing any allies in its path. Activating the ability instantly cleanses all negative status effects on Luna Snow.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with White Fox, the spirit fox automatically returns after reaching its maximum distance, and the self-cleanse is retained.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Duality Dance",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          {
            "text": "つながった味方への回復から自身への回復に変換 35%",
            "changes": [
              {
                "value": "35%",
                "previous": "25%",
                "kind": "buff"
              }
            ]
          },
          "持続時間 6秒",
          "チェーンキャスト検出範囲 半径20 m",
          "最大チェーン距離 25 m",
          "与えるダメージ 自己回復率 50%",
          "味方回復量と自己回復量の比率 35%",
          "連携強化時　アイスアーツのクリティカルあたりCD減少 1.5秒",
          "連携強化時　絶対零度クリティカル当たりのcd減少 0.5秒",
          {
            "text": "基本効果　Cast Soul Bond to tether all characters within range. Attacking tethered enemies or healing linked allies restores your Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Adam Warlock, scoring critical hits with Light & Dark Ice reduces the cooldowns of Absolute Zero and Ice Arts.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "loki",
    "name": "ロキ",
    "title": "ロキ",
    "en": "Loki",
    "role": "strategist",
    "portraitId": "loki",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-loki",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,500"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Mystical Missile",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体で、効果範囲も生成します",
            "detail": true
          },
          "ダメージ 発射物はダメージを与えませんが",
          "効果範囲はキャストごとに25のダメージを与えます",
          "範囲 半径3 mの球体",
          {
            "text": "距離減衰は0.5 mから開始",
            "detail": true
          },
          {
            "text": "2.5 mで基礎ダメージの80%",
            "detail": true
          },
          "弾速 120 m/秒",
          "効果範囲治癒 1ヒットあたり40",
          "連射速度 毎秒1.75発",
          "装弾数 10",
          "クリティカル なし",
          "命中ごとの回復 1ヒットあたり15",
          {
            "text": "ミスティックミサイルを発射して味方を回復したり、敵にダメージを与えます。味方への直接攻撃は追加の回復を提供します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "God of Mischief",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          {
            "text": "特殊効果 変身後、ロキのアルティメット能力がフルチャージされます",
            "detail": true
          },
          {
            "text": "変身系アルティメットアビリティを発動すると、変身アビリティが終了するまでゴッド・オブ・イタズラの持続時間が延長される",
            "detail": true
          },
          "持続時間 12秒",
          "ULT必要コスト 4500",
          {
            "text": "ターゲットの味方または敵のヒーローに変身し、チームアップ アビリティを除くすべてのアビリティを使用します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Regeneration Domain",
        "normal": [
          {
            "text": "発動方式 ロキと幻想の場所にある効果範囲を解放する",
            "detail": true
          },
          {
            "text": "特殊効果 効果範囲はルーンストーンによって維持されます",
            "detail": true
          },
          {
            "text": "ルーンストーンが破壊されるか、最大持続時間に達すると消滅します",
            "detail": true
          },
          {
            "text": "フィールド内の味方は時間の経過とともに回復を受け",
            "detail": true
          },
          {
            "text": "受けたダメージは受けたダメージ量に応じて回復に変換されます。",
            "detail": true
          },
          "範囲 半径5 m",
          "高さ2 mの円筒形の魔法フィールド",
          "持続時間 5秒",
          "コンバージョン率 30%",
          "回復量 100/秒",
          "ルーンストーンの健康 100",
          {
            "text": "ルーンストーンを使用して、味方に治癒を提供し、受けるダメージをさらなる治癒に変換する魔法のフィールドを作成します",
            "detail": true
          }
        ],
        "cooldown": "30秒"
      },
      {
        "key": "E",
        "name": "Doppelganger",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 30 m",
          {
            "text": "特殊効果 選択した場所にイリュージョンを投影します",
            "detail": true
          },
          {
            "text": "ロキの能力の一部を発動できるイリュージョンを投影する",
            "detail": true
          }
        ],
        "cooldown": "2回の充電、各充電には12秒かかります"
      },
      {
        "key": "F",
        "name": "Devious Exchange",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 30 m",
          {
            "text": "選択したイリュージョンと交換します",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "V",
        "name": "Backstab",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "ダメージ ダメージ: 30",
          "バックスタブダメージ: +15 (合計 45)",
          "範囲 3 m",
          {
            "text": "ダガーを引き抜いて敵を刺し、敵を背後から攻撃すると追加ダメージを与えます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Deception",
        "normal": [
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          {
            "text": "特殊効果 ロキは自分の代わりに幻想を残し、継続的に自分自身を癒しながら透明になります",
            "detail": true
          },
          {
            "text": "この透明化には時間制限はありませんが、Devious Exchange のキャスト、リロード、または Doppelganger のキャスト以外のアクションを行うと、彼が可視化されます。",
            "detail": true
          },
          "回復量 目に見えない間",
          "ヘルスは 1 秒あたり 30 ヘルスの速度で回復します",
          {
            "text": "透明になり、幻想を引き起こして敵を欺く",
            "detail": true
          }
        ],
        "cooldown": {
          "text": "18秒",
          "changes": [
            {
              "value": "18秒",
              "previous": "15秒",
              "kind": "nerf"
            }
          ]
        }
      }
    ],
    "teamups": [
      {
        "name": "Villain's Illusion",
        "key": "C",
        "cooldown": "30",
        "lines": [
          {
            "text": "幻影が破壊されるごとにE「Doppelganger」とF「Devious Exchange」のCDを短縮 1秒",
            "changes": [
              {
                "value": "1秒",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "持続時間 6秒",
          "連携強化時　持続時間 8秒",
          "連携強化時　死んでも健康が保たれる 150",
          {
            "text": "基本効果　Gain a new ability to target fallen heroes (friend or foe), letting Loki assume their form for a set time (cannot cast their Ultimate Ability). When Hela is selected as the Team-Up partner, each destroyed Illusion reduces the cooldowns of Doppelganger and Devious Exchange by 1秒 each.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Hela, Loki's transformation lasts slightly longer. Furthermore, taking lethal damage while transformed or in his Ultimate Ability state will merely revert him back to Loki with a sliver of Health, preventing a KO.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Vibrant Vitality",
        "key": "Shift",
        "cooldown": "30秒",
        "lines": [
          {
            "text": "Shift「Regeneration Domain」内の味方のダメージ上昇 効果廃止",
            "changes": [
              {
                "value": "効果廃止",
                "previous": "",
                "kind": "nerf"
              }
            ]
          },
          "ヘルスバーを召喚する 100",
          "持続時間 5秒",
          "フィールド範囲 半径6.5 m",
          "連携強化時　一回限りのダメージ 45",
          {
            "text": "基本効果　The Runestone triggers a psychic catalysis, expanding Regeneration Domain's radius.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Mantis, deploying Regeneration Domain emits a shockwave of psychic energy that damages enemies within the radius and slightly Launches them up.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "mantis",
    "name": "マンティス",
    "title": "マンティス",
    "en": "Mantis",
    "role": "strategist",
    "portraitId": "mantis",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-mantis",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "250"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,300"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Life Energy Blast",
        "normal": [
          {
            "text": "非クリティカル命中時のライフオーブ獲得量 0.3",
            "changes": [
              {
                "value": "0.3",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体",
            "detail": true
          },
          "ダメージ 1発あたり55ダメージ",
          "弾速 150 m/秒",
          {
            "text": "距離減衰 フォールオフなし",
            "detail": true
          },
          "連射速度 1秒あたり2.5発",
          "装弾数 15",
          "クリティカル あり",
          {
            "text": "特殊効果 クリティカルヒットによりライフオーブが 1 個生成されます",
            "detail": true
          },
          {
            "text": "非クリティカルヒットは0.3ライフオーブを生成します",
            "detail": true
          },
          {
            "text": "エネルギーのとげを発射し、クリティカル ヒット後にライフ オーブ 1 個、または非クリティカル ヒット後にライフ オーブ 0.3 個を回復します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Soul Resurgence",
        "normal": [
          {
            "text": "発動方式 術者を囲む永続的な効果範囲",
            "detail": true
          },
          "回復量 150",
          "術者と味方の1回分の回復量 200",
          "移動速度上昇 3 m/秒",
          "過剰治癒/ボーナスHP変換 100%",
          "過剰回復/最大HP変換 150",
          "範囲 半径15 mの球体",
          "持続時間 8秒",
          "ULT必要コスト 4300",
          {
            "text": "移動中に彼女の周囲にエネルギーを放出し、周囲の味方に時間の経過による治癒と移動ブーストを提供します。過剰な回復はボーナスHPに変換されます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Spore Slumber",
        "normal": [
          {
            "text": "睡眠時間 1.5秒",
            "changes": [
              {
                "value": "1.5秒",
                "previous": "3.5秒",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体で、効果範囲も生成します",
            "detail": true
          },
          "ダメージ 10",
          "範囲 半径3 mの球体",
          {
            "text": "特殊効果 カマキリの幻想が鎮静された英雄の横に現れます",
            "detail": true
          },
          {
            "text": "味方はこの幻想を攻撃して、影響を受けたヒーローを目覚めさせることができます",
            "detail": true
          },
          "幻想の健康 100",
          {
            "text": "胞子を投げて最も近い敵を鎮静させる",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "E",
        "name": "Allied Inspiration",
        "normal": [
          {
            "text": "消費ライフオーブ 2",
            "changes": [
              {
                "value": "2",
                "previous": "1",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "ダメージブースト 8%",
          "移動速度上昇 1 m/秒",
          "持続時間 8秒（最長16秒）",
          {
            "text": "ライフ オーブを消費して味方にダメージブーストを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Natural Anger",
        "normal": [
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          "ダメージブースト 12%",
          "持続時間 8秒（持続時間は重複できません",
          "繰り返しキャストすると持続時間が更新されるだけです）",
          {
            "text": "ライフ オーブを消費して自身にダメージブーストを付与する",
            "detail": true
          }
        ],
        "cooldown": "ライフオーブを1個消費する"
      },
      {
        "key": "右クリック",
        "name": "Healing Flower",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          {
            "text": "特殊効果 ヒーリングフラワーは「1回限りのヒーリング」と「時間経過によるヒーリング」の2種類のヒーリング効果を提供します。",
            "detail": true
          },
          "1回の回復量 60",
          "時間経過による回復量 1 秒あたりのターゲットの最大HPの 12 + 3%",
          "持続時間 8秒（最長16秒）",
          {
            "text": "ライフ オーブを消費して味方に時間の経過による治癒を与える",
            "detail": true
          }
        ],
        "cooldown": "ライフオーブを1個消費する"
      },
      {
        "key": "パッシブ",
        "name": "Nature's Favor",
        "normal": [
          {
            "text": "効果中の自己回復 8/秒",
            "changes": [
              {
                "value": "8/秒",
                "previous": "12.5/秒",
                "kind": "nerf"
              }
            ]
          },
          "戦闘から離れるのに必要な時間 3秒",
          "非戦闘時の移動速度 7.5 m/秒",
          {
            "text": "特殊効果 ライフ オーブを消費して時間の経過とともに回復を受けます",
            "detail": true
          },
          "持続時間 8秒",
          {
            "text": "負傷していない場合は移動力が向上し、ライフ オーブを消費すると時間の経過とともに回復します",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Star Blossom",
        "key": "右クリック",
        "cooldown": "",
        "lines": [
          "ヒーリングフラワー回復量 10+ターゲットの最大HPの3%/秒",
          "スプレッド効果範囲範囲 半径8 m",
          "治癒を広げる 7.5+ターゲットの最大HPの1.75%/秒",
          "強化されたヒールボーナス治癒 10+ターゲットの最大HPの3.5%/秒",
          "スプレッド効果範囲のワンタイムヒーリング 強化時は10",
          "15",
          {
            "text": "特殊効果 スターロードがチームアップパートナーとして選択されると、ヒーリングフラワーの治癒出力がターゲットの最大HP/秒の10 + 2.5%からターゲットの最大HP/秒の15 + 3%に強化されます。",
            "detail": true
          },
          {
            "text": "連携強化時　特殊効果 味方にヒーリングフラワーをキャストすると、ヒーリング効果が強化され、広がります",
            "detail": true
          },
          {
            "text": "連携強化時　特殊効果 スターロードがチームアップパートナーとして選択されると、ヒーリングフラワーの治癒出力がターゲットの最大HP/秒の10 + 2.5%からターゲットの最大HP/秒の15 + 3%に強化されます。",
            "detail": true
          },
          {
            "text": "基本効果　Recasting Healing Flower on a teammate with the effect enhances and spreads the healing aura.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Star-Lord, using Healing Flower on any teammate instantly triggers the enhanced Spell Field and healing effect.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Vitality Pact",
        "key": "パッシブ",
        "cooldown": "90",
        "lines": [
          "効果範囲治癒 30/秒",
          {
            "text": "特殊効果 アダム ウォーロックがチームアップ パートナーとして選択されると、自然の好意のパッシブ効果が強化されます",
            "detail": true
          },
          {
            "text": "ナチュラル・アンガーを発動した後（ナチュラル・アンガーがアクティブな間のみ）",
            "detail": true
          },
          {
            "text": "彼女の自己回復を12.5/秒から17.5/秒に増加します。",
            "detail": true
          },
          "連携強化時　キャラクターごとに共有される最大ダメージ 300",
          "連携強化時　範囲 半径15 m",
          {
            "text": "連携強化時　特殊効果 アダム ウォーロックがチームアップ パートナーとして選択されると、自然の好意のパッシブ効果が強化されます",
            "detail": true
          },
          {
            "text": "連携強化時　ナチュラル・アンガーを発動した後（ナチュラル・アンガーがアクティブな間のみ）",
            "detail": true
          },
          {
            "text": "連携強化時　彼女の自己回復を12.5/秒から17.5/秒に増加します。",
            "detail": true
          },
          {
            "text": "基本効果　Upon defeat, Mantis can freely move as a soul, healing nearby allies, and reforge her body at a chosen spot. After using Natural Anger, the effect of Nature's Favor is enhanced, increasing the amount of healing provided.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Adam Warlock, her soul state can forge Soul Bond with nearby teammates, granting Healing Over Timeand distributing damage taken across the bond.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "peni-parker",
    "name": "ペニー・パーカー",
    "title": "ペニー・パーカー",
    "en": "Peni Parker",
    "role": "vanguard",
    "portraitId": "peni-parker",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-peni-parker",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "650"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Cyber-Web Cluster",
        "normal": [
          {
            "text": "爆発ダメージ 12。弾の直撃 15",
            "changes": [
              {
                "value": "12",
                "previous": "15",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 効果範囲を伴う速射、遅延発射体",
            "detail": true
          },
          "弾速 150 m/秒",
          "範囲 半径1.5 mの球面",
          "連射速度 1秒あたり4発",
          "クリティカル あり",
          {
            "text": "サイバーウェブクラスターを開始する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Spider-Sweeper",
        "normal": [
          {
            "text": "発動方式 強化",
            "detail": true
          },
          "掃引範囲 5 m",
          "攻撃間隔 1秒",
          "スパイダードローンの生成間隔 0.5秒",
          "アラクノマインの攻撃間隔 0.7秒",
          "アラクノ・マインの最大量 7",
          "範囲 半径4 mの球体",
          "持続時間 12秒",
          "ダメージ スイープ攻撃ダメージ: 60",
          "ULT必要コスト 3400",
          {
            "text": "特殊効果 450 のボーナスHPと 70% の移動ブーストを獲得",
            "detail": true
          },
          {
            "text": "SP//dr スーツを強化し、進路上に敵を打ち上げ、アラクノ・マイン、スパイダー ドローン、サイバーウェブを繰り返し展開します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Bionic Spider-Nest",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 10 m",
          "蜘蛛の巣の健康 350",
          "範囲 半径12 mの球体",
          "ダメージ 各スパイダードローンは 40 のダメージを与えます",
          {
            "text": "特殊効果 2 つのスパイダー ドローンが 3 秒ごとに生成され",
            "detail": true
          },
          {
            "text": "ヒットした敵を 2 秒間 8% 遅くします",
            "detail": true
          },
          {
            "text": "ヒットごとに効果がスタックされ、スロー期間がリセットされ",
            "detail": true
          },
          {
            "text": "最大 40% スタックされます。",
            "detail": true
          },
          {
            "text": "ターゲットエリアにバイオニックスパイダーネストを生成し、定期的にスパイダードローンを生成し、サイバーウェブを作成します。サイバーウェブにいる間、ペニとその仲間たちは時間の経過とともに治癒と移動力のブーストを獲得します。過剰な回復はボーナスHPに変換されます。スパイダードローンはヒット時にスロー効果を与え、複数のヒットで効果期間をスタックしてリフレッシュできます。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "E",
        "name": "Arachno-Mine",
        "normal": [
          {
            "text": "起動から爆発まで 0.7秒",
            "changes": [
              {
                "value": "0.7秒",
                "previous": "0.6秒",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "範囲 半径3 mの球体",
          "ダメージ 100",
          {
            "text": "サイバーウェブの範囲内に隠蔽できるアラクノ・マインを配備する",
            "detail": true
          }
        ],
        "cooldown": "4 回の充電、各充電の再充電には 4 秒かかります"
      },
      {
        "key": "F",
        "name": "Cyber-Bond",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "プルバック距離 10 m",
          "最大サイバーボンド距離 19 m、下降する場合はこの距離を超える可能性あり",
          "弾速 100 m/秒",
          "最小ダッシュ距離 10 m",
          "最大ダッシュ距離 30 m",
          {
            "text": "ターゲットエリアまたはサイバーウェブにリンクするウェブストランドを撃ちます。伸ばしすぎると引き戻しを引き起こします",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "Space",
        "name": "Wall Crawl",
        "normal": [
          "壁を這うスピード 7.2 m/秒",
          {
            "text": "長押しジャンプして垂直面を這う",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Cyber-Web Snare",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体",
            "detail": true
          },
          "弾速 60 m/秒",
          "範囲 半径3 mの球体",
          "ダメージ 5",
          "減速率 30%",
          "持続時間が遅い 1秒",
          "Web トレーサーの期間 5秒",
          {
            "text": "特殊効果1 ウェブトレーサーを装備した敵が再びスネアに当たると",
            "detail": true
          },
          {
            "text": "0.7秒間動けなくなります。",
            "detail": true
          },
          {
            "text": "特殊効果2 サイバーウェブに閉じ込められている間",
            "detail": true
          },
          {
            "text": "ペニ・パーカーは 1 秒あたり 25 の回復を受けます",
            "detail": true
          },
          {
            "text": "過剰な回復は最大 150 の体力までのボーナスHPに変換され",
            "detail": true
          },
          {
            "text": "25% の移動ブーストが付与されます。",
            "detail": true
          },
          {
            "text": "特殊効果 3 ペニのサイバーウェブ内の同盟者は、彼女と同じ時間の経過による治癒と移動ブーストの効果を受けるようになりました",
            "detail": true
          },
          {
            "text": "味方の移動力ブーストは 25%",
            "detail": true
          },
          {
            "text": "回復力は 15/秒です",
            "detail": true
          },
          {
            "text": "味方の過剰回復は最大 25 のボーナスHPに変換されます",
            "detail": true
          },
          {
            "text": "敵を動けなくしたり、サイバーウェブを作成したりする未来的なウェビングをキャストします。サイバーウェブにいる間、ペニとその仲間たちは時間の経過とともに治癒と移動力のブーストを獲得します。過剰な回復はボーナスHPに変換されます",
            "detail": true
          }
        ],
        "cooldown": "2回の充電、各充電の再充電には3秒かかります"
      }
    ],
    "teamups": [
      {
        "name": "Vibranium Mech",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "持続時間 5秒",
          "バリアの健康 300",
          "攻撃間隔 1ショットあたり0.18秒",
          "連携強化時　バリアの健康 400",
          {
            "text": "基本効果　Upon activation, briefly grants Cyber-Web Clusteran Attack Speedand DamageBoost.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Black Panther, activating the ability deploys a frontal Vibranium Shield, while reducing the Vibranium Energy cost of Cyber-Web Cluster.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Rocket Network",
        "key": "C",
        "cooldown": "25秒",
        "lines": [
          "蜘蛛の巣の健康 250",
          "アーマーパックの生成間隔 3秒",
          "アーマーパックからのボーナスHP 50",
          "連携強化時　スパイダードローンの自己修復 25",
          "連携強化時　スパイダードローンによるダメージ 40",
          "連携強化時　スパイダードローン生成間隔 8秒",
          {
            "text": "基本効果　Deploy an Armored Spider-Nestthat periodically drops Spider-Dronesand Armor Packsthat grant Bonus Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Rocket Raccoon, the Armored Spider-Nestpassively regenerates its own Health. Furthermore, Rocket's B.R.B.will generate Cyber-Webs, and spawn both Spider-Dronesand Arachno-Mines.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "thor",
    "name": "ソー",
    "title": "ソー",
    "en": "Thor",
    "role": "vanguard",
    "portraitId": "thor",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-thor"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "300 HP ＋ 回復型シールド 300"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Mjolnir Bash",
        "normal": [
          {
            "text": "発動方式 シングルキャスト効果範囲",
            "detail": true
          },
          "範囲 4 m",
          "攻撃間隔 0.6秒",
          "ダメージ 45",
          {
            "text": "ミョルニアを振り回して敵を攻撃します。目覚めると、ソーは稲妻のアーク波を発射してダメージを与えることができます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "God of Thunder",
        "normal": [
          {
            "text": "発動方式 有効期限が切れたときに 1 回限りの効果範囲を生成する永続的な効果範囲",
            "detail": true
          },
          "範囲 持続魔法フィールドは半径8 m",
          "高さ20 mの円筒形ですが",
          "一回限りの魔法フィールドは半径8 mの球形です。",
          "身長 9 m",
          "持続時間 1.5秒",
          "ダメージ 持続効果範囲は0.5秒間持続し",
          "40ダメージを与えます",
          "一方",
          "ワンタイム効果範囲は220ダメージを与えます。",
          {
            "text": "特殊効果 アルティメット アビリティ発動後",
            "detail": true
          },
          {
            "text": "周囲の敵を 1 秒間気絶させる",
            "detail": true
          },
          "ULT必要コスト 3100",
          {
            "text": "一定時間突進した後上向きに舞い上がり、地面を叩きつけ、範囲内の敵にダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Storm Surge",
        "normal": [
          {
            "text": "発動方式 チャージダッシュ",
            "detail": true
          },
          "最大充電時間 2秒",
          "ダッシュ距離 無料：10 m",
          "フル充電: 20 メートル",
          "敵を運んでいる場合",
          "射程はノーチャージで6 m",
          "フルチャージで13 mです。",
          "ダメージ ノーチャージダメージ: 40",
          "フルチャージダメージ: 60",
          "ソーフォースコスト 1",
          {
            "text": "前方にダッシュして敵をノックバックする前に、長押ししてミョルニアを回転させます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Lightning Realm",
        "normal": [
          {
            "text": "発動方式 永続的な効果範囲",
            "detail": true
          },
          "範囲 半径5 mの球体",
          "最大持続時間 4秒",
          "ダメージ 敵が境界を越えたときに40ダメージを与える",
          {
            "text": "特殊効果 呪文範囲内の敵ごとに",
            "detail": true
          },
          {
            "text": "ソーフォース 1 ポイントが回復します",
            "detail": true
          },
          {
            "text": "境界を越える敵は30%遅くなり",
            "detail": true
          },
          {
            "text": "境界を越える敵は2秒間空中能力を制限する追加のデバフを受けます。",
            "detail": true
          },
          {
            "text": "ヒットした敵の数に応じてソーフォースを回復する稲妻を召喚します",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "F",
        "name": "Awakening Rune",
        "normal": [
          {
            "text": "発動方式 能力強化",
            "detail": true
          },
          "キー（強化） マウス左",
          "弾速 60 m/秒",
          "攻撃間隔 最初の 3 つのステージはそれぞれ 0.4 秒続き",
          "4 番目のステージは 0.8 秒続きます。",
          "範囲 半径3 mの球体",
          "持続時間 5秒",
          "ダメージ 発射物ダメージ: 70",
          "効果範囲ダメージ: 1秒あたり15",
          "シールドの最大持続時間 2.5秒",
          "ソーフォースコスト 3",
          {
            "text": "特殊効果 近くの敵に時間の経過とともにダメージを与えます",
            "detail": true
          },
          {
            "text": "覚醒ルーンを唱えた後、少し待ってから手動で覚醒状態をキャンセルできます",
            "detail": true
          },
          {
            "text": "覚醒状態の終了時に",
            "detail": true
          },
          {
            "text": "ソーはサンダーフォースを 1 ポイント回復します。",
            "detail": true
          },
          {
            "text": "ソーフォースを消費して覚醒状態に入り、ボーナスHPを付与し、ミョルニルバッシュを強化します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Hammer Throw",
        "normal": [
          {
            "text": "発動方式 遅延ヒット後に戻ってくる単一ターゲットの発射体を発射します",
            "detail": true
          },
          "弾速 発射体は毎秒 60 メートルの速度で外側に移動し",
          "毎秒 80 メートルの速度で戻ります",
          "最大距離 24 m",
          "ダメージ 外側への発射ダメージ: 50",
          "戻り発射ダメージ: 25",
          "クリティカル なし",
          {
            "text": "特殊効果 ヒットにより 75 のボーナスHPが付与されます (複数の敵にヒットした場合でも",
            "detail": true
          },
          {
            "text": "投げごとに 1 回のみトリガーされます)",
            "detail": true
          },
          {
            "text": "ミョルニアを前方に投げると戻ってきます",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "パッシブ",
        "name": "Thorforce",
        "normal": [
          "最大背力 3",
          "ソーフォースの回復速度 ソーフォースごとに 5 秒",
          "ソーフォースあたりのボーナスHP ソーフォースの各ポイントを消費すると 50 のボーナス ヘルスが付与され",
          "3 ポイントのソーフォースを消費する能力では 150 のボーナス ヘルスが付与されます。",
          "ボーナス最大HP 150",
          "ミョルニルバッシュのソーフォース当たりのエネルギー回復量 5秒",
          "ソーフォース消費クールダウン 1.5秒",
          {
            "text": "ソーフォースを消費してボーナスHPを獲得します。ミョルニア バッシュを敵に当てると即座にソーフォースがリチャージされます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Ragnarok Rebirth",
        "key": "パッシブ",
        "cooldown": "50秒",
        "lines": [
          "復活失敗時のクールダウン 30秒",
          "復活成功時に得られる最低限の体力 300",
          "ボーナスHP 600",
          "発動中のダメージ軽減 40%",
          "連携強化時　継続回復 50/秒",
          "連携強化時　3秒間",
          {
            "text": "基本効果　Receiving fatal damage prevents immediate defeat, Thor gains a decaying pool of Bonus Health. If he participates in a KO during this time, he resurrects and recovers a small amount of Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Hela, if either of them participates in a KO, Thor instantly revives, restoring Health equal to his remaining Bonus Health and gaining a Continuous Healing effect.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Divine Armory",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "雷槍効果範囲ダメージ 30",
          "雷槍効果範囲範囲 半径5 mの球体",
          "グラウンドスラムダメージ 45",
          "グランドスラムダメージ範囲 半径5 mの球体",
          "連携強化時　ボーナスHP 100",
          {
            "text": "基本効果　Hurl a Thunder Spear that restores Thorforce for each enemy struck. Afterward, Thor canleap to the spear's explosion point, dealing a second wave of damage to all enemies within range.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Angela, leaping to the Thunder Spear grants Bonus Health.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "magneto",
    "name": "マグニートー",
    "title": "マグニートー",
    "en": "Magneto",
    "role": "vanguard",
    "portraitId": "magneto",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-magneto"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "600"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,400"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Iron Volley",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体で、効果範囲も生成します",
            "detail": true
          },
          "弾速 80 m/秒",
          "チャージ数 10",
          "最大距離 25 m",
          "範囲 最初は",
          "半径 1 m の球状の効果範囲を生成します",
          "発射体が最大距離に達すると",
          "爆発半径は半径 3 メートルの球状の効果範囲に拡大します。",
          "攻撃間隔 0.8秒",
          "ダメージ 発射ダメージ: 40",
          "効果範囲は中心に 40 のダメージを与え",
          "中心から半径 3 メートル以内では 50% に減少します。",
          {
            "text": "前方に磁気オーブを一斉射撃します。爆発の範囲は飛行距離に応じて増加します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Meteor M",
        "normal": [
          {
            "text": "発動方式 完了時に発射物を発射する永続的な効果範囲を作成し、衝撃時に別の効果範囲を生成します",
            "detail": true
          },
          "弾丸吸収範囲 半径15 mの球体",
          "弾速 45 m/秒",
          "爆発範囲 初期状態では",
          "この能力の範囲は半径 5 メートルの球状です",
          "4秒充電後",
          "半径8 mまで拡大",
          "最大持続時間 5秒",
          "ダメージ 発射物はダメージを与えません",
          "効果範囲の中央の基本ダメージは 100 から始まり",
          "完全にチャージされると 350 まで増加します",
          "エネルギーの各ポイントは効果範囲にさらに 3 ポイントのダメージを追加し",
          "中心から 6 メートルの距離でダメージは 50% に減少します。",
          "ULT必要コスト 3400",
          {
            "text": "特殊効果 発射物ダメージが吸収されるごとに",
            "detail": true
          },
          {
            "text": "威力は 0.125 増加し",
            "detail": true
          },
          {
            "text": "最大 800 発射物ダメージを吸収します。",
            "detail": true
          },
          {
            "text": "周囲のすべての材料を吸い込んで、衝撃時に大きなダメージを与える鉄の流星を鍛造します。敵の発射物を吸収すると隕石の威力を高めることができますが、過負荷になると自爆してしまいます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Metallic Curtain",
        "normal": [
          {
            "text": "発動方式 シールド",
            "detail": true
          },
          "最大エネルギー 100",
          "消費エネルギー 65/秒",
          "エネルギー回復の遅れ 1秒",
          "エネルギー回復速度 11/秒",
          {
            "text": "周囲の磁場を変化させて金属のカーテンを形成し、入ってくるすべての発射体をブロックします。",
            "detail": true
          }
        ],
        "cooldown": "3秒"
      },
      {
        "key": "E",
        "name": "Metal Bulwark",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 20 m",
          "シールド耐久値 200",
          "シールドの最大持続時間 2.5秒",
          {
            "text": "特殊効果 シールドは",
            "detail": true
          },
          {
            "text": "吸収する 100 ダメージごとに鉄の指輪を 1 チャージします。",
            "detail": true
          },
          {
            "text": "選択した味方の周りに金属の盾を召喚します。受けたダメージはマグニートーの背中のリングに変化します",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "F",
        "name": "Iron Bulwark",
        "normal": [
          "シールド耐久値 200",
          "シールドの最大持続時間 2.5秒",
          {
            "text": "特殊効果 シールドは",
            "detail": true
          },
          {
            "text": "吸収する 100 ダメージごとに鉄の指輪を 1 チャージします。",
            "detail": true
          },
          {
            "text": "自分の周囲に鉄の盾を召喚する。受けたダメージはマグニートーの背中のリングに変化します",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "右クリック",
        "name": "Mag-Cannon",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体",
            "detail": true
          },
          "弾速 120 m/秒",
          "ダメージ Iron Rings の最初のチャージは 40 ダメージを与え",
          "2 回目のチャージは 65 ダメージを与え",
          "3 回目のチャージは 90 ダメージを与えます。",
          "クリティカル なし",
          {
            "text": "特殊効果 フル充電すると、アイアンリングのノックバック距離は 6 メートルになります。",
            "detail": true
          },
          {
            "text": "マグニートーの背中の鉄の輪をマグキャノンに変換し、金属の塊を前方に発射します。リングのスタックが高いほどダメージが増加し、スタックがいっぱいになると敵をノックバックします",
            "detail": true
          }
        ],
        "cooldown": "クールダウンはありませんが、この能力は鉄の指輪が少なくとも 1 回チャージされている場合にのみ有効になります。"
      },
      {
        "key": "Space",
        "name": "Magnetic Descent",
        "normal": [
          "水平方向の移動速度 6 m/秒",
          "下降速度 3.5 m/秒",
          {
            "text": "スペースを押し続けるとゆっくりと落下します",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Metallic Chaos",
        "key": "C",
        "cooldown": "18秒",
        "lines": [
          "持続時間 8秒",
          "投射物の命中ダメージ 45",
          "効果範囲爆発ダメージ 35",
          {
            "text": "発射物のダメージ減衰 フォールオフは 20 メートルで始まり",
            "detail": true
          },
          {
            "text": "30 メートルで 70% に低下します。",
            "detail": true
          },
          {
            "text": "効果範囲ダメージ減衰 フォールオフは 0 メートルで始まり",
            "detail": true
          },
          {
            "text": "3 メートルで 70% に下がります。",
            "detail": true
          },
          "弾速 120 m/秒",
          "連携強化時　充電間隔 1回の使用あたり0.33秒",
          "連携強化時　投射物の命中ダメージ 10",
          "連携強化時　効果範囲爆発ダメージ 25",
          "連携強化時　弾速 120 m/秒",
          {
            "text": "基本効果　Summons a Chaos Greatsword that deals damage to enemies in front.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Scarlet Witch, Magnetic Cannon becomes a charged ability. Charging consumes passive energy, and each energy segment consumed fires a Chaos Greatsword that deals damage to enemies.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Magnetic Resonance",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "磁気投射による最大ダメージ吸収 300",
          "磁気投射ダメージ割合 50%",
          "磁気投射の最大持続時間 6秒",
          "連携強化時　磁気投射最大ダメージ吸収量増加 150",
          {
            "text": "基本効果　Cast a magnetic projection that mimics Magneto's movement and ability casts perfectly from the enemy's perspective.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Emma Frost, the magnetic projection receives a massive Health bump and will persist indefinitely unless destroyed or manually recalled.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "venom",
    "name": "ヴェノム",
    "title": "ヴェノム",
    "en": "Venom",
    "role": "vanguard",
    "portraitId": "venom",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-venom",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "500 HP ＋ 回復型シールド 250"
      },
      {
        "label": "ULT必要コスト",
        "value": "2,500"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Dark Predation",
        "normal": [
          {
            "text": "攻撃判定の半径 わずかに拡大",
            "changes": [
              {
                "value": "わずかに拡大",
                "previous": "",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 クアッドキャスト遅延効果範囲",
            "detail": true
          },
          "範囲 15 m",
          "攻撃間隔 0.9 秒",
          "各蔓の間隔は 0.1 秒",
          "ダメージ 20",
          "クリティカル あり",
          {
            "text": "触手を前方に伸ばして敵を攻撃します。発射体の検出半径がわずかに増加します",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Feast of the Abyss",
        "normal": [
          {
            "text": "発動方式 術者を囲むシングルキャストの効果範囲",
            "detail": true
          },
          "移動速度上昇 80%",
          "範囲 半径7 mの球体",
          "最大持続時間 4秒",
          "ダメージ ターゲットの体力の 50% に等しいダメージを与え",
          "その後追加の 50 ダメージを与える",
          "ULT必要コスト 2500",
          {
            "text": "特殊効果 与えられたダメージの 130% がボーナスHPに変換されます",
            "detail": true
          },
          "治癒減少率 30%",
          "治癒短縮期間 4秒",
          {
            "text": "自由に移動できるように地下に穴を掘ってください。一定時間経過後、または左クリックすることで、上の敵を捕食して、敵の現在の体力に基づいてダメージを与え、同等のボーナスHPを生成します。貪り食われた敵は回復量が減少する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Venom Swing",
        "normal": [
          {
            "text": "発動方式 ダッシュ",
            "detail": true
          },
          "最大ウェビング長さ 30 m",
          {
            "text": "ウェビングを前方に発射し、希望の方向への特異なスイングを可能にします。",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "E",
        "name": "Symbiotic Resilience",
        "normal": [
          {
            "text": "基礎ボーナスHP 75",
            "changes": [
              {
                "value": "75",
                "previous": "100",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "失ったHPからのボーナスHP変換率 100%",
            "changes": [
              {
                "value": "100%",
                "previous": "110%",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          {
            "text": "特殊効果 75 ボーナス ヘルスを付与し",
            "detail": true
          },
          {
            "text": "失われたヘルスの 100% をボーナス ヘルスに変換します",
            "detail": true
          },
          {
            "text": "ダメージに対してボーナスHPを生成します。ヴェノムの体力が低いほど、生成されるボーナスHPは大きくなります",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "F",
        "name": "Frenzied Arrival",
        "normal": [
          {
            "text": "距離減衰の開始 3 m。基礎ダメージ 65",
            "detail": true,
            "changes": [
              {
                "value": "3 m",
                "previous": "2 m",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "6 mでのダメージ倍率 60%",
            "detail": true,
            "changes": [
              {
                "value": "60%",
                "previous": "40%",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 40 m",
          "最小距離 3 m",
          "範囲 半径6 mの球体",
          {
            "text": "特殊効果 敵を内側にノックバックし",
            "detail": true
          },
          {
            "text": "内側へのノックバック角度は 75°",
            "detail": true
          },
          {
            "text": "一定の高さから目標の場所に向かってダッシュします。着地すると近くの敵にダメージを与え、着地地点に向かって打ち上げる",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "右クリック",
        "name": "Cellular Corrosion",
        "normal": [
          {
            "text": "発動方式 術者の周囲を囲む効果範囲",
            "detail": true
          },
          "範囲 半径8 mの球面",
          "ダメージ 効果範囲は5ダメージを与え、ターゲットが一定時間そのエリアに留まっている場合は80ダメージに増加します",
          {
            "text": "特殊効果 触手はターゲットに 25% の低速を適用し",
            "detail": true
          },
          {
            "text": "ダメージを与えるまでに 3 秒かかります",
            "detail": true
          },
          {
            "text": "ヴェノムとの距離が11 mを超えると蔓が剥がれる",
            "detail": true
          },
          {
            "text": "触手を解き放ち、手の届く範囲の敵をスローにします。時間内に脱出できなかった敵はダメージを受ける",
            "detail": true
          }
        ],
        "cooldown": "8秒"
      },
      {
        "key": "Space",
        "name": "Alien Biology",
        "normal": [
          "壁を這うスピード 3 m/秒",
          "全力疾走のスピード 9 m/秒",
          {
            "text": "スペースを押して壁を這い、這いながら左クリックしてダッシュします",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Blood Leech",
        "key": "右クリック",
        "cooldown": "",
        "lines": [
          "時間の経過によるダメージ 2/ヒット",
          "1秒あたり10回",
          "時間の経過に伴うダメージから治癒への変換率 100%",
          "触手の爆発ダメージから治癒への変換率 50%",
          "連携強化時　1回の回復量 40",
          {
            "text": "基本効果　Cellular Corrosion new effect: while tethered to enemies, continuously siphon health from every linked target, restoring Venom's Health.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Blade, Venom gains a burst of one-time healing when using certain specific abilities.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Abyssal Flames",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          "持続時間 8秒",
          "攻撃範囲 10 m",
          "ダメージ 55",
          "攻撃間隔 0.8秒",
          "連携強化時　爆発範囲 半径3 mの球体",
          "連携強化時　爆発ダメージ 20",
          {
            "text": "基本効果　Ignites the symbiote with Phoenix Flames for a duration, replacing Dark Predation with a sweeping Phoenix Touch frontal slash.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Phoenix, Venom's Phoenix Force is enhanced: every Phoenix Touch applies Sparks. Upon reaching three stacks, the Sparks detonate.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "groot",
    "name": "グルート",
    "title": "グルート",
    "en": "Groot",
    "role": "vanguard",
    "portraitId": "groot",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-groot",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "850"
      },
      {
        "label": "ULT必要コスト",
        "value": "2,800"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Vine Strike",
        "normal": [
          {
            "text": "発動方式 遅延衝撃を備えたシングルキャスト発射体",
            "detail": true
          },
          "弾速 120 m/秒",
          "最大距離 22 m",
          "攻撃間隔 0.7秒",
          "ダメージ 65",
          "クリティカル なし",
          {
            "text": "ツタを発射して敵を攻撃する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Strangling Prison",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する下向きの遅延を備えたシングルキャスト発射体",
            "detail": true
          },
          "弾速 60 m/秒",
          "範囲 半径8 mの球面",
          "ダメージ 発射物は 10 ダメージを与え",
          "効果範囲は 70 ダメージを与えます",
          "敵を閉じ込めている間",
          "0.5秒ごとに20ダメージを与える",
          "ULT必要コスト 2800",
          {
            "text": "特殊効果 敵を3.5秒間閉じ込める",
            "detail": true
          },
          {
            "text": "巨大なつるの塊を発射し、近くの敵を中心に引き寄せて閉じ込めます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Thornlash Wall",
        "normal": [
          {
            "text": "パッシブ「Flora Colossus」発動時のダメージ 65",
            "changes": [
              {
                "value": "65",
                "previous": "60",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 18 m",
          "イバラの壁の健康 250",
          {
            "text": "特殊効果 Thornlash Wallは0.5秒ごとに65ダメージを与える",
            "detail": true
          },
          {
            "text": "場所をターゲットにして、Thornlash Wall を成長させます。覚醒すると、グルートとその仲間が攻撃する近くの敵を攻撃します。",
            "detail": true
          }
        ],
        "cooldown": "2 回の充電、各充電の再充電には 6 秒かかります"
      },
      {
        "key": "E",
        "name": "Ironwood Wall",
        "normal": [
          {
            "text": "壁の耐久値 550",
            "changes": [
              {
                "value": "550",
                "previous": "600",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 10 m",
          {
            "text": "特殊効果 Ironwood Wall は 1 秒あたり 50 ボーナス ヘルスを回復し",
            "detail": true
          },
          {
            "text": "最大 250 ボーナス ヘルスを回復します",
            "detail": true
          },
          {
            "text": "目覚めたアイアンウッドの壁から15メートル以内でアンストッパブルステータスを獲得",
            "detail": true
          },
          {
            "text": "場所をターゲットにして、アイアンウッドの壁を成長させます。壁が目覚めると、グルートと近くの味方が与えるダメージにより、グルート ボーナス ヘルスが付与されます。グルートはアイアンウッドの壁の近くにいる間アンストッパブルを獲得する",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "右クリック",
        "name": "Spore Bomb",
        "normal": [
          {
            "text": "発動方式 衝撃時に効果範囲を生成する下向きの遅延を備えたシングルキャスト発射体",
            "detail": true
          },
          "弾速 60 m/秒",
          "範囲 胞子爆弾は半径 5 メートルの球状の効果範囲を生成し",
          "小さな爆発性胞子は半径 1.5 メートルの球状の効果範囲を生成します。",
          "ダメージ 発射物自体はダメージを与えませんが",
          "胞子爆弾は 55 のダメージを与え",
          "爆発性胞子は 10 のダメージを与えます。",
          {
            "text": "特殊効果 胞子爆弾は6つの爆発性胞子に爆発します",
            "detail": true
          },
          {
            "text": "複数の小さな爆発性胞子に分裂する爆発性の胞子爆弾を投げます。",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "パッシブ",
        "name": "Flora Colossus",
        "normal": [
          {
            "text": "発動方式 術者を囲む永続的な効果範囲",
            "detail": true
          },
          "範囲 半径24 m",
          "高さ40 mの円筒形の魔法フィールド",
          {
            "text": "グルートの近くの木の壁が目覚め、追加の効果が発動します。木製の壁の構築中に右クリックして、追加の壁の構築を続けます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "V",
        "name": "Furious Flora",
        "normal": [
          "範囲 最初の2回の攻撃は3メートルに達し",
          "3回目の攻撃は4メートルに達する可能性があります。",
          {
            "text": "腕でコンボを実行すると、3回目の攻撃で空中のヒットした敵をわずかに打ち上げます",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Wild Wall",
        "key": "C",
        "cooldown": "10秒",
        "lines": [
          {
            "text": "新効果 パッシブ「Flora Colossus」が発動。Shift「Thornlash Wall」と同じ効果",
            "changes": [
              {
                "value": "パッシブ「Flora Colossus」が発動",
                "previous": "",
                "kind": "new"
              }
            ]
          },
          "ワイルドウォール範囲 半径15 m",
          "バフ頻度 1秒に1回",
          "アプリケーションごとのバフ持続時間 6秒",
          "回復量 20/秒",
          "ボーナスHP 10/ヒット",
          "野生の壁の健康 200",
          "連携強化時　強化には治癒が必要 200",
          "連携強化時　治癒力の強化 35/秒",
          "連携強化時　アップグレードごとに体力が増加 50",
          {
            "text": "基本効果　Summon a Wild Wall that provides Continuous Healing and Bonus Health to allies within its range. Wild Wall is also affected by the Flora Colossus passive, with the same effect as Thornlash Wall.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Mantis, the Wild Wall evolves after providing a certain amount of healing, increasing its healing",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Bubble Buddies",
        "key": "C",
        "cooldown": "20秒",
        "lines": [
          "シールド耐久値 400",
          "最大持続時間 4秒",
          "回復量 40/秒",
          "連携強化時　回復量を増加させる 40/秒",
          "連携強化時　オーバーヒーリングからボーナスHPへの変換率 50%",
          {
            "text": "基本効果　Retreat inside a Bubble Shield to enter an Invincible state, granting self-targeted Continuous Healing.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Jeff the Land Shark, the healing effect inside the bubble is enhanced, and any excess healing converts into Bonus Health.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "captain-america",
    "name": "キャプテン・アメリカ",
    "title": "キャプテン・アメリカ",
    "en": "Captain America",
    "role": "vanguard",
    "portraitId": "captain-america",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-captain-america"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "350 HP ＋ 回復型シールド 300"
      },
      {
        "label": "ULT必要コスト",
        "value": "3,100"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Sentinel Strike",
        "normal": [
          {
            "text": "発動方式 フォーム変更",
            "detail": true
          },
          "近接範囲 4 m",
          "シールド飛行速度 60 m/秒",
          "最大飛距離 25 m",
          "ダメージ 近接攻撃ダメージ: 45",
          "フライングシールドダメージ: 45",
          "攻撃間隔 近接 1 ヒット目: 0.4 秒",
          "近接 2 ヒット目: 0.5 秒",
          "フライング シールド 1 ヒット目: 0.5 秒",
          "フライング シールド 2 ヒット目: 0.57 秒",
          "装弾数 最大4投まで",
          "クリティカル なし",
          {
            "text": "特殊効果 十字線の近くの敵を自動的にターゲットにする",
            "detail": true
          },
          {
            "text": "近づいて敵を攻撃します。 2番目の攻撃を当てると、4回跳ね返るシールドスローが可能になります",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Freedom Charge",
        "normal": [
          {
            "text": "発動方式 アクティベーション",
            "detail": true
          },
          "範囲 術者を包み込む半径4 mの球状の効果範囲と",
          "その道沿いに幅4 mの効果範囲",
          "効果範囲の持続時間 10秒",
          "効果範囲持続時間 5秒",
          "体力回復率 キャストすると 150 のボーナス ヘルスを獲得し",
          "味方に 100 のボーナス ヘルスを与えます",
          "その後毎秒",
          "100 ボーナスHPを獲得し",
          "味方に 60 ボーナスHPを与える",
          "移動速度上昇 自分と味方の両方に 30% の移動ブーストを与える",
          "ULT必要コスト 3100",
          {
            "text": "特殊効果 パス内の味方は究極のエネルギーのチャージ効率が 20% 向上します",
            "detail": true
          },
          {
            "text": "シールドを高く掲げ、前進する道を切り開き、彼自身と道沿いの味方の両方に継続的な体力と移動力のボーナスを与えます。味方はアルティメットアビリティチャージ加速も獲得します。この能力がアクティブなときにリビングレジェンドとリーディングダッシュを使用すると、敵を打ち上げることができます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Leading Dash",
        "normal": [
          {
            "text": "発動方式 チャネリングされた",
            "detail": true
          },
          "移動速度上昇 33.40%",
          "恐れ知らずの跳躍高さ 5 m",
          {
            "text": "スピードを上げ、Fearless Leap で空中に飛び出すことが可能になります。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "E",
        "name": "Vibranium Energy Saw",
        "normal": [
          {
            "text": "発動方式 跳ね返る可能性のあるシングルキャスト発射体",
            "detail": true
          },
          "弾速 80 m/秒",
          "最大距離 25 m",
          "跳弾数 3",
          "ダメージ 70,",
          {
            "text": "エネルギーを帯びたシールドを投げて、道の敵を攻撃します",
            "detail": true
          }
        ],
        "cooldown": "6秒"
      },
      {
        "key": "F",
        "name": "Liberty Rush",
        "normal": [
          {
            "text": "発動方式 シングルキャスト前方ダッシュ",
            "detail": true
          },
          "ダッシュ距離 12 m",
          "ダメージ 30",
          {
            "text": "シールドを掲げて突進する",
            "detail": true
          }
        ],
        "cooldown": "10秒"
      },
      {
        "key": "左クリック",
        "name": "Super-Soldier Slam",
        "normal": [
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          "最大距離 20 m(水平)",
          "ダメージ 30",
          {
            "text": "上空から狙ったエリアに叩きつけ、敵を打ち上げる",
            "detail": true
          }
        ],
        "cooldown": "12秒"
      },
      {
        "key": "右クリック",
        "name": "Living Legend",
        "normal": [
          {
            "text": "発動方式 チャネリングされた",
            "detail": true
          },
          "シールドの最大値 350",
          "回復シールド値 50/秒",
          "リリース後の回復が遅い 4秒",
          "破壊時CD 5秒",
          {
            "text": "跳ね返りダメージ減衰 50%",
            "detail": true
          },
          {
            "text": "シールドを上げると、入ってくる発射物をそらし、ランダムな方向に跳ね飛ばします。",
            "detail": true
          }
        ],
        "cooldown": "1秒"
      }
    ],
    "teamups": [
      {
        "name": "Stars Aligned",
        "key": "C",
        "cooldown": "12秒",
        "lines": [
          "ボーナスHP 150",
          "ダメージシェアの持続時間 2秒",
          "連携強化時　移動速度上昇 1.5 m/秒",
          {
            "text": "基本効果　Captain America can leap directly to a teammate, providing Bonus Health to both himself and the ally, while redirecting a portion of their incoming damage to himself.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Winter Soldier, the duo can trigger a mutual rally. Upon confirmation, they charge at one another, slamming together to grant Bonus Health and Movement Speed to all nearby friends. The original effect remains, now additionally granting a Speed Boost to the targeted teammate.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Voltaic Union",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "持続時間 10秒",
          "雷のようなシールドダメージ 45",
          "連携強化時　広範囲ダメージ 5",
          "連携強化時　ダメージ範囲 半径3 mの球体",
          {
            "text": "基本効果　Modifies Sentinel Strike into a Lightning Shield projectile. After landing two hits, Captain America launches the piercing Lightning Shield four times.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Thor, the lightning energy imbued in the shield intensifies. Each hit from the Lightning Shield triggers an extra burst of damage in the surrounding area.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "nightcrawler",
    "name": "ナイトクローラー",
    "title": "ナイトクローラー",
    "en": "Nightcrawler",
    "role": "strategist",
    "portraitId": "nightcrawler",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-nightcrawler"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,500"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Forged Brimstone",
        "normal": [
          "ダメージ 直撃 10",
          "効果範囲で15",
          "攻撃間隔 3ショットあたり0.9秒",
          "回復量 直撃 10",
          "効果範囲で30",
          {
            "text": "着弾時に爆発する手榴弾を 3 つ連続で前方に投げ、味方を回復しながら敵にダメージを与えます。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "右クリック",
        "name": "Three-Sword Style",
        "normal": [
          "最大エネルギー 60",
          "消費エネルギー 20/秒",
          "エネルギー回復速度 10/秒",
          "ダメージ 突き1回あたり 11",
          "クリティカルダメージ 150%",
          "最大射程 7 m",
          "突きの頻度 9回/秒",
          {
            "text": "2本の太刀とホープソードを使って連続突きで前方に攻撃します。クリティカルダメージを与えることができる。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Swift Intervention",
        "normal": [
          "使用間隔 2秒",
          "最大ターゲット範囲 20 m",
          "味方の即時回復 50",
          "時間の経過とともに自分自身と味方を癒します 25/秒",
          "4秒間",
          "治癒ブースト 4秒間20%",
          "無敵時間 0.5秒",
          {
            "text": "味方をターゲットにして味方にテレポートすると、1 回限りの回復、回復ブースト、および時間の経過による回復が得られます。",
            "detail": true
          }
        ],
        "cooldown": "2回の充電で、各充電には12秒かかります。"
      },
      {
        "key": "E",
        "name": "Smoke Shift",
        "normal": [
          "ダッシュ距離 10 m",
          "斬撃ダメージ 45",
          "ダッシュダメージ 15",
          "煙爆発ダメージ 15",
          "味方に煙による治癒を与える 50",
          "スラッシュ範囲 半径6 m",
          "リキャストウィンドウ 4秒",
          {
            "text": "開始地点を硫黄の煙でマークし、回転斬りで前方にダッシュしてダメージを与えます。ダッシュは煙の爆発を引き起こし、敵にダメージを与えて打ち上げ、味方を回復します。その後すぐに再キャストできます。 3 回目のアクティブ化では、最初のマークにテレポートします。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "F",
        "name": "Tandem Teleport",
        "normal": [
          "最大選択距離 20 m",
          "味方の即時回復 50",
          "時間経過による回復量 25/秒",
          "4秒間",
          "スピードブースト 4秒間20%",
          "無敵時間 1秒",
          "最大テレポート距離 25 m",
          {
            "text": "味方に招待状を送ります。確認したら、相手の側にテレポートして元の場所に引き戻し、即時治癒と時間経過による治癒の両方を与えます。",
            "detail": true
          }
        ],
        "cooldown": "15秒"
      },
      {
        "key": "パッシブ",
        "name": "Crawler Cling",
        "normal": [
          "効果 壁にしがみつき、自由に這うことができる。",
          {
            "text": "垂直面を這うにはジャンプ キーを押します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Phasing Finale",
        "normal": [
          "ULT必要コスト 4500",
          "最大選択距離 30 m",
          "テレポート範囲 半径20 m",
          "着陸スプレッド半径 ヴァンガード 4 m / デュエリスト 2.5 m / ストラテジスト 0.75 m",
          "ダメージブースト 10秒間20%",
          "ボーナスHP 200",
          "テレポート後の着陸時にさらに 200",
          "時間経過による回復量 10秒間50/秒",
          "敵のテレポート範囲 半径15 m",
          "第二段階ダメージ 60",
          {
            "text": "ターゲットの場所を選択すると、近くの味方全員が 1 人ずつテレポートし、目的地にスモーク ドメインを作成しながら、ダメージ ブーストと時間の経過による回復を与えます。もう一度キャストすると、スモーク ドメイン内のすべての敵にテレポートして斬りつけ、敵を自分の場所に引き寄せます。",
            "detail": true
          }
        ],
        "cooldown": ""
      }
    ],
    "teamups": [
      {
        "name": "Protective Siblings",
        "key": "C",
        "cooldown": "15秒",
        "lines": [
          "ダメージ 15",
          "回復量 50",
          "範囲 半径5メートル",
          "叩きつけダメージ 40",
          "範囲を一気に下げる 半径3 m",
          "連携強化時　ダメージ 30",
          "連携強化時　回復量 30",
          "連携強化時　範囲 半径8 m",
          {
            "text": "基本効果　Rogue infuses Nightcrawler with Chronovium Power. Upon activation, briefly vanish, and the energy radiates outward from your vanishing point, damaging enemies and healing allies. After a short delay, reappear above your original location, slamming down with three swords to deal secondary damage and apply a Slow to enemies in range.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Rogue, the Chronovium Power is recalled after the downward thrust. The recall heals allies, damages enemies, and Launches enemies toward you.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Demon Disciple",
        "key": "パッシブ",
        "cooldown": "",
        "lines": [
          "ダメージ 10",
          "回復量 40",
          "範囲 半径8 m",
          "連携強化時　ボーナスHP 25",
          {
            "text": "基本効果　Magik empowers Nightcrawler with Limbo's demonic magic. Each spatial warp (all 3 stages of Smoke Shift, both stages of Tandem Teleport, or the single stage of Swift Intervention) generates a spell field that damages enemies and heals allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Magik, every warp also coalesces demonic armor, granting Bonus Health.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  },
  {
    "id": "adam-warlock",
    "name": "アダム・ウォーロック",
    "title": "アダム・ウォーロック",
    "en": "Adam Warlock",
    "role": "strategist",
    "portraitId": "adam-warlock",
    "season": "Season 11",
    "lastUpdated": "2026-11-14",
    "sourceIds": [
      "official-adam-warlock",
      "official-s11"
    ],
    "quickFacts": [
      {
        "label": "基礎HP",
        "value": "275"
      },
      {
        "label": "ULT必要コスト",
        "value": "4,500"
      }
    ],
    "skills": [
      {
        "key": "左クリック",
        "name": "Quantum Magic",
        "normal": [
          {
            "text": "発動方式 単発直撃",
            "detail": true
          },
          "ダメージ 1発あたり60ダメージ",
          {
            "text": "距離減衰は20 mから開始",
            "detail": true
          },
          {
            "text": "40 mで基礎ダメージの60%",
            "detail": true
          },
          "連射速度 1秒あたり2発",
          "装弾数 15",
          "クリティカル あり",
          {
            "text": "量子エネルギーを発射してダメージを与える",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "F",
        "name": "Soaring Surge",
        "normal": [
          "移動速度上昇 4 m/秒",
          "最大エネルギー 120",
          "消費エネルギー 30/秒",
          "エネルギー回復速度 8/秒",
          {
            "text": "空へ飛び、飛行状態となり素早く突進する",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Q",
        "name": "Karmic Revival",
        "normal": [
          {
            "text": "発動方式 術者を囲む永続的な効果範囲",
            "detail": true
          },
          {
            "text": "特殊効果 アダムを中心に範囲内の味方を蘇生する",
            "detail": true
          },
          {
            "text": "この範囲内で倒れた味方を継続的に監視します",
            "detail": true
          },
          {
            "text": "彼らがエリアに入ると、キャスト場所で復活することができます",
            "detail": true
          },
          "復活時の健康状態 最大HPの 30%",
          "範囲 半径35 mの球面",
          "持続時間 10秒",
          "ULT必要コスト 4500",
          "復活時の健康状態 復活した味方には",
          "最大HPの 70% に等しいボーナスHPが 5 秒間与えられます",
          "ボーナスHPの減少は 5 秒から始まり",
          "2 秒で 0 まで減少します。",
          {
            "text": "仲間のカルマを目覚めさせて復活させます。復活した味方の体力は低下しますが、短期間の無敵状態を享受できます",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "Shift",
        "name": "Soul Bond",
        "normal": [
          {
            "text": "発動方式 インスタントキャスト",
            "detail": true
          },
          {
            "text": "特殊効果1 アダム・ウォーロックは",
            "detail": true
          },
          {
            "text": "リンクされた同盟者が受けるダメージの一部を共有します",
            "detail": true
          },
          {
            "text": "アダム・ウォーロックがリンクによってKOされるダメージを受けた場合、リンクは壊れ",
            "detail": true
          },
          {
            "text": "彼は1の体力を保持します",
            "detail": true
          },
          {
            "text": "また",
            "detail": true
          },
          {
            "text": "十分なダメージを受けた場合、アダム ウォーロックまたはリンクされた味方がリンクの範囲から離れた場合、または一定時間が経過した場合にも、リンクは切断されます。",
            "detail": true
          },
          {
            "text": "特殊効果2 アダムは能力の持続時間中にホバリングして攻撃することができます",
            "detail": true
          },
          "回復量 15/秒",
          "範囲 15 m",
          "持続時間 6秒",
          "ターゲットごとに共有される最大ダメージ 250",
          {
            "text": "仲間との魂の絆を築き、時間の経過とともに治癒を与え、絆全体で受けたダメージを分散させます",
            "detail": true
          }
        ],
        "cooldown": "40秒"
      },
      {
        "key": "E",
        "name": "Avatar Life Stream",
        "normal": [
          {
            "text": "初回の回復量 55",
            "changes": [
              {
                "value": "55",
                "previous": "95",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "跳ね返り回数 4",
            "changes": [
              {
                "value": "4",
                "previous": "2",
                "kind": "buff"
              }
            ]
          },
          {
            "text": "1回の合計回復量 275",
            "changes": [
              {
                "value": "275",
                "previous": "285",
                "kind": "nerf"
              }
            ]
          },
          {
            "text": "発動方式 ターゲットを絞った",
            "detail": true
          },
          {
            "text": "特殊効果 バウンスターゲットにはアダム・ウォーロックは含まれません",
            "detail": true
          },
          "自己回復量 35",
          "範囲 半径20 mの球面",
          {
            "text": "味方をターゲットにして治癒エネルギーの跳ね返る流れを狙い、詠唱時に自分自身も回復します。味方が選択されていない場合は自分自身をターゲットにする",
            "detail": true
          }
        ],
        "cooldown": "2回の充電。各充電には6秒かかります。敵にクリティカルヒットが発生した場合、アバター ライフ ストリームのCDを 1 秒短縮します。"
      },
      {
        "key": "右クリック",
        "name": "Cosmic Cluster",
        "normal": [
          {
            "text": "発動方式 複数の遅延発射体によるチャージリリース",
            "detail": true
          },
          "ダメージ 35",
          "最大発射数 5",
          "連射速度 1回のチャージショットの発射間隔は0.3秒",
          "複数のショットの間隔は0.07秒です。",
          "弾速 100 m/秒",
          {
            "text": "特殊効果 コズミック・クラスターはクアンタム・マジックと弾薬を共有しており、ヒットごとにアバター・ライフ・ストリームのクールダウンが0.6秒減少します。",
            "detail": true
          },
          {
            "text": "量子エネルギーをクラスターに集め、素早く敵に発射します。",
            "detail": true
          }
        ],
        "cooldown": ""
      },
      {
        "key": "パッシブ",
        "name": "Regenerative Cocoon",
        "normal": [
          {
            "text": "肉体が消滅しても、アダム・ウォーロックは魂として自由に動き、選んだ場所で肉体を鍛え直すことができる",
            "detail": true
          }
        ],
        "cooldown": "105秒"
      }
    ],
    "teamups": [
      {
        "name": "Cosmic Cyclone",
        "key": "Shift",
        "cooldown": "",
        "lines": [
          {
            "text": "F「Soaring Surge」の移動速度上昇 100%",
            "changes": [
              {
                "value": "100%",
                "previous": "67%",
                "kind": "buff"
              }
            ]
          },
          "移動速度上昇 20%",
          "結魂範囲増加 5 m",
          {
            "text": "連携強化時　強化時の味方のダメージ上昇 8%",
            "changes": [
              {
                "value": "8%",
                "previous": "12%",
                "kind": "nerf"
              }
            ]
          },
          "連携強化時　移動速度上昇 30%",
          {
            "text": "基本効果　Teammates linked by Soul Bond receive a Speed Boost.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Storm, linked teammates additionally gain a Damage Boost.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      },
      {
        "name": "Flawless Design",
        "key": "右クリック",
        "cooldown": "",
        "lines": [
          "宇宙クラスターに襲われた味方を回復 1発あたり18個",
          "量子魔法の弾数増加 10",
          "連携強化時　効果範囲 半径3 mの球体",
          "連携強化時　範囲ダメージ 5/ショット",
          "連携強化時　範囲回復 7/ショット",
          {
            "text": "基本効果　Cosmic Cluster now provides healing to allies.",
            "detail": true
          },
          {
            "text": "連携強化時　When teaming up with Ultron, Cosmic Cluster creates an explosion upon impact.",
            "detail": true
          }
        ],
        "sourceIds": [
          "official-teamups"
        ]
      }
    ]
  }
]);
})();
