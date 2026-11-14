/*
 * キャラクターを増やすときは、heroes 配列に1件追加するだけです。
 * normal / enhanced は一項目ずつ配列に記入します。
 * 概要は { text: "…", detail: true }。パッチの変更値は changes に { value, previous, kind } を入れます。
 * kind は buff（強化）、nerf（弱体化）、new（新規効果）。新規効果に previous は不要です。
 * 出典は sourceIds に指定し、確認できない値は「未確認」と記入します。
 */
window.MR_WIKI_DATA = {
  site: {
    title: "MARVEL RIVALS",
    subtitle: "Personal Skill Database",
    season: "Season 11",
    lastUpdated: "2026-11-14",
    disclaimer: "個人用の検証・参照ノートです。未確認の数値は掲載せず、各データの出典を画面内で確認できます。"
  },
  roles: {
    vanguard: { label: "ヴァンガード", en: "VANGUARD", color: "blue" },
    duelist: { label: "デュエリスト", en: "DUELIST", color: "red" },
    strategist: { label: "ストラテジスト", en: "STRATEGIST", color: "green" }
  },
  portraits: {
    deadpool: {
      image: "./assets/3fwwmrinftem5-close.png",
      source: "https://www.marvelrivals.com/20260115/41360_1281973.html"
    }
  },
  sources: [
    {
      id: "user-training-1114",
      label: "訓練所での実測（ユーザー記録）",
      type: "実測",
      date: "2026-11-14",
      url: null,
      note: "タンク・デッドプールへの剣左クリック3連コンボ（斬り→突き→払い）の合計。グルートはHP 850。"
    },
    {
      id: "official-s11",
      label: "Marvel Rivals — S11 Balance Post",
      type: "公式",
      shortLabel: "S11調整",
      date: "2026-11-10",
      url: "https://www.marvelrivals.com/m/balancepost/20261110/41667_1319209.html",
      note: "2026年11月13日適用のバランス調整。"
    },
    {
      id: "official-hero",
      label: "Marvel Rivals — Deadpool Hero Page",
      type: "公式",
      shortLabel: "スキル",
      date: "2026-01-15",
      url: "https://www.marvelrivals.com/20260115/41360_1281973.html",
      note: "デッドプール3ロールのスキル・連携の基本情報。"
    },
    {
      id: "official-s10",
      label: "Marvel Rivals — S10 Balance Post",
      type: "公式",
      shortLabel: "S10調整",
      date: "2026-09-08",
      url: "https://www.marvelrivals.com/balancepost/20260908/41667_1313334.html",
      note: "S10以降の基礎性能の補足。"
    },
    {
      id: "official-teamups",
      label: "Marvel Rivals — 現行チームアップ一覧",
      type: "公式",
      shortLabel: "連携",
      url: "https://www.marvelrivals.com/heroes/teamup.html"
    },
    {
      id: "reference-sheet",
      label: "デッドプール S11 スキル早見表（提供HTML）",
      type: "参照元",
      date: "2026-11-14",
      url: null,
      note: "この初期版へ移行した既存の早見表。公式リンクと注意書きは同表から引き継いでいます。"
    }
  ],
  heroes: [
    {
      id: "deadpool-vanguard",
      name: "デッドプール",
      title: "タンク・デッドプール",
      role: "vanguard",
      status: "source-linked",
      portraitId: "deadpool",
      thumbnail: "DP",
      hp: "500",
      season: "Season 11",
      lastUpdated: "2026-11-14",
      summary: "耐久・前線維持に寄せたデッドプール。銃と刀を切り替え、Fで選んだスキルを強化する。",
      sourceIds: ["official-s11", "official-hero", "official-s10", "reference-sheet"],
      quickFacts: [
        { label: "基礎HP", value: "500" },
        { label: "ヒーリングファクター（パッシブ）CD", value: "45秒" },
        { label: "ULT CD", value: "60秒" }
      ],
      tests: [
        { condition: "HP 500のタンク・デッドプール", label: "剣・未強化", value: "88", detail: "左クリック3連（斬り→突き→払い）合計", sourceIds: ["user-training-1114"] },
        { condition: "HP 500のタンク・デッドプール", label: "剣・通常強化", value: "102", detail: "左クリック3連（斬り→突き→払い）合計", sourceIds: ["user-training-1114"] },
        { condition: "HP 500のタンク・デッドプール", label: "剣・2段階強化", value: "127", detail: "左クリック3連（斬り→突き→払い）合計", sourceIds: ["user-training-1114"] },
        { condition: "HP 850のグルート", label: "剣・2段階強化", value: "137", detail: "左クリック3連（斬り→突き→払い）合計", sourceIds: ["user-training-1114"] }
      ],
      skills: [
        {
          key: "左クリック", name: "通常射撃", en: "Dual Desert Eagles",
          normal: [
            "ダメージ 36 / 発",
            "装弾数 30発",
            "連射速度 2.5発/秒",
            { text: "距離減衰：15 mから開始", detail: true },
            { text: "30 mで基礎ダメージの75%", detail: true }
          ],
          enhanced: [
            "ダメージ 40 / 発",
            "装弾数 40発",
            { text: "5発ごとに追加弾1発", detail: true },
            { text: "追加弾：範囲ダメージ 25（半径3 m）", detail: true }
          ],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "左クリック", name: "通常斬り", en: "Kick@$$ Katana",
          normal: ["ダメージ 30 / ヒット", "射程 4 m", { text: "攻撃間隔 0.60 / 0.53 / 0.60秒", detail: true }],
          enhanced: [
            "ダメージ 35 / ヒット",
            { text: "攻撃間隔 0.50 / 0.43 / 0.50秒", detail: true },
            { text: "突きがクリティカルになる", detail: true },
            { text: "Bunny系スキル命中後の次の一撃が突きになる", detail: true }
          ],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "E", name: "フィールド展開", en: "Deadpool In Your Area",
          normal: [
            "ダメージ 10 / 秒", "持続 5秒", "範囲 半径6 m",
            "銃の通常攻撃速度 +40%", "刀の通常攻撃速度 +60%",
            { text: "敵を挑発し、視界を妨害する", detail: true }
          ],
          enhanced: ["自身の被ダメージ 35%軽減", "味方の被ダメージ 25%軽減", { text: "範囲内の敵の画面下部UIを隠す", detail: true }],
          cooldown: "12秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "右クリック", name: "シールド", en: "Magical Unicorn Shield!",
          normal: ["シールドHP 300", "持続 最大4秒"],
          enhanced: ["シールドHP 400", "持続 最大4秒"],
          cooldown: "12秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Q", name: "銃ULT", en: "The Ban Hammer",
          normal: [
            "持続 8秒", "発動時のボーナスHP 300", "回復 35 / 秒",
            { text: "敵のアビリティミスごとにダメージ 35", detail: true },
            { text: "ミスごとにボーナスHP +60", detail: true }
          ],
          enhanced: ["継続ダメージ 25 / 秒", { text: "ミスごとにボーナスHP +70", detail: true }],
          cooldown: "60秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Q", name: "刀ULT", en: "The Big Test",
          normal: [
            { text: "発動時の自身へのボーナスHP 400", changes: [{ value: "400", previous: "300", kind: "buff" }] },
            "回復 50 / 秒（成功後 100 / 秒）",
            "移動速度 +15%（成功後 +30%）",
            "チャレンジ 12秒",
            "成功後の持続 6秒",
            "範囲 半径6 m",
            { text: "発動時にダッシュ斬りの残り回数を全回復", detail: true },
            { text: "成功時にヒーリングファクターのCDをリセット", detail: true }
          ],
          enhanced: [
            "成功後の持続 8秒",
            { text: "成功後の与ダメージの150%を自身のボーナスHPに変換", changes: [{ value: "150%", previous: "100%", kind: "buff" }], detail: true }
          ],
          cooldown: "60秒", sourceIds: ["official-s11", "official-hero", "reference-sheet"]
        },
        {
          key: "右クリック", name: "ダッシュ斬り", en: "Hazardous Hijinks",
          normal: ["ダメージ 40", "移動距離 最大12 m", { text: "命中でCDをリセット（最大2回）", detail: true }],
          enhanced: ["2チャージ（各10秒）", { text: "命中時にバウンド", detail: true }],
          cooldown: "10秒 / チャージ", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Space", name: "2段ジャンプ", en: "Bunny Bounce",
          normal: ["2段ジャンプ", "最大16 m", { text: "刀ULT中は、頭を踏むか壁を蹴ると再使用可能", detail: true }],
          enhanced: ["固有のF強化なし"],
          cooldown: "6秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "パッシブ", name: "ヒーリングファクター", en: "Healing Factor",
          normal: [
            "非戦闘5秒後から回復 25 / 秒",
            "自動発動中の回復 50 / 秒",
            { text: "2秒以内に200を超えるダメージを受けると自動発動", detail: true },
            { text: "発動時は短時間無敵", detail: true }
          ],
          enhanced: ["変化なし"],
          cooldown: "45秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "F", name: "レベルアップ／自撮り", en: "Upgrade!",
          normal: [
            "攻撃などでXPを獲得",
            "ゲージが満タンになるとFでスキルを1つ強化",
            { text: "とどめを刺した敵と自撮りすると追加XPを獲得", detail: true },
            { text: "自撮り中は無敵", detail: true }
          ],
          enhanced: ["強化内容はスキルごとに異なる"],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        }
      ],
      teamups: [
        { name: "ヘラ連携（F追加強化）", en: "Hel-Yeah, Honey", detail: "銃：通常弾が貫通・追加バブルが敵を追尾。刀：3回命中で 5 + 敵最大HPの1.5% の防御無視ダメージ", sourceIds: ["official-hero", "reference-sheet"] },
        { name: "ガンビット連携", en: "Gumbo Chimichangas", key: "C", cooldown: "15秒",
          lines: ["着地ダメージ 60", "範囲 半径5 m", "ガンビットと同時編成：着地ダメージ 90、スタン 0.3秒、CD 10秒"], sourceIds: ["official-hero", "official-teamups"] }
      ]
    },
    {
      id: "deadpool-duelist",
      name: "デッドプール",
      title: "DPS・デッドプール",
      role: "duelist",
      status: "source-linked",
      portraitId: "deadpool",
      thumbnail: "DP",
      hp: "275",
      season: "Season 11",
      lastUpdated: "2026-11-14",
      summary: "ダメージと追撃を優先したデッドプール。銃・刀の各ULTと、命中による移動スキルの再使用が中心。",
      sourceIds: ["official-hero", "official-s10", "reference-sheet"],
      quickFacts: [
        { label: "基礎HP", value: "275" },
        { label: "ヒーリングファクター（パッシブ）CD", value: "45秒" },
        { label: "ULT CD", value: "60秒" }
      ],
      tests: [],
      skills: [
        {
          key: "左クリック", name: "通常射撃", en: "Dual Desert Eagles",
          normal: [
            "ダメージ 42 / 発", "装弾数 30発", "連射速度 2.5発/秒",
            { text: "距離減衰：18 mから開始", detail: true },
            { text: "30 mで基礎ダメージの80%", detail: true }
          ],
          enhanced: [
            "ダメージ 46 / 発", "装弾数 40発", "連射速度 2.0発/秒",
            { text: "5発ごとに追加弾1発", detail: true },
            { text: "追加弾：範囲ダメージ 25（半径3 m）", detail: true }
          ],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "左クリック", name: "通常斬り", en: "Kick@$$ Katana",
          normal: ["ダメージ 40 / ヒット", "射程 4 m", { text: "攻撃間隔 0.60 / 0.53 / 0.60秒", detail: true }],
          enhanced: [
            "ダメージ 45 / ヒット",
            { text: "攻撃間隔 0.50 / 0.43 / 0.50秒", detail: true },
            { text: "突きがクリティカルになる", detail: true },
            { text: "Bunny Hop後の次の一撃が突きになる", detail: true }
          ],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "E", name: "フィールド展開", en: "Deadpool In Your Area",
          normal: [
            "ダメージ 15 / 秒", "持続 5秒", "範囲 半径6 m", "自身の被ダメージ 20%軽減",
            { text: "敵を挑発し、視界を妨害する", detail: true }
          ],
          enhanced: ["自身の被ダメージ 35%軽減", { text: "範囲内の敵の画面下部UIを隠す", detail: true }],
          cooldown: "12秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "右クリック", name: "頭投げ", en: "Headshot!",
          normal: [
            "往路ダメージ 30", "復路ダメージ 25",
            { text: "フィールドのダメージ 15 / 秒", detail: true },
            { text: "フィールドの持続 1秒", detail: true },
            { text: "フィールドの範囲 半径4 m", detail: true }
          ],
          enhanced: [
            "3投目の爆発ダメージ 45",
            { text: "戻る頭をキャッチして再投擲（最大3投）", detail: true },
            { text: "フィールドの持続 1投目・2投目は各1秒、3投目は2秒", detail: true }
          ],
          cooldown: "10秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Q", name: "銃ULT", en: "Skill Issue",
          normal: ["持続 8秒", { text: "敵のアビリティミスごとにダメージ 60", detail: true }],
          enhanced: ["継続ダメージ 25 / 秒", { text: "ミスごとに敵の被ダメージ +10%（最大4スタック）", detail: true }],
          cooldown: "60秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Q", name: "刀ULT", en: "Pop Quiz!",
          normal: ["回復 35 / 秒（成功後 70 / 秒）", "移動速度 +15%（成功後 +30%）", "チャレンジ 12秒", "成功後の持続 6秒"],
          enhanced: [
            "与ダメージ +15%（成功後 +30%）", "成功後の持続 8秒",
            { text: "成功時にヒーリングファクター以外のCDをリセット", detail: true }
          ],
          cooldown: "60秒", sourceIds: ["official-hero", "official-s10", "reference-sheet"]
        },
        {
          key: "右クリック", name: "ダッシュ斬り", en: "Hazardous Hijinks",
          normal: ["ダメージ 40", "移動距離 最大12 m", "2チャージ（各10秒）", { text: "命中でCDをリセット（最大2回）", detail: true }],
          enhanced: ["ダメージ 40", "2チャージ", { text: "命中時にバウンド", detail: true }],
          cooldown: "10秒 / チャージ", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Space", name: "2段ジャンプ", en: "Bunny Hop",
          normal: [
            "ダメージ 25", "ボーナスHP +25（最大50）",
            { text: "敵か味方に命中するとCDをリセット", detail: true },
            { text: "壁蹴りでも再使用可能", detail: true },
            { text: "次の刀の左クリックが突きになる", detail: true }
          ],
          enhanced: ["固有のF強化なし", { text: "刀を強化すると突きがクリティカルになる", detail: true }],
          cooldown: "6秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "パッシブ", name: "ヒーリングファクター", en: "Healing Factor",
          normal: [
            "非戦闘5秒後から回復 25 / 秒",
            "自動発動中の回復 50 / 秒",
            { text: "2秒以内に200を超えるダメージを受けると自動発動", detail: true },
            { text: "発動時は短時間無敵", detail: true }
          ],
          enhanced: ["変化なし"],
          cooldown: "45秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "F", name: "レベルアップ／自撮り", en: "Upgrade!",
          normal: [
            "攻撃などでXPを獲得",
            "ゲージが満タンになるとFでスキルを1つ強化",
            { text: "自撮りで追加XPを獲得", detail: true },
            { text: "自撮り中は無敵", detail: true }
          ],
          enhanced: ["強化内容はスキルごとに異なる"],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        }
      ],
      teamups: [
        { name: "ヘラ連携（F追加強化）", en: "Hel-Yeah, Honey", detail: "銃：通常弾が貫通・追加バブルが敵を追尾。刀：3回命中で 5 + 敵最大HPの2% の防御無視ダメージ", sourceIds: ["official-hero", "reference-sheet"] },
        { name: "ガンビット連携", en: "Gumbo Chimichangas", key: "C", cooldown: "15秒",
          lines: ["着地ダメージ 90", "範囲 半径5 m", "ガンビットと同時編成：スタン 0.3秒、CD 10秒"], sourceIds: ["official-hero", "official-teamups"] }
      ]
    },
    {
      id: "deadpool-strategist",
      name: "デッドプール",
      title: "サポート・デッドプール",
      role: "strategist",
      status: "source-linked",
      portraitId: "deadpool",
      thumbnail: "DP",
      hp: "275",
      season: "Season 11",
      lastUpdated: "2026-11-14",
      summary: "回復と味方支援に寄せたデッドプール。射撃・斬撃・移動スキルが回復を兼ねる。",
      sourceIds: ["official-hero", "official-s10", "reference-sheet"],
      quickFacts: [
        { label: "基礎HP", value: "275" },
        { label: "ヒーリングファクター（パッシブ）CD", value: "30秒" },
        { label: "ULT CD", value: "60秒" }
      ],
      tests: [],
      skills: [
        {
          key: "左クリック", name: "射撃／回復", en: "Dual Desert Eagles",
          normal: ["ダメージ 25 / 発", "回復 45 / 発", "装弾数 30発", "連射速度 2.5発/秒"],
          enhanced: [
            "ダメージ 28 / 発", "回復 50 / 発", "装弾数 40発", "連射速度 2.5発/秒",
            { text: "5発ごとに追加弾1発", detail: true },
            { text: "追加弾：回復 15", detail: true },
            { text: "追加弾：範囲回復 40（半径3 m）", detail: true },
            { text: "追加弾：範囲ダメージ 20（半径3 m）", detail: true }
          ],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "左クリック", name: "通常斬り／回復", en: "Kick@$$ Katana",
          normal: ["ダメージ 30 / ヒット", "周囲の回復 32", "回復範囲 半径5 m", { text: "攻撃間隔 0.60 / 0.53 / 0.60秒", detail: true }],
          enhanced: [
            "ダメージ 35 / ヒット", "回復 35", "回復範囲 半径8 m",
            { text: "攻撃間隔 0.50 / 0.43 / 0.50秒", detail: true },
            { text: "突きがクリティカルになる", detail: true }
          ],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "E", name: "フィールド展開", en: "Deadpool In Your Area",
          normal: [
            "ダメージ 10 / 秒", "周囲の味方を回復 60 / 秒", "持続 5秒", "範囲 半径6 m",
            { text: "敵を挑発し、視界を妨害する", detail: true }
          ],
          enhanced: ["ダメージ 10 / 秒", "周囲の味方を回復 70 / 秒", "周囲の味方の与ダメージ +20%"],
          cooldown: "10秒", sourceIds: ["official-hero", "official-s10", "reference-sheet"]
        },
        {
          key: "右クリック", name: "頭投げ／回復", en: "Bouncing Bobblehead",
          normal: [
            "往路ダメージ 20", "復路ダメージ 20", "往路回復 40", "復路回復 40",
            { text: "フィールドのダメージ 10 / 秒", detail: true },
            { text: "フィールドの回復 50 / 秒", detail: true },
            { text: "フィールドの持続 1秒", detail: true },
            { text: "フィールドの範囲 半径4 m", detail: true }
          ],
          enhanced: [
            "往路ダメージ 25", "復路ダメージ 20", "往路回復 45", "復路回復 30",
            { text: "フィールドの回復 55 / 秒", detail: true },
            { text: "最大3投", detail: true },
            { text: "3投目の爆発ダメージ 20", detail: true },
            { text: "3投目の爆発回復 70", detail: true }
          ],
          cooldown: "8秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Q", name: "銃ULT", en: "Pwnage Pound",
          normal: [
            "回復 80 / 秒", "持続 8秒", "範囲 半径8 m",
            { text: "敵のアビリティミスごとにダメージ 60", detail: true },
            { text: "ミスごとに回復 80", detail: true }
          ],
          enhanced: ["回復 100 / 秒", { text: "ミスごとに回復 90", detail: true }],
          cooldown: "60秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Q", name: "刀ULT", en: "Final Exam",
          normal: [
            "自身と周囲の味方の回復 70 / 秒（成功後 100 / 秒）",
            "チャレンジ 12秒", "成功後の持続 6秒", "範囲 半径8 m",
            { text: "発動時にダッシュ斬りを追加で使用可能", detail: true },
            { text: "成功時にヒーリングファクターのCDをリセット", detail: true }
          ],
          enhanced: ["回復 80 / 秒（成功後 120 / 秒）", "成功後の持続 8秒", "成功時のボーナスHP +300"],
          cooldown: "60秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "右クリック", name: "ダッシュ斬り／回復", en: "Healing Hijinks",
          normal: ["ダメージ 30", "回復 45", "回復範囲 半径5 m", "移動距離 最大12 m", "2チャージ（各10秒）"],
          enhanced: [
            "ダメージ 40", "回復 55", "回復範囲 半径8 m",
            { text: "命中時にバウンド", detail: true },
            { text: "命中でCDをリセット（最大2回）", detail: true }
          ],
          cooldown: "10秒 / チャージ", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "Space", name: "2段ジャンプ／回復", en: "Healing Hop",
          normal: [
            "ダメージ 25", "回復 35",
            { text: "敵か味方に命中するとCDをリセット", detail: true },
            { text: "刀ULT中は壁蹴りでもCDをリセット", detail: true },
            { text: "次の刀の左クリックが突きになる", detail: true }
          ],
          enhanced: ["固有のF強化なし", { text: "刀を強化すると突きがクリティカルになる", detail: true }],
          cooldown: "6秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "パッシブ", name: "ヒーリングファクター", en: "Healing Factor",
          normal: [
            "非戦闘5秒後から回復 25 / 秒",
            "自動発動中の回復 50 / 秒",
            { text: "2秒以内に200を超えるダメージを受けると自動発動", detail: true },
            { text: "発動時は短時間無敵", detail: true }
          ],
          enhanced: ["変化なし"],
          cooldown: "30秒", sourceIds: ["official-hero", "reference-sheet"]
        },
        {
          key: "F", name: "レベルアップ／自撮り", en: "Upgrade!",
          normal: [
            "攻撃などでXPを獲得",
            "ゲージが満タンになるとFでスキルを1つ強化",
            { text: "自撮りで追加XPを獲得", detail: true },
            { text: "自撮り中は無敵", detail: true }
          ],
          enhanced: ["強化内容はスキルごとに異なる"],
          cooldown: "—", sourceIds: ["official-hero", "reference-sheet"]
        }
      ],
      teamups: [
        { name: "ヘラ連携（F追加強化）", en: "Hel-Yeah, Honey", detail: "銃：追加弾が敵／味方を追尾し、爆発で味方を回復。刀：3回命中で 5 + 敵最大HPの0.5% の防御無視ダメージ・自身を5回復", sourceIds: ["official-hero", "reference-sheet"] },
        { name: "ガンビット連携", en: "Gumbo Chimichangas", key: "C", cooldown: "15秒",
          lines: ["着地ダメージ 35", "周囲の味方を 65回復", "範囲 半径5 m", "ガンビットと同時編成：スタン 0.3秒、CD 10秒"], sourceIds: ["official-hero", "official-teamups"] }
      ]
    }
  ]
};
