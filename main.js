/* Lógica de la web: pinta el contenido de content.js, idioma, tema y animaciones.
   Para cambiar textos o proyectos no hace falta tocar este archivo: edita content.js. */
(function () {
  "use strict";

  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  /* ---------- Iconos ---------- */
  const ICON = {
    github: '<svg class="fill" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    linkedin: '<svg class="fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true" style="fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  };

  /* Dibujo decorativo de grafo para la cabecera de cada proyecto (siempre igual para cada tarjeta). */
  function graphSvg(seed) {
    let x = seed * 9301 + 49297;
    const rnd = () => ((x = (x * 9301 + 49297) % 233280) / 233280);
    const pts = Array.from({ length: 9 }, () => [20 + rnd() * 260, 12 + rnd() * 86]);
    let lines = "";
    pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => {
      if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 105) lines += `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}"/>`;
    }));
    const dots = pts.map((p, i) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${i % 3 === 0 ? 4.5 : 3}"/>`).join("");
    return `<svg viewBox="0 0 300 110" preserveAspectRatio="xMaxYMid slice" aria-hidden="true"><g stroke="var(--cd)" stroke-width="1.2" opacity=".7">${lines}</g><g fill="var(--cd)">${dots}</g></svg>`;
  }

  /* ---------- Idioma ---------- */
  let lang = store.get("lang") || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  if (!S.ui[lang]) lang = "es";

  const tr = (v) => (typeof v === "string" ? v : v[lang]);
  const t = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), S.ui[lang]);

  function render() {
    const L = S.ui[lang];
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => { const v = t(el.dataset.i18n); if (v !== undefined) el.textContent = v; });
    $$("[data-site]").forEach((el) => { el.textContent = S[el.dataset.site]; });

    const langBtn = $("#langBtn");
    langBtn.textContent = lang === "es" ? "EN" : "ES";
    langBtn.setAttribute("aria-label", L.langLabel);
    langBtn.title = L.langLabel;
    const themeBtn = $("#themeBtn");
    themeBtn.setAttribute("aria-label", L.themeLabel);
    themeBtn.title = L.themeLabel;

    const cvBtn = $("#cvBtn");
    if (!cvBtn) { /* ya se quitó */ }
    else if (S.links.cv) { cvBtn.href = S.links.cv; cvBtn.insertAdjacentHTML("afterbegin", ICON.download.replace("<svg", '<svg width="18" height="18" style="fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"')); }
    else cvBtn.remove();

    $("#pillars").innerHTML = L.pillars.map((p) => `
      <article class="pillar reveal">
        <div class="pillar__icon" aria-hidden="true">${esc(p.icon)}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
      </article>`).join("");

    const gh = S.links.githubUser.trim();
    $("#projectList").innerHTML = S.projects.map((p, i) => {
      const c = p[lang];
      const links = [];
      if (gh && p.repo) links.push(`<a href="https://github.com/${encodeURIComponent(gh)}/${encodeURIComponent(p.repo)}" target="_blank" rel="noopener">${ICON.github}${esc(L.code)}</a>`);
      if (p.demo) links.push(`<a href="${esc(p.demo)}" target="_blank" rel="noopener">${ICON.external}${esc(L.demo)}</a>`);
      return `
      <article class="project reveal" data-accent="${esc(p.accent)}">
        <div class="project__head">
          ${graphSvg(i + 3)}
          <span class="project__num">${String(i + 1).padStart(2, "0")}</span>
          <span class="project__label">${esc(c.label)}</span>
        </div>
        <div class="project__body">
          <h3>${esc(c.title)}</h3>
          <p class="project__problem">${esc(c.problem)}</p>
          <p class="project__text">${esc(c.text)}</p>
          <ul class="project__hl">${c.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
          <ul class="tags">${p.tags.map((tg) => `<li class="tag">${esc(tr(tg))}</li>`).join("")}</ul>
          ${links.length ? `<div class="project__links">${links.join("")}</div>` : ""}
        </div>
      </article>`;
    }).join("");

    $("#expList").innerHTML = S.experience.map((e) => {
      const c = e[lang];
      return `
      <li class="job reveal">
        <div class="job__card">
          <div class="job__top"><h3>${esc(e.company)}</h3><span class="job__date">${esc(c.date)}</span></div>
          <p class="job__role">${esc(c.role)}</p>
          <ul>${c.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
        </div>
      </li>`;
    }).join("");

    $("#eduList").innerHTML = S.education.map((e) => {
      const c = e[lang];
      return `
      <article class="edu__card reveal">
        <span class="edu__date">${esc(c.date)}</span>
        <h3>${esc(c.title)}</h3>
        <p class="edu__place">${esc(c.place)}</p>
        ${c.text ? `<p>${esc(c.text)}</p>` : ""}
      </article>`;
    }).join("");

    $("#skillList").innerHTML = S.skills.map((g) => `
      <div class="skill-group reveal">
        <h3>${esc(g[lang])}</h3>
        <div class="chips">${g.items.map((it) => `<span class="chip">${esc(tr(it))}</span>`).join("")}</div>
      </div>`).join("") + `
      <div class="skill-group reveal">
        <h3>${esc(L.languagesTitle)}</h3>
        ${S.languages[lang].map(([n, lv]) => `<div class="lang-row"><span>${esc(n)}</span><span>${esc(lv)}</span></div>`).join("")}
      </div>`;

    const cl = [];
    if (S.links.email) cl.push(`<a href="mailto:${esc(S.links.email)}">${ICON.mail}${esc(S.links.email)}</a>`);
    if (S.links.phone) cl.push(`<a href="tel:${esc(S.links.phone.replace(/\s+/g, ""))}">${ICON.phone}${esc(S.links.phone)}</a>`);
    if (S.links.linkedin) cl.push(`<a href="${esc(S.links.linkedin)}" target="_blank" rel="noopener">${ICON.linkedin}LinkedIn</a>`);
    if (gh) cl.push(`<a href="https://github.com/${encodeURIComponent(gh)}" target="_blank" rel="noopener">${ICON.github}GitHub</a>`);
    if (S.links.cv) cl.push(`<a href="${esc(S.links.cv)}" download>${ICON.download}${esc(L.ctaCv)}</a>`);
    $("#contactLinks").innerHTML = cl.join("");

    $("#year").textContent = new Date().getFullYear();

    bindProjectGlow();
    observeReveal();
    typeTerminal();
  }

  $("#langBtn").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    store.set("lang", lang);
    // El botón de CV se rehace al pintar: quitamos su icono anterior.
    const old = $("#cvBtn svg"); if (old) old.remove();
    render();
  });

  /* ---------- Tema claro/oscuro ---------- */
  const mqDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () => document.documentElement.dataset.theme || (mqDark.matches ? "dark" : "light");
  function applyThemeColor() {
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = currentTheme() === "dark" ? "#1E1714" : "#FBF5EE";
    net.refreshColors();
  }
  $("#themeBtn").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("theme", next);
    applyThemeColor();
  });
  mqDark.addEventListener && mqDark.addEventListener("change", applyThemeColor);

  /* ---------- Navegación ---------- */
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const links = $$(".nav__links a");
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  /* ---------- Aparición al hacer scroll ---------- */
  let revealObs = null;
  function observeReveal() {
    const els = $$(".reveal:not(.is-in)");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    if (!revealObs) {
      revealObs = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); revealObs.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px" });
    }
    els.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 80}ms`; revealObs.observe(el); });
  }

  /* ---------- Brillo que sigue al ratón en las tarjetas ---------- */
  function bindProjectGlow() {
    $$(".project").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  }

  /* ---------- Terminal que escribe sola ---------- */
  const TERM = {
    es: [
      ["isabel.stack", "['python', 'sql', 'qdrant', 'rerankers']"],
      ["isabel.ahora", "'Datos y procesos @ Endesa'"],
      ["isabel.busca", "'un equipo de IA aplicada ✨'"],
    ],
    en: [
      ["isabel.stack", "['python', 'sql', 'qdrant', 'rerankers']"],
      ["isabel.now", "'Data & processes @ Endesa'"],
      ["isabel.looking_for", "'an applied AI team ✨'"],
    ],
  };
  let termTimer = null;
  function typeTerminal() {
    const el = $("#term");
    clearTimeout(termTimer);
    const lines = TERM[lang];
    const full = lines.map(([cmd, out]) => `<span class="p">&gt;&gt;&gt;</span> ${esc(cmd)}\n<span class="s">${esc(out)}</span>`).join("\n");
    if (reduceMotion) { el.innerHTML = full; return; }
    let li = 0, ci = 0, html = "";
    const step = () => {
      if (li >= lines.length) { el.innerHTML = html + '\n<span class="p">&gt;&gt;&gt;</span> <span class="term__cursor"></span>'; return; }
      const [cmd, out] = lines[li];
      if (ci <= cmd.length) {
        el.innerHTML = html + `<span class="p">&gt;&gt;&gt;</span> ${esc(cmd.slice(0, ci))}<span class="term__cursor"></span>`;
        ci++;
        termTimer = setTimeout(step, 55 + Math.random() * 60);
      } else {
        html += `<span class="p">&gt;&gt;&gt;</span> ${esc(cmd)}\n<span class="s">${esc(out)}</span>\n`;
        li++; ci = 0;
        el.innerHTML = html;
        termTimer = setTimeout(step, 520);
      }
    };
    termTimer = setTimeout(step, 600);
  }

  /* ---------- Red de nodos animada del inicio (guiño a los embeddings) ---------- */
  const net = (function () {
    const canvas = $("#net");
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = 1, nodes = [], colors = [], lineRgb = "0,0,0", running = false, raf = 0, visible = true;
    const mouse = { x: -9999, y: -9999 };

    const hexToRgb = (hex) => {
      const m = hex.trim().replace("#", "");
      const v = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
      const n = parseInt(v, 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
    };
    function refreshColors() {
      const cs = getComputedStyle(document.documentElement);
      colors = ["--rose-deep", "--sage-deep", "--terra-deep"].map((v) => hexToRgb(cs.getPropertyValue(v)));
      lineRgb = hexToRgb(cs.getPropertyValue("--muted"));
      if (!running) draw();
    }
    function resize() {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.round((w * h) / 16000));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
        r: 1.4 + Math.random() * 2.2, c: i % 3,
      }));
      draw();
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const maxD = 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxD) {
            ctx.strokeStyle = `rgba(${lineRgb},${(1 - d / maxD) * .22})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(${colors[a.c]},${(1 - dm / 170) * .5})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      nodes.forEach((n) => {
        ctx.fillStyle = `rgba(${colors[n.c]},.75)`;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      });
    }
    function tick() {
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -10) n.x = w + 10; else if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10; else if (n.y > h + 10) n.y = -10;
      });
      draw();
      raf = requestAnimationFrame(tick);
    }
    function update() {
      const should = !reduceMotion && visible && !document.hidden;
      if (should && !running) { running = true; raf = requestAnimationFrame(tick); }
      else if (!should && running) { running = false; cancelAnimationFrame(raf); }
    }
    function init() {
      refreshColors();
      resize();
      let rt;
      window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
      const hero = canvas.parentElement;
      hero.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
      hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
      if ("IntersectionObserver" in window) new IntersectionObserver(([en]) => { visible = en.isIntersecting; update(); }).observe(hero);
      document.addEventListener("visibilitychange", update);
      update();
    }
    return { init, refreshColors };
  })();

  render();
  net.init();
  applyThemeColor();
})();
