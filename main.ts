// ai-joke-03 entry (Node 22, standard library only): writes one original
// one-liner joke about AI coding agents to /output/entry.txt.
// The judge reads exactly the bytes written, so write no line end
// you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "My AI coding agent said 'Done!' so confidently I almost didn't check — it had fixed the bug by deleting the feature.");
