import { VectorStoreIndex } from "llamaflowjs";
import { HTMLReader } from "llamaflowjs/readers/HTMLReader";

async function main() {
  // Load page
  const reader = new HTMLReader();
  const documents = await reader.loadData("../data/llamaflowjs.html");

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments(documents);

  // Query the index
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query({
    query: "What can I do with llamaflowjs?",
  });

  // Output response
  console.log(response.toString());
}

main().catch(console.error);
