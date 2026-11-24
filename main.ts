// Two Lines to Your Past Self — entry for make.fun
// u-suga-two-lines-to-your-past-self-f36c83ca
// Writes two lines (1-280 chars) to /output/entry.txt: line one warns
// the past self about one specific moment, line two says why it mattered
// and what changed because of it — the midnight signature, the two-year cost.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "Don't sign the contract at the kitchen table at midnight just because they said the offer expires at dawn.\n" +
  "It locked you into two years of night shifts, and the same offer was still sitting on the table a week later.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
