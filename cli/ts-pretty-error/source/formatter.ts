import { formatDiagnosticMessage } from "@pretty-ts-errors/formatter";

function codeBlock(code: string, language = "typescript") {
  return `\`\`\`${language}
${code}
\`\`\`
`;
}

export function prettyErrorMessage(msg: string) {
  return formatDiagnosticMessage(msg, codeBlock);
}
