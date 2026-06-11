# Security, Keys, and Azure Hosting

## Recommended Architecture

- **LLM inference:** Groq-hosted Llama models for low-latency agent calls.
- **Application hosting:** Azure App Service running the Node.js app.
- **Secrets:** `GROQ_API_KEY` stored as an environment variable locally or as an Azure App Service Application Setting in the cloud.
- **Candidate data:** Use cleaned text artifacts in `candidate_submissions/`. Do not put confidential materials in a public repository.

## Local Key Setup

For the safest local demo, set the key only in the current PowerShell session:

```powershell
$env:GROQ_API_KEY="paste_your_groq_key_here"
$env:GROQ_MODEL="llama-3.1-8b-instant"
node server.js
```

This does not write the key to disk. Closing the terminal clears it.

Alternatively, create a local `.env` file:

```text
GROQ_API_KEY=your_groq_key_here
GROQ_MODEL=llama-3.1-8b-instant
MAX_FILE_CHARS=600
MAX_ARTIFACT_CHARS=600
MAX_AGENT_TOKENS=220
MAX_SYNTHESIS_TOKENS=600
MAX_CHAT_TOKENS=220
```

`.env` is included in `.gitignore`, and `server.js` loads it automatically if present. Do not commit it.

The frontend does not accept or display API keys. For a recorded demo, start the server with the environment variable already set so the key never appears on screen.

## What Not To Do

- Do not paste API keys into `README.md`, screenshots, video, GitHub, or the PDF.
- Do not commit `.env` files.
- Do not commit your real resume, cover letter, transcript, or code if the repository will be public.
- Do not deploy real personal candidate materials to a public Azure App Service instance.

## Azure App Service Setup

Use Azure to host the Node app, not to run model inference. This shows cloud deployment skill while keeping model calls on Groq.

In Azure App Service, add these Application Settings:

```text
GROQ_API_KEY = your_groq_key
GROQ_MODEL = llama-3.1-8b-instant
MAX_FILE_CHARS = 600
MAX_ARTIFACT_CHARS = 600
MAX_AGENT_TOKENS = 220
MAX_SYNTHESIS_TOKENS = 600
MAX_CHAT_TOKENS = 220
NODE_ENV = production
```

Azure exposes App Service Application Settings as environment variables to Node.js, so `server.js` reads them with `process.env.GROQ_API_KEY`.

Start command:

```text
node server.js
```

## Private Candidate Folder Test

To test yourself locally, create a folder such as:

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

Example `metadata.json`:

```json
{
  "name": "Mansi [Last Name]",
  "background": "AI engineer specializing in HCI and agentic systems",
  "readiness": "Private self-test for AI Builder role"
}
```

Privacy behavior:

- The app reads files only from the local `candidate_submissions/` folder.
- The frontend never receives your Groq key.
- Candidate text is sent to Groq only when you click Evaluate or ask a chat question.
- Keep real personal materials out of Git if you plan to publish the repository.

## Video Transcripts

For the assignment, use a transcript or speaking notes instead of raw video. That keeps the demo simple and avoids sending video files through the app. If you record with Loom or YouTube, save the generated transcript as `transcript.md`.

## Source References

- Groq tool use documentation explains the local tool-calling loop: provide tool definitions, receive tool call requests, execute tools locally, and send results back to the model.
- Azure App Service documentation describes Application Settings as environment variables available to application code.
