(() => {
  const data = window.MR_WIKI_DATA;
  const base = "strange-official";
  const s10 = "official-s10";
  const s11 = "official-s11";
  const teamups = "official-teamups";
  data.sources.push({
    id: base, label: "Marvel Rivals — ドクター・ストレンジ スキル詳細", type: "公式", shortLabel: "スキル",
    url: "https://www.marvelrivals.com/20241123/41360_1195649.html"
  });
  data.portraits["doctor-strange"] = {
    image: "./assets/1885sylnb9foa-close.png",
    source: "https://www.marvelrivals.com/20241123/41360_1195649.html"
  };
  data.heroes.push({
    id: "doctor-strange",
    name: "ドクター・ストレンジ",
    title: "ドクター・ストレンジ",
    role: "vanguard",
    portraitId: "doctor-strange",
    thumbnail: "DS",
    hp: "650",
    season: "Season 11",
    lastUpdated: "2026-11-14",
    summary: "前方にシールドを展開する。攻撃で貯めた闇の魔力を周囲へのダメージに変え、ポータルで味方の移動を助ける。",
    sourceIds: [base, s11],
    quickFacts: [
      { label: "基礎HP", value: "650" },
      { label: "ULT必要コスト", value: "3,100" }
    ],
    skills: [
      {
        key: "左クリック", name: "デナクの短剣", en: "Daggers of Denak", cooldown: "—",
        normal: [
          "ダメージ 18 / 弾", "1回につき5弾", "装弾数 12（1回につき1消費）", "発射間隔 0.8秒", "弾速 80 m/秒",
          { text: "距離減衰：10 mから開始。20 mで基礎ダメージの80%。", detail: true },
          { text: "クリティカルなし。", detail: true }
        ],
        sourceIds: [base, s10]
      },
      {
        key: "右クリック", name: "セラフィムの盾", en: "Shield of the Seraphim", cooldown: "破壊時 3秒",
        normal: [
          { text: "シールド耐久値 800", changes: [{ value: "800", previous: "850", kind: "nerf" }] },
          { text: "シールド回復 毎秒50", changes: [{ value: "50", previous: "60", kind: "nerf" }] },
          "解除から回復開始まで 1秒",
          { text: "前方にシールドを展開して攻撃を防ぐ。", detail: true }
        ],
        sourceIds: [base, s11]
      },
      {
        key: "Shift", name: "浮遊のマント", en: "Cloak of Levitation", cooldown: "12秒",
        normal: ["上昇距離 8 m", "自由飛行 6秒", { text: "上昇後、短時間飛行できる。", detail: true }],
        sourceIds: [base]
      },
      {
        key: "E", name: "メイルストロム・オブ・マッドネス", en: "Maelstrom of Madness", cooldown: "6秒",
        normal: ["闇の魔力1あたり 1.3ダメージ", "範囲 半径8 m", { text: "貯めた闇の魔力を解放して周囲の敵を攻撃する。", detail: true }],
        sourceIds: [base]
      },
      {
        key: "F", name: "ファララーの五芒星", en: "Pentagram of Farallah", cooldown: "180秒",
        normal: ["持続 20秒", { text: "2地点をつなぐポータルを開く。敵味方どちらも通過できる。", detail: true }],
        sourceIds: [base]
      },
      {
        key: "パッシブ", name: "魔法の代償", en: "Price of Magic", cooldown: "—",
        normal: [
          "短剣命中：闇の魔力 +3.5 / ヒット", "近接攻撃：闇の魔力 +10 / 命中した敵",
          { text: "闇の魔力が最大の状態で3秒経つと、2秒間回復を受けられなくなる。", detail: true }
        ],
        sourceIds: [base]
      },
      {
        key: "Q", name: "アガモットの目", en: "Eye of Agamotto", cooldown: "—",
        normal: [
          "必要エネルギー 3,100", "ダメージ 60", "範囲 半径10 m", "魂の分離 3秒",
          { text: "近くの敵の魂を分離する。魂に与えたダメージは本体にも伝わる。", detail: true }
        ],
        sourceIds: [base]
      }
    ],
    teamups: [
      {
        name: "ハルク連携", en: "Gamma Maelstrom", key: "E", cooldown: "6秒",
        lines: [
          "闇の魔力1あたり 1.3ダメージ", "範囲 半径10 m", "距離減衰なし",
          { text: "魔力が早く貯まり、最大時も回復阻害を受けない。", detail: true },
          { text: "ハルクと同時編成：発動後のエネルギーは最低25残り、時間で減衰しない。", detail: true, changes: [{ value: "25", previous: "50", kind: "nerf" }] }
        ],
        sourceIds: [base, teamups, s10, s11]
      },
      {
        name: "インビジブル・ウーマン連携", en: "Psionic Vortex", key: "E", cooldown: "6秒",
        lines: [
          "闇の魔力1あたり 1.3ダメージ", "範囲 半径8 m",
          { text: "セラフィムの盾の追加耐久値 +100（合計900）", changes: [{ value: "+100", previous: "+150", kind: "nerf" }] },
          { text: "範囲内の敵を引き寄せる。", detail: true },
          { text: "同時編成時：与ダメージの70%を自身のボーナスHPに変換（上限150）。", detail: true, changes: [{ value: "70%", previous: "50%", kind: "buff" }] }
        ],
        sourceIds: [base, teamups, s11]
      }
    ]
  });
})();
