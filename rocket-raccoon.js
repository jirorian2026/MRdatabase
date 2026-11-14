(() => {
  const data = window.MR_WIKI_DATA;
  const heroSource = "rocket-official";
  const season8 = "rocket-s8";
  const season9 = "rocket-s9";
  const season9Hotfix = "rocket-s9-hotfix";
  const season11 = "official-s11";
  const teamups = "official-teamups";

  data.sources.push(
    {
      id: heroSource,
      label: "Marvel Rivals — ロケット・ラクーン スキル詳細",
      type: "公式",
      shortLabel: "スキル",
      url: "https://www.marvelrivals.com/20241123/41360_1195663.html"
    },
    {
      id: season8,
      label: "Marvel Rivals — シーズン8 バランス調整",
      type: "公式",
      shortLabel: "S8調整",
      date: "2026-05-12",
      url: "https://www.marvelrivals.com/balancepost/20260512/41667_1299947.html"
    },
    {
      id: season9,
      label: "Marvel Rivals — シーズン9 バランス調整",
      type: "公式",
      shortLabel: "S9調整",
      date: "2026-07-06",
      url: "https://www.marvelrivals.com/balancepost/20260706/41667_1306647.html"
    },
    {
      id: season9Hotfix,
      label: "Marvel Rivals — 2026年7月11日 バランス調整",
      type: "公式",
      shortLabel: "7月11日調整",
      date: "2026-07-11",
      url: "https://www.marvelrivals.com/balancepost/20260711/41667_1307328.html"
    }
  );

  data.portraits["rocket-raccoon"] = {
    image: "./assets/1r7dptnv9wuzj-close.png",
    source: "https://www.marvelrivals.com/20241123/41360_1195663.html"
  };

  data.heroes.push({
    id: "rocket-raccoon",
    name: "ロケット・ラクーン",
    title: "ロケット・ラクーン",
    role: "strategist",
    portraitId: "rocket-raccoon",
    thumbnail: "RR",
    hp: "250",
    season: "Season 11",
    lastUpdated: "2026-11-14",
    summary: "跳ね返る回復弾と復活ビーコンで味方を支援する。壁走りとジェットパックで位置を変えられる。",
    sourceIds: [heroSource, season11],
    quickFacts: [
      { label: "基礎HP", value: "250" },
      { label: "ULT必要コスト", value: "4,300" }
    ],
    skills: [
      {
        key: "左クリック", name: "通常射撃", en: "Bombard Mode", cooldown: "—",
        normal: [
          "ダメージ 17 / 発", "装弾数 45発", "発射速度 12.05発/秒", "弾速 180 m/秒",
          { text: "距離減衰：15 mから開始", detail: true, changes: [{ value: "15 m", previous: "10 m", kind: "buff" }] },
          { text: "最大減衰に達する距離 30 m", detail: true, changes: [{ value: "30 m", previous: "20 m", kind: "buff" }] },
          { text: "最大減衰時のダメージは基礎値の55%", detail: true, changes: [{ value: "55%", previous: "40%", kind: "buff" }] },
          { text: "クリティカルあり", detail: true }
        ],
        sourceIds: [heroSource, season8, season11]
      },
      {
        key: "右クリック", name: "回復弾", en: "Repair Mode", cooldown: "—",
        normal: [
          { text: "味方に命中した際の回復 50", changes: [{ value: "50", previous: "55", kind: "nerf" }] },
          "範囲内の味方を毎秒50回復",
          { text: "自身の継続回復 毎秒20", changes: [{ value: "20", previous: "30", kind: "nerf" }] },
          "装弾数 10発", "発射速度 2発/秒", "弾速 80 m/秒", "回復範囲 半径5 m", "持続 5秒",
          { text: "壁や床で最大10回反射する。負傷した味方に近づくと減速する。", detail: true }
        ],
        sourceIds: [heroSource, season8, season11]
      },
      {
        key: "Shift", name: "ジェットパック・ダッシュ", en: "Jetpack Dash", cooldown: "10秒 / チャージ",
        normal: [
          "移動距離 8 m", "最大2チャージ",
          { text: "使用時に自身へボーナスHP 25", changes: [{ value: "25", kind: "new" }] },
          { text: "照準の方向へダッシュする。", detail: true }
        ],
        sourceIds: [heroSource, season11]
      },
      {
        key: "E", name: "復活ビーコン", en: "B.R.B.", cooldown: "40秒",
        normal: [
          "蘇生できる最大距離 50 m", "アーマーパックのボーナスHP 25", "アイテム生成間隔 3秒", "設置時間 最大300秒",
          { text: "倒れた味方を1人復活させるビーコン。アーマーパックとロケットブーツを生成する。", detail: true },
          { text: "Eで回収すると残りHPに応じてCDが短縮される。HP満タンでの回収時は最短5秒。", detail: true }
        ],
        sourceIds: [heroSource]
      },
      {
        key: "Space長押し", name: "壁走り", en: "Wild Crawl", cooldown: "—",
        normal: ["壁走り速度 8 m/秒", { text: "壁のそばでSpaceを長押しして壁を走る。", detail: true }],
        sourceIds: [heroSource]
      },
      {
        key: "Space長押し", name: "緩降下", en: "Flying Ace", cooldown: "—",
        normal: ["降下速度 3.5 m/秒", { text: "空中でSpaceを長押ししてゆっくり降下する。", detail: true }],
        sourceIds: [heroSource]
      },
      {
        key: "Q", name: "ウルト", en: "C.Y.A.", cooldown: "—",
        normal: [
          "必要エネルギー 4,300", "与ダメージ増加 最大40%", "ボーナスHP付与 最大100 / 秒",
          "ボーナスHP上限 150", "装置HP 800", "効果範囲 半径20 m", "持続 12秒",
          { text: "範囲内の味方と装置をつなぎ、与ダメージとボーナスHPを付与する。", detail: true },
          { text: "与ダメージ増加率とボーナスHP付与量は8 mから減衰し、20 mで最大時から60%減少。", detail: true },
          { text: "接続が切れて1秒後から、ボーナスHPは毎秒75減る。", detail: true }
        ],
        sourceIds: [heroSource, season9]
      }
    ],
    teamups: [
      {
        name: "スクイレル・ガール連携", en: "Mammalian Bond", key: "C", cooldown: "20秒 / チャージ",
        lines: [
          "投げるドングリ 5個", "回復 30 / 個", "アビリティのCD短縮 0.5秒 / 個",
          "最大2チャージ。スクイレル・ガールと同時編成時は3チャージ。",
          { text: "味方に直接当てるか、地面に落ちたドングリを味方が拾うと効果が発動する。", detail: true }
        ],
        sourceIds: [heroSource, teamups, season9Hotfix]
      },
      {
        name: "グルート連携", en: "Planet X Pals", key: "C", cooldown: "12秒",
        lines: [
          "胞子の直撃ダメージ 18", "胞子の範囲 半径5 m", "胞子1個の範囲回復 20",
          "胞子を撃てる時間 8秒",
          { text: "通常射撃を胞子に切り替える。着弾地点で敵に継続ダメージを与え、味方を回復してボーナスHPを付与する。", detail: true },
          { text: "グルートと同時編成時は、Xで肩に乗れる。胞子の範囲効果も長く続く。", detail: true }
        ],
        sourceIds: [heroSource, teamups, season9Hotfix]
      }
    ]
  });
})();
