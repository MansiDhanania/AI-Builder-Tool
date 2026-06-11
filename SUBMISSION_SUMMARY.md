# AI Builder Candidate Assignment Submission

Candidate: Mansi [Last Name]

Artifact: AI Builder Evidence Workbench

Demo link: [Add hosted artifact link here]

Video link: [Add Loom, Google Drive, or unlisted YouTube link here]

Local artifact path: `index.html`

## What I Built

I built a lightweight live-AI reviewer workbench for the AI Builder case-study stage. The tool helps a recruiter review open-ended candidate submissions such as resumes, code, portfolios, design write-ups, README files, and video transcripts.

Rather than creating a reductive score or automated hire/reject label, the system uses a real multi-agent LLM pipeline to call local tools, map evidence to job-specific dimensions, and turn gaps into targeted panel interview questions.

## Problem Framing

The brief asks candidates to decide what it means to evaluate an AI Builder well. I framed the problem as evidence mapping, because strong AI Builder candidates may come from engineering, UX, MLOps, consulting, product, research, operations, or self-taught paths.

For this role, I prioritized evidence of:

- Ambiguity to Scope
- Agentic Workflow Thinking
- Builder Execution
- Responsible AI and Governance
- Enterprise Fluency
- Reusable Stack Contribution
- Communication and Tradeoffs

## Prototype Workflow

1. Recruiter selects an AI Builder role.
2. Recruiter views candidates loaded from cleaned folders in `candidate_submissions/`.
3. A live multi-agent LLM pipeline calls tools to inspect available artifacts and produce a transparent execution log.
4. Resume evidence is highlighted by category: technical stack, organizational knowledge, and soft skills.
5. Evidence is mapped to a qualitative matrix with snippets and reasoning.
6. A constrained chat assistant answers clarification questions without giving hiring opinions.
7. The human reviewer records either "Recommend for Panel Interview" or "Flag for Additional Clarification."

## Responsible AI Choices

- No numerical candidate score.
- No automated hire/reject recommendation.
- Synthetic sample data only.
- Missing optional artifacts are not treated as candidate failure.
- Assistant responses are constrained to submitted materials and the role rubric.
- Final accountability remains with the human reviewer.

## AI Use

I used AI both during development and inside the artifact. The app backend calls Groq-hosted Llama models, runs a multi-agent pipeline with local tool calling, and asks the model to synthesize source-grounded evidence. Azure is used as the intended hosting platform and secret-management surface. The core product decisions were mine: evidence mapping over scoring, explicit human-AI boundaries, a constrained reviewer chat, and interview-question generation from evidence gaps.

## Tradeoffs and Next Steps

This prototype uses synthetic cleaned candidate folders so reviewers can inspect the workflow without confidential data. A production version would add raw PDF/DOCX/image parsing, video transcription, deeper repository scanning, automated redaction, evaluator calibration, and enterprise deployment controls.
