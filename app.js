const roleDimensions = [
  "Ambiguity to Scope",
  "Agentic Workflow Thinking",
  "Builder Execution",
  "Responsible AI and Governance",
  "Enterprise Fluency",
  "Reusable Stack Contribution",
  "Communication and Tradeoffs"
];

const jobs = [
  {
    id: "ai-builder-sc",
    title: "AI Builder - Senior Consultant",
    team: "KPMG AI Lab",
    location: "Toronto, Vancouver, Calgary, Montreal",
    summary:
      "Hands-on builder role for agentic workflows, internal transformation, productionization, and responsible AI adoption in regulated enterprise contexts.",
    openCandidates: 4
  },
  {
    id: "ai-builder-manager",
    title: "AI Builder - Manager",
    team: "Internal Transformation",
    location: "Hybrid Canada",
    summary:
      "Leads builder pods, stakeholder intake, governance patterns, and reusable assets for high-leverage internal agent builds.",
    openCandidates: 2
  },
  {
    id: "ai-product-ops",
    title: "AI Product Operations Lead",
    team: "Enablement",
    location: "Toronto",
    summary:
      "Coordinates productized AI workflows, evaluation loops, adoption metrics, and operating model changes across internal teams.",
    openCandidates: 3
  }
];

let candidates = [
  {
    id: "avery",
    name: "Avery Chen",
    pronouns: "they/them",
    source: "Resume, README, code sample, 3-minute video transcript",
    background: "AI engineer and HCI prototyper",
    readiness: "Strong synthetic demo case",
    files: ["Resume", "README", "Code", "Video Transcript"],
    missingFiles: ["Cover Letter"],
    resumeHighlights: {
      tech: "Python, TypeScript, API orchestration, cloud deployment, evaluation harnesses",
      org: "Internal finance workflow redesign, stakeholder intake, regulated data constraints",
      soft: "Workshop facilitation, ambiguity management, cross-functional collaboration"
    },
    resume: [
      {
        heading: "Profile",
        body:
          "AI engineer with an HCI background focused on turning ambiguous enterprise workflows into usable agentic systems. Built prototypes that combine tool calling, retrieval, human review checkpoints, and audit-friendly explanations."
      },
      {
        heading: "Selected Work",
        items: [
          {
            type: "tech",
            text:
              "Built a Python and TypeScript agent workflow that routed between document parsing, code inspection, transcript analysis, and evidence synthesis tools."
          },
          {
            type: "org",
            text:
              "Mapped an internal finance intake process across requesters, risk reviewers, and engineering teams before proposing AI-assisted handoffs."
          },
          {
            type: "soft",
            text:
              "Facilitated design reviews with legal, product, and operations stakeholders to define autonomy boundaries and escalation paths."
          },
          {
            type: "tech",
            text:
              "Implemented reusable evaluation prompts, failure-mode checklists, and a small API adapter that can switch between Groq-hosted Llama models and Azure AI Foundry."
          }
        ]
      },
      {
        heading: "Prototype Evidence",
        body:
          "Submitted a working review workbench with synthetic data, a transparent agent execution log, and a constrained assistant that refuses hiring decisions while citing source evidence."
      }
    ],
    logs: [
      {
        agent: "Archeologist",
        tool: "detect_files()",
        result:
          "Detected resume, README, code sample, and video transcript. Cover letter is absent and treated as optional."
      },
      {
        agent: "Role Mapper",
        tool: "map_job_description_to_rubric()",
        result:
          "Created dimensions for ambiguity, workflow thinking, builder execution, governance, enterprise fluency, reuse, and communication."
      },
      {
        agent: "Tech Auditor",
        tool: "scan_code_for_agent_patterns()",
        result:
          "Found explicit tool routing, fallback branches, and context-limited reviewer chat. No external candidate data used."
      },
      {
        agent: "Responsible AI Reviewer",
        tool: "check_decision_boundary()",
        result:
          "Confirmed the interface avoids scores and hire/reject labels. Human reviewer owns the final decision."
      },
      {
        agent: "Synthesizer",
        tool: "build_interview_script()",
        result:
          "Generated three interview prompts from evidence gaps and tradeoffs rather than ranking the candidate."
      }
    ],
    matrix: [
      {
        dimension: "Ambiguity to Scope",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Reframed the task as evidence mapping instead of automated candidate scoring.",
        why:
          "Shows judgment under an open prompt and protects reviewers from false precision."
      },
      {
        dimension: "Agentic Workflow Thinking",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "The system routes between file detection, role mapping, code audit, transcript synthesis, and interview question generation.",
        why:
          "Directly reflects the role's focus on agents, tools, plugins, and multi-step workflows."
      },
      {
        dimension: "Builder Execution",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Submitted an inspectable live prototype with synthetic data, LLM tool calls, and working reviewer interactions.",
        why:
          "The candidate made a real artifact inside the timebox instead of only describing a concept."
      },
      {
        dimension: "Responsible AI and Governance",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "No automated hire/reject label; assistant refuses hiring opinions and cites source evidence.",
        why:
          "Treats fairness, transparency, and human accountability as core design constraints."
      },
      {
        dimension: "Enterprise Fluency",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Mentions risk, internal teams, production handoff, and stakeholder constraints.",
        why:
          "Good signal, but the panel should probe deeper on KPMG-specific delivery realities."
      },
      {
        dimension: "Reusable Stack Contribution",
        status: "Some Evidence",
        className: "some",
        snippet:
          "References reusable prompts, adapter patterns, and evaluation checklists.",
        why:
          "The idea is present; more code-level modularity evidence would strengthen it."
      },
      {
        dimension: "Communication and Tradeoffs",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Explains why the prototype is offline-first and where Groq or Azure would fit later.",
        why:
          "Shows pragmatic cost control and clear ownership of assumptions."
      }
    ],
    questions: [
      "You chose evidence mapping over a numerical score. Where would you draw the line between useful standardization and harmful false precision?",
      "Your prototype simulates agent tool calls offline. How would you validate the same workflow with Groq or Azure while protecting candidate data?",
      "The enterprise fluency evidence is promising but broad. Walk us through how you would discover a real internal workflow pain point in your first 30 days."
    ]
  },
  {
    id: "mira",
    name: "Mira Shah",
    pronouns: "she/her",
    source: "Resume and video transcript",
    background: "Operations consultant with low-code AI experience",
    readiness: "Needs technical depth probe",
    files: ["Resume", "Video Transcript"],
    missingFiles: ["README", "Code", "Cover Letter"],
    resumeHighlights: {
      tech: "Low-code automation, prompt design, dashboard configuration",
      org: "Tax operations, process mapping, service-line stakeholder management",
      soft: "Client facilitation, change management, executive communication"
    },
    resume: [
      {
        heading: "Profile",
        body:
          "Operations consultant focused on process redesign for tax and finance teams. Uses low-code automation and prompt patterns to reduce manual triage."
      },
      {
        heading: "Selected Work",
        items: [
          {
            type: "org",
            text:
              "Mapped local and international tax return intake steps, exception paths, and reviewer approvals across three service-line teams."
          },
          {
            type: "soft",
            text:
              "Led stakeholder workshops to identify pain points, adoption risks, and training needs before launching a pilot workflow."
          },
          {
            type: "tech",
            text:
              "Built a low-code prompt workflow for classifying inbound requests and drafting first-pass response templates."
          }
        ]
      },
      {
        heading: "Prototype Evidence",
        body:
          "Submitted a video walkthrough and a process map. No code sample or README was provided, so technical implementation evidence is limited."
      }
    ],
    logs: [
      {
        agent: "Archeologist",
        tool: "detect_files()",
        result:
          "Detected resume and video transcript. README and code sample are not provided."
      },
      {
        agent: "Role Mapper",
        tool: "map_job_description_to_rubric()",
        result:
          "Prioritized workflow thinking, enterprise fluency, and responsible AI due to operations-heavy evidence."
      },
      {
        agent: "Tech Auditor",
        tool: "scan_code_for_agent_patterns()",
        result:
          "Skipped because no code artifact was provided. Marked implementation depth as missing, not failed."
      },
      {
        agent: "Synthesizer",
        tool: "build_interview_script()",
        result:
          "Generated questions focused on translating low-code workflow design into production-grade agent builds."
      }
    ],
    matrix: [
      {
        dimension: "Ambiguity to Scope",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Defined evaluation around process bottlenecks and reviewer handoffs.",
        why:
          "Clear problem framing in a realistic service-line context."
      },
      {
        dimension: "Agentic Workflow Thinking",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Describes prompt routing and exception escalation, but not autonomous tool execution.",
        why:
          "Good workflow instincts; agentic implementation depth remains unclear."
      },
      {
        dimension: "Builder Execution",
        status: "Missing / Unclear",
        className: "missing",
        snippet:
          "No code, README, or working prototype was submitted.",
        why:
          "The reviewer cannot inspect the build lifecycle evidence from current materials."
      },
      {
        dimension: "Responsible AI and Governance",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Names approvals, reviewer checkpoints, and adoption risk.",
        why:
          "Governance is considered, but data handling and model evaluation need more detail."
      },
      {
        dimension: "Enterprise Fluency",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Grounds the workflow in tax operations and service-line stakeholder constraints.",
        why:
          "Strong alignment with KPMG's internal operating context."
      },
      {
        dimension: "Reusable Stack Contribution",
        status: "Missing / Unclear",
        className: "missing",
        snippet:
          "No reusable components or shared stack contribution described.",
        why:
          "A panel interview should test whether this is a documentation gap or a capability gap."
      },
      {
        dimension: "Communication and Tradeoffs",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Explains stakeholder risks and pilot adoption choices clearly.",
        why:
          "Strong consultant communication, useful for internal transformation work."
      }
    ],
    questions: [
      "You showed strong service-line fluency. How would you translate your low-code prototype into an agent with tools, evaluation tests, and production handoff steps?",
      "What reusable component would you contribute back to the shared AI stack after this build?",
      "How would you define autonomy boundaries for tax-related workflows where incorrect draft outputs could create compliance risk?"
    ]
  },
  {
    id: "noah",
    name: "Noah Patel",
    pronouns: "he/him",
    source: "Resume, GitHub link, README",
    background: "Backend engineer and MLOps generalist",
    readiness: "Governance and HCI probe needed",
    files: ["Resume", "README", "Code"],
    missingFiles: ["Video Transcript", "Cover Letter"],
    resumeHighlights: {
      tech: "Python services, Kubernetes, CI, APIs, observability",
      org: "Platform engineering, production support, data integrations",
      soft: "Incident response, technical documentation"
    },
    resume: [
      {
        heading: "Profile",
        body:
          "Backend engineer who builds Python services and deployment pipelines for model-backed internal tools."
      },
      {
        heading: "Selected Work",
        items: [
          {
            type: "tech",
            text:
              "Created a FastAPI service with queue-based workers, structured logs, retry policies, and CI checks."
          },
          {
            type: "tech",
            text:
              "Containerized model evaluation jobs and deployed them on Kubernetes with basic monitoring dashboards."
          },
          {
            type: "org",
            text:
              "Integrated internal ticketing data and platform metrics to support production support workflows."
          },
          {
            type: "soft",
            text:
              "Documented operational runbooks and led incident reviews after failed batch jobs."
          }
        ]
      },
      {
        heading: "Prototype Evidence",
        body:
          "Submitted a repository with solid engineering structure. The README spends less time on human review, governance, or candidate experience."
      }
    ],
    logs: [
      {
        agent: "Archeologist",
        tool: "detect_files()",
        result:
          "Detected resume, code sample, and README. Video transcript is absent and treated as optional but limits communication evidence."
      },
      {
        agent: "Tech Auditor",
        tool: "scan_code_for_fallbacks()",
        result:
          "Found retries, structured logs, and tests for parser errors. Human review state is not represented in the workflow."
      },
      {
        agent: "Responsible AI Reviewer",
        tool: "check_decision_boundary()",
        result:
          "Flagged missing explanation of candidate consent, appeal path, and reviewer accountability."
      },
      {
        agent: "Synthesizer",
        tool: "build_interview_script()",
        result:
          "Generated questions on HCI design, governance, and enterprise stakeholder alignment."
      }
    ],
    matrix: [
      {
        dimension: "Ambiguity to Scope",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Scoped the problem as a repository inspection pipeline for technical submissions.",
        why:
          "Practical but narrower than the multi-background challenge in the brief."
      },
      {
        dimension: "Agentic Workflow Thinking",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Implements parser workers and validators, but agent autonomy boundaries are not explicit.",
        why:
          "Technically capable; needs clearer decision-system design."
      },
      {
        dimension: "Builder Execution",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Repository contains tests, error handling, deployment notes, and observability hooks.",
        why:
          "Strong full-lifecycle engineering signal."
      },
      {
        dimension: "Responsible AI and Governance",
        status: "Missing / Unclear",
        className: "missing",
        snippet:
          "No explicit candidate transparency, reviewer accountability, or fairness mitigation section.",
        why:
          "Important gap for a regulated enterprise hiring-adjacent workflow."
      },
      {
        dimension: "Enterprise Fluency",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Mentions internal ticketing and production support, but not business-unit workflow discovery.",
        why:
          "Platform fluency is present; consulting-style stakeholder discovery is less visible."
      },
      {
        dimension: "Reusable Stack Contribution",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Reusable parser workers, validation utilities, and CI templates are documented.",
        why:
          "Directly supports the shared AI stack concept in the job description."
      },
      {
        dimension: "Communication and Tradeoffs",
        status: "Some Evidence",
        className: "some",
        snippet:
          "README lists technical tradeoffs but does not include a 3-minute video transcript.",
        why:
          "Written communication is adequate; live explanation evidence is unavailable."
      }
    ],
    questions: [
      "Your engineering foundation is strong. How would you redesign the interface so a non-technical reviewer can understand why a flag was raised?",
      "What governance checks would you add before this system touched real candidate data?",
      "The brief values multiple backgrounds. How would your code auditor avoid over-weighting GitHub-style evidence?"
    ]
  },
  {
    id: "sofia",
    name: "Sofia Martin",
    pronouns: "she/her",
    source: "Resume, portfolio, design write-up, video transcript",
    background: "Product designer with AI workflow specialization",
    readiness: "Implementation probe needed",
    files: ["Resume", "Portfolio", "Design Write-up", "Video Transcript"],
    missingFiles: ["Code"],
    resumeHighlights: {
      tech: "Prompt prototyping, usability testing, workflow diagrams",
      org: "HR operations, advisory intake, change enablement",
      soft: "Service design, facilitation, research synthesis"
    },
    resume: [
      {
        heading: "Profile",
        body:
          "Product designer who specializes in AI-assisted enterprise workflows, service blueprints, and reviewer experiences."
      },
      {
        heading: "Selected Work",
        items: [
          {
            type: "org",
            text:
              "Redesigned an HR operations intake flow with escalation rules, exception queues, and audit-friendly review states."
          },
          {
            type: "soft",
            text:
              "Ran usability studies with recruiters and operations leads to identify trust gaps in AI-generated recommendations."
          },
          {
            type: "tech",
            text:
              "Created prompt prototypes and human-in-the-loop wireframes for extracting evidence from candidate materials."
          }
        ]
      },
      {
        heading: "Prototype Evidence",
        body:
          "Submitted a clickable design and strong rationale. No implementation artifact was provided, so build depth is unclear."
      }
    ],
    logs: [
      {
        agent: "Archeologist",
        tool: "detect_files()",
        result:
          "Detected resume, portfolio, design write-up, and video transcript. Code sample is not provided."
      },
      {
        agent: "HCI Reviewer",
        tool: "inspect_handoff_design()",
        result:
          "Found clear human review points, uncertainty labels, and candidate-friendly wording."
      },
      {
        agent: "Tech Auditor",
        tool: "scan_code_for_agent_patterns()",
        result:
          "Skipped because no code artifact was provided. Implementation depth remains unclear."
      },
      {
        agent: "Synthesizer",
        tool: "build_interview_script()",
        result:
          "Generated questions about moving from design prototype to working agent workflow."
      }
    ],
    matrix: [
      {
        dimension: "Ambiguity to Scope",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Identifies reviewer trust and candidate experience as the central evaluation problem.",
        why:
          "Thoughtful reframing that fits the open assignment."
      },
      {
        dimension: "Agentic Workflow Thinking",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Shows multi-step evidence extraction and human approval states in wireframes.",
        why:
          "Workflow design is strong, but execution details are not inspectable."
      },
      {
        dimension: "Builder Execution",
        status: "Some Evidence",
        className: "some",
        snippet:
          "Clickable prototype submitted; no working system or code included.",
        why:
          "Useful artifact, but the role expects hands-on building through code, APIs, or orchestration."
      },
      {
        dimension: "Responsible AI and Governance",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Includes uncertainty labels, source citations, and explicit human accountability.",
        why:
          "Excellent alignment with transparency and governance expectations."
      },
      {
        dimension: "Enterprise Fluency",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Connects HR operations, advisory intake, and change enablement constraints.",
        why:
          "Understands organizational process, not just screen design."
      },
      {
        dimension: "Reusable Stack Contribution",
        status: "Missing / Unclear",
        className: "missing",
        snippet:
          "Reusable technical assets are not described.",
        why:
          "Panel should ask how design patterns become shared components."
      },
      {
        dimension: "Communication and Tradeoffs",
        status: "Strong Evidence",
        className: "strong",
        snippet:
          "Video explains candidate dignity, reviewer load, and governance tradeoffs.",
        why:
          "Clear and relevant communication for enterprise adoption."
      }
    ],
    questions: [
      "How would you turn your clickable workflow into a working agent prototype in one week?",
      "Which parts of your design should become reusable components in the shared AI stack?",
      "How would you test whether reviewers over-trust the assistant despite the uncertainty labels?"
    ]
  }
];

const state = {
  view: "jobs",
  selectedJobId: jobs[0].id,
  selectedCandidateId: candidates[0].id,
  evaluated: loadMap("evaluatedCandidates"),
  reports: loadReports(),
  decisions: loadMap("candidateDecisions"),
  evaluating: {},
  evalErrors: {},
  chatting: false,
  provider: "groq",
  model: "llama-3.1-8b-instant",
  candidatesLoaded: false,
  candidateLoadError: "",
  reportLogLimit: 999,
  resumeZoom: 1,
  chats: loadChats()
};

function loadMap(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    return {};
  }
}

function saveMap(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadReports() {
  const reports = loadMap("candidateReports");
  delete reports.self;
  return reports;
}

function loadChats() {
  try {
    return JSON.parse(localStorage.getItem("candidateChats") || "{}");
  } catch {
    return {};
  }
}

function saveChats() {
  localStorage.setItem("candidateChats", JSON.stringify(state.chats));
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      ${state.view === "jobs" ? renderJobs() : ""}
      ${state.view === "candidates" ? renderCandidates() : ""}
      ${state.view === "report" ? renderReport() : ""}
    </div>
  `;
  bindEvents();
}

async function loadCandidates() {
  try {
    const response = await fetch("/api/candidates");
    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Could not load candidates.");
    }
    candidates = payload.candidates;
    state.candidatesLoaded = true;
    state.candidateLoadError = "";
  } catch (error) {
    state.candidateLoadError = error.message;
  }
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="brand">
        <div class="mark">AI</div>
        <div>
          <div>AI Builder Evidence Workbench</div>
          <small>Human-led candidate review for agentic AI builder roles</small>
        </div>
      </div>
      <div class="top-actions">
        <span class="notice"><span class="dot"></span>Synthetic demo data only</span>
        <span class="notice">Live Groq multi-agent analysis</span>
        <span class="notice">No automated hire or reject decisions</span>
      </div>
    </header>
  `;
}

function renderJobs() {
  return `
    <main class="container">
      <section class="hero">
        <div class="hero-panel">
          <h1>Evaluate AI Builder Profiles</h1>
          <p class="lede">
            This prototype helps recruiters review open-ended AI Builder case submissions across resumes,
            code, portfolios, write-ups, and videos.
          </p>
          <div class="pill-row">
            ${roleDimensions.map((dimension) => `<span class="pill">${dimension}</span>`).join("")}
          </div>
        </div>
        <aside class="context-panel">
          <h2>Design stance</h2>
          <div class="context-grid">
            <div class="mini-stat">
              <strong>Agentic</strong>
              <span>A live LLM agent calls local tools to inspect artifacts before synthesizing an evidence report.</span>
            </div>
            <div class="mini-stat">
              <strong>Transparent</strong>
              <span>Every claim is mapped to a snippet, a dimension, and a plain-language reason.</span>
            </div>
            <div class="mini-stat">
              <strong>Responsible</strong>
              <span>The assistant refuses hiring opinions and supports interview preparation instead.</span>
            </div>
          </div>
        </aside>
      </section>
      <section>
        <h2>Open roles</h2>
        <div class="jobs-grid">
          ${jobs.map(renderJobCard).join("")}
        </div>
      </section>
    </main>
  `;
}

function renderJobCard(job) {
  return `
    <article class="job-card">
      <span class="pill">${job.team}</span>
      <h3>${job.title}</h3>
      <p>${job.summary}</p>
      <p><strong>${job.openCandidates}</strong> synthetic submissions ready for review</p>
      <p class="candidate-meta">${job.location}</p>
      <button class="primary" data-action="open-job" data-job="${job.id}">Open role workspace</button>
    </article>
  `;
}

function renderCandidates() {
  const job = getJob();
  const allEvaluated = candidates.every((candidate) => state.evaluated[candidate.id]);
  const candidateList = getCandidateList();
  return `
    <main class="container">
      <div class="backline">
        <div>
          <button data-action="go-jobs">Back to roles</button>
          <h1>${job.title}</h1>
          <p class="lede">${job.summary}</p>
          ${state.candidateLoadError ? `<p class="error-note">${escapeHTML(state.candidateLoadError)}</p>` : ""}
        </div>
        <div class="row-actions">
          <button data-action="select-all">Select all</button>
          <button class="primary" data-action="evaluate-selected">Evaluate selected</button>
          <button ${allEvaluated ? "disabled" : ""} data-action="evaluate-all">Evaluate all</button>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" id="all-checkbox" aria-label="Select all candidates"></th>
              <th>Candidate</th>
              <th>Submitted material</th>
              <th>Evidence preview</th>
              <th>Human decision</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${candidateList.map(renderCandidateRow).join("")}
          </tbody>
        </table>
      </div>
    </main>
  `;
}

function renderCandidateRow(candidate) {
  const isEvaluated = Boolean(state.evaluated[candidate.id]);
  const isEvaluating = Boolean(state.evaluating[candidate.id]);
  const decision = state.decisions[candidate.id];
  const report = state.reports[candidate.id];
  const error = state.evalErrors[candidate.id];
  return `
    <tr>
      <td><input type="checkbox" class="candidate-checkbox" data-candidate="${candidate.id}" aria-label="Select ${candidate.name}"></td>
      <td>
        <div class="candidate-name">${candidate.name}</div>
        <div class="candidate-meta">${candidate.background}</div>
      </td>
      <td>
        ${(candidate.files || []).map((file) => `<span class="pill">${file}</span>`).join(" ")}
        ${candidate.missingFiles?.length ? `<div class="candidate-meta">Missing or optional: ${candidate.missingFiles.join(", ")}</div>` : ""}
      </td>
      <td>
        ${report ? `<span class="status-pill strong">Live report generated</span><div class="candidate-meta">${report.provider} ${report.model || ""}</div>` : candidate.readiness}
        ${error ? `<div class="error-note">${escapeHTML(error)}</div>` : ""}
      </td>
      <td>${renderDecision(decision)}</td>
      <td>
        <div class="row-actions">
          <button data-action="evaluate-one" data-candidate="${candidate.id}" ${isEvaluating ? "disabled" : ""}>${isEvaluating ? "Evaluating..." : isEvaluated ? "Re-run" : "Evaluate"}</button>
          <button class="primary" data-action="view-report" data-candidate="${candidate.id}" ${report ? "" : "disabled"}>View report</button>
        </div>
      </td>
    </tr>
  `;
}

function renderDecision(decision) {
  if (decision === "recommend") {
    return `<span class="status-pill strong"><span class="dot green"></span>Panel interview</span>`;
  }
  if (decision === "clarify") {
    return `<span class="status-pill missing"><span class="dot red"></span>Clarification</span>`;
  }
  return `<span class="candidate-meta">No reviewer action yet</span>`;
}

function renderReport() {
  const candidate = getCandidate();
  const report = getReport(candidate);
  return `
    <main class="report-layout">
      <aside class="resume-pane">
        <div class="pane-head">
          <div>
            <button data-action="go-candidates">Back to candidates</button>
            <h2>${candidate.name}</h2>
            <p class="candidate-meta">${candidate.source}</p>
          </div>
          <div class="zoom-tools">
            <button data-action="zoom-out" aria-label="Zoom out">-</button>
            <button data-action="zoom-reset">${Math.round(state.resumeZoom * 100)}%</button>
            <button data-action="zoom-in" aria-label="Zoom in">+</button>
          </div>
        </div>
        <div class="resume-scroll">
          <article class="resume-paper" style="transform: scale(${state.resumeZoom});">
            <h2>${candidate.name}</h2>
            <p class="subtle">${candidate.background} | ${candidate.pronouns}</p>
            ${candidate.resume.map((section) => renderResumeSection(section, report)).join("")}
          </article>
        </div>
        <div class="legend">
          <span class="pill"><span class="hl tech">Technical stack</span></span>
          <span class="pill"><span class="hl org">Organizational knowledge</span></span>
          <span class="pill"><span class="hl soft">Soft skills</span></span>
        </div>
      </aside>
      <section class="analysis-pane">
        <div class="report-title">
          <h1>${getJob().title}</h1>
          <p>Evidence report for ${candidate.name}. The assistant supports review preparation and does not make hiring decisions.</p>
          ${report.provider ? `<p class="live-note">Generated by ${report.provider}${report.model ? ` using ${report.model}` : ""} at ${new Date(report.generatedAt).toLocaleString()}.</p>` : ""}
        </div>
        ${renderExecutionLog(report)}
        ${renderEvidenceMatrix(report)}
        ${renderQuestions(report)}
        ${renderChat(candidate)}
        ${renderDecisionControls(candidate)}
      </section>
    </main>
  `;
}

function renderResumeSection(section, report) {
  if (section.items) {
    return `
      <section>
        <h3>${section.heading}</h3>
        <ul>
          ${section.items.map((item) => `<li>${highlightEvidenceText(item.text, report, item.type)}</li>`).join("")}
        </ul>
      </section>
    `;
  }
  return `
    <section>
      <h3>${section.heading}</h3>
      <p>${highlightEvidenceText(section.body, report)}</p>
    </section>
  `;
}

function highlightEvidenceText(text = "", report = {}, fallbackType = "") {
  const escapedText = escapeHTML(text);
  if (fallbackType && !(report.matrix || []).length) {
    return `<span class="hl ${fallbackType}">${escapedText}</span>`;
  }
  const terms = buildHighlightTerms(report, fallbackType).filter((term) => term.text.length >= 4);
  if (!terms.length) {
    return escapedText;
  }
  const sorted = terms.sort((a, b) => b.text.length - a.text.length).slice(0, 18);
  let highlighted = escapedText;
  sorted.forEach((term) => {
    const escapedTerm = escapeRegExp(escapeHTML(term.text));
    highlighted = highlighted.replace(new RegExp(`(${escapedTerm})`, "ig"), `<span class="hl ${term.type}">$1</span>`);
  });
  return highlighted;
}

function buildHighlightTerms(report = {}, fallbackType = "") {
  const terms = [];
  (report.matrix || []).forEach((row) => {
    const type = dimensionHighlightType(row.dimension);
    extractHighlightPhrases(row.snippet).forEach((text) => terms.push({ text, type }));
  });
  const highlights = report.resumeHighlights || {};
  Object.entries({ tech: highlights.tech, org: highlights.org, soft: highlights.soft }).forEach(([type, value]) => {
    extractHighlightPhrases(value).forEach((text) => terms.push({ text, type }));
  });
  return terms;
}

function extractHighlightPhrases(value = "") {
  return String(value)
    .replace(/[##_*\[\]()`]/g, " ")
    .split(/[,;|\n]|\s+-\s+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function dimensionHighlightType(dimension = "") {
  const value = dimension.toLowerCase();
  if (value.includes("enterprise") || value.includes("scope") || value.includes("reusable")) {
    return "org";
  }
  if (value.includes("communication") || value.includes("governance") || value.includes("responsible")) {
    return "soft";
  }
  return "tech";
}

function escapeRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderExecutionLog(report) {
  const logs = report.logs || [];
  return `
    <section class="section">
      <div class="section-header">
        <div>
          <h2>Autonomous agent execution log</h2>
          <p class="candidate-meta">Visibility feed for live LLM tool calls and routing decisions.</p>
        </div>
        <button data-action="replay-log" ${logs.length ? "" : "disabled"}>Replay run</button>
      </div>
      <div class="log-list log-scroll">
        ${logs.length ? logs.slice(0, state.reportLogLimit).map((log) => `
          <div class="log-item">
            <strong>Agent: ${log.agent} called ${log.tool}</strong>
            <span>${log.result}</span>
          </div>
        `).join("") : `<div class="empty">Run a live evaluation to populate tool calls.</div>`}
      </div>
    </section>
  `;
}

function renderEvidenceMatrix(report) {
  const matrix = report.matrix || [];
  return `
    <section class="section">
      <h2>Role-specific evidence matrix</h2>
      <div class="table-wrap">
        <table class="matrix">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Evidence status</th>
              <th>Extracted snippet</th>
              <th>The why</th>
            </tr>
          </thead>
          <tbody>
            ${matrix.map((row) => `
              <tr>
                <td><strong>${row.dimension}</strong></td>
                <td><span class="status-pill ${row.className}">${row.status}</span></td>
                <td class="snippet">${row.snippet}</td>
                <td>${row.why}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderQuestions(report) {
  const questions = report.questions || [];
  return `
    <section class="section">
      <h2>Targeted interview question generator</h2>
      <ol class="questions">
        ${questions.map((question) => `<li>${question}</li>`).join("")}
      </ol>
    </section>
  `;
}

function renderChat(candidate) {
  const messages = state.chats[candidate.id] || [
    {
      role: "assistant",
      text:
        "Ask for clarification about the candidate's submitted evidence. I can cite the resume, cover letter, README, transcript, portfolio, or code summary, but I will not recommend a hiring decision."
    }
  ];
  return `
    <section class="section chat-box">
      <div class="section-header" style="padding: 1rem 1rem 0;">
        <div>
          <h2>Reviewer clarification chat</h2>
          <p class="candidate-meta">Context is constrained to this candidate's submitted materials and the role rubric.</p>
        </div>
      </div>
      <div class="chat-log" id="chat-log">
        ${messages.map((message) => `<div class="message ${message.role === "user" ? "user" : ""}">${escapeHTML(message.text)}</div>`).join("")}
      </div>
      <form class="chat-form" data-action="chat">
        <input name="question" placeholder="Example: Why was governance marked missing?" autocomplete="off">
        <button class="primary" type="submit" ${state.chatting ? "disabled" : ""}>Ask</button>
      </form>
    </section>
  `;
}

function renderDecisionControls(candidate) {
  const decision = state.decisions[candidate.id];
  return `
    <section class="section">
      <h2>Reviewer handoff</h2>
      <p class="decision-note">
        These buttons record a human review action for tracking. They are not AI recommendations.
      </p>
      <div class="decision-bar">
        <button class="positive" data-action="decision" data-decision="recommend">Recommend for Panel Interview</button>
        <button class="warn" data-action="decision" data-decision="clarify">Flag for Additional Clarification</button>
        ${decision ? `<span class="status-pill ${decision === "recommend" ? "strong" : "missing"}">Current action: ${decision === "recommend" ? "Panel interview" : "Clarification"}</span>` : ""}
      </div>
    </section>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    const action = element.dataset.action;
    if (action === "chat") {
      element.addEventListener("submit", handleChat);
      return;
    }
    element.addEventListener("click", handleAction);
  });
  const chatLog = document.getElementById("chat-log");
  if (chatLog) {
    chatLog.scrollTop = chatLog.scrollHeight;
  }
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  const candidateId = event.currentTarget.dataset.candidate;

  if (action === "open-job") {
    state.selectedJobId = event.currentTarget.dataset.job;
    state.view = "candidates";
    loadCandidates().then(render);
  }
  if (action === "go-jobs") {
    state.view = "jobs";
  }
  if (action === "go-candidates") {
    state.view = "candidates";
  }
  if (action === "evaluate-one") {
    evaluateCandidate(candidateId);
    return;
  }
  if (action === "view-report") {
    state.selectedCandidateId = candidateId;
    state.view = "report";
    state.reportLogLimit = 999;
  }
  if (action === "select-all") {
    document.querySelectorAll(".candidate-checkbox").forEach((checkbox) => {
      checkbox.checked = true;
    });
    return;
  }
  if (action === "evaluate-selected") {
    const selected = [...document.querySelectorAll(".candidate-checkbox:checked")].map((checkbox) => checkbox.dataset.candidate);
    selected.forEach((id, index) => {
      window.setTimeout(() => evaluateCandidate(id, false), index * 180);
    });
    return;
  }
  if (action === "evaluate-all") {
    candidates.forEach((candidate, index) => {
      window.setTimeout(() => evaluateCandidate(candidate.id, false), index * 180);
    });
    return;
  }
  if (action === "replay-log") {
    state.reportLogLimit = 0;
    render();
    const report = getReport(getCandidate());
    (report.logs || []).forEach((_, index) => {
      window.setTimeout(() => {
        state.reportLogLimit = index + 1;
        render();
      }, 350 * (index + 1));
    });
    return;
  }
  if (action === "zoom-in") {
    state.resumeZoom = Math.min(1.35, state.resumeZoom + 0.1);
  }
  if (action === "zoom-out") {
    state.resumeZoom = Math.max(0.65, state.resumeZoom - 0.1);
  }
  if (action === "zoom-reset") {
    state.resumeZoom = 1;
  }
  if (action === "decision") {
    state.decisions[state.selectedCandidateId] = event.currentTarget.dataset.decision;
    saveMap("candidateDecisions", state.decisions);
  }
  render();
}

async function evaluateCandidate(candidateId, rerender = true) {
  state.evaluating[candidateId] = true;
  state.evalErrors[candidateId] = "";
  if (rerender) {
    render();
  }
  try {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        candidateId,
        model: state.model
      })
    });
    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Evaluation failed.");
    }
    state.reports[candidateId] = payload;
    state.evaluated[candidateId] = true;
    if (candidateId !== "self") {
      saveMap("evaluatedCandidates", state.evaluated);
      saveMap("candidateReports", state.reports);
    }
  } catch (error) {
    state.evalErrors[candidateId] = error.message;
    delete state.evaluated[candidateId];
    delete state.reports[candidateId];
    saveMap("evaluatedCandidates", state.evaluated);
    saveMap("candidateReports", state.reports);
  } finally {
    state.evaluating[candidateId] = false;
    render();
  }
}

async function handleChat(event) {
  event.preventDefault();
  const input = event.currentTarget.elements.question;
  const question = input.value.trim();
  if (!question) {
    return;
  }
  const candidate = getCandidate();
  const messages = state.chats[candidate.id] || [];
  messages.push({ role: "user", text: question });
  state.chatting = true;
  messages.push({ role: "assistant", text: "Thinking with the candidate evidence and role rubric..." });
  state.chats[candidate.id] = messages;
  saveChats();
  input.value = "";
  render();
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        candidateId: candidate.id,
        question,
        report: getReport(candidate),
        model: state.model
      })
    });
    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Chat failed.");
    }
    messages[messages.length - 1] = { role: "assistant", text: payload.answer };
  } catch (error) {
    messages[messages.length - 1] = { role: "assistant", text: `I could not call the live LLM: ${error.message}` };
  } finally {
    state.chatting = false;
    state.chats[candidate.id] = messages;
    saveChats();
    render();
  }
}

function answerQuestion(candidate, question) {
  const q = question.toLowerCase();
  if (q.includes("hire") || q.includes("recommend") || q.includes("reject") || q.includes("pass")) {
    return `I cannot make hiring decisions. I can say that ${candidate.name}'s materials show ${candidate.readiness.toLowerCase()}, and the human reviewer should use the evidence matrix to prepare panel questions.`;
  }
  if (q.includes("governance") || q.includes("risk") || q.includes("responsible") || q.includes("trust")) {
    const row = candidate.matrix.find((item) => item.dimension === "Responsible AI and Governance");
    return `${row.status}: ${row.snippet} Reasoning: ${row.why}`;
  }
  if (q.includes("technical") || q.includes("code") || q.includes("build") || q.includes("tool")) {
    const row = candidate.matrix.find((item) => item.dimension === "Builder Execution");
    return `${row.status}: ${row.snippet} Relevant technical evidence includes ${candidate.resumeHighlights.tech}.`;
  }
  if (q.includes("enterprise") || q.includes("organization") || q.includes("service") || q.includes("stakeholder")) {
    const row = candidate.matrix.find((item) => item.dimension === "Enterprise Fluency");
    return `${row.status}: ${row.snippet} The resume signal includes ${candidate.resumeHighlights.org}.`;
  }
  if (q.includes("question") || q.includes("interview") || q.includes("probe")) {
    return `A useful panel probe is: "${candidate.questions[0]}"`;
  }
  return `From the submitted evidence, the most relevant signals are: technical stack (${candidate.resumeHighlights.tech}), organizational knowledge (${candidate.resumeHighlights.org}), and collaboration evidence (${candidate.resumeHighlights.soft}). I can clarify a specific matrix dimension if you name it.`;
}

function getReport(candidate) {
  return state.reports[candidate.id] || candidate;
}

function escapeHTML(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value = "") {
  return escapeHTML(value);
}

function getJob() {
  return jobs.find((job) => job.id === state.selectedJobId) || jobs[0];
}

function getCandidateList() {
  return candidates;
}

function getCandidate() {
  return getCandidateList().find((candidate) => candidate.id === state.selectedCandidateId) || candidates[0];
}

render();
