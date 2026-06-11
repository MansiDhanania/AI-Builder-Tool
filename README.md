# AI Builder Evidence Workbench

This is a lightweight live-AI prototype for the KPMG AI Builder candidate assignment. It uses Groq-hosted Llama models for fast inference and is packaged as a Node app that can be hosted on Azure App Service.

## What It Builds

The app is a local web prototype with a real Node.js backend. It reads cleaned candidate submission folders from `candidate_submissions/`, then calls a live Groq Llama model through a multi-agent tool-calling workflow:

1. Select an AI Builder job posting.
2. Review synthetic candidates who submitted different artifact types: resume, README, code, portfolio, design write-up, and video transcript.
3. Evaluate one candidate or all candidates.
4. Open an evidence report with:
   - A highlighted resume view.
   - An autonomous agent execution log.
   - A role-specific evidence matrix.
   - Human-AI autonomy boundaries.
   - Targeted panel interview questions.
   - A constrained reviewer chat assistant.
   - Human-only panel or clarification decision buttons.

## How To Run

Start the local backend:

```powershell
node server.js
```

Then open:

```text
http://localhost:8099
```

Groq:

```powershell
$env:GROQ_API_KEY="your_key_here"
$env:GROQ_MODEL="llama-3.1-8b-instant"
node server.js
```

Or create a local `.env` file from `.env.example`; `.env` is gitignored and loaded by `server.js`. The key is never configured in the frontend. In Azure, use App Service Application Settings.

For free-tier testing, keep the default token budget:

```text
GROQ_MODEL=llama-3.1-8b-instant
MAX_FILE_CHARS=600
MAX_ARTIFACT_CHARS=600
MAX_AGENT_TOKENS=220
MAX_SYNTHESIS_TOKENS=600
MAX_CHAT_TOKENS=220
```

## Candidate Folder Structure

Candidate materials live in `candidate_submissions/`. Each candidate gets one folder:

```text
candidate_submissions/
  mansi/
    metadata.json
    resume.md
    cover_letter.md
    transcript.md
    readme.md
    portfolio.md
    code.py
```

The app detects artifact type from filenames. Supported clean text formats include `.txt`, `.md`, `.js`, `.ts`, `.py`, `.json`, `.html`, `.css`, and `.csv`.

For PDFs, Word docs, images, or videos, create a cleaned text companion first, such as `resume.md`, `cover_letter.md`, or `transcript.md`. This makes the demo safer, reviewable, and easier to explain.

## Deploy

This is a plain Node web service. For the version you want to showcase, deploy it to Azure App Service and keep Groq as the LLM provider:

1. Push this folder to a private or public repository.
2. Create an Azure App Service Node.js web app.
3. Set `GROQ_API_KEY` and `GROQ_MODEL` as App Service Application Settings.
4. Use `node server.js` as the start command.

Azure hosting demonstrates production deployment and secret handling without burning Azure OpenAI tokens.

## Why This Direction

The brief asks candidates to define what "evaluate an AI Builder well" means. I interpreted that as evaluating evidence of builder judgment, not automating hiring decisions.

The role requires someone who can work across operations, technology, and design; build agentic workflows; understand enterprise constraints; and treat risk, governance, ethics, and trust as design constraints. The prototype therefore avoids a single numeric score and instead maps evidence to role-specific dimensions:

- Ambiguity to Scope
- Agentic Workflow Thinking
- Builder Execution
- Responsible AI and Governance
- Enterprise Fluency
- Reusable Stack Contribution
- Communication and Tradeoffs

## Responsible AI Guardrails

The system is intentionally human-led:

- It does not produce a hire/reject decision.
- It does not rank candidates numerically.
- It distinguishes missing optional artifacts from negative evidence.
- It cites snippets and plain-language reasoning.
- It constrains the chat assistant to submitted materials and role rubric context.
- It uses synthetic candidate data only.

## Agentic Workflow Design

The demo uses a real multi-agent pipeline with Groq local tool calling. Each agent has a scoped prompt and allowed tools:

- `Archeologist`: calls `detect_submission_files()` and `read_artifact()`.
- `Technical Auditor`: calls `read_artifact()` and `scan_code_for_agentic_patterns()`.
- `Governance Reviewer`: calls `read_artifact()` and `map_role_requirements()`.
- `Interview Strategist`: calls `read_artifact()` and `map_role_requirements()`.
- `Synthesizer`: combines agent handoffs into the final evidence matrix.

The current backend supports Groq through its OpenAI-compatible chat completions API. Azure is used for hosting and environment-based secret management.

## Tradeoffs

I chose folder-based cleaned candidate samples because the assignment forbids confidential data and the workflow is hiring-adjacent. The tradeoff is that raw file OCR/transcription is not built yet. The analysis itself is live: the backend reads candidate folders, sends resume, cover letter, README, code, portfolio, and transcript content to the LLM through tool calls, then renders the model-generated evidence matrix and interview questions.

With more time, I would add:

- PDF/DOCX parsing and video transcription before the cleaned artifact stage.
- Automated redaction for personal data.
- Evaluator calibration and bias testing.
- Exportable reviewer packets for the panel interview.

## Files

- `index.html`: App entry point.
- `styles.css`: Layout and visual design.
- `app.js`: Frontend routing, reviewer workflow, live report rendering, and chat interactions.
- `server.js`: Local backend, sample artifacts, multi-agent pipeline, tool definitions, Groq adapter, and LLM prompts.
- `candidate_submissions/`: Folder-based candidate artifacts loaded by the backend.
- `package.json`: Start/check scripts for local run and deployment.
- `render.yaml`: Example Render deployment configuration.
- `.env.example`: Environment variable template for Groq.
- `Mansi_Dhanania_AIBuilder.pdf`: Submission summary PDF with artifact and video links.
