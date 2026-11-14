(() => {
  const data = window.MR_WIKI_DATA;
  const base = "cyclops-official";
  const controls = "cyclops-controls";
  const s105 = "official-s105";
  const teamups = "official-teamups";
  data.sources.push(
    {
      id: base, label: "Marvel Rivals — サイクロプス スキル詳細", type: "公式", shortLabel: "スキル",
      url: "https://www.marvelrivals.com/20260611/41360_1303977.html"
    },
    {
      id: controls, label: "Marvel Rivals — サイクロプス 操作キー", type: "公式", shortLabel: "操作",
      url: "https://www.marvelrivals.com/heroes/0fiivwpc3axbz/index.html"
    },
    {
      id: s105, label: "Marvel Rivals — 2026年10月9日 バランス調整", type: "公式", shortLabel: "S10.5調整",
      date: "2026-10-06", url: "https://www.marvelrivals.com/balancepost/20261006/41667_1315864.html"
    }
  );
  data.portraits.cyclops = {
    image: "./assets/0fiivwpc3axbz-close.png",
    source: "https://www.marvelrivals.com/20260611/41360_1303977.html"
  };
  data.heroes.push({
    id: "cyclops",
    name: "サイクロプス",
    title: "サイクロプス",
    role: "duelist",
    portraitId: "cyclops",
    thumbnail: "CY",
    hp: "275",
    season: "Season 11",
    lastUpdated: "2026-11-14",
    summary: "ビームを反射・屈折させて敵を狙う。通常攻撃を当てるとリコシェ・フォースの再使用が早まる。",
    sourceIds: [base, s105],
    quickFacts: [
      { label: "基礎HP", value: "275" },
      { label: "ULT必要コスト", value: "3,400" }
    ],
    skills: [
      {
        key: "左クリック", name: "オプティック・ブラスト", en: "Optic Blast", cooldown: "—",
        normal: [
          "ダメージ 23 / ヒット", "1回の射撃につき最大3ヒット", "ヒット間隔 0.03秒", "射撃間隔 0.6秒",
          { text: "命中するたびにリコシェ・フォースのCDを0.3秒短縮。", detail: true }
        ],
        sourceIds: [base, s105]
      },
      {
        key: "右クリック", name: "コンカッシブ・ビーム", en: "Concussive Beam", cooldown: "—",
        normal: [
          "ダメージ 11.5 / ヒット", "ヒット間隔 0.083秒",
          "エネルギー最大100", "消費 25 / 秒", "回復 10 / 秒",
          { text: "敵や地形に当たるとビームが跳ね返る。命中ごとにリコシェ・フォースのCDを0.15秒短縮。", detail: true }
        ],
        sourceIds: [base]
      },
      {
        key: "E", name: "リコシェ・フォース", en: "Ricochet Force", cooldown: "15秒 / チャージ",
        normal: [
          "直撃ダメージ 75", "最大2チャージ", "連続使用の間隔 2秒", "地形で屈折した際の敵追尾範囲 12 m",
          { text: "ビームは地形に当たると屈折し、近くの敵を追尾する。使用時に自身へボーナスHP。", detail: true },
          { text: "地形で屈折したビームは8 mから距離減衰し、12 mで基準値の40%。", detail: true }
        ],
        sourceIds: [base]
      },
      {
        key: "Shift", name: "プロパルジョン・バースト", en: "Propulsion Burst", cooldown: "15秒",
        normal: [
          "ダメージ 5 / ヒット", "ヒット間隔 0.083秒", "持続 0.35〜1秒",
          "移動距離 11〜22 m", "敵の移動速度35%低下（2秒）",
          { text: "ビームを撃って自身を後ろへ移動させ、命中した敵も押し返す。", detail: true }
        ],
        sourceIds: [base]
      },
      {
        key: "F", name: "オプティック・アセント", en: "Optic Ascent", cooldown: "15秒",
        normal: [
          "ダメージ 5 / ヒット", "ヒット間隔 0.083秒", "持続 0.6秒", "上昇距離 12 m",
          { text: "真下へビームを放って上昇し、当たった敵を押し返して移動速度を落とす。", detail: true }
        ],
        sourceIds: [base]
      },
      {
        key: "パッシブ", name: "キネティック・ホバー", en: "Kinetic Hover", cooldown: "—",
        normal: [{ text: "空中でコンカッシブ・ビームを撃っている間は、ゆっくり落下する。", detail: true }],
        sourceIds: [base]
      },
      {
        key: "Q", name: "ウルト", en: "Ruby Rage", cooldown: "—",
        normal: [
          "必要エネルギー 3,400", "初撃 75＋敵最大HPの20%", "追撃 75＋敵最大HPの40%",
          "2段の間隔 1.1秒", "最大射程 60 m", "攻撃幅 初撃2 m、追撃8 m",
          { text: "バイザーを外して前方をビームで薙ぎ払う。残ったエネルギーが遅れて爆発する。", detail: true }
        ],
        sourceIds: [base, controls, s105]
      }
    ],
    teamups: [
      {
        name: "フェニックス連携", en: "Slim and Red", key: "E", cooldown: "15秒",
        lines: [
          "燃焼ダメージ 7 / ヒット（毎秒2ヒット、3秒）",
          "燃焼中の敵に左・右クリックを当てると、残り燃焼ダメージの50%を即時に与える。",
          "フェニックスと同時編成：スパーク爆発でリコシェ・フォースが0.5チャージ回復。",
          { text: "リコシェ・フォースで敵に燃焼を付与する。", detail: true }
        ],
        sourceIds: [base, teamups]
      },
      {
        name: "ガンビット連携", en: "Kinetic Kin", key: "C", cooldown: "15秒",
        lines: [
          "持続 8秒", "移動速度 +40%", "強化時のジャンプ速度 5 m/秒",
          "ガンビットと同時編成：左クリック攻撃速度 +25%、右クリックのヒット頻度 +15%。"
        ],
        sourceIds: [base, teamups, s105]
      }
    ]
  });
})();
