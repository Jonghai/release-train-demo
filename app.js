const ICONS = {
  dashboard:
    '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  check:
    '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  train:
    '<rect x="4" y="3" width="16" height="16" rx="3"/><path d="M8 19 6 22m10-3 2 3M8 8h8M4 13h16"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/>',
  history:
    '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  file:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
  info:
    '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  play: '<path d="m6 3 14 9-14 9Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  x: '<path d="m18 6-12 12M6 6l12 12"/>',
  server:
    '<rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6h.01M6 17h.01"/>',
  shield:
    '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="m9 12 2 2 4-4"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  git: '<circle cx="6" cy="4" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="20" r="2"/><path d="M6 6v12M8 6h6a4 4 0 0 1 4 4v4"/>',
  box: '<path d="m21 8-9 5-9-5 9-5 9 5Z"/><path d="m3 8 9 5v9l9-5V8M3 12l9 5 9-5"/>',
};

function icon(name, size = 18) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.info}</svg>`;
}

const NAV = [
  { id: "overview", label: "배포 현황", icon: "dashboard" },
  { id: "confirmations", label: "확정 현황", icon: "check" },
  { id: "build", label: "배포 상세", icon: "train" },
  { id: "history", label: "배포 이력", icon: "history" },
  { id: "notes", label: "릴리즈 노트", icon: "file" },
  { id: "about", label: "프로젝트 설명", icon: "info" },
];

const TITLES = {
  overview: ["배포 현황 대시보드", "전체 릴리즈 상태를 한눈에 확인합니다."],
  confirmations: ["커밋 확정 현황", "배포 전 모듈별 커밋을 함께 확인합니다."],
  build: ["배포 상세", "확정된 커밋이 빌드와 태그로 이어지는 과정을 확인합니다."],
  history: ["배포 이력", "커밋, 빌드 검증, 태그 생성 기록을 추적합니다."],
  notes: ["릴리즈 노트", "검토를 마치고 게시한 변경 사항을 확인합니다."],
  about: ["프로젝트 설명", "문제와 제약을 운영 가능한 시스템으로 연결한 과정입니다."],
};

const STAGES = ["커밋 고정", "브랜치 생성", "Windows 빌드", "검증", "노트 연결", "태그 생성"];

const modules = [
  {
    id: "core-runtime",
    name: "core-runtime",
    repo: "demo-org/aster-core-runtime",
    commit: "7ea91c4",
    team: "Core team",
    status: "confirmed",
    summary: "캐시 만료 처리와 오류 복구 흐름을 개선했습니다.",
  },
  {
    id: "gateway-api",
    name: "gateway-api",
    repo: "demo-org/aster-gateway-api",
    commit: "2f84b73",
    team: "Platform team",
    status: "confirmed",
    summary: "요청 제한 정책과 감사 로그를 추가했습니다.",
  },
  {
    id: "admin-console",
    name: "admin-console",
    repo: "demo-org/aster-admin-console",
    commit: "b108de2",
    team: "Console team",
    status: "pending",
    summary: "배포 상태 필터와 접근성 안내를 개선했습니다.",
  },
  {
    id: "viewer-sdk",
    name: "viewer-sdk",
    repo: "demo-org/aster-viewer-sdk",
    commit: "8c0a5dd",
    team: "Viewer team",
    status: "confirmed",
    summary: "렌더링 중 네트워크 복구 동작을 안정화했습니다.",
  },
  {
    id: "export-worker",
    name: "export-worker",
    repo: "demo-org/aster-export-worker",
    commit: "0f2e64a",
    team: "Export team",
    status: "pending",
    summary: "대용량 파일 처리 시 메모리 사용량을 줄였습니다.",
  },
  {
    id: "storage-service",
    name: "storage-service",
    repo: "demo-org/aster-storage-service",
    commit: "52bd401",
    team: "Storage team",
    status: "latest",
    summary: "이전 릴리즈 이후 제품 코드 변경이 없습니다.",
  },
  {
    id: "chart-kit",
    name: "chart-kit",
    repo: "demo-org/aster-chart-kit",
    commit: "9d3fc71",
    team: "Chart team",
    status: "docs",
    summary: "가이드 문서만 변경되어 확정이 필요하지 않습니다.",
  },
  {
    id: "docs-site",
    name: "docs-site",
    repo: "demo-org/aster-docs-site",
    commit: "c29b8f0",
    team: "Docs team",
    status: "docs",
    summary: "사용자 도움말과 예제 화면을 갱신했습니다.",
  },
];

const completedReleases = [
  {
    id: 104,
    version: "2.8.0",
    kind: "정기 배포",
    status: "done",
    stage: 5,
    date: "2026. 08. 14",
    duration: "18분 42초",
    confirmed: 6,
    total: 8,
    note: "검색 응답과 관리자 화면의 사용성을 개선했습니다.",
  },
  {
    id: 103,
    version: "2.7.1",
    kind: "수시 배포",
    status: "done",
    stage: 5,
    date: "2026. 08. 07",
    duration: "16분 08초",
    confirmed: 4,
    total: 8,
    note: "파일 변환 중 발생하던 간헐적인 오류를 수정했습니다.",
  },
  {
    id: 102,
    version: "2.7.0",
    kind: "정기 배포",
    status: "done",
    stage: 5,
    date: "2026. 07. 31",
    duration: "20분 11초",
    confirmed: 7,
    total: 8,
    note: "모니터링 대시보드와 알림 정책을 추가했습니다.",
  },
  {
    id: 101,
    version: "2.6.2",
    kind: "긴급 배포",
    status: "done",
    stage: 5,
    date: "2026. 07. 24",
    duration: "12분 37초",
    confirmed: 3,
    total: 8,
    note: "인증 토큰 갱신 시 세션이 끊기는 문제를 수정했습니다.",
  },
];

const releaseNotes = [
  {
    id: 4,
    version: "2.8.0",
    published: "2026. 08. 14 17:40",
    draft: "v3",
    sections: [
      {
        title: "운영 안정성",
        items: [
          "네트워크 오류가 발생하면 이전 작업을 안전하게 복구하도록 개선했습니다.",
          "장시간 실행되는 파일 변환의 메모리 사용량을 줄였습니다.",
        ],
      },
      {
        title: "관리자 화면",
        items: [
          "배포 상태와 담당 팀을 함께 검색할 수 있도록 필터를 확장했습니다.",
          "키보드만으로 주요 작업을 실행할 수 있도록 접근성을 보완했습니다.",
        ],
      },
    ],
  },
  {
    id: 3,
    version: "2.7.1",
    published: "2026. 08. 07 15:12",
    draft: "v2",
    sections: [
      {
        title: "오류 수정",
        items: ["대용량 파일을 여러 번 변환할 때 일부 작업이 중단되던 문제를 수정했습니다."],
      },
    ],
  },
  {
    id: 2,
    version: "2.7.0",
    published: "2026. 07. 31 16:26",
    draft: "v4",
    sections: [
      {
        title: "모니터링",
        items: ["처리량과 응답 지연을 한 화면에서 확인하는 운영 대시보드를 추가했습니다."],
      },
    ],
  },
  {
    id: 1,
    version: "2.6.2",
    published: "2026. 07. 24 11:05",
    draft: "v2",
    sections: [
      {
        title: "인증",
        items: ["토큰 갱신 직후 일부 사용자의 세션이 종료되던 문제를 수정했습니다."],
      },
    ],
  },
];

const state = {
  route: (location.hash || "#overview").slice(1),
  mobileOpen: false,
  modules: modules.map((item) => ({ ...item })),
  selectedHistory: 104,
  selectedNote: 4,
  build: {
    version: "2.9.0",
    kind: "정기 배포",
    status: "waiting",
    stage: 0,
    mode: "success",
    started: "실행 전",
    elapsed: "—",
    logs: [
      { time: "09:00:00", message: "릴리즈 2.9.0의 확정 커밋을 불러왔습니다.", tone: "neutral" },
      { time: "09:00:01", message: "6개 모듈이 빌드 실행을 기다리고 있습니다.", tone: "neutral" },
    ],
  },
  timer: null,
};

if (!TITLES[state.route]) state.route = "overview";

function statusMeta(status) {
  return {
    waiting: { label: "확정 대기", tone: "warning" },
    building: { label: "빌드 진행 중", tone: "info" },
    failed: { label: "빌드 실패", tone: "error" },
    done: { label: "배포 완료", tone: "success" },
  }[status];
}

function moduleStatusMeta(status) {
  return {
    confirmed: { label: "확정", tone: "success" },
    pending: { label: "확정 대기", tone: "warning" },
    latest: { label: "최신", tone: "outline" },
    docs: { label: "문서만 변경", tone: "outline" },
  }[status];
}

function badge(label, tone = "outline", dot = false) {
  return `<span class="badge ${tone}">${dot ? '<span class="badge-dot"></span>' : ""}${label}</span>`;
}

function rail(stage, status = "waiting") {
  const width = Math.max(0, Math.min(92, (stage / (STAGES.length - 1)) * 92));
  return `
    <div class="rail" aria-label="배포 진행 단계">
      <div class="rail-progress ${status === "failed" ? "error" : ""}" style="width:${width}%"></div>
      ${STAGES.map((label, index) => {
        let cls = "";
        if (index < stage || status === "done") cls = "done";
        else if (index === stage && status === "failed") cls = "failed";
        else if (index === stage && status !== "waiting") cls = "active";
        return `<div class="rail-stop ${cls}">
          <span class="rail-node">${index < stage || status === "done" ? icon("check", 12) : ""}</span>
          <span>${label}</span>
        </div>`;
      }).join("")}
    </div>`;
}

function demoNotice() {
  return `<div class="demo-notice">
    ${icon("shield", 20)}
    <div>
      <strong>포트폴리오용 시뮬레이션입니다.</strong>
      <p>모든 제품명, 저장소, 커밋, 실행 기록은 설명을 위해 만든 가상 데이터이며 실제 시스템과 연결되지 않습니다.</p>
    </div>
  </div>`;
}

function topbarActions() {
  if (state.route === "overview") {
    return `<button class="btn btn-primary hide-mobile" data-action="run-success">${icon("play", 16)} 데모 재생</button>`;
  }
  if (state.route === "confirmations") {
    return `<button class="btn btn-primary hide-mobile" data-action="confirm-all">${icon("check", 16)} 남은 커밋 확정</button>`;
  }
  if (state.route === "build") {
    return `<button class="btn btn-secondary hide-mobile" data-action="reset-build">${icon("rotate", 16)} 초기화</button>`;
  }
  return `<a class="btn btn-secondary hide-mobile" href="https://github.com/Jonghai/release-train-demo" target="_blank" rel="noreferrer">${icon("github", 16)} GitHub</a>`;
}

function renderShell() {
  const [title, subtitle] = TITLES[state.route];
  return `
    <div class="app-shell">
      ${state.mobileOpen ? '<button class="mobile-backdrop" data-action="close-menu" aria-label="메뉴 닫기"></button>' : ""}
      <aside class="sidebar ${state.mobileOpen ? "open" : ""}" aria-label="주요 메뉴">
        <a class="brand" href="#overview" data-route="overview">
          <span class="brand-mark">${icon("train", 16)}</span>
          <span class="brand-copy">
            <span class="brand-name">release train</span>
            <span class="brand-subtitle">배포 자동화 데모</span>
          </span>
        </a>
        <span class="demo-label">Sample data</span>
        <nav class="nav-list">
          ${NAV.map(
            (item) => `<button class="nav-button" data-route="${item.id}" ${state.route === item.id ? 'aria-current="page"' : ""}>
              ${icon(item.icon)}<span>${item.label}</span>
            </button>`,
          ).join("")}
        </nav>
        <div class="sidebar-spacer"></div>
        <div class="sidebar-note">
          <strong>기존 자원을 연결한 자동화</strong>
          <span>GitHub, Windows 빌드 서버, 사내 메신저, 로컬 LLM을 하나의 릴리즈 흐름으로 구성했습니다.</span>
        </div>
        <div class="runner-state">
          <span class="runner-dot ${state.build.status === "building" ? "is-busy" : ""}"></span>
          <span>빌드 실행기 · ${state.build.status === "building" ? "실행 중" : "유휴"}</span>
        </div>
      </aside>
      <div class="main-shell">
        <header class="topbar">
          <button class="mobile-menu" data-action="open-menu" aria-label="메뉴 열기">${icon("menu", 20)}</button>
          <div>
            <h1 class="topbar-title">${title}</h1>
            <p class="topbar-subtitle">${subtitle}</p>
          </div>
          <div class="topbar-actions">${topbarActions()}</div>
        </header>
        <main id="main-content" class="content" tabindex="-1">${renderPage()}</main>
      </div>
    </div>`;
}

function metric(label, value, meta, tone = "neutral") {
  const color = {
    neutral: "var(--color-muted-soft)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
  }[tone];
  return `<div class="metric-card">
    <div class="metric-label"><span class="status-dot" style="background:${color}"></span>${label}</div>
    <div class="metric-value">${value}</div>
    <div class="metric-meta">${meta}</div>
  </div>`;
}

function releaseCard(release, current = false) {
  const meta = statusMeta(release.status);
  return `<button class="release-card" data-action="open-release" data-release-id="${release.id}">
    <div class="release-card-head">
      <div>
        <div class="release-version">${release.version}</div>
        <div class="release-kind">${release.kind} · ${release.date || "오늘"}</div>
      </div>
      ${badge(meta.label, meta.tone, true)}
    </div>
    ${rail(release.stage, release.status)}
    <div class="release-note">${current ? buildCaption() : release.note}</div>
  </button>`;
}

function buildCaption() {
  if (state.build.status === "waiting") return "담당자 확정이 끝나면 빌드 검증을 시작합니다.";
  if (state.build.status === "building") return `${STAGES[state.build.stage]} 단계를 실행하고 있습니다.`;
  if (state.build.status === "failed") return "실패 원인을 확인했습니다. 담당자 수정 후 재빌드할 수 있습니다.";
  return "빌드 검증과 태그 생성이 완료됐습니다.";
}

function renderOverview() {
  const current = {
    id: "current",
    version: state.build.version,
    kind: state.build.kind,
    status: state.build.status,
    stage: state.build.stage,
  };
  const stats = {
    building: state.build.status === "building" ? 1 : 0,
    done: completedReleases.length + (state.build.status === "done" ? 1 : 0),
    failed: state.build.status === "failed" ? 1 : 0,
    waiting: state.build.status === "waiting" ? 1 : 0,
  };
  return `<div class="stack">
    ${demoNotice()}
    <section class="metric-grid" aria-label="배포 요약">
      ${metric("진행 중", stats.building, "실시간 실행 상태", "info")}
      ${metric("배포 완료", stats.done, "최근 30일", "success")}
      ${metric("중단 / 실패", stats.failed, "조치가 필요한 실행", "error")}
      ${metric("확정 대기", stats.waiting, "아직 시작하지 않은 배포", "warning")}
    </section>
    <section class="stack">
      <div class="section-heading">
        <div><h2>배포 목록</h2><p>카드를 선택하면 커밋부터 태그까지 전체 기록을 확인할 수 있습니다.</p></div>
        <div class="button-row">
          <button class="btn btn-secondary btn-sm" data-action="run-failure">실패 대응 보기</button>
          <button class="btn btn-primary btn-sm" data-action="run-success">${icon("play", 15)} 성공 흐름 재생</button>
        </div>
      </div>
      <div class="release-grid">
        ${releaseCard(current, true)}
        ${completedReleases.slice(0, 3).map((item) => releaseCard(item)).join("")}
      </div>
    </section>
  </div>`;
}

function renderConfirmations() {
  const confirmed = state.modules.filter((item) => item.status === "confirmed").length;
  const pending = state.modules.filter((item) => item.status === "pending").length;
  const noAction = state.modules.length - confirmed - pending;
  return `<div class="stack">
    ${demoNotice()}
    <section class="detail-hero">
      <div class="detail-head">
        <div>
          <p class="eyebrow">Release 2.9.0</p>
          <h2 class="detail-version">함께 확인하고 확정합니다.</h2>
          <div class="detail-meta"><span>정기 배포</span><span>마감 2026. 08. 28 17:00</span><span>8개 모듈</span></div>
        </div>
        ${badge(pending ? `${pending}개 응답 대기` : "모든 응답 완료", pending ? "warning" : "success", true)}
      </div>
      <p class="panel-description">하나의 기능이 여러 저장소에 걸쳐 있으면 관련 담당자가 같은 릴리즈 범위를 확인해야 합니다. 담당자는 안정화된 커밋을 한 번 확정하고, 시스템은 이후 흐름을 이어서 처리합니다.</p>
      <div class="summary-grid">
        <div class="summary-item"><span>확정</span><strong>${confirmed}</strong></div>
        <div class="summary-item"><span>응답 대기</span><strong>${pending}</strong></div>
        <div class="summary-item"><span>확정 불필요</span><strong>${noAction}</strong></div>
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <div><h2 class="panel-title">모듈 상태</h2><p class="panel-description">확정된 커밋이 이번 릴리즈의 단일 기준이 됩니다.</p></div>
        ${badge(`${state.modules.length}개 모듈`, "outline")}
      </div>
      <div class="panel-body flush module-list">
        <div class="module-row header"><span>모듈</span><span>변경 요약</span><span>커밋</span><span></span></div>
        ${state.modules.map((item) => {
          const meta = moduleStatusMeta(item.status);
          return `<div class="module-row">
            <div><div class="module-name">${item.name}</div><div class="module-repo">${item.repo}</div></div>
            <div><div class="module-summary">${item.summary}</div><div class="module-repo">${item.team}</div></div>
            <span class="commit">${item.commit}</span>
            <div class="module-action">
              ${item.status === "pending" ? `<button class="btn btn-secondary btn-sm" data-action="confirm-module" data-module-id="${item.id}">커밋 확정</button>` : badge(meta.label, meta.tone, item.status === "confirmed")}
            </div>
          </div>`;
        }).join("")}
      </div>
    </section>
  </div>`;
}

function renderBuild() {
  const meta = statusMeta(state.build.status);
  return `<div class="stack">
    ${demoNotice()}
    <section class="detail-hero">
      <div class="detail-head">
        <div>
          <p class="eyebrow">Aster Suite · Production</p>
          <h2 class="detail-version">${state.build.version}</h2>
          <div class="detail-meta"><span>${state.build.kind}</span><span>설정 v5</span><span>release-bot 실행</span></div>
        </div>
        ${badge(meta.label, meta.tone, true)}
      </div>
      ${rail(state.build.stage, state.build.status)}
      <div class="button-row">
        ${buildButtons()}
      </div>
    </section>
    <div class="split-layout">
      <section class="terminal" aria-label="빌드 로그">
        <div class="terminal-header"><span>build-runner / aster-suite</span><span class="terminal-dots"><span></span><span></span><span></span></span></div>
        <div class="terminal-body">
          ${state.build.logs.map((log) => `<div class="log-line ${log.tone}"><span class="log-time">${log.time}</span><span class="log-message">${log.message}</span></div>`).join("")}
        </div>
      </section>
      <aside class="stack">
        <section class="panel">
          <div class="panel-header"><h2 class="panel-title">실행 요약</h2></div>
          <div class="panel-body summary-grid">
            <div class="summary-item"><span>시작</span><strong>${state.build.started}</strong></div>
            <div class="summary-item"><span>소요 시간</span><strong>${state.build.elapsed}</strong></div>
            <div class="summary-item"><span>대상 모듈</span><strong>6</strong></div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-header"><h2 class="panel-title">자동 처리</h2></div>
          <div class="panel-body flush activity-list">
            <div class="activity-item"><div class="activity-top"><span class="activity-title">GitHub App</span>${badge("권한 분리", "outline")}</div><span class="activity-meta">개인 토큰 없이 release 브랜치를 관리합니다.</span></div>
            <div class="activity-item"><div class="activity-top"><span class="activity-title">Windows 빌드</span>${badge("원격 실행", "outline")}</div><span class="activity-meta">제품 빌드와 산출물 수집을 전용 서버에서 처리합니다.</span></div>
            <div class="activity-item"><div class="activity-top"><span class="activity-title">담당자 알림</span>${badge("자동 전달", "outline")}</div><span class="activity-meta">실패 원인과 다음 행동을 담당 팀에 전달합니다.</span></div>
          </div>
        </section>
      </aside>
    </div>
  </div>`;
}

function buildButtons() {
  if (state.build.status === "waiting") {
    return `<button class="btn btn-primary" data-action="run-success">${icon("play", 16)} 성공 흐름 재생</button><button class="btn btn-secondary" data-action="run-failure">실패 대응 보기</button>`;
  }
  if (state.build.status === "building") return `<button class="btn btn-primary" disabled>실행 중</button>`;
  if (state.build.status === "failed") return `<button class="btn btn-primary" data-action="retry-build">${icon("rotate", 16)} 수정 후 재빌드</button><button class="btn btn-secondary" data-action="reset-build">초기화</button>`;
  return `<button class="btn btn-primary" data-action="reset-build">${icon("rotate", 16)} 처음부터 다시 보기</button><button class="btn btn-secondary" data-route="notes">릴리즈 노트 보기</button>`;
}

function renderHistory() {
  const selected = completedReleases.find((item) => item.id === state.selectedHistory) || completedReleases[0];
  return `<div class="stack">
    ${demoNotice()}
    <div class="split-layout">
      <section class="panel">
        <div class="panel-header"><div><h2 class="panel-title">릴리즈 라운드</h2><p class="panel-description">최근 ${completedReleases.length}건</p></div></div>
        <div class="panel-body flush history-list">
          ${completedReleases.map((item) => `<button class="history-item ${item.id === selected.id ? "selected" : ""}" data-action="select-history" data-history-id="${item.id}">
            <div class="history-top"><span class="history-version">${item.version}</span>${badge("배포 완료", "success", true)}</div>
            <div class="history-meta">${item.kind} · ${item.date} · ${item.duration}</div>
          </button>`).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div><p class="eyebrow">Release</p><h2 class="panel-title">${selected.version}</h2><p class="panel-description">${selected.note}</p></div>
          ${badge("배포 완료", "success", true)}
        </div>
        <div class="panel-body stack">
          <div class="summary-grid">
            <div class="summary-item"><span>빌드 검증</span><strong>성공</strong></div>
            <div class="summary-item"><span>소요 시간</span><strong>${selected.duration}</strong></div>
            <div class="summary-item"><span>확정 모듈</span><strong>${selected.confirmed}/${selected.total}</strong></div>
          </div>
          <div style="overflow-x:auto">
            <table class="detail-table">
              <thead><tr><th>모듈</th><th>상태</th><th>확정 커밋</th></tr></thead>
              <tbody>
                ${state.modules.slice(0, 6).map((item) => `<tr><td>${item.name}</td><td>${badge(item.status === "confirmed" ? "확정" : "변경 없음", item.status === "confirmed" ? "success" : "outline")}</td><td class="commit">${item.commit}</td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
    <section class="panel">
      <div class="panel-header"><div><h2 class="panel-title">감사·빌드 타임라인</h2><p class="panel-description">사람과 자동화가 수행한 작업을 같은 시간축에 기록합니다.</p></div></div>
      <div class="panel-body flush activity-list">
        ${[
          ["09:12", "릴리즈 라운드 생성", "release-bot"],
          ["14:35", "모듈 커밋 확정 완료", "6개 모듈"],
          ["17:03", "release 브랜치 생성", "자동 처리"],
          ["17:06", "Windows 빌드 시작", "runner-win-01"],
          ["17:24", "빌드 검증 성공", selected.duration],
          ["17:25", "버전 태그 생성", `v${selected.version}`],
        ].map((row) => `<div class="activity-item"><div class="activity-top"><span class="activity-title">${row[1]}</span><span class="commit">${row[0]}</span></div><span class="activity-meta">${row[2]}</span></div>`).join("")}
      </div>
    </section>
  </div>`;
}

function renderNotes() {
  const selected = releaseNotes.find((item) => item.id === state.selectedNote) || releaseNotes[0];
  return `<div class="stack">
    ${demoNotice()}
    <div class="split-layout">
      <section class="panel">
        <div class="panel-header"><div><h2 class="panel-title">게시된 노트</h2><p class="panel-description">담당자 검토를 마친 최종본입니다.</p></div>${badge(`${releaseNotes.length}건`, "outline")}</div>
        <div class="panel-body flush note-list">
          ${releaseNotes.map((item) => `<button class="note-item ${item.id === selected.id ? "selected" : ""}" data-action="select-note" data-note-id="${item.id}">
            <div class="note-top"><span class="note-version">${item.version}</span>${badge(`게시 노트 ${item.draft}`, "success")}</div>
            <span class="note-meta">${item.published}</span>
          </button>`).join("")}
        </div>
      </section>
      <article class="panel">
        <div class="panel-header">
          <div><p class="eyebrow">Aster Suite</p><h2 class="panel-title">${selected.version} Release Notes</h2><p class="panel-description">비교 기준 ${previousVersion(selected.version)} → ${selected.version}</p></div>
          ${badge("검토 완료", "success", true)}
        </div>
        <div class="panel-body release-note-content">
          ${selected.sections.map((section) => `<section><h3>${section.title}</h3><ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`).join("")}
          <div class="code-block">근거 커밋 ${selected.sections.reduce((sum, section) => sum + section.items.length, 0) * 7}건 · 모듈 매핑 검증 통과 · 내부 용어 사전 적용</div>
        </div>
      </article>
    </div>
  </div>`;
}

function previousVersion(version) {
  const parts = version.split(".").map(Number);
  parts[1] = Math.max(0, parts[1] - 1);
  return parts.join(".");
}

function renderAbout() {
  return `<div class="stack">
    ${demoNotice()}
    <section class="detail-hero">
      <div>
        <p class="eyebrow">Portfolio case study</p>
        <h2 class="detail-version">20여 개 저장소의 릴리즈를 하나의 흐름으로 연결했습니다.</h2>
      </div>
      <p class="panel-description">배포 담당자가 안정화된 소스를 대신 판단하던 구조를 바꾸고, 각 담당자가 확정한 커밋을 기준으로 브랜치 생성, Windows 빌드, 검증, 릴리즈 노트, 태그 생성이 이어지도록 설계했습니다.</p>
      <div class="summary-grid">
        <div class="summary-item"><span>운영 적용</span><strong>5회</strong></div>
        <div class="summary-item"><span>운영 중 빌드 실패</span><strong>0회</strong></div>
        <div class="summary-item"><span>담당자 직접 대응</span><strong>최대 6시간 → 약 5분</strong></div>
      </div>
      <div class="button-row"><button class="btn btn-primary" data-action="run-success">${icon("play", 16)} 동작으로 확인하기</button><a class="btn btn-secondary" href="https://github.com/Jonghai/release-train-demo" target="_blank" rel="noreferrer">${icon("github", 16)} 소스 보기</a></div>
    </section>
    <section class="about-grid">
      <article class="about-card">${icon("git", 24)}<h3>문제와 제약</h3><p>개발 브랜치의 최신 커밋이 항상 배포 가능한 상태는 아니었고, 안정화된 범위는 각 담당자가 가장 정확히 알고 있었습니다.</p></article>
      <article class="about-card">${icon("link", 24)}<h3>핵심 판단</h3><p>담당자가 확정한 커밋을 단일 기준으로 삼고, 보유 중이던 GitHub, 빌드 서버, 메신저를 연결했습니다.</p></article>
      <article class="about-card">${icon("box", 24)}<h3>운영 결과</h3><p>복잡한 Git 흐름은 시스템이 처리하고, 담당자는 커밋 확정과 실패 수정처럼 사람의 판단이 필요한 작업에만 참여합니다.</p></article>
    </section>
    <section class="panel">
      <div class="panel-header"><div><h2 class="panel-title">데모 범위</h2><p class="panel-description">실제 회사 코드와 데이터는 포함하지 않았습니다.</p></div></div>
      <div class="panel-body">
        <table class="detail-table">
          <tbody>
            <tr><th>재현한 경험</th><td>모듈별 커밋 확정, 릴리즈 진행선, 빌드 실패·재빌드, 배포 이력, 릴리즈 노트</td></tr>
            <tr><th>가상 데이터</th><td>Aster Suite, demo-org 저장소, 무작위 커밋과 실행 기록</td></tr>
            <tr><th>공개하지 않은 정보</th><td>회사명, 실제 저장소, 사용자, 내부 주소, 인증 정보, 운영 로그</td></tr>
            <tr><th>구현 방식</th><td>정적 HTML, CSS, JavaScript · 브라우저 상태 기반 시뮬레이션</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>`;
}

function renderPage() {
  return {
    overview: renderOverview,
    confirmations: renderConfirmations,
    build: renderBuild,
    history: renderHistory,
    notes: renderNotes,
    about: renderAbout,
  }[state.route]();
}

function render() {
  document.querySelector("#app").innerHTML = renderShell();
  document.title = `${TITLES[state.route][0]} | Release Train Demo`;
}

function navigate(route) {
  if (!TITLES[route]) return;
  state.route = route;
  state.mobileOpen = false;
  if (location.hash !== `#${route}`) location.hash = route;
  else render();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function nowTime(offsetSeconds = 0) {
  const date = new Date(Date.now() + offsetSeconds * 1000);
  return new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function addLog(message, tone = "neutral", offset = 0) {
  state.build.logs.push({ time: nowTime(offset), message, tone });
}

function runBuild(mode = "success", startAt = 0) {
  clearTimeout(state.timer);
  state.route = "build";
  location.hash = "build";
  state.build.status = "building";
  state.build.mode = mode;
  state.build.stage = startAt;
  state.build.started = nowTime();
  state.build.elapsed = "실행 중";
  if (startAt === 0) {
    state.build.logs = [];
    addLog("확정된 6개 모듈의 커밋을 잠갔습니다.", "success");
  } else {
    addLog("담당자 수정 사항을 확인했습니다. 재빌드를 시작합니다.", "success");
  }
  showToast("빌드 검증을 시작했습니다", "확정된 커밋만 사용해 자동 단계를 실행합니다.", "neutral");
  render();

  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 180 : 850;
  const messages = [
    "모듈별 확정 커밋을 검증했습니다.",
    "release/2.9.0 브랜치를 생성했습니다.",
    "Windows 빌드 서버에서 제품 빌드를 실행했습니다.",
    "산출물과 필수 검증 항목을 확인했습니다.",
    "로컬 LLM 릴리즈 노트 초안을 연결했습니다.",
    "루트와 모듈 저장소에 버전 태그를 생성했습니다.",
  ];

  function next(index) {
    state.build.stage = index;
    if (mode === "failure" && index === 2) {
      state.build.status = "failed";
      state.build.elapsed = "1분 12초";
      addLog("admin-console 빌드에서 의존성 버전 불일치를 발견했습니다.", "error", index);
      addLog("담당 팀에 실패 원인과 재빌드 방법을 전달했습니다.", "neutral", index + 1);
      render();
      showToast("빌드 실패를 감지했습니다", "담당자 수정 후 이 화면에서 재빌드할 수 있습니다.", "error");
      return;
    }
    addLog(messages[index], "success", index);
    render();
    if (index >= STAGES.length - 1) {
      state.build.status = "done";
      state.build.elapsed = "18분 24초";
      addLog("2.9.0 배포 준비가 완료됐습니다.", "success", index + 1);
      render();
      showToast("배포 준비가 완료됐습니다", "릴리즈 노트와 태그 생성까지 마쳤습니다.", "success");
      return;
    }
    state.timer = setTimeout(() => next(index + 1), delay);
  }

  state.timer = setTimeout(() => next(startAt), delay);
}

function resetBuild() {
  clearTimeout(state.timer);
  state.build.status = "waiting";
  state.build.stage = 0;
  state.build.started = "실행 전";
  state.build.elapsed = "—";
  state.build.logs = [
    { time: "09:00:00", message: "릴리즈 2.9.0의 확정 커밋을 불러왔습니다.", tone: "neutral" },
    { time: "09:00:01", message: "6개 모듈이 빌드 실행을 기다리고 있습니다.", tone: "neutral" },
  ];
  render();
  showToast("데모를 초기화했습니다", "성공 흐름이나 실패 대응을 다시 재생할 수 있습니다.", "neutral");
}

function confirmModule(id) {
  const target = state.modules.find((item) => item.id === id);
  if (!target || target.status !== "pending") return;
  target.status = "confirmed";
  render();
  showToast(`${target.name} 커밋을 확정했습니다`, `${target.commit}가 이번 릴리즈 기준으로 저장됐습니다.`, "success");
}

function confirmAll() {
  const pending = state.modules.filter((item) => item.status === "pending");
  pending.forEach((item) => {
    item.status = "confirmed";
  });
  render();
  showToast("모든 응답을 반영했습니다", `${pending.length}개 모듈의 커밋이 확정됐습니다.`, "success");
}

function showToast(title, description, tone = "neutral") {
  const region = document.querySelector("#toast-region");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="status-dot" style="margin-top:.35rem;background:var(--color-${tone === "neutral" ? "muted-soft" : tone})"></span><div><strong>${title}</strong><p>${description}</p></div><button class="toast-close" aria-label="알림 닫기">${icon("x", 16)}</button>`;
  toast.querySelector("button").addEventListener("click", () => toast.remove());
  region.appendChild(toast);
  window.setTimeout(() => toast.remove(), 4500);
}

document.addEventListener("click", (event) => {
  const routeTarget = event.target.closest("[data-route]");
  if (routeTarget) {
    event.preventDefault();
    navigate(routeTarget.dataset.route);
    return;
  }

  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "open-menu") {
    state.mobileOpen = true;
    render();
  } else if (action === "close-menu") {
    state.mobileOpen = false;
    render();
  } else if (action === "run-success") {
    runBuild("success");
  } else if (action === "run-failure") {
    runBuild("failure");
  } else if (action === "retry-build") {
    runBuild("success", 2);
  } else if (action === "reset-build") {
    resetBuild();
  } else if (action === "confirm-module") {
    confirmModule(target.dataset.moduleId);
  } else if (action === "confirm-all") {
    confirmAll();
  } else if (action === "open-release") {
    if (target.dataset.releaseId === "current") navigate("build");
    else {
      state.selectedHistory = Number(target.dataset.releaseId);
      navigate("history");
    }
  } else if (action === "select-history") {
    state.selectedHistory = Number(target.dataset.historyId);
    render();
  } else if (action === "select-note") {
    state.selectedNote = Number(target.dataset.noteId);
    render();
  }
});

window.addEventListener("hashchange", () => {
  const route = location.hash.slice(1);
  if (TITLES[route]) {
    state.route = route;
    state.mobileOpen = false;
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.mobileOpen) {
    state.mobileOpen = false;
    render();
  }
});

render();
