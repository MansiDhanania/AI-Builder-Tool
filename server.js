const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 8099);
const ROOT = __dirname;
const SUBMISSIONS_DIR = path.join(ROOT, "candidate_submissions");
const DEFAULT_GROQ_MODEL = "llama-3.1-8b-instant";
const MAX_FILE_CHARS = Number(process.env.MAX_FILE_CHARS || 600);
const MAX_ARTIFACT_CHARS = Number(process.env.MAX_ARTIFACT_CHARS || 600);
const MAX_CODE_CHARS = Number(process.env.MAX_CODE_CHARS || 1600);
const MAX_AGENT_TOKENS = Number(process.env.MAX_AGENT_TOKENS || 220);
const MAX_SYNTHESIS_TOKENS = Number(process.env.MAX_SYNTHESIS_TOKENS || 600);
const MAX_CHAT_TOKENS = Number(process.env.MAX_CHAT_TOKENS || 220);
loadDotEnv();

const ROLE_CONTEXT = `
KPMG AI Builder Senior Consultant context:
- AI Builders sit at the intersection of enterprise operations, technology, and design.
- They redesign workflows, decision systems, and operating models using agentic AI.
- They build, test, and harden agents, plugins, skills, and tools.
- They work with cloud and engineering teams to productionize AI Lab prototypes.
- They contribute reusable skills/components/tools to a shared AI stack.
- They operate in regulated enterprise environments where risk, governance, ethics, trust, and human-AI handoffs are design constraints.
- Strong evidence can come from software engineering, UX, MLOps, consulting, research, operations, product, or self-taught backgrounds.
`;

function loadDotEnv() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }
  for (const rawLine of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) {
      continue;
    }
    const [key, ...valueParts] = line.split("=");
    const value = valueParts.join("=").trim().replace(/^["']|["']$/g, "");
    if (!process.env[key.trim()]) {
      process.env[key.trim()] = value;
    }
  }
}

const ROLE_DIMENSIONS = [
  "Ambiguity to Scope",
  "Agentic Workflow Thinking",
  "Builder Execution",
  "Responsible AI and Governance",
  "Enterprise Fluency",
  "Reusable Stack Contribution",
  "Communication and Tradeoffs"
];

const sampleSubmissions = {
  avery: {
    name: "Avery Chen",
    artifacts: {
      resume: `
Avery Chen
AI engineer and HCI prototyper.

Profile:
Turns ambiguous enterprise workflows into usable agentic systems. Built prototypes that combine tool calling, retrieval, human review checkpoints, and audit-friendly explanations.

Selected work:
- Built a Python and TypeScript agent workflow that routed between document parsing, code inspection, transcript analysis, and evidence synthesis tools.
- Mapped an internal finance intake process across requesters, risk reviewers, and engineering teams before proposing AI-assisted handoffs.
- Facilitated design reviews with legal, product, and operations stakeholders to define autonomy boundaries and escalation paths.
- Implemented reusable evaluation prompts, failure-mode checklists, and a small API adapter that can switch between Groq-hosted Llama models and Azure AI Foundry.
`,
      readme: `
# AI Builder Evidence Workbench

This prototype evaluates open-ended AI Builder submissions through evidence mapping rather than numerical scoring.
It uses synthetic data, source snippets, transparent agent logs, and human-owned final decisions.

Tradeoffs:
- Static samples for privacy and timebox.
- Real LLM adapter can call Groq or Azure.
- Avoids automated hire/reject labels.
- Keeps reviewer chat constrained to candidate evidence and role rubric.
`,
      code: `
async function evaluateCandidate(candidate) {
  const files = await tools.detectFiles(candidate);
  const resume = await tools.readArtifact(files.resume);
  const code = files.code ? await tools.scanCode(files.code) : null;
  const transcript = files.transcript ? await tools.readArtifact(files.transcript) : null;
  return synthesizeEvidence({ resume, code, transcript, rubric });
}

function guardrailAnswer(question, context) {
  if (/hire|reject|pass/i.test(question)) {
    return "I cannot make hiring decisions. I can summarize evidence and gaps for the human reviewer.";
  }
  return answerWithCitations(question, context);
}
`,
      transcript: `
In this build I chose evidence mapping instead of a score because the assignment is intentionally open and candidates can come from many backgrounds.
The system should inspect what artifacts exist, call different tools depending on the material, and produce interview questions from gaps.
I used AI to help stress-test the rubric, but the main design choice was mine: keep hiring accountability with people.
If I had more time I would add real uploads, redaction, evaluator calibration, and Azure deployment controls.
`
    }
  },
  mira: {
    name: "Mira Shah",
    artifacts: {
      resume: `
Mira Shah
Operations consultant with low-code AI experience.

Profile:
Process redesign consultant for tax and finance operations. Uses low-code automation and prompt patterns to reduce manual triage.

Selected work:
- Mapped local and international tax return intake steps, exception paths, and reviewer approvals across three service-line teams.
- Led stakeholder workshops to identify pain points, adoption risks, and training needs before launching a pilot workflow.
- Built a low-code prompt workflow for classifying inbound requests and drafting first-pass response templates.
`,
      transcript: `
My prototype is a process map for tax intake triage. I focused on the operating model: request, classify, draft, review, approve, and escalate.
The workflow keeps a human reviewer in the loop for compliance-sensitive decisions.
I did not submit code because I focused on the service blueprint and adoption plan.
`
    }
  },
  noah: {
    name: "Noah Patel",
    artifacts: {
      resume: `
Noah Patel
Backend engineer and MLOps generalist.

Profile:
Builds Python services and deployment pipelines for model-backed internal tools.

Selected work:
- Created a FastAPI service with queue-based workers, structured logs, retry policies, and CI checks.
- Containerized model evaluation jobs and deployed them on Kubernetes with monitoring dashboards.
- Integrated internal ticketing data and platform metrics to support production support workflows.
- Documented operational runbooks and led incident reviews after failed batch jobs.
`,
      readme: `
# Repository Inspector

The service reads repository metadata, runs parser checks, and generates a technical review packet.
Includes CI, tests, structured logs, and retry policy.
Known gap: the current README focuses on technical reliability and does not yet include candidate consent, fairness testing, or reviewer accountability.
`,
      code: `
from fastapi import FastAPI
from tenacity import retry, stop_after_attempt

app = FastAPI()

@retry(stop=stop_after_attempt(3))
def parse_repo(url):
    # Parses code metrics and README content.
    return {"tests": True, "logging": True, "human_review_state": False}
`
    }
  },
  sofia: {
    name: "Sofia Martin",
    artifacts: {
      resume: `
Sofia Martin
Product designer specializing in AI workflow design.

Profile:
Designs AI-assisted enterprise workflows, service blueprints, and reviewer experiences.

Selected work:
- Redesigned an HR operations intake flow with escalation rules, exception queues, and audit-friendly review states.
- Ran usability studies with recruiters and operations leads to identify trust gaps in AI-generated recommendations.
- Created prompt prototypes and human-in-the-loop wireframes for extracting evidence from candidate materials.
`,
      portfolio: `
Portfolio case study:
The design uses uncertainty labels, evidence citations, source previews, and explicit reviewer accountability.
The clickable prototype does not include production code, but it documents handoffs, exception handling, and adoption risks.
`,
      transcript: `
I treated the problem as a trust and evidence-design challenge. Reviewers need help seeing why the system raised a flag.
I intentionally avoided scores and designed the assistant to prepare interview questions, not decide who gets hired.
`
    }
  }
};

const artifactMatchers = [
  ["cover_letter", /cover|letter/i, "Cover Letter"],
  ["resume", /resume|cv/i, "Resume"],
  ["transcript", /transcript|video|loom|script/i, "Video Transcript"],
  ["readme", /readme|technical|writeup|write-up|architecture/i, "README"],
  ["portfolio", /portfolio|design|case-study|case_study/i, "Portfolio"],
  ["code", /code|main|app|server|prompt|schema|tool/i, "Code"]
];

const textExtensions = new Set([".txt", ".md", ".markdown", ".js", ".ts", ".tsx", ".jsx", ".py", ".json", ".html", ".css", ".csv"]);

function listCandidateSubmissions() {
  if (!fs.existsSync(SUBMISSIONS_DIR)) {
    return Object.entries(sampleSubmissions).map(([id, candidate]) => candidateSummary(id, candidate));
  }

  const folders = fs.readdirSync(SUBMISSIONS_DIR, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  const candidates = folders.map((folder) => loadCandidateFromFolder(folder.name)).filter(Boolean);
  return candidates.length ? candidates.map((candidate) => candidateSummary(candidate.id, candidate)) : Object.entries(sampleSubmissions).map(([id, candidate]) => candidateSummary(id, candidate));
}

function candidateSummary(id, candidate) {
  const available = Object.keys(candidate.artifacts || {});
  const missing = artifactMatchers.map(([key, , label]) => [key, label]).filter(([key]) => !available.includes(key)).map(([, label]) => label);
  return {
    id,
    name: candidate.name,
    pronouns: candidate.pronouns || "",
    source: available.map((key) => artifactLabel(key)).join(", "),
    background: candidate.background || "Candidate submission folder",
    readiness: candidate.readiness || "Ready for live Groq multi-agent evaluation",
    files: available.map((key) => artifactLabel(key)),
    missingFiles: missing,
    resumeHighlights: {},
    resume: [
      {
        heading: "Resume Preview",
        body: (candidate.artifacts.resume || candidate.artifacts.cover_letter || candidate.artifacts.transcript || "No resume text file found.").slice(0, 5000)
      }
    ],
    logs: [],
    matrix: [],
    questions: []
  };
}

function artifactLabel(key) {
  const found = artifactMatchers.find(([artifactKey]) => artifactKey === key);
  return found ? found[2] : key;
}

function loadCandidateById(id) {
  const folderCandidate = loadCandidateFromFolder(id);
  if (folderCandidate) {
    return folderCandidate;
  }
  const sample = sampleSubmissions[id];
  if (sample) {
    return { id, ...sample };
  }
  return null;
}

function loadCandidateFromFolder(id) {
  const folder = path.join(SUBMISSIONS_DIR, id);
  if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) {
    return null;
  }

  let metadata = {};
  const metadataPath = path.join(folder, "metadata.json");
  if (fs.existsSync(metadataPath)) {
    try {
      metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
    } catch {
      metadata = {};
    }
  }

  const artifacts = {};
  for (const file of fs.readdirSync(folder, { withFileTypes: true })) {
    if (!file.isFile() || file.name === "metadata.json") {
      continue;
    }
    const artifactType = detectArtifactType(file.name);
    if (!artifactType || artifacts[artifactType]) {
      continue;
    }
    artifacts[artifactType] = readSubmissionFile(path.join(folder, file.name));
  }

  return {
    id,
    name: metadata.name || titleFromId(id),
    pronouns: metadata.pronouns || "",
    background: metadata.background || "Candidate submission folder",
    readiness: metadata.readiness || "Ready for live Groq multi-agent evaluation",
    artifacts
  };
}

function detectArtifactType(fileName) {
  const matched = artifactMatchers.find(([, pattern]) => pattern.test(fileName));
  return matched?.[0] || null;
}

function readSubmissionFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!textExtensions.has(ext)) {
    return `[${path.basename(filePath)} is present but not text-readable in this prototype. Add a cleaned .txt or .md version for LLM analysis.]`;
  }
  return compactText(fs.readFileSync(filePath, "utf8")).slice(0, MAX_FILE_CHARS);
}

function compactText(text = "") {
  return String(text)
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function excerpt(text = "", maxChars = MAX_ARTIFACT_CHARS) {
  const compact = compactText(text);
  if (compact.length <= maxChars) {
    return compact;
  }
  return `${compact.slice(0, maxChars)}\n\n[Truncated to ${maxChars} characters for token-budget control.]`;
}

function titleFromId(id) {
  return id.replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

const tools = [
  {
    type: "function",
    function: {
      name: "detect_submission_files",
      description: "List which candidate submission artifacts are available or absent.",
      parameters: {
        type: "object",
        properties: {},
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "read_artifact",
      description: "Read the text of one candidate artifact.",
      parameters: {
        type: "object",
        properties: {
          artifact_name: {
            type: "string",
            enum: ["resume", "cover_letter", "readme", "code", "transcript", "portfolio"]
          }
        },
        required: ["artifact_name"],
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "scan_code_for_agentic_patterns",
      description: "Inspect submitted code for agentic patterns, error handling, guardrails, and handoff logic.",
      parameters: {
        type: "object",
        properties: {},
        additionalProperties: false
      }
    }
  },
  {
    type: "function",
    function: {
      name: "map_role_requirements",
      description: "Return the AI Builder role dimensions and responsible AI constraints.",
      parameters: {
        type: "object",
        properties: {},
        additionalProperties: false
      }
    }
  }
];

function executeTool(candidate, name, args) {
  const artifacts = candidate.artifacts;
  if (name === "detect_submission_files") {
    const expected = ["resume", "cover_letter", "readme", "code", "transcript", "portfolio"];
    return {
      available: expected.filter((item) => Boolean(artifacts[item])),
      missing_or_optional: expected.filter((item) => !artifacts[item])
    };
  }
  if (name === "read_artifact") {
    const artifactName = args.artifact_name;
    return {
      artifact_name: artifactName,
      text: artifacts[artifactName] ? excerpt(artifacts[artifactName], MAX_ARTIFACT_CHARS) : "Artifact not provided."
    };
  }
  if (name === "scan_code_for_agentic_patterns") {
    const code = artifacts.code || "";
    return {
      code_provided: Boolean(code),
      has_tool_routing: /tools\.|detectFiles|scanCode|synthesizeEvidence|function\s+\w+|def\s+\w+/.test(code),
      has_guardrail_refusal: /cannot make hiring decisions|guardrail|human_review/i.test(code),
      has_retry_or_error_handling: /try|catch|retry|except|tenacity/i.test(code),
      has_human_review_state: /human_review|reviewer|handoff|approval/i.test(code),
      excerpt: code ? excerpt(code, MAX_CODE_CHARS) : "No code artifact submitted."
    };
  }
  if (name === "map_role_requirements") {
    return {
      dimensions: ROLE_DIMENSIONS,
      constraints: [
        "No automated hire or reject label.",
        "No numerical ranking as final decision proxy.",
        "Cite evidence snippets.",
        "Distinguish absent optional artifacts from negative evidence.",
        "Generate interview questions for human follow-up."
      ],
      role_context: ROLE_CONTEXT
    };
  }
  return { error: `Unknown tool: ${name}` };
}

function getCandidateFromBody(body) {
  const candidate = loadCandidateById(body.candidateId);
  if (!candidate) {
    throw new Error("Unknown candidate.");
  }
  return candidate;
}

function getProviderConfig(body) {
  return {
    provider: "groq",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    apiKey: body.apiKey || process.env.GROQ_API_KEY,
    model: body.model || process.env.GROQ_MODEL || DEFAULT_GROQ_MODEL
  };
}

async function callChatCompletions(config, payload) {
  const headers = {
    "content-type": "application/json",
    authorization: `Bearer ${config.apiKey}`
  };

  if (!config.apiKey) {
    throw new Error("Missing API key. Set GROQ_API_KEY in .env, PowerShell, or Azure App Service Application Settings before starting the server.");
  }

  const response = await fetch(config.endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(formatProviderError(response.status, text));
  }
  return JSON.parse(text);
}

function formatProviderError(status, text) {
  if (status === 429) {
    return "Groq rate limit hit. Try again in a minute, use llama-3.1-8b-instant, or lower MAX_FILE_CHARS / MAX_ARTIFACT_CHARS in .env.";
  }
  return `Groq API error ${status}: ${text.slice(0, 280)}`;
}

function parseToolArgs(raw) {
  if (!raw) {
    return {};
  }
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function formatToolCall(name, args = {}) {
  const safeArgs = args && typeof args === "object" && !Array.isArray(args) ? args : {};
  return `${name}(${Object.keys(safeArgs).length ? JSON.stringify(safeArgs) : ""})`;
}

function parseJsonContent(content) {
  const clean = content.replace(/```json|```/g, "").trim();
  const start = clean.indexOf("{");
  const end = clean.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("The model did not return JSON.");
  }
  return JSON.parse(clean.slice(start, end + 1));
}

function safeParseJsonContent(content, fallback) {
  try {
    return parseJsonContent(content);
  } catch (error) {
    return fallback(error, content);
  }
}

function normalizeReport(report, provider, model, runLog) {
  const matrix = Array.isArray(report.matrix) ? report.matrix : [];
  const sourceText = report.sourceText || "";
  return {
    provider,
    model,
    generatedAt: new Date().toISOString(),
    logs: runLog,
    resumeHighlights: report.resumeHighlights || {},
    matrix: matrix.map((row) => ({
      dimension: row.dimension || "Unspecified",
      status: row.status || "Missing / Unclear",
      className: statusClass(row.status),
      snippet: row.snippet || "No snippet provided.",
      why: row.why || "No reasoning provided."
    })),
    questions: Array.isArray(report.questions) ? report.questions.slice(0, 3) : [],
    summary: report.summary || ""
  };
}

function normalizeReportForCandidate(report, provider, model, runLog, candidate) {
  const normalized = normalizeReport(report, provider, model, runLog);
  const sourceText = compactText(Object.values(candidate.artifacts || {}).join("\n"));
  normalized.matrix = normalized.matrix.map((row) => ({
    ...row,
    snippet: sourceSnippet(row.snippet, sourceText)
  }));
  return normalized;
}

function sourceSnippet(snippet = "", sourceText = "") {
  const cleaned = compactText(snippet).replace(/^["']|["']$/g, "");
  if (!cleaned || !sourceText) {
    return cleaned || "No source snippet available";
  }
  if (/^(no|missing|not provided)/i.test(cleaned)) {
    return limitWords(cleaned, 16);
  }
  if (sourceText.toLowerCase().includes(cleaned.toLowerCase())) {
    return limitWords(cleaned, 16);
  }
  const tokens = cleaned.split(/\s+/).filter((token) => token.length > 3);
  const best = tokens.find((token) => sourceText.toLowerCase().includes(token.toLowerCase()));
  if (!best) {
    return limitWords(sourceText, 16);
  }
  const index = sourceText.toLowerCase().indexOf(best.toLowerCase());
  const start = Math.max(0, index - 55);
  return limitWords(sourceText.slice(start, index + 100), 16);
}

function limitWords(text = "", maxWords = 16) {
  return compactText(text).split(/\s+/).slice(0, maxWords).join(" ");
}

function statusClass(status = "") {
  const value = status.toLowerCase();
  if (value.includes("strong")) return "strong";
  if (value.includes("some")) return "some";
  if (value.includes("not provided")) return "optional";
  return "missing";
}

async function evaluateCandidate(body) {
  const candidate = getCandidateFromBody(body);
  const config = getProviderConfig({ ...body, provider: "groq" });
  const runLog = [];
  const availableArtifacts = Object.keys(candidate.artifacts || {});
  const resumeOnly = availableArtifacts.length === 1 && availableArtifacts[0] === "resume";

  const archeology = resumeOnly ? buildResumeOnlyArcheology(candidate, runLog) : await runToolAgent({
    config,
    candidate,
    runLog,
    agentName: "Archeologist",
    allowedTools: ["detect_submission_files", "read_artifact"],
    systemPrompt: `
You are the Archeologist agent. Your job is artifact discovery and neutral evidence extraction.
Use tools to detect files, then read available artifacts that matter most.
Do not evaluate the candidate. Return strict JSON:
{"inventory": {"available": [], "missingOptional": []}, "artifactNotes": [{"artifact": "...", "usefulEvidence": "max 25 words", "gaps": "max 20 words"}]}
`
  });

  const technicalAudit = resumeOnly ? {
    technicalFindings: [
      {
        finding: "No code artifact provided",
        evidence: "Only resume is available in the submission folder.",
        riskOrGap: "Probe implementation depth in interview."
      }
    ]
  } : await runToolAgent({
    config,
    candidate,
    runLog,
    agentName: "Technical Auditor",
    allowedTools: ["read_artifact", "scan_code_for_agentic_patterns"],
    systemPrompt: `
You are the Technical Auditor agent. Inspect build evidence, code, APIs, tools, error handling, reusable components, and production-readiness signals.
Use tools before answering. Do not score or recommend. Return strict JSON:
{"technicalFindings": [{"finding": "max 18 words", "evidence": "max 25 words", "riskOrGap": "max 18 words"}]}
`
  });
  if (resumeOnly) {
    runLog.push({
      agent: "Technical Auditor",
      tool: "skip_optional_code_scan()",
      result: "No code artifact provided. Treated as optional missing evidence and converted into an interview probe."
    });
  }

  const governanceReview = resumeOnly ? buildResumeOnlyGovernance(candidate, runLog) : await runToolAgent({
    config,
    candidate,
    runLog,
    agentName: "Governance Reviewer",
    allowedTools: ["read_artifact", "map_role_requirements"],
    systemPrompt: `
You are the Governance Reviewer agent. Inspect evidence for responsible AI, fairness, transparency, privacy, human-AI handoffs, and regulated-enterprise judgment.
Use tools before answering. Never give a hiring recommendation. Return strict JSON:
{"governanceFindings": [{"finding": "max 18 words", "evidence": "max 25 words", "riskOrGap": "max 18 words"}]}
`
  });

  const interviewStrategy = resumeOnly ? {
    questionSeeds: [
      {
        question: "Which agentic workflow from your resume best demonstrates production-ready tool orchestration?",
        whyAsk: "Only resume evidence is available."
      },
      {
        question: "How did you define human-AI handoffs, evaluation criteria, and failure handling?",
        whyAsk: "Tests governance and workflow depth."
      },
      {
        question: "What reusable component would you contribute to a shared AI Builder stack?",
        whyAsk: "Tests stack contribution."
      }
    ]
  } : await runToolAgent({
    config,
    candidate,
    runLog,
    agentName: "Interview Strategist",
    allowedTools: ["read_artifact", "map_role_requirements"],
    systemPrompt: `
You are the Interview Strategist agent. Convert evidence gaps into panel-interview probes.
Use tools before answering. Return strict JSON:
{"questionSeeds": [{"question": "max 24 words", "whyAsk": "max 18 words"}]}
`
  });
  if (resumeOnly) {
    runLog.push({
      agent: "Interview Strategist",
      tool: "derive_resume_only_questions()",
      result: "Generated compact interview probes because only resume evidence is available."
    });
  }

  const synthesis = await runSynthesisAgent({
    config,
    candidate,
    runLog,
    handoffs: { archeology, technicalAudit, governanceReview, interviewStrategy }
  });

  return normalizeReportForCandidate(synthesis, "groq", config.model, runLog, candidate);
}

function buildResumeOnlyArcheology(candidate, runLog) {
  const inventory = executeTool(candidate, "detect_submission_files", {});
  runLog.push({
    agent: "Archeologist",
    tool: "detect_submission_files()",
    result: summarizeToolResult(inventory)
  });
  const resume = executeTool(candidate, "read_artifact", { artifact_name: "resume" });
  runLog.push({
    agent: "Archeologist",
    tool: "read_artifact({\"artifact_name\":\"resume\"})",
    result: summarizeToolResult(resume)
  });
  return {
    inventory,
    artifactNotes: [
      {
        artifact: "resume",
        usefulEvidence: excerpt(resume.text, 90),
        gaps: "Optional artifacts not provided."
      }
    ]
  };
}

function buildResumeOnlyGovernance(candidate, runLog) {
  const role = executeTool(candidate, "map_role_requirements", {});
  runLog.push({
    agent: "Governance Reviewer",
    tool: "map_role_requirements()",
    result: summarizeToolResult(role)
  });
  return {
    governanceFindings: [
      {
        finding: "Governance evidence requires probing",
        evidence: "Only resume artifact is available.",
        riskOrGap: "Ask about risk, evaluation, privacy, and handoffs."
      }
    ]
  };
}

function filterTools(allowedTools) {
  return tools.filter((tool) => allowedTools.includes(tool.function.name));
}

async function runToolAgent({ config, candidate, runLog, agentName, allowedTools, systemPrompt }) {
  const messages = [
    {
      role: "system",
      content: `
${systemPrompt}

Shared role context:
${ROLE_CONTEXT}

Boundaries:
- Use only candidate artifacts available through tools.
- Missing optional artifacts are absence of evidence, not negative evidence.
- Never provide hire/reject/pass recommendations.
- Return JSON only.
`
    },
    {
      role: "user",
      content: `Run your agent task for ${candidate.name}. You must use at least one tool before final JSON.`
    }
  ];

  const scopedTools = filterTools(allowedTools);
  let usedTool = false;

  for (let step = 0; step < 6; step += 1) {
    const data = await callChatCompletions(config, {
      model: config.model,
      messages,
      tools: scopedTools,
      tool_choice: "auto",
      temperature: 0.15,
      max_tokens: MAX_AGENT_TOKENS
    });
    const message = data.choices?.[0]?.message;
    if (!message) {
      throw new Error(`${agentName} returned no message.`);
    }
    messages.push(message);

    if (message.tool_calls?.length) {
      usedTool = true;
      for (const toolCall of message.tool_calls) {
        const name = toolCall.function.name;
        const args = parseToolArgs(toolCall.function.arguments);
        if (!allowedTools.includes(name)) {
          throw new Error(`${agentName} attempted disallowed tool: ${name}`);
        }
        const result = executeTool(candidate, name, args);
        runLog.push({
          agent: agentName,
          tool: formatToolCall(name, args),
          result: summarizeToolResult(result)
        });
        messages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(result)
        });
      }
      continue;
    }

    if (!usedTool) {
      messages.push({
        role: "user",
        content: `You must call one of these tools before final JSON: ${allowedTools.join(", ")}.`
      });
      continue;
    }
    return safeParseJsonContent(message.content || "", (error, raw) => ({
      parseWarning: error.message,
      rawSummary: excerpt(raw || "", 320)
    }));
  }

  throw new Error(`${agentName} reached tool-call limit before final JSON.`);
}

async function runSynthesisAgent({ config, candidate, runLog, handoffs }) {
  const messages = [
    {
      role: "system",
      content: `
You are the Synthesizer agent. Combine multi-agent handoffs into a final evidence report.
You do not have tools because upstream agents already gathered evidence. Do not make hiring recommendations. Do not use numerical scores.
Return minified strict JSON only. Include all seven dimensions.
Rules:
- matrix[].snippet must be an exact short phrase copied from candidate artifacts when evidence exists.
- If evidence is missing, snippet must name the missing source, e.g. "No code artifact provided".
- questions must be interviewer questions to the candidate, focused on dimensions marked Missing / Unclear or Some Evidence.
- Avoid generic questions. Ask for clarification about production, stakeholder, governance, or implementation gaps.
Shape: {"summary":"under 18 words","resumeHighlights":{"tech":"under 12 words","org":"under 12 words","soft":"under 12 words"},"matrix":[{"dimension":"...","status":"Strong Evidence|Some Evidence|Missing / Unclear|Not Provided (Optional Data)","snippet":"exact source phrase under 12 words","why":"under 14 words"}],"questions":["interviewer question under 22 words","interviewer question under 22 words","interviewer question under 22 words"]}
Dimensions: ${ROLE_DIMENSIONS.join("; ")}.
`
    },
    {
      role: "user",
      content: JSON.stringify({
        candidateName: candidate.name,
        roleContext: ROLE_CONTEXT,
        dimensions: ROLE_DIMENSIONS,
        sourceArtifacts: compactArtifacts(candidate.artifacts),
        handoffs
      })
    }
  ];
  const data = await callChatCompletions(config, {
    model: config.model,
    messages,
    temperature: 0.2,
    max_tokens: MAX_SYNTHESIS_TOKENS
  });
  const content = data.choices?.[0]?.message?.content || "";
  runLog.push({
    agent: "Synthesizer",
    tool: "combine_agent_handoffs()",
    result: "Merged Archeologist, Technical Auditor, Governance Reviewer, and Interview Strategist outputs into final evidence report."
  });
  return safeParseJsonContent(content, (error, raw) => {
    runLog.push({
      agent: "Synthesizer",
      tool: "fallback_compact_report()",
      result: `Model returned malformed JSON under token budget: ${error.message}. Used deterministic compact fallback.`
    });
    return buildFallbackReport(candidate, handoffs, raw);
  });
}

function compactArtifacts(artifacts = {}) {
  return Object.fromEntries(
    Object.entries(artifacts).map(([key, value]) => [key, excerpt(value, MAX_ARTIFACT_CHARS)])
  );
}

function buildFallbackReport(candidate, handoffs, raw = "") {
  const available = Object.keys(candidate.artifacts || {}).map(artifactLabel);
  const missing = artifactMatchers
    .filter(([key]) => !candidate.artifacts?.[key])
    .map(([, , label]) => label);
  const resume = excerpt(candidate.artifacts?.resume || "", 280);
  const hasCode = Boolean(candidate.artifacts?.code);
  const hasTranscript = Boolean(candidate.artifacts?.transcript);
  return {
    summary: "Compact fallback report generated from agent handoffs.",
    resumeHighlights: {
      tech: "See resume and code evidence",
      org: "Enterprise context inferred from artifacts",
      soft: "Probe live communication"
    },
    matrix: [
      {
        dimension: "Ambiguity to Scope",
        status: "Some Evidence",
        snippet: resume || "Resume provided",
        why: "Resume provides initial scope signal; optional artifacts can deepen it."
      },
      {
        dimension: "Agentic Workflow Thinking",
        status: resume.match(/agent|tool|workflow|orchestrat/i) ? "Some Evidence" : "Missing / Unclear",
        snippet: resume || "No direct snippet",
        why: "Agent/workflow terms are checked from provided resume evidence."
      },
      {
        dimension: "Builder Execution",
        status: hasCode ? "Some Evidence" : "Missing / Unclear",
        snippet: hasCode ? "Code artifact provided" : "No code artifact provided",
        why: "Code is optional, but implementation depth should be probed."
      },
      {
        dimension: "Responsible AI and Governance",
        status: resume.match(/governance|risk|privacy|ethic|trust|explain/i) ? "Some Evidence" : "Missing / Unclear",
        snippet: resume || "No direct snippet",
        why: "Governance evidence is inferred only from available text."
      },
      {
        dimension: "Enterprise Fluency",
        status: resume.match(/enterprise|stakeholder|client|production|operations/i) ? "Some Evidence" : "Missing / Unclear",
        snippet: resume || "No direct snippet",
        why: "Enterprise language appears in submitted materials."
      },
      {
        dimension: "Reusable Stack Contribution",
        status: resume.match(/component|tool|stack|api|reusable|framework/i) ? "Some Evidence" : "Missing / Unclear",
        snippet: resume || "No direct snippet",
        why: "Reusable contribution requires follow-up evidence."
      },
      {
        dimension: "Communication and Tradeoffs",
        status: hasTranscript ? "Some Evidence" : "Not Provided (Optional Data)",
        snippet: hasTranscript ? "Transcript provided" : "Video transcript not provided",
        why: "Transcript is optional but useful for communication evidence."
      }
    ],
    questions: buildGapQuestions(candidate, hasCode, hasTranscript),
    debug: {
      available,
      missingOptional: missing,
      malformedJsonExcerpt: excerpt(raw || "", 180),
      handoffKeys: Object.keys(handoffs || {})
    }
  };
}

function buildGapQuestions(candidate, hasCode, hasTranscript) {
  const resume = candidate.artifacts?.resume || "";
  const educationHeavy = /education|M\.Sc|B\.Tech|coursework|university/i.test(resume);
  if (!hasCode && educationHeavy) {
    return [
      "Your resume shows strong education; how have you handled production constraints in real systems?",
      "Which project best proves you can harden an agent beyond a prototype?",
      "How would you define evaluation and rollback plans for an internal KPMG agent?"
    ];
  }
  return [
    hasCode ? "How did you validate the submitted code under failure conditions?" : "Can you walk through a concrete implementation you built end to end?",
    "Where did you define human-AI handoffs and autonomy boundaries?",
    hasTranscript ? "What tradeoff from your video would you revisit in production?" : "How would you explain your design tradeoffs in the panel interview?"
  ];
}

function summarizeToolResult(result) {
  if (result.available) {
    return `Available: ${result.available.join(", ") || "none"}. Missing or optional: ${result.missing_or_optional.join(", ") || "none"}.`;
  }
  if (result.artifact_name) {
    return `Read ${result.artifact_name}: ${String(result.text).replace(/\s+/g, " ").slice(0, 180)}...`;
  }
  if (Object.prototype.hasOwnProperty.call(result, "code_provided")) {
    return `Code provided: ${result.code_provided}. Tool routing: ${result.has_tool_routing}. Guardrail refusal: ${result.has_guardrail_refusal}. Retry/error handling: ${result.has_retry_or_error_handling}.`;
  }
  if (result.dimensions) {
    return `Mapped ${result.dimensions.length} role dimensions and ${result.constraints.length} governance constraints.`;
  }
  return JSON.stringify(result).slice(0, 220);
}

async function chatWithReport(body) {
  const candidate = getCandidateFromBody(body);
  const config = getProviderConfig({ ...body, provider: "groq" });
  const payload = {
    model: config.model,
    messages: [
      {
        role: "system",
        content: `
You are a constrained reviewer clarification assistant.
You may answer questions using only the candidate artifacts, the generated evidence report, and the AI Builder role context.
Never give a hiring recommendation or say hire/reject/pass.
If asked for a hiring decision, refuse briefly and redirect to evidence and interview follow-up.
`
      },
      {
        role: "user",
        content: JSON.stringify({
          roleContext: ROLE_CONTEXT,
          candidateName: candidate.name,
          artifacts: candidate.artifacts,
          report: body.report,
          reviewerQuestion: body.question
        })
      }
    ],
    temperature: 0.2,
    max_tokens: MAX_CHAT_TOKENS
  };
  const data = await callChatCompletions(config, payload);
  return {
    answer: data.choices?.[0]?.message?.content || "No answer returned."
  };
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        reject(new Error("Request too large."));
      }
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function serveStatic(req, res) {
  const urlPath = new URL(req.url, `http://localhost:${PORT}`).pathname;
  if (urlPath === "/favicon.ico") {
    res.writeHead(204);
    res.end();
    return;
  }
  const requested = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.normalize(path.join(ROOT, requested));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  const ext = path.extname(filePath);
  const types = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "image/png",
    ".pdf": "application/pdf",
    ".md": "text/markdown"
  };
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": types[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "POST" && req.url === "/api/evaluate") {
      const body = await readBody(req);
      const report = await evaluateCandidate(body);
      sendJson(res, 200, report);
      return;
    }
    if (req.method === "POST" && req.url === "/api/chat") {
      const body = await readBody(req);
      const answer = await chatWithReport(body);
      sendJson(res, 200, answer);
      return;
    }
    if (req.method === "GET" && req.url === "/api/health") {
      sendJson(res, 200, { ok: true, llmProvider: "groq", hostingTarget: "azure-app-service" });
      return;
    }
    if (req.method === "GET" && req.url === "/api/candidates") {
      sendJson(res, 200, { candidates: listCandidateSubmissions() });
      return;
    }
    serveStatic(req, res);
  } catch (error) {
    const status = /missing api key|unknown candidate|private artifact|self-test/i.test(error.message) ? 400 : 500;
    sendJson(res, status, { error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`AI Builder Evidence Workbench running at http://127.0.0.1:${PORT}`);
});
