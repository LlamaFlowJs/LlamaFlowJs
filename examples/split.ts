import fs from "node:fs/promises";

import { SentenceSplitter } from "llamaflow";

async function main() {
  const path = "node_modules/llamaflow/examples/abramov.txt";
  const essay = await fs.readFile(path, "utf-8");

  const textSplitter = new SentenceSplitter();

  const chunks = textSplitter.splitTextWithOverlaps(essay);

  console.log(chunks);
}

void main();
