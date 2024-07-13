import fs from "node:fs/promises";

import {
  Document,
  HuggingFaceEmbedding,
  Ollama,
  Settings,
  VectorStoreIndex,
} from "llamaflowjs";

Settings.llm = new Ollama({
  model: "mixtral:8x7b",
});

Settings.embedModel = new HuggingFaceEmbedding({
  modelType: "BAAI/bge-small-en-v1.5",
  quantized: false,
});

async function main() {
  // Load essay from abramov.txt in Node
  const path = "node_modules/llamaflowjs/examples/abramov.txt";

  const essay = await fs.readFile(path, "utf-8");

  // Create Document object with essay
  const document = new Document({ text: essay, id_: path });

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments([document]);

  // Query the index
  const queryEngine = index.asQueryEngine();

  const response = await queryEngine.query({
    query: "What did the author do in college?",
  });

  // Output response
  console.log(response.toString());
}

main().catch(console.error);
