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
  chevron: '<path d="m9 18 6-6-6-6"/>',
};

function icon(name, size = 18) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.info}</svg>`;
}

const NAV = [
  { id: "overview", label: "배포 현황", icon: "dashboard" },
  { id: "confirmations", label: "확정 현황", icon: "check" },
  { id: "history", label: "배포 이력", icon: "history" },
  { id: "notes", label: "릴리즈 노트", icon: "file" },
  { id: "about", label: "프로젝트 설명", icon: "info" },
];

const TITLES = {
  overview: ["배포 현황 대시보드", "전체 배포를 한눈에"],
  confirmations: ["확정 현황", "배포 전 커밋 확정 수집 · 마감"],
  "new-release": ["새 배포 시작", "release 조합 구성"],
  "confirm-module": ["모듈 확정", "release 에 반영할 안정 지점 선택"],
  build: ["배포 상세", "실시간 배포 진행 현황"],
  history: ["배포 이력", "과거 배포 라운드 · 어떤 커밋이 어떤 태그로 나갔는지 · 빌드 검증 기록"],
  notes: ["릴리즈 노트", "게시된 릴리즈 노트"],
  about: ["프로젝트 설명", "문제와 제약을 운영 가능한 시스템으로 연결한 과정입니다."],
};

const STAGES = ["커밋 확정 & 마감", "빌드", "검증", "승격", "백머지", "릴리즈 노트", "게시·완료"];

const modules = [
  {
    id: "core-runtime",
    name: "core-runtime",
    repo: "demo-org/aster-core-runtime",
    commit: "7ea91c4",
    team: "Core team",
    status: "confirmed",
    summary: "캐시 만료 처리와 오류 복구 흐름을 개선했습니다.",
    commits: [
      { sha: "7ea91c4", message: "fix: 캐시 만료 후 복구 흐름 안정화", author: "Core team", time: "오늘 10:18" },
      { sha: "54c78a1", message: "refactor: 캐시 정책 모듈 분리", author: "Core team", time: "오늘 09:42" },
      { sha: "1a36df0", message: "feat: 캐시 상태 진단 로그 추가", author: "Core team", time: "어제 17:06" },
    ],
    selectedIndex: 0,
  },
  {
    id: "gateway-api",
    name: "gateway-api",
    repo: "demo-org/aster-gateway-api",
    commit: "2f84b73",
    team: "Platform team",
    status: "confirmed",
    summary: "요청 제한 정책과 감사 로그를 추가했습니다.",
    commits: [
      { sha: "2f84b73", message: "feat: 요청 제한 정책과 감사 로그 추가", author: "Platform team", time: "오늘 11:03" },
      { sha: "9c3b8e5", message: "fix: 인증 실패 응답 형식 통일", author: "Platform team", time: "오늘 10:27" },
    ],
    selectedIndex: 0,
  },
  {
    id: "admin-console",
    name: "admin-console",
    repo: "demo-org/aster-admin-console",
    commit: "b108de2",
    team: "Console team",
    status: "confirmed",
    summary: "배포 상태 필터와 접근성 안내를 개선했습니다.",
    commits: [
      { sha: "b108de2", message: "feat: 배포 상태 필터 추가", author: "Console team", time: "오늘 11:21" },
      { sha: "64d1ae8", message: "fix: 키보드 포커스 이동 보완", author: "Console team", time: "오늘 10:46" },
      { sha: "ad389c1", message: "style: 상태 배지 대비 개선", author: "Console team", time: "어제 16:31" },
    ],
    selectedIndex: 0,
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
  route: (location.hash || "#build").slice(1),
  mobileOpen: false,
  modules: modules.map((item) => ({ ...item })),
  selectedHistory: 104,
  selectedNote: 4,
  selectedModuleId: "core-runtime",
  noteDetail: false,
  round: {
    id: 105,
    version: "2.9.0",
    kind: "정기 배포",
    status: "closed",
    created: "2026-08-28 09:00",
    deadline: "2026-08-28 18:00",
    memo: "정기 릴리즈 후보 커밋 확정 및 빌드 검증",
    pointer: "a71c9e4",
  },
  releaseForm: {
    version: "2.10.0",
    kind: "정기 배포",
    deadline: "2026-09-04T18:00",
    memo: "",
    autoBuild: false,
  },
  build: {
    version: "2.9.0",
    kind: "정기 배포",
    status: "waiting",
    stage: 0,
    mode: "success",
    started: "실행 전",
    elapsed: "—",
    logs: [
      { time: "", message: "PS C:\\build-runner\\work\\aster-suite> git checkout release/2.9.0", tone: "neutral" },
      { time: "", message: "HEAD is now at 7ea91c4 chore: prepare release 2.9.0", tone: "neutral" },
      { time: "", message: "PS C:\\build-runner\\work\\aster-suite> .\\gradlew clean assemble", tone: "neutral" },
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
    pending: { label: "대기", tone: "info" },
    latest: { label: "최신", tone: "outline" },
    docs: { label: "변경 없음", tone: "outline" },
  }[status];
}

function badge(label, tone = "outline", dot = false) {
  return `<span class="badge ${tone}">${dot ? '<span class="badge-dot"></span>' : ""}${label}</span>`;
}

function rail(stage, status = "waiting") {
  const width = Math.max(0, Math.min(92, (stage / (STAGES.length - 1)) * 92));
  const trainLeft = 4 + width;
  const moving = status === "building";
  return `
    <div class="rail" aria-label="배포 진행 단계">
      <div class="rail-progress ${status === "failed" ? "error" : ""}" style="width:${width}%"></div>
      <div class="mini-locomotive ${moving ? "is-moving" : ""} ${status === "failed" ? "is-failed" : ""}" style="left:${trainLeft}%" aria-hidden="true">
        ${moving ? '<span class="train-smoke smoke-one"></span><span class="train-smoke smoke-two"></span>' : ""}
        <span class="train-cab"></span>
        <span class="train-window"></span>
        <span class="train-body"></span>
        <span class="train-stack"></span>
        <span class="train-lamp"></span>
        <span class="train-wheel wheel-back"></span>
        <span class="train-wheel wheel-front"></span>
      </div>
      ${moving ? `<span class="train-sound">${STAGES[stage]} 진행 중</span>` : ""}
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

function railScene(stage, status = "waiting") {
  const sceneIcons = ["check", "box", "server", "shield", "git", "file", "check"];
  const progress = Math.max(0, Math.min(100, (stage / (STAGES.length - 1)) * 100));
  const trainLeft = progress;
  const moving = status === "building";
  const failed = status === "failed";
  const movingCaptions = [
    "커밋 확정 & 마감 진행 중 — 마감되면 빌드가 시작됩니다",
    "빌드 진행 중 · 3/9 단계",
    "빌드 통과 — 검증 진행 중",
    "승격 진행 중 — main 머지 + 태그",
    "백머지 진행 중 — develop 반영",
    "릴리즈 노트 초안 생성 · 검토·수정",
    "배포 완료 — done",
  ];
  const caption = {
    waiting: "커밋 확정 & 마감 완료 — 빌드 시작 대기",
    building: movingCaptions[stage],
    failed: "빌드 실패 — 담당자 수정 후 재빌드 대기",
    done: "배포 완료 — done",
  }[status];
  return `<div class="rail-scene">
    <span class="scene-commit">커밋해시 ${state.round.pointer === "—" ? "7ea91c4" : state.round.pointer}</span>
    <div class="scene-track-area">
      <div class="scene-ties"></div>
      <div class="scene-track-line"></div>
      <div class="scene-track-progress ${failed ? "error" : ""}" style="width:${progress}%"></div>
      <div class="scene-train ${moving ? "is-moving" : ""} ${failed ? "is-failed" : ""}" style="left:${trainLeft}%" aria-hidden="true">
        ${moving ? '<span class="scene-smoke smoke-a"></span><span class="scene-smoke smoke-b"></span><span class="scene-smoke smoke-c"></span>' : ""}
        <div class="freight-car"><span class="freight-window"></span><span class="scene-wheel freight-wheel-a"></span><span class="scene-wheel freight-wheel-b"></span></div>
        <div class="scene-engine"><span class="engine-cab"></span><span class="engine-window"></span><span class="engine-boiler"></span><span class="engine-dome"></span><span class="engine-stack"></span><span class="engine-lamp"></span><span class="engine-cowcatcher"></span><span class="scene-wheel cab-wheel"></span><span class="scene-wheel boiler-wheel-a"></span><span class="scene-wheel boiler-wheel-b"></span></div>
      </div>
      ${STAGES.map((label, index) => {
        const left = (index / (STAGES.length - 1)) * 100;
        let cls = "todo";
        if (index < stage || status === "done") cls = "done";
        else if (index === stage && failed) cls = "failed";
        else if (index === stage) cls = "active";
        return `<div class="scene-station ${cls}" style="left:${left}%" title="${label}">
          <span class="scene-station-node">${icon(sceneIcons[index], 17)}</span>
          <span class="scene-station-label">${label}</span>
        </div>`;
      }).join("")}
    </div>
    <p class="scene-caption" aria-live="polite">${caption}</p>
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
  if (state.route === "overview") return `<button class="btn btn-primary" data-route="new-release">새 배포 시작</button>`;
  if (["confirmations", "confirm-module", "new-release", "history"].includes(state.route)) return "";
  if (state.route === "build") {
    return state.build.status === "building" ? `<div class="live-chip"><span class="runner-dot is-busy"></span>실시간</div>` : "";
  }
  if (state.route === "notes") {
    return state.noteDetail
      ? `<button class="btn btn-ghost" data-action="notes-list">목록으로</button>`
      : `<button class="btn btn-secondary" disabled>허브에서 관리 ↗</button>`;
  }
  return `<a class="btn btn-secondary hide-mobile" href="https://github.com/JongHa11" target="_blank" rel="noreferrer">${icon("github", 16)} GitHub 프로필</a>`;
}

function renderShell() {
  let [title, subtitle] = TITLES[state.route];
  if (state.route === "notes" && state.noteDetail) {
    const note = releaseNotes.find((item) => item.id === state.selectedNote);
    if (note) [title, subtitle] = [note.version, `production · ${note.published}`];
  }
  return `
    <div class="app-shell">
      ${state.mobileOpen ? '<button class="mobile-backdrop" data-action="close-menu" aria-label="메뉴 닫기"></button>' : ""}
      <aside class="sidebar ${state.mobileOpen ? "open" : ""}" aria-label="주요 메뉴">
        <a class="brand" href="#build" data-route="build">
          <span class="brand-mark">${icon("train", 20)}</span>
          <span class="brand-copy">
            <span class="brand-name">release-Train</span>
            <span class="brand-subtitle">배포 자동화</span>
          </span>
        </a>
        <nav class="nav-list">
          ${NAV.map(
            (item) => `<button class="nav-button" data-route="${item.id}" ${(state.route === item.id || (state.route === "build" && item.id === "overview")) ? 'aria-current="page"' : ""}>
              ${icon(item.icon)}<span>${item.label}</span>
            </button>`,
          ).join("")}
        </nav>
        <div class="sidebar-spacer"></div>
        <div class="runner-state">
          <strong>빌드 실행기</strong>
          <span><i class="runner-dot ${state.build.status === "building" ? "is-busy" : ""}"></i>${state.build.status === "building" ? "실행 중" : "유휴"} · demo-runner</span>
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
  if (state.build.status === "waiting") return "커밋 확정 & 마감 완료 — 빌드 시작 대기";
  if (state.build.status === "building") {
    return [
      "커밋 확정 & 마감 진행 중 — 마감되면 빌드가 시작됩니다",
      "빌드 진행 중 · 3/9 단계",
      "빌드 통과 — 검증 진행 중",
      "승격 진행 중 — main 머지 + 태그",
      "백머지 진행 중 — develop 반영",
      "릴리즈 노트 초안 생성 · 검토·수정",
      "배포 완료 — done",
    ][state.build.stage];
  }
  if (state.build.status === "failed") return "빌드 실패 — 담당자 수정 후 재빌드 대기";
  return "배포 완료 — done";
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
    <section class="dashboard-stats" aria-label="배포 요약">
      ${dashboardStat("진행 중", stats.building, "info")}
      ${dashboardStat("배포 완료", stats.done, "success")}
      ${dashboardStat("중단 / 실패", stats.failed, "error")}
      ${dashboardStat("대기 중", stats.waiting, "neutral")}
    </section>
    <section>
      <h2 class="source-section-title">배포 목록</h2>
      <div class="dashboard-grid">
        ${dashboardTrainCard(current, true)}
        ${completedReleases.slice(0, 3).map((item) => dashboardTrainCard(item)).join("")}
      </div>
    </section>
  </div>`;
}

function dashboardStat(label, value, tone) {
  return `<div class="dashboard-stat"><span><i class="status-dot ${tone}"></i>${label}</span><strong>${value}</strong></div>`;
}

function dashboardTrainCard(release, current = false) {
  const status = current ? state.build.status : "done";
  const progress = status === "done" ? 100 : (release.stage / (STAGES.length - 1)) * 100;
  const moving = status === "building";
  const failed = status === "failed";
  const labels = { waiting: "대기", building: "진행 중", done: "완료", failed: "중단" };
  const tones = { waiting: "outline", building: "info", done: "success", failed: "error" };
  return `<button class="dashboard-train-card" data-action="open-release" data-release-id="${release.id}">
    <div class="dashboard-card-head"><span><strong>${release.version}</strong><small>· ${release.kind}</small></span>${badge(labels[status], tones[status], true)}</div>
    <p class="dashboard-card-memo">${current ? "정기 릴리즈 후보 커밋 확정 및 빌드 검증" : release.note}</p>
    <div class="mini-track">
      <span class="mini-track-base"></span><span class="mini-track-progress ${failed ? "is-failed" : ""}" style="width:${progress}%"></span>
      ${[0, 25, 50, 75, 100].map((point) => `<i class="mini-track-dot ${point <= progress + 0.5 ? (failed ? "failed" : "done") : ""}" style="left:${point}%"></i>`).join("")}
      <span class="source-mini-train ${moving ? "is-moving" : ""} ${failed ? "is-failed" : ""}" style="left:${progress}%" aria-hidden="true">
        ${moving ? '<i class="mini-puff puff-one"></i><i class="mini-puff puff-two"></i>' : ""}
        <i class="mini-cab"></i><i class="mini-boiler"></i><i class="mini-stack"></i><i class="mini-light"></i><i class="mini-wheel wheel-one"></i><i class="mini-wheel wheel-two"></i>
      </span>
    </div>
    <div class="dashboard-stage"><span>${current ? buildCaption() : "배포 완료 — done"}</span>${current && state.build.status === "waiting" ? "" : `<code>${current ? `확정 ${state.modules.filter((item) => item.status === "confirmed").length}/${state.modules.length}` : ""}</code>`}</div>
  </button>`;
}

function renderConfirmations() {
  const confirmed = state.modules.filter((item) => item.status === "confirmed").length;
  const pending = state.modules.filter((item) => item.status === "pending").length;
  const noAction = state.modules.length - confirmed - pending;
  const terminal = confirmed + noAction;
  const actionable = state.modules.filter((item) => item.status === "confirmed" || item.status === "pending");
  const passive = state.modules.filter((item) => item.status === "latest" || item.status === "docs");
  const closed = state.round.status === "closed";
  return `<div class="collect-page">
    <div class="collect-select"><select aria-label="릴리즈 라운드"><option>${state.round.version} · ${state.round.kind} · 확정 ${confirmed}/${state.modules.length}</option><option>2.8.0 · 정기 배포</option></select></div>
    <section class="collect-header">
      <div><div class="collect-title"><strong>확정 현황</strong>${badge(state.round.kind.includes("정기") ? "정기" : "긴급", "outline")}<code>${state.round.version}</code>${badge(closed ? "수집 완료 — 빌드 검증 후 승격" : "수집 중", closed ? "success" : "info")}</div><p>라운드 r-${state.round.id} · 생성 ${state.round.created} · 마감 ${state.round.deadline}</p>${closed ? `<p class="closed-guide">빌드가 깨지면 <code>release/${state.round.version}</code>에 수정한 뒤 release 변경 확인으로 감지된 모듈만 재확정합니다.</p>` : ""}</div>
      <div class="collect-actions"><button class="btn btn-secondary btn-sm" ${closed ? "disabled" : ""}>변경 재확인</button><button class="btn btn-secondary btn-sm" ${closed ? "disabled" : ""}>마감 수정</button><button class="btn btn-secondary btn-sm" ${closed ? "disabled" : ""}>라운드 취소</button><button class="btn btn-primary btn-sm" data-action="close-round" ${closed || pending ? "disabled" : ""}>${closed ? "마감 완료" : "지금 마감"}</button></div>
    </section>
    <div class="usage-notice">${icon("info", 18)}<div>하나의 기능·이슈가 <strong>여러 모듈에 걸쳐 있으면 함께 배포</strong>돼야 합니다 — 확정 전 <strong>관련 기능 담당자와 맞춰</strong> 빠지는 모듈이 없게 확인해주세요.<details><summary>Release Train 사용 안내</summary></details></div></div>
    <section class="collect-stats">
      ${collectStat("마감까지", closed ? "—" : "02:47:18", state.round.deadline, "ink")}
      ${collectStat("종결 진행률", `${terminal} / ${state.modules.length}`, `확정 ${confirmed} · 스킵 0 · 최신 ${state.modules.filter((x) => x.status === "latest").length} · 문서만 ${state.modules.filter((x) => x.status === "docs").length}`, "success")}
      ${collectStat("미응답 대기", String(pending), "마감 시 지난 배포 버전 유지", "warning")}
      ${collectStat("머지 실패", "0", "해소 전 종결 차단", "error")}
    </section>
    <section class="collect-modules">
      <h2>모듈 상태 <span>${state.modules.length}개 모듈</span></h2>
      <div class="collect-card-grid">${actionable.map(confirmationCard).join("")}</div>
      <div class="passive-divider"><i></i><span>확정 불필요 ${passive.length}개 — 새 커밋 없음·문서만 변경</span><i></i></div>
      <div class="collect-card-grid passive">${passive.map(confirmationCard).join("")}</div>
    </section>
  </div>`;
}

function collectStat(top, main, sub, tone) {
  return `<div class="collect-stat ${tone}"><i></i><div><span>${top}</span><strong>${main}</strong><small>${sub}</small></div></div>`;
}

function confirmationCard(item) {
  const meta = moduleStatusMeta(item.status);
  const pending = item.status === "pending";
  const confirmed = item.status === "confirmed";
  return `<button class="confirmation-card ${pending ? "needs-action" : ""}" data-action="open-confirm-module" data-module-id="${item.id}" ${state.round.status === "closed" ? "disabled" : ""}>
    <div class="confirmation-card-head"><div><strong>${item.name}</strong><code>${item.repo}</code></div>${badge(meta.label, meta.tone)}</div>
    <p class="confirmation-owner">${item.team}</p>
    <div class="confirmation-detail">
      ${pending ? `<span>main 대비 develop 선행 ${item.commits.length}건 · 카드를 열어 안정 커밋 선택</span>` : ""}
      ${confirmed ? `<span class="confirmed-line">✓ <code>${item.commit}</code> · 2026-08-28 10:24 <small>(기록됨 — 마감 시 머지 · 수정/스킵 가능)</small></span><div class="confirmation-summary"><b>확정 내용 요약</b><span>• ${item.summary}</span></div>` : ""}
      ${item.status === "latest" ? "<span>반영할 새 커밋 없음 · 확정 불필요</span>" : ""}
      ${item.status === "docs" ? "<span>문서 변경 2건 · 제품 코드 변경 없음 — 확정 불필요</span>" : ""}
    </div>
  </button>`;
}

function renderModuleConfirm() {
  const item = state.modules.find((module) => module.id === state.selectedModuleId) || state.modules[0];
  const selectedIndex = item.selectedIndex || 0;
  const selected = item.commits[selectedIndex];
  const confirmed = item.status === "confirmed";
  return `<div class="module-confirm-page">
    <div class="module-breadcrumb"><button data-route="confirmations">확정 현황</button><span>›</span><strong>${item.name}</strong></div>
    <section class="module-confirm-head">
      <div><div class="module-confirm-title"><strong>${item.name}</strong>${badge(confirmed ? "확정됨 — 마감 전 수정 가능" : "확정 대기", confirmed ? "success" : "info")}</div><p>${item.repo} · main 대비 develop 선행 <b>${item.commits.length}건</b> · release 브랜치 없음 — 마감 시 main에서 생성</p></div>
      <div><small>기준: 방금 전</small><button class="btn btn-secondary btn-sm">커밋 갱신</button></div>
    </section>
    ${confirmed ? `<div class="module-guide">현재 <code>${item.commit}</code>까지 확정 기록된 모듈입니다. 아직 머지 전이라 마감 전까지 확정 지점을 수정하거나 스킵으로 전환할 수 있습니다.</div>` : ""}
    <div class="module-confirm-grid">
      <section class="commit-picker">
        <div class="commit-picker-head"><div><strong>develop 브랜치 커밋 목록</strong><span>release 브랜치에 반영할 안정 커밋을 선택해주세요</span></div><small>최신이 위 · 선택 커밋과 그 아래(과거)가 모두 포함</small></div>
        <div class="commit-list">
          ${item.commits.map((commit, index) => {
            const isSelected = index === selectedIndex;
            const isNewer = index < selectedIndex;
            const current = confirmed && commit.sha === item.commit;
            return `<label class="commit-row ${isSelected ? "selected" : ""} ${isNewer ? "excluded" : ""}">
              ${isSelected ? `<span class="commit-boundary">▼ 여기부터 아래 ${item.commits.length - index}건이 모두 RELEASE에 포함됩니다</span>` : ""}
              ${isNewer && index === selectedIndex - 1 ? `<span class="commit-boundary excluded-copy">▲ 위 ${selectedIndex}건은 더 최신 커밋 — 이번 확정에서 제외</span>` : ""}
              <span class="commit-main"><input type="radio" name="commit-cutoff" data-action="select-commit" data-module-id="${item.id}" data-index="${index}" ${isSelected ? "checked" : ""}><code>${commit.sha}</code>${current ? '<em>현재 확정</em>' : ""}<span>${commit.message}</span><small>${commit.author} · ${commit.time}</small>${isSelected ? '<b>확정 대상</b>' : index > selectedIndex ? '<b>포함</b>' : ""}</span>
            </label>`;
          }).join("")}
        </div>
      </section>
      <aside class="confirm-summary-panel">
        <span>CONFIRM</span><h2>안정 버전 확정</h2>
        <dl><div><dt>확정 대상</dt><dd><code>${selected.sha}</code></dd></div><div><dt>포함 커밋</dt><dd>${item.commits.length - selectedIndex}건</dd></div><div><dt>제외 (더 최신)</dt><dd>${selectedIndex}건</dd></div></dl>
        <button class="btn btn-primary" data-action="confirm-selected" data-module-id="${item.id}">${confirmed ? "이 커밋으로 확정 수정" : "이 커밋까지 확정"}</button>
        <button class="btn btn-secondary" data-action="skip-module" data-module-id="${item.id}">${confirmed ? "스킵으로 전환 — 이번 라운드 반영 안 함" : "이번 라운드 스킵"}</button>
        <p>확정은 커밋 해시 기록이며 실제 머지는 마감 시 일괄 수행됩니다. 스킵하면 지난 배포 버전으로 배포됩니다.</p>
      </aside>
    </div>
  </div>`;
}

function renderNewRelease() {
  const form = state.releaseForm;
  return `<div class="new-release-page">
    ${demoNotice()}
    <div class="new-release-guide">라운드를 만들면 담당자 확정은 확정 현황에서 진행되고, 마감 후 빌드 검증이 배포 상세 화면으로 이어집니다.</div>
    <form class="new-release-form" data-form="new-release">
      <label><span>프로젝트</span><select disabled><option>aster-suite-demo</option></select></label>
      <label><span>배포 유형</span><select name="kind"><option ${form.kind === "정기 배포" ? "selected" : ""}>정기 배포</option><option ${form.kind === "긴급 배포" ? "selected" : ""}>긴급 배포</option></select></label>
      <label><span>릴리즈 버전</span><input name="version" value="${form.version}" pattern="[0-9]+\\.[0-9]+\\.[0-9]+" required><small>형식은 N.M.P입니다 — release 브랜치와 태그에 사용합니다.</small></label>
      <label><span>확정 마감 시각</span><input type="datetime-local" name="deadline" value="${form.deadline}" required></label>
      <label><span>메모 (선택)</span><textarea name="memo" rows="3" placeholder="이번 배포의 목적이나 확인할 내용을 적어주세요.">${form.memo}</textarea></label>
      <label class="switch-field"><span><b>마감 후 자동 빌드 시작</b><small>포인터 커밋 생성 직후 빌드 검증을 시작합니다.</small></span><input type="checkbox" name="autoBuild" ${form.autoBuild ? "checked" : ""}></label>
      <div class="form-actions"><button class="btn btn-secondary" type="button" data-route="overview">취소</button><button class="btn btn-primary" type="submit">배포 시작</button></div>
    </form>
  </div>`;
}

function renderBuild() {
  const meta = statusMeta(state.build.status);
  return `<div class="stack">
    <section class="deploy-heading">
      <h2 class="deploy-version">${state.build.version}</h2>
      ${badge(meta.label, meta.tone, true)}
      <span class="deploy-meta">${state.build.kind} · demo-release-bot — 가상 포트폴리오 데이터</span>
      <div class="deploy-actions"><button class="btn btn-secondary" data-route="new-release">새 배포 시작</button>${buildButtons()}</div>
    </section>
    ${railScene(state.build.stage, state.build.status)}
    <div class="deploy-grid">
      <section class="deploy-panel progress-panel">
        <div class="deploy-panel-title"><strong>현재 진행 현황</strong><span>${Math.round((state.build.stage / (STAGES.length - 1)) * 100)}% · 설정 v5</span></div>
        <div class="current-progress ${state.build.status === "failed" ? "is-failed" : ""}">
          <span class="current-progress-icon">${icon(state.build.status === "failed" ? "x" : "box", 19)}</span>
          <div><strong>${buildCaption()}</strong><span>${state.build.started === "실행 전" ? "빌드 실행 기록이 아직 없습니다" : `실행 #24 · 시작 ${state.build.started} · ${state.build.elapsed}`}</span></div>
        </div>
        <div>
          <h3 class="log-title">빌드 로그</h3>
          <div class="terminal compact" aria-label="빌드 로그">
            <div class="terminal-body raw-terminal" aria-live="polite">
              ${state.build.logs.map((log) => `<div class="raw-log-line ${log.tone}">${log.message}</div>`).join("")}
            </div>
          </div>
        </div>
      </section>
      <aside class="deploy-side">
        <section class="deploy-panel">
          <div class="deploy-panel-title"><strong>빌드 입력</strong><span>§4.1</span></div>
          <p class="deploy-panel-help">루트 포인터 커밋 + 독립 저장소 모듈의 release HEAD</p>
          <div class="input-list">
            <div class="input-row">${icon("git", 17)}<div><strong>aster-suite release 포인터 커밋</strong><span>서브모듈 SHA 고정</span></div><code>${state.round.pointer === "—" ? "7ea91c4" : state.round.pointer}</code></div>
            <div class="input-row">${icon("git", 17)}<div><strong>admin-console release HEAD</strong><span>독립 저장소 모듈 · 별도 체크아웃</span></div><code>13bc8f2</code></div>
          </div>
        </section>
        <section class="deploy-panel">
          <div class="deploy-panel-title"><strong>모듈 빌드 현황</strong></div>
          <div class="module-status-list">
            <div><span><code>core-runtime</code><small>Core team</small></span>${badge(state.build.status === "done" ? "통과" : state.build.status === "failed" ? "대기" : "검증 대기", state.build.status === "done" ? "success" : "outline")}</div>
            <div><span><code>admin-console</code><small>Console team</small></span>${badge(state.build.status === "done" ? "통과" : state.build.status === "failed" ? "실패" : "검증 대기", state.build.status === "done" ? "success" : state.build.status === "failed" ? "error" : "outline")}</div>
            <div><span><code>viewer-web</code><small>Viewer team</small></span>${badge(state.build.status === "done" ? "통과" : "검증 대기", state.build.status === "done" ? "success" : "outline")}</div>
          </div>
        </section>
        <section class="deploy-panel">
          <div class="deploy-panel-title"><strong>승격 게이트</strong></div>
          <div class="gate-list"><span>${icon("check", 16)} 확정 커밋 고정</span><span>${icon("shield", 16)} 빌드·검증 통과 후 활성화</span></div>
        </section>
      </aside>
    </div>
    ${state.build.status === "done" ? renderArtifacts() : ""}
  </div>`;
}

function renderArtifacts() {
  const artifacts = [
    ["aster-daemon-2.9.0-20260828174218.tar.gz", "186MB"],
    ["aster-daemon-2.9.0-20260828174218.zip", "186MB"],
    ["aster-server-2.9.0-20260828174218.zip", "204MB"],
    ["aster-viewer-2.9.0-20260828174602.zip", "148MB"],
    ["aster-previewer-2.9.0-20260828174831.zip", "172MB"],
  ];
  const emptyZip = "data:application/zip;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==";
  return `<section class="artifact-panel">
    <div class="artifact-head"><div><h2>배포 산출물</h2><p>빌드 서버가 보관한 결과 파일입니다.</p></div><a class="btn btn-secondary" href="${emptyZip}" download="aster-suite-${state.build.version}-artifacts.zip">모두 다운로드 (zip)</a></div>
    <div class="artifact-list">${artifacts.map(([name, size]) => `<div><span><code>${name.replace("2.9.0", state.build.version)}</code><small>${size} · 준비됨</small></span><a class="btn btn-secondary btn-sm" href="data:text/plain;charset=utf-8,Portfolio%20demo%20artifact" download="${name.replace("2.9.0", state.build.version)}">다운로드</a></div>`).join("")}</div>
    <p class="artifact-note">산출물 원본은 빌드 서버가 보관합니다. 일괄 zip에는 게시된 릴리즈 노트도 함께 담깁니다.</p>
  </section>`;
}

function buildButtons() {
  if (state.build.status === "waiting") {
    return `<button class="btn btn-secondary" data-action="run-failure">실패 시나리오</button><button class="btn btn-primary" data-action="run-success">${icon("play", 16)} 빌드 시작</button>`;
  }
  if (state.build.status === "building") return `<button class="btn btn-secondary" disabled>빌드 실행 중</button>`;
  if (state.build.status === "failed") return `<button class="btn btn-secondary" data-action="reset-build">초기화</button><button class="btn btn-primary" data-action="retry-build">${icon("rotate", 16)} 지금 재빌드</button>`;
  return `<button class="btn btn-primary" data-action="reset-build">${icon("rotate", 16)} 처음부터 다시 보기</button><button class="btn btn-secondary" data-route="notes">릴리즈 노트 보기</button>`;
}

function renderHistory() {
  const selected = completedReleases.find((item) => item.id === state.selectedHistory) || completedReleases[0];
  return `<div class="history-layout">
    <aside class="history-master"><div class="history-master-title">라운드 (${completedReleases.length})</div><div>${completedReleases.map((item) => `<button class="source-history-item ${item.id === selected.id ? "active" : ""}" data-action="select-history" data-history-id="${item.id}"><div><strong>${item.version}</strong>${badge("배포 확정", "success")}</div><span>${item.kind} · ${item.date}</span><small>확정 ${item.confirmed} · 스킵 ${item.total - item.confirmed} · 모듈 ${item.total}</small></button>`).join("")}</div></aside>
    <article class="history-detail">
      <section class="history-release-head"><div><span>RELEASE</span><div><code>${selected.version}</code>${badge("배포 확정", "success")}${badge(selected.kind.includes("정기") ? "정기" : "수시", "outline")}</div><dl><div><dt>생성 일시</dt><dd>${selected.date} 09:00</dd></div><div><dt>마감 일시</dt><dd>${selected.date} 17:02</dd></div><div><dt>태그 일시</dt><dd>${selected.date} 17:25</dd></div></dl></div><button class="btn btn-secondary btn-sm" data-route="notes">릴리즈 노트 / 태그 보기 ↗</button></section>
      <section class="history-section"><h3>빌드 검증</h3><div class="build-run-row">${badge("성공", "success", true)}<code>08-14 17:06 ~ 08-14 17:24</code><span>${selected.duration}</span>${badge("설정 v5", "outline")}</div></section>
      <section class="history-section"><h3>모듈별 반영 내역</h3><div class="source-table-wrap"><table class="source-table"><thead><tr><th>모듈</th><th>상태</th><th>확정 해시</th><th>확정자</th><th>비고</th></tr></thead><tbody>${state.modules.slice(0, 6).map((item) => `<tr><td>${item.name}</td><td>${badge(item.status === "confirmed" ? "확정" : "변경 없음", item.status === "confirmed" ? "success" : "outline")}</td><td><code>${item.status === "docs" ? "—" : item.commit}</code></td><td>${item.status === "confirmed" ? item.team : "—"}</td><td>${item.status === "confirmed" ? "머지 완료" : ""}</td></tr>`).join("")}</tbody></table></div></section>
      <section class="history-section"><h3>감사 · 빌드 타임라인</h3><div class="audit-timeline">${[
        ["08-14 09:00", "라운드 생성", "r-104", "neutral"],
        ["08-14 10:24", "확정", "core-runtime", "info"],
        ["08-14 17:02", "마감", "release-bot", "info"],
        ["08-14 17:06", "빌드 시작", "실행 #24", "neutral"],
        ["08-14 17:24", "빌드 성공", selected.duration, "success"],
        ["08-14 17:25", "배포 태그", `v${selected.version}`, "success"],
      ].map((row, index, all) => `<div class="audit-row"><span class="audit-rail"><i class="${row[3]}"></i>${index < all.length - 1 ? "<b></b>" : ""}</span><div><code>${row[0]}</code><strong>${row[1]}</strong><small>${row[2]}</small></div></div>`).join("")}</div></section>
    </article>
  </div>`;
}

function renderNotes() {
  const selected = releaseNotes.find((item) => item.id === state.selectedNote) || releaseNotes[0];
  if (state.noteDetail) {
    return `<div class="note-detail-wrap"><div class="note-version-tabs"><button class="btn btn-primary btn-sm">${selected.draft}</button></div><article class="source-note-detail"><header><strong>릴리즈 노트 본문</strong>${badge(selected.draft, "success")}</header><div class="note-markdown"><h2>Aster Suite ${selected.version} Release Notes</h2><p><strong>버전:</strong> ${selected.version} <strong>비교 기준:</strong> ${previousVersion(selected.version)} → ${selected.version}</p>${selected.sections.map((section) => `<section><h3>${section.title}</h3><ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`).join("")}</div></article></div>`;
  }
  return `<section class="source-notes-list"><header><span>게시된 노트</span>${badge(`${releaseNotes.length}건`, "outline")}</header>${releaseNotes.map((item) => `<button class="source-note-row" data-action="open-note" data-note-id="${item.id}"><div><span><strong>${item.version}</strong>${badge("production", "outline")}</span><code>게시 노트 ${item.draft}</code></div><span><time>${item.published}</time>${icon("chevron", 17)}</span></button>`).join("")}</section>`;
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
      <div class="button-row"><button class="btn btn-primary" data-action="run-success">${icon("play", 16)} 동작으로 확인하기</button><a class="btn btn-secondary" href="https://github.com/JongHa11" target="_blank" rel="noreferrer">${icon("github", 16)} GitHub 프로필</a></div>
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
    "new-release": renderNewRelease,
    "confirm-module": renderModuleConfirm,
    build: renderBuild,
    history: renderHistory,
    notes: renderNotes,
    about: renderAbout,
  }[state.route]();
}

function render() {
  document.querySelector("#app").innerHTML = renderShell();
  const selected = releaseNotes.find((item) => item.id === state.selectedNote);
  const title = state.route === "notes" && state.noteDetail && selected ? selected.version : TITLES[state.route][0];
  document.title = `${title} | Release Train Demo`;
  if (state.route === "build" && state.build.status !== "waiting") {
    requestAnimationFrame(() => {
      const terminal = document.querySelector(".raw-terminal");
      if (terminal) terminal.scrollTop = terminal.scrollHeight;
    });
  }
}

function navigate(route) {
  if (!TITLES[route]) return;
  state.route = route;
  if (route === "notes") state.noteDetail = false;
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
    addLog(`PS C:\\build-runner\\work\\aster-suite> git checkout release/${state.build.version}`);
    addLog(`HEAD is now at ${state.round.pointer === "—" ? "7ea91c4" : state.round.pointer} chore: prepare release ${state.build.version}`);
    addLog("PS C:\\build-runner\\work\\aster-suite> .\\gradlew clean assemble");
  } else {
    addLog("");
    addLog("PS C:\\build-runner\\work\\aster-suite> git pull --ff-only");
    addLog("Updating 13bc8f2..62df4a1");
    addLog("PS C:\\build-runner\\work\\aster-suite> .\\gradlew :admin-console:assemble --rerun-tasks");
  }
  showToast("빌드 검증을 시작했습니다", "확정된 커밋만 사용해 자동 단계를 실행합니다.", "neutral");
  render();

  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 180 : 850;
  const messages = [
    ["[release] 6 modules locked at confirmed commits", "[release] manifest written: out\\release-2.9.0.json"],
    ["> Task :core-runtime:compileJava", "> Task :gateway-api:bootJar", "> Task :admin-console:build", "[builder] JAR collected: core-runtime-2.9.0.jar", "[builder] JAR collected: gateway-api-2.9.0.jar", "[jpackage] Creating application image: AsterConsole", "[jpackage] Succeeded in building Windows Application Image package", "BUILD SUCCESSFUL in 4m 38s", "42 actionable tasks: 41 executed, 1 up-to-date"],
    ["[verify] SHA-256 checksums written", "[verify] artifacts 5/5 present — pass"],
    ["[promote] merge release/2.9.0 -> main", "[promote] tag v2.9.0 created"],
    ["[backmerge] merge release/2.9.0 -> develop — clean"],
    ["[release-note] local model draft generated", "[release-note] review request created"],
    ["[release-note] published v3", "════════════════════════════════════════", "PIPELINE FINISHED — success 16 / failed 0 / skipped 1", "Total time: 18m 24s"],
  ];

  function next(index) {
    state.build.stage = index;
    if (mode === "failure" && index === 1) {
      state.build.status = "failed";
      state.build.elapsed = "1분 12초";
      addLog("> Task :core-runtime:compileJava", "success", index);
      addLog("> Task :admin-console:compileTypeScript FAILED", "error", index);
      addLog("src/features/release/status.ts(84,17): error TS2322: Type 'string' is not assignable to type 'BuildState'.", "error", index);
      addLog("FAILURE: Build failed with an exception.", "error", index);
      addLog("* What went wrong: Execution failed for task ':admin-console:compileTypeScript'.", "error", index);
      addLog("BUILD FAILED in 1m 12s", "error", index + 1);
      render();
      showToast("빌드 실패를 감지했습니다", "담당자 수정 후 이 화면에서 재빌드할 수 있습니다.", "error");
      return;
    }
    messages[index].map((line) => line.replaceAll("2.9.0", state.build.version)).forEach((line) => addLog(line, /FAILED|error|FAILURE/.test(line) ? "error" : /SUCCESSFUL|pass|FINISHED|created|published/.test(line) ? "success" : "neutral", index));
    render();
    if (index >= STAGES.length - 1) {
      state.build.status = "done";
      state.build.elapsed = "18분 24초";
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
    { time: "", message: `PS C:\\build-runner\\work\\aster-suite> git checkout release/${state.build.version}`, tone: "neutral" },
    { time: "", message: `HEAD is now at ${state.round.pointer === "—" ? "7ea91c4" : state.round.pointer} chore: prepare release ${state.build.version}`, tone: "neutral" },
    { time: "", message: "PS C:\\build-runner\\work\\aster-suite> .\\gradlew clean assemble", tone: "neutral" },
  ];
  render();
  showToast("데모를 초기화했습니다", "성공 흐름이나 실패 대응을 다시 재생할 수 있습니다.", "neutral");
}

function openConfirmModule(id) {
  const target = state.modules.find((item) => item.id === id);
  if (!target || state.round.status === "closed") return;
  state.selectedModuleId = id;
  target.selectedIndex = Math.max(0, target.commits.findIndex((commit) => commit.sha === target.commit));
  navigate("confirm-module");
}

function selectCommit(id, index) {
  const target = state.modules.find((item) => item.id === id);
  if (!target) return;
  target.selectedIndex = Number(index);
  render();
}

function confirmSelected(id) {
  const target = state.modules.find((item) => item.id === id);
  if (!target) return;
  const selected = target.commits[target.selectedIndex || 0];
  const wasConfirmed = target.status === "confirmed";
  target.status = "confirmed";
  target.commit = selected.sha;
  navigate("confirmations");
  showToast(wasConfirmed ? `${target.name} 확정을 수정했습니다` : `${target.name} 커밋을 확정했습니다`, `${selected.sha} 해시만 기록했습니다. 실제 머지는 마감할 때 수행됩니다.`, "success");
}

function skipModule(id) {
  const target = state.modules.find((item) => item.id === id);
  if (!target) return;
  target.status = "latest";
  navigate("confirmations");
  showToast(`${target.name}을 이번 라운드에서 제외했습니다`, "지난 배포 버전을 유지합니다.", "neutral");
}

function closeRound() {
  if (state.modules.some((item) => item.status === "pending")) return;
  state.round.status = "closed";
  state.round.pointer = "a71c9e4";
  state.build.version = state.round.version;
  state.build.kind = state.round.kind;
  state.build.status = "waiting";
  state.build.stage = 0;
  render();
  showToast("마감과 일괄 머지를 완료했습니다", `확정 해시로 release/${state.round.version}을 만들고 루트 포인터 ${state.round.pointer}를 기록했습니다.`, "success");
}

function createRound(formData) {
  state.releaseForm.version = String(formData.get("version") || "2.10.0");
  state.releaseForm.kind = String(formData.get("kind") || "정기 배포");
  state.releaseForm.deadline = String(formData.get("deadline") || "2026-09-04T18:00");
  state.releaseForm.memo = String(formData.get("memo") || "");
  state.releaseForm.autoBuild = formData.get("autoBuild") === "on";
  state.round = {
    id: state.round.id + 1,
    version: state.releaseForm.version,
    kind: state.releaseForm.kind,
    status: "collecting",
    created: "방금 전",
    deadline: state.releaseForm.deadline.replace("T", " "),
    memo: state.releaseForm.memo || "새 릴리즈 후보 조합",
    pointer: "—",
  };
  state.modules.forEach((item) => {
    item.status = "pending";
    item.selectedIndex = 0;
    item.commit = item.commits[0].sha;
  });
  state.build.version = state.round.version;
  navigate("confirmations");
  showToast(`${state.round.version} 배포 라운드를 만들었습니다`, "각 모듈 담당자가 안정 커밋을 선택할 차례입니다.", "success");
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
    runBuild("success", 1);
  } else if (action === "reset-build") {
    resetBuild();
  } else if (action === "open-confirm-module") {
    openConfirmModule(target.dataset.moduleId);
  } else if (action === "select-commit") {
    selectCommit(target.dataset.moduleId, target.dataset.index);
  } else if (action === "confirm-selected") {
    confirmSelected(target.dataset.moduleId);
  } else if (action === "skip-module") {
    skipModule(target.dataset.moduleId);
  } else if (action === "close-round") {
    closeRound();
  } else if (action === "open-release") {
    if (target.dataset.releaseId === "current") navigate("build");
    else {
      state.selectedHistory = Number(target.dataset.releaseId);
      navigate("history");
    }
  } else if (action === "select-history") {
    state.selectedHistory = Number(target.dataset.historyId);
    render();
  } else if (action === "open-note" || action === "select-note") {
    state.selectedNote = Number(target.dataset.noteId);
    state.noteDetail = true;
    render();
  } else if (action === "notes-list") {
    state.noteDetail = false;
    render();
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest('[data-form="new-release"]');
  if (!form) return;
  event.preventDefault();
  createRound(new FormData(form));
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
