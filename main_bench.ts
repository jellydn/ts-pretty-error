import { prettyErrorMessage } from "./main.ts";

Deno.bench(function emptyErrorMessage() {
  prettyErrorMessage("");
});

Deno.bench(function simpleErrorMessage() {
  prettyErrorMessage(
    "error: TS2345 [ERROR]: Argument of type 'number' is not assignable to parameter of type 'string'.",
  );
});

Deno.bench(function complexErrorMessage() {
  prettyErrorMessage(
    `error TS2345: Argument of type '{ from: { account: string; tokTypeId: number; qtyUnit: string; tradeType: string; 
stIds: number[]; }; to: { account: string; }; applyFees: boolean; transferType: number | undefined; }' is not assignable to parameter of type '{ from:
 Transferable; to: Transferable; applyFees?: boolean | undefined; previewFees?: boolean | undefined; feeAddrOwnerA?: string | undefined; feeAddrOwnerB
?: string | undefined; transferType?: number | undefined; customFeeFrom?: number | undefined; customFeeTo?: number | undefined; }'.
  The types of 'from.qtyUnit' are incompatible between these types.
    Type 'string' is not assignable to type 'number'.
`,
  );
});
