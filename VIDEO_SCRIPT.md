# 3-Minute Video Script

## 0:00-1:00 Demo

"I built the AI Builder Evidence Workbench, a human-led review tool for open-ended AI Builder submissions. It uses synthetic candidates, but the analysis is generated live through an LLM-backed agent.

On the first page, a recruiter sees available roles. I will open the AI Builder Senior Consultant role.

The next page is intentionally clean: it only shows the candidate table. Candidate materials are organized in backend folders, and Groq is configured securely through environment variables rather than through the recruiter UI. Azure is used for app hosting and environment-based secret management, not for model tokens.

When I click Evaluate, the backend asks the LLM to call tools such as detect_submission_files, read_artifact, scan_code_for_agentic_patterns, and map_role_requirements. When I open a report, the left side keeps the candidate resume visible and highlights inferred evidence: technical stack in blue, organizational knowledge in orange, and soft skills in pink. The right side shows the actual agent execution log, a model-generated evidence matrix, human-AI boundary guardrails, targeted interview questions, and a constrained chat assistant.

At the bottom, the human reviewer can recommend the candidate for a panel interview or flag them for clarification. That decision appears back on the candidate list."

## 1:00-3:00 Thinking, Tradeoffs, Risks, AI Use

"The brief is intentionally ambiguous, so my first decision was what 'evaluate an AI Builder well' should mean. I decided it should not mean an automated score. For this role, I think the stronger signal is whether a candidate shows evidence of ambiguity handling, workflow thinking, hands-on building, enterprise fluency, reusable contribution, communication, and responsible AI judgment.

The app is shaped by the job description and my notes on the role: AI Builders sit between operations, technology, and design; they build and harden agents, plugins, skills, and tools; they work with cloud and engineering teams; and they treat risk, governance, ethics, and trust as core constraints.

I used a multi-agent pattern and kept it inspectable. The backend runs separate agents for artifact discovery, technical audit, governance review, and interview strategy. Each agent has scoped tools such as file detection, artifact reading, code scanning, and role-requirement mapping. A final synthesizer combines the handoffs into structured JSON for the matrix, highlights, and interview questions. For fast prototyping this runs through Groq-hosted Llama. For enterprise deployment, the same Node app can be hosted on Azure App Service with the Groq key stored as an application setting.

The main tradeoff is that the candidates are synthetic and preloaded as cleaned folders rather than parsed from raw PDFs, images, or videos. I chose that because the assignment forbids confidential data and the workflow is hiring-adjacent. The benefit is that I can show real prompt and tool-calling behavior without exposing personal candidate data. The limitation is that raw document parsing, redaction, and evaluator calibration are next steps.

The biggest risks are bias, over-trust, and false precision. That is why the tool avoids numerical ranking, refuses hiring opinions in the chat, shows source-grounded evidence, distinguishes missing optional material from negative evidence, and keeps the final decision with the human reviewer.

I used AI to help move quickly from the brief to a buildable scope, to stress-test the responsible AI framing, and to draft synthetic evidence patterns. The product choices were mine: evidence mapping over scoring, the human-AI boundary box, the constrained chat assistant, and the panel interview question generator."
