import { VectorStoreIndex } from "llamaflow";
import { HTMLReader } from "llamaflow/readers/HTMLReader";

async function main() {
  // Load page
  const reader = new HTMLReader();
  const documents = await reader.loadData("../data/llamaflow.html");

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments(documents);

  // Query the index
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query({
    query: "What can I do with LlamaFlow?",
  });

  // Output response
  console.log(response.toString());
}

main().catch(console.error);
