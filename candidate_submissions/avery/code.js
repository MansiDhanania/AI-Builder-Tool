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
