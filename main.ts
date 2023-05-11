import { formatDiagnosticMessage } from "npm:@pretty-ts-errors/formatter";

function codeBlock(code: string, language = "typescript") {
  return `\`\`\`${language}
${code}
\`\`\`
`;
}

export function prettyErrorMessage(msg: string) {
  return formatDiagnosticMessage(msg, codeBlock);
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const result = prettyErrorMessage(
    `error TS2345: Argument of type '{ from: { account: string; tokTypeId: number; qtyUnit: string; tradeType: string;
stIds: number[]; }; to: { account: string; }; applyFees: boolean; transferType: number | undefined; }' is not assignable to parameter of type '{ from:
 Transferable; to: Transferable; applyFees?: boolean | undefined; previewFees?: boolean | undefined; feeAddrOwnerA?: string | undefined; feeAddrOwnerB
?: string | undefined; transferType?: number | undefined; customFeeFrom?: number | undefined; customFeeTo?: number | undefined; }'.
  The types of 'from.qtyUnit' are incompatible between these types.
    Type 'string' is not assignable to type 'number'.
`
  );

  console.log(result);
}
