import { assertNotEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";
import { prettyErrorMessage } from "./main.ts";

Deno.test(function prettyErrorMessageTest() {
  assertNotEquals(
    prettyErrorMessage(
      "error: TS2345 [ERROR]: Argument of type 'number' is not assignable to parameter of type 'string'."
    ),
    ""
  );
});
