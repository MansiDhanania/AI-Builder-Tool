# AI Builder Evidence Workbench

This prototype evaluates open-ended AI Builder submissions through evidence mapping rather than numerical scoring.
It uses source snippets, transparent agent logs, and human-owned final decisions.

Tradeoffs:
- Synthetic samples for privacy and timebox.
- Groq Llama for fast multi-agent inference.
- Azure App Service for hosting and secret management.
- Avoids automated hire/reject labels.
- Keeps reviewer chat constrained to candidate evidence and role rubric.
