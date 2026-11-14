(() => {
  const data = window.MR_WIKI_DATA;
  const base = "dinosaur-official";
  const s10 = "official-s10";
  const s11 = "official-s11";
  const teamups = "official-teamups";
  data.sources.push({
    id: base, label: "Marvel Rivals — デビルダイナソー スキル詳細", type: "公式", shortLabel: "スキル",
    url: "https://www.marvelrivals.com/20260514/41360_1300391.html"
  });
  data.portraits["devil-dinosaur"] = {
    image: "./assets/1udf35cfda1w5-close.png",
    source: "https://www.marvelrivals.com/20260514/41360_1300391.html"
  };
  data.heroes.push({
    id: "devil-dinosaur",
    name: "デビルダイナソー",
    title: "デビルダイナソー",
    role: "vanguard",
    portraitId: "devil-dinosaur",
    thumbnail: "DD",
    hp: "825",
    season: "Season 11",
    lastUpdated: "2026-11-14",
    summary: "噛みつきとビームで出血を付与し、出血ダメージからボーナスHPを得る。球状のバリアで味方を守る。",
    sourceIds: [base, s11],
    quickFacts: [
      { label: "基礎HP", value: "825" },
      { label: "ULT必要コスト", value: "3,400" }
    ],
    skills: [
      {
        key: "左クリック", name: "プライマル・バイト", en: "Primal Bite", cooldown: "—",
        normal: [
          "噛みつきダメージ 75", "射程 4 m", "攻撃間隔 1秒 → 0.9秒 → 1秒",
          "出血ダメージ 敵最大HPの1.2% / ヒット", "出血は毎秒2ヒット、持続4秒",
          { text: "前方の敵に噛みつき、出血を付与する。", detail: true }
        ],
        sourceIds: [base, s10]
      },
      {
        key: "右クリック", name: "インパクト・ビーム", en: "Impact Beam", cooldown: "未確認",
        normal: [
          "範囲ダメージ 40 / 秒", "射程 17 m", "効果半径 1.2 m", "持続 3.3秒",
          "移動速度低下 15%（2秒）",
          { text: "命中1回ごとに出血の持続時間を1秒分加える。", detail: true }
        ],
        sourceIds: [base, s10]
      },
      {
        key: "E", name: "バディ・バリア", en: "Buddy Barrier", cooldown: "12秒",
        normal: [
          { text: "バリア耐久値 400", changes: [{ value: "400", previous: "450", kind: "nerf" }] },
          { text: "持続 最大4秒", changes: [{ value: "4秒", previous: "6秒", kind: "nerf" }] },
          { text: "球状のバリアを展開し、攻撃を防ぐ。", detail: true }
        ],
        sourceIds: [base, s11]
      },
      {
        key: "Shift", name: "サベージ・プレデーション", en: "Savage Predation", cooldown: "10秒",
        normal: [
          "噛みつきダメージ 50", "突進速度 15 m/秒", "突進持続 2秒",
          { text: "出血中の敵を拘束：0.6秒", changes: [{ value: "0.6秒", previous: "0.8秒", kind: "nerf" }] },
          { text: "拘束後の打ち上げ：1.2秒", changes: [{ value: "1.2秒", previous: "1.5秒", kind: "nerf" }] },
          { text: "突進して噛みつき、出血を付与する。すでに出血中の敵には噛みついたまま拘束し、投げ飛ばす。", detail: true }
        ],
        sourceIds: [base, s11]
      },
      {
        key: "F", name: "フレンジード・フィースト", en: "Frenzied Feast", cooldown: "8秒",
        normal: [
          "噛みつき1〜4段目 各15ダメージ", "5段目 30ダメージ",
          "出血中の敵への追加ダメージ：1〜4段目は各最大HPの8%、5段目は最大HPの12%",
          { text: "連続で噛みつき、与ダメージを自身のボーナスHPに変換する。", detail: true }
        ],
        sourceIds: [base]
      },
      {
        key: "パッシブ", name: "プレヒストリック・プレーティング", en: "Prehistoric Plating", cooldown: "—",
        normal: [
          "受けるヘッドショットダメージ 60%軽減",
          "自身を攻撃した敵・回復した味方のULTエネルギー獲得量 40%減少",
          { text: "打ち上げやノックバックなど、位置を動かされる効果を無効化する。", detail: true }
        ],
        sourceIds: [base]
      },
      {
        key: "パッシブ", name: "エイペックス・アドバンテージ", en: "Apex Advantage", cooldown: "—",
        normal: [{ text: "出血ダメージの125%を自身のボーナスHPに変換する。", changes: [{ value: "125%", previous: "150%", kind: "nerf" }] }],
        sourceIds: [base, s11]
      },
      {
        key: "Q", name: "ウルト", en: "Devil-Beast Rampage", cooldown: "—",
        normal: [
          "必要エネルギー 3,400", "発動中の移動速度 +70%", "踏みつけダメージ 10", "踏みつけの範囲 半径8 m",
          "踏みつけの発生間隔 0.3秒", "打ち上げの間隔 0.8秒",
          "CD短縮：フレンジード・フィースト 1秒、サベージ・プレデーション 4秒",
          { text: "踏みつけで敵を打ち上げ、出血を付与する。咆哮の衝撃波は敵の移動速度を落とす。", detail: true }
        ],
        sourceIds: [base]
      }
    ],
    teamups: [
      {
        name: "パニッシャー連携", en: "Primal Punishment", key: "C",
        cooldown: { text: "18秒", changes: [{ value: "18秒", previous: "12秒", kind: "nerf" }] },
        lines: [
          "持続 8秒", "弾の直撃ダメージ 5", "爆発ダメージ 20", "爆発範囲 半径3 m",
          "発射間隔 0.25秒", "弾速 150 m/秒",
          { text: "噛みつきを磁力砲に切り替える。爆発は敵に出血を付与する。", detail: true },
          { text: "パニッシャーと同時編成：Xの連携で搭乗できる。搭乗中のパニッシャーは被ダメージ25%軽減。デビルダイナソーがダメージの一部を肩代わりする（変換率50%）。", detail: true }
        ],
        sourceIds: [base, teamups, s10, s11]
      },
      {
        name: "ジェフ・ザ・ランド・シャーク連携", en: "Surf & Turf", key: "右クリック",
        lines: [
          "味方の回復 60 / 秒", "射程 20 m", "持続 最大5秒",
          { text: "ビームを水流に切り替え、敵を攻撃しながら味方を回復する。", detail: true },
          { text: "ジェフと同時編成：Xの連携でジェフが頭に乗る。搭乗中は双方が被ダメージ12.5%軽減と毎秒15の回復を得る。", detail: true }
        ],
        sourceIds: [base, teamups]
      }
    ]
  });
})();
