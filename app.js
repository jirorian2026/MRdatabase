(() => {
  const data = window.MR_WIKI_DATA;
  let selectedRole = "all";
  let query = "";
  const routeFromLocation = () => {
    const params = new URLSearchParams(window.location.search);
    return { heroId: params.get("hero"), page: params.get("page") };
  };
  let currentRoute = routeFromLocation();

  const esc = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const getHero = (id) => data.heroes.find((hero) => hero.id === id);
  const getSource = (id) => data.sources.find((source) => source.id === id);
  const linkedSources = (ids = []) => {
    const byUrl = new Map();
    ids.forEach((id) => {
      const source = getSource(id);
      if (source?.url && !byUrl.has(source.url)) byUrl.set(source.url, source);
    });
    return [...byUrl.values()];
  };
  const sourceLinks = (ids) => linkedSources(ids).map((source) =>
    `<a class="source-pill" href="${esc(source.url)}" target="_blank" rel="noreferrer" title="${esc(source.label)}" aria-label="${esc(source.label)}">${esc(source.shortLabel || source.type)} ↗</a>`
  ).join("");

  const portraitFor = (hero) => data.portraits?.[hero.portraitId];
  const portraitMarkup = (hero) => {
    const portrait = portraitFor(hero);
    return `<span class="hero-art${portrait ? ` portrait-${esc(hero.portraitId)}` : ""}" aria-hidden="true">
      <span class="portrait-fallback">${esc(hero.thumbnail || hero.name.slice(0, 2))}</span>
      ${portrait?.image ? `<img src="${esc(portrait.image)}"${portrait.backup ? ` data-backup="${esc(portrait.backup)}"` : ""} alt="" decoding="async" referrerpolicy="no-referrer">` : ""}
    </span>`;
  };

  const heroUrl = (id) => {
    const url = new URL(window.location.href);
    url.hash = "";
    url.searchParams.delete("page");
    if (id) url.searchParams.set("hero", id);
    else url.searchParams.delete("hero");
    return url;
  };
  const patchUrl = () => {
    const url = heroUrl();
    url.searchParams.set("page", "season-11");
    return url;
  };

  const heroCard = (hero) => {
    const role = data.roles[hero.role];
    return `<a class="hero-card ${role.color}" href="${esc(heroUrl(hero.id).href)}" data-hero="${esc(hero.id)}">
      ${portraitMarkup(hero)}
      <span class="hero-card-body">
        <strong>${esc(hero.name)}</strong>
        <span class="role-label">${esc(role.label)}</span>
      </span>
    </a>`;
  };

  const heroCards = () => {
    const normalize = (value) => value.normalize("NFKC").toLowerCase().replace(/[\s・-]+/gu, "");
    const normalizedQuery = normalize(query);
    const filtered = data.heroes.filter((hero) => {
      const role = data.roles[hero.role];
      const searchable = normalize(`${hero.name} ${hero.title} ${role.label} ${role.en} ${hero.id} ${hero.en || ""}`);
      return (selectedRole === "all" || hero.role === selectedRole) && searchable.includes(normalizedQuery);
    });
    if (!filtered.length) return '<p class="empty" role="status">該当するキャラクターは見つかりませんでした。</p>';
    return Object.entries(data.roles).map(([id, role]) => {
      const heroes = filtered.filter((hero) => hero.role === id)
        .sort((left, right) => left.name.localeCompare(right.name, "ja"));
      return heroes.length ? `<section class="hero-group ${role.color}" aria-labelledby="group-${id}">
        <h3 id="group-${id}">${esc(role.label)}</h3>
        <div class="hero-grid">${heroes.map(heroCard).join("")}</div>
      </section>` : "";
    }).join("");
  };

  const home = () => {
    const portraitSources = [...new Map(data.heroes.map((hero) => [hero.portraitId, hero])).values()]
      .filter((hero) => portraitFor(hero)?.source);
    return `<main id="app" class="shell">
      <header class="masthead">
        <div class="brand"><span class="brand-mark">R</span><div><p>${esc(data.site.subtitle)}</p><h1>${esc(data.site.title)}</h1></div></div>
        <div class="season-stamp"><span>DATA SET</span><strong>${esc(data.site.season)}</strong><small>更新 ${esc(data.site.lastUpdated)}</small></div>
      </header>
      <section class="directory" aria-labelledby="directory-title">
        <h2 id="directory-title" class="visually-hidden">キャラクター一覧</h2>
        <div class="directory-controls">
          <div class="role-tabs" role="group" aria-label="ロールで絞り込む">
            <button class="role-tab" data-role="all" aria-pressed="${selectedRole === "all"}">すべて</button>
            ${Object.entries(data.roles).map(([id, role]) => `<button class="role-tab ${role.color}" data-role="${id}" aria-pressed="${selectedRole === id}">${esc(role.label)}</button>`).join("")}
          </div>
          <a class="patch-entry" href="${esc(patchUrl().href)}" data-patches>
            <span>シーズン11の調整一覧はこちら</span><span class="patch-entry-arrow" aria-hidden="true">→</span>
          </a>
          <label class="search"><span aria-hidden="true">⌕</span><input id="hero-search" type="search" aria-label="キャラクターを検索" placeholder="キャラクターを検索" value="${esc(query)}"></label>
        </div>
        <div id="hero-groups">${heroCards()}</div>
        ${portraitSources.length ? `<p class="portrait-credit">画像出典（Marvel Rivals公式）
          ${portraitSources.map((hero) => `<a href="${esc(portraitFor(hero).source)}" target="_blank" rel="noreferrer">${esc(hero.name)} ↗</a>`).join("")}
        </p>` : ""}
      </section>
      ${footer()}
    </main>`;
  };

  const changeLabels = { buff: "強化", nerf: "弱体化", new: "新規効果", rework: "仕様変更" };
  const patchLegend = () => `<p class="patch-legend">
    <span class="patch-buff">強化</span><span class="patch-nerf">弱体化</span><span class="patch-new">新規効果</span>
    <span>「旧」はシーズン10.5の値</span>
  </p>`;
  const skillLine = (line) => {
    if (typeof line === "string") return esc(line);
    const { text, changes = [] } = line;
    const marks = changes
      .map((change) => ({ ...change, start: text.indexOf(change.value) }))
      .filter((change) => change.start >= 0)
      .sort((a, b) => a.start - b.start);
    let result = "";
    let cursor = 0;
    for (const { start, value, previous, kind } of marks) {
      if (start < cursor) continue;
      const label = changeLabels[kind];
      result += `${esc(text.slice(cursor, start))}<span class="patch-comparison"><mark class="patch-value patch-${esc(kind)}" title="${esc(label)}">${esc(value)}</mark>`;
      result += previous ? `<span class="patch-previous">（旧${esc(previous)}）</span>` : "";
      result += "</span>";
      cursor = start + value.length;
    }
    return result + esc(text.slice(cursor));
  };

  const skillLines = (value) => {
    const lines = Array.isArray(value) ? value : [value || "未確認"];
    const stats = lines.filter((line) => !line.detail);
    const details = lines.filter((line) => line.detail);
    return `
      ${stats.map((line) => `<p class="skill-stat">${skillLine(line)}</p>`).join("")}
      ${details.length ? `<div class="skill-overview">
        <span>概要</span>
        ${details.map((line) => `<p>${skillLine(line)}</p>`).join("")}
      </div>` : ""}`;
  };

  const skillTable = (hero) => {
    const showEnhancement = hero.skills.some((skill) => skill.enhanced?.length);
    const showSources = hero.skills.some((skill) => linkedSources(skill.sourceIds).length);
    return `
    <div class="table-wrap">
      <table class="skill-table${showEnhancement ? "" : " standard-skills"}" role="table" aria-labelledby="skills-title">
        <thead role="rowgroup">
          <tr role="row">
            <th scope="col" role="columnheader">キー</th>
            <th scope="col" role="columnheader">スキル</th>
            <th class="skill-normal" scope="col" role="columnheader">${showEnhancement ? "通常" : "効果・数値"}</th>
            ${showEnhancement ? '<th class="enhancement-heading" scope="col" role="columnheader">F強化後</th>' : ""}
            <th class="cooldown" scope="col" role="columnheader"><abbr title="クールダウン">CD</abbr></th>
            ${showSources ? '<th class="skill-sources" scope="col" role="columnheader">出典</th>' : ""}
          </tr>
        </thead>
        <tbody role="rowgroup">
          ${hero.skills.map((skill) => `<tr role="row">
            <td class="skill-key" role="cell"><kbd>${esc(skill.key)}</kbd></td>
            <th class="skill-name" scope="row" role="rowheader"><strong>${esc(skill.name)}</strong>${skill.en && skill.en !== skill.name ? `<small>${esc(skill.en)}</small>` : ""}${skill.form ? `<small class="skill-form">${esc(skill.form)}</small>` : ""}</th>
            <td class="skill-normal" role="cell">${showEnhancement ? '<span class="mobile-label" aria-hidden="true">通常</span>' : ""}${skillLines(skill.normal)}</td>
            ${showEnhancement ? `<td class="enhanced" role="cell"><span class="mobile-label" aria-hidden="true">F強化後</span>${skillLines(skill.enhanced)}</td>` : ""}
            <td class="cooldown" role="cell"><span class="mobile-label" aria-hidden="true">CD</span>${skillLine(skill.cooldown || "—")}</td>
            ${showSources ? `<td class="skill-sources" role="cell">${sourceLinks(skill.sourceIds)}</td>` : ""}
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
  };

  const patchGroups = (hero) => {
    const changedLines = (lines = []) => lines.filter((line) => line.changes?.length);
    const changedCooldown = (entry) => entry.cooldown?.changes?.length
      ? [{ ...entry.cooldown, text: "CD " + entry.cooldown.text }]
      : [];
    const skillGroups = (hero.skills || []).flatMap((skill) => [
      { label: skill.name, key: skill.key, lines: [...changedLines(skill.normal), ...changedCooldown(skill)] },
      { label: skill.name + "（F強化後）", key: skill.key, lines: changedLines(skill.enhanced) }
    ]);
    const teamupGroups = (hero.teamups || []).map((teamup) => ({
      label: teamup.name, key: teamup.key, lines: [...changedLines(teamup.lines), ...changedCooldown(teamup)]
    }));
    return [...skillGroups, ...teamupGroups].filter((group) => group.lines.length);
  };

  const patchSummary = (groups) => `<dl class="patch-summary">
    ${groups.map(({ label, key, lines }) => `<div><dt>${key ? `<kbd>${esc(key)}</kbd> ` : ""}${esc(label)}</dt>
      <dd>${lines.map((line) => `<p>${skillLine(line)}</p>`).join("")}</dd></div>`).join("")}
  </dl>`;

  const patchNotes = (groups) => groups.length ? `
    <section class="content-block notice-block" aria-labelledby="patch-title">
      <h3 id="patch-title">シーズン11の追加パッチ</h3>
      ${patchLegend()}
      ${patchSummary(groups)}
    </section>` : "";

  const patchDirectory = () => {
    const changedHeroes = data.heroes.map((hero) => ({ hero, groups: patchGroups(hero) }))
      .filter(({ groups }) => groups.length);
    const sections = Object.entries(data.roles).map(([id, role]) => {
      const entries = changedHeroes.filter(({ hero }) => hero.role === id)
        .sort((left, right) => left.hero.name.localeCompare(right.hero.name, "ja"));
      if (!entries.length) return "";
      return `<section class="patch-role ${role.color}">
        <h3>${esc(role.label)}</h3>
        ${entries.map(({ hero, groups }) => `<article class="patch-hero">
          <div class="patch-identity">
            <a class="patch-portrait" href="${esc(heroUrl(hero.id).href)}" data-hero="${esc(hero.id)}" aria-label="${esc(hero.title)}のスキル表">
              ${portraitMarkup(hero)}
            </a>
            <div><h4>${esc(hero.title)}</h4><a class="patch-profile-link" href="${esc(heroUrl(hero.id).href)}" data-hero="${esc(hero.id)}">スキル表を見る →</a></div>
          </div>
          <div class="notice-block patch-card-notes">${patchSummary(groups)}</div>
        </article>`).join("")}
      </section>`;
    }).join("");
    return `<main id="app" class="shell profile-shell">
      <header class="masthead compact"><a class="brand back-home" href="${esc(heroUrl().href)}" data-home aria-label="キャラクター一覧へ戻る"><span class="brand-mark">R</span><div><p>${esc(data.site.subtitle)}</p><h1>${esc(data.site.title)}</h1></div></a><div class="season-stamp"><span>DATA SET</span><strong>${esc(data.site.season)}</strong><small>更新 ${esc(data.site.lastUpdated)}</small></div></header>
      <nav class="breadcrumb" aria-label="現在のページ"><a href="${esc(heroUrl().href)}" data-home>← キャラクター一覧</a><span>/</span><strong>シーズン11の調整一覧</strong></nav>
      <div class="patch-directory-heading"><h2 id="patch-directory-title">シーズン11の調整一覧</h2>${patchLegend()}</div>
      ${sections || '<p class="empty">調整内容はまだ登録されていません。</p>'}
      ${footer()}
    </main>`;
  };

  const teamupList = (teamups = []) => teamups.length ? `
    <section class="content-block">
      <div class="block-heading"><h3>連携スキル</h3></div>
      <div class="teamup-list">
        ${teamups.map((item) => `<article>
          <div>
            <strong>${esc(item.name)}</strong>
            ${item.en ? `<small>${esc(item.en)}</small>` : ""}
            ${item.key || item.cooldown ? `<div class="teamup-meta">
              ${item.key ? `<kbd>${esc(item.key)}</kbd>` : ""}
              ${item.cooldown ? `<span>CD ${skillLine(item.cooldown)}</span>` : ""}
            </div>` : ""}
          </div>
          <div class="teamup-details">${skillLines(item.lines || item.detail)}</div>
          <div>${sourceLinks(item.sourceIds)}</div>
        </article>`).join("")}
      </div>
    </section>` : "";

  const profile = (hero) => {
    const role = data.roles[hero.role];
    const hasTests = hero.tests && hero.tests.length;
    const heroLinks = sourceLinks(hero.sourceIds);
    const changes = patchGroups(hero);
    return `<main id="app" class="shell profile-shell">
      <header class="masthead compact"><a class="brand back-home" href="${esc(heroUrl().href)}" data-home aria-label="キャラクター一覧へ戻る"><span class="brand-mark">R</span><div><p>${esc(data.site.subtitle)}</p><h1>${esc(data.site.title)}</h1></div></a><div class="season-stamp"><span>DATA SET</span><strong>${esc(data.site.season)}</strong><small>更新 ${esc(data.site.lastUpdated)}</small></div></header>
      <nav class="breadcrumb" aria-label="現在のページ"><a href="${esc(heroUrl().href)}" data-home>← キャラクター一覧</a><span>/</span><span>${esc(role.label)}</span><span>/</span><strong>${esc(hero.title)}</strong></nav>
      <section class="profile-hero ${role.color}${heroLinks ? "" : " without-source-box"}">
        <div class="profile-portrait">${portraitMarkup(hero)}</div>
        <div class="profile-title"><p class="eyebrow">${esc(role.en)} / ${esc(hero.season)}</p><h2>${esc(hero.title)}</h2>${hero.summary ? `<p>${esc(hero.summary)}</p>` : ""}<div class="profile-badges"><span class="role-badge">${esc(role.label)}</span>${hero.statusLabel ? `<span class="verification">${esc(hero.statusLabel)}</span>` : ""}<span>最終更新 ${esc(hero.lastUpdated)}</span></div></div>
        ${heroLinks ? `<aside class="source-box"><strong>公式資料</strong><div>${heroLinks}</div></aside>` : ""}
      </section>
      ${hero.availability ? `<p class="availability">${esc(hero.availability)}</p>` : ""}
      ${hero.quickFacts?.length ? `<section class="facts-grid">${hero.quickFacts.map((fact) => `<div><span>${esc(fact.label)}</span><strong>${esc(fact.value)}</strong></div>`).join("")}</section>` : ""}
      ${patchNotes(changes)}
      ${hero.skills?.length ? `<section class="content-block">
        <div class="block-heading">
          <h3 id="skills-title">キー操作・ダメージ・クールダウン</h3>
          ${changes.length ? patchLegend() : ""}
        </div>
        ${skillTable(hero)}
      </section>` : ""}
      ${teamupList(hero.teamups)}
      ${hasTests ? `<section class="content-block"><div class="block-heading"><h3>実測ダメージ</h3></div><div class="test-grid">${hero.tests.map((test) => `<article class="test-card"><span>${esc(test.condition)}</span><strong>${esc(test.label)}</strong><b>${esc(test.value)} <small>ダメージ</small></b><p>${esc(test.detail)}</p></article>`).join("")}</div></section>` : ""}
      ${sourceDirectory(hero)}
      ${footer()}
    </main>`;
  };

  const sourceDirectory = (hero) => {
    const entries = [...(hero.skills || []), ...(hero.teamups || [])];
    const ids = [...(hero.sourceIds || []), ...entries.flatMap((entry) => entry.sourceIds || [])];
    const sources = linkedSources(ids);
    if (!sources.length) return "";
    return `<section class="source-directory">
      <h3>このページの出典</h3>
      <div class="source-list">
        ${sources.map((source) => `<article>
          <a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.label)} ↗</a>
          ${source.date ? `<time datetime="${esc(source.date)}">${esc(source.date)}</time>` : ""}
          ${source.note ? `<p>${esc(source.note)}</p>` : ""}
        </article>`).join("")}
      </div>
    </section>`;
  };
  const footer = () => `<footer><span>${esc(data.site.disclaimer)}</span><span>© personal reference only</span></footer>`;

  const render = () => {
    const hero = getHero(currentRoute.heroId);
    document.querySelector("#app").outerHTML = hero ? profile(hero) : currentRoute.page === "season-11" ? patchDirectory() : home();
    bind();
  };

  const bindPortraits = (container) => {
    container.querySelectorAll(".hero-art img").forEach((image) => {
      const hideInitials = () => { image.previousElementSibling.hidden = true; };
      const handleFailure = () => {
        if (image.dataset.backup) {
          const backup = image.dataset.backup;
          delete image.dataset.backup;
          image.classList.add("backup-art");
          image.src = backup;
        } else {
          image.hidden = true;
        }
      };
      image.addEventListener("load", hideInitials, { once: true });
      image.addEventListener("error", handleFailure);
      if (image.complete) {
        if (image.naturalWidth) hideInitials();
        else handleFailure();
      }
    });
  };

  const bind = () => {
    const page = document.querySelector("#app");
    bindPortraits(page);
    page.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-hero], a[data-home], a[data-patches]");
      if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      window.history.pushState({}, "", link.href);
      currentRoute = routeFromLocation();
      render();
      const heading = document.querySelector(".profile-title h2, #directory-title, #patch-directory-title");
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    });

    const grid = document.querySelector("#hero-groups");
    if (!grid) return;
    const refreshCards = () => {
      grid.innerHTML = heroCards();
      bindPortraits(grid);
    };

    const roleButtons = [...page.querySelectorAll("[data-role]")];
    roleButtons.forEach((button) => button.addEventListener("click", () => {
      selectedRole = button.dataset.role;
      roleButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      refreshCards();
    }));

    const input = document.querySelector("#hero-search");
    input.addEventListener("input", (event) => {
      query = event.target.value;
      refreshCards();
    });
  };
  window.addEventListener("popstate", () => { currentRoute = routeFromLocation(); render(); });
  render();
})();
