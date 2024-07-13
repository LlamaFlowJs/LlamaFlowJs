# LlamaFlow

[![NPM Version](https://img.shields.io/npm/v/LlamaFlow)](https://www.npmjs.com/package/LlamaFlow)
[![NPM License](https://img.shields.io/npm/l/LlamaFlow)](https://www.npmjs.com/package/LlamaFlow)
[![NPM Downloads](https://img.shields.io/npm/dm/LlamaFlow)](https://www.npmjs.com/package/LlamaFlow)
[![Discord](https://img.shields.io/discord/1059199217496772688)](https://discord.com/invite/eN6D2HQ4aX)

LlamaFlow is a framework that has inbuilt agentic workflows,reiterative reflection and llm review system making it a true framework for llm applications

LlamaFlow is built on top of LlamaIndex

- LlamaFlow will be carried out as an independent Project.
- Focused on building the true agentic workflow that provides built-in solution towards reiterative reflection and review of llm prompts
  Use your own data with large language models (LLMs, OpenAI ChatGPT and others) in Typescript and Javascript.

Documentation: https://ts.LlamaFlow.ai/

## What is LlamaFlow?

LlamaFlow aims to be a lightweight, easy to use set of libraries to help you integrate large language models into your applications with your own data.

## Multiple JS Environment Support

LlamaFlow supports multiple JS environments, including:

- Node.js (18, 20, 22) ✅
- Deno ✅
- Bun ✅
- React Server Components (Next.js) ✅

For now, browser support is limited due to the lack of support for [AsyncLocalStorage-like APIs](https://github.com/tc39/proposal-async-context)

## Getting started

```shell
npm install LlamaFlow
pnpm install LlamaFlow
yarn add LlamaFlow
jsr install @llamaflow/core
```

### Node.js

```ts
import fs from "fs/promises";
import { Document, VectorStoreIndex } from "llamaflow";

async function main() {
  // Load essay from abramov.txt in Node
  const essay = await fs.readFile(
    "node_modules/LlamaFlow/examples/abramov.txt",
    "utf-8",
  );

  // Create Document object with essay
  const document = new Document({ text: essay });

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

main();
```

```bash
# `pnpm install tsx` before running the script
node --import tsx ./main.ts
```

## Core concepts for getting started:

- [Document](/packages/LlamaFlow/src/Node.ts): A document represents a text file, PDF file or other contiguous piece of data.

- [Node](/packages/LlamaFlow/src/Node.ts): The basic data building block. Most commonly, these are parts of the document split into manageable pieces that are small enough to be fed into an embedding model and LLM.

- [Embedding](/packages/LlamaFlow/src/embeddings/OpenAIEmbedding.ts): Embeddings are sets of floating point numbers which represent the data in a Node. By comparing the similarity of embeddings, we can derive an understanding of the similarity of two pieces of data. One use case is to compare the embedding of a question with the embeddings of our Nodes to see which Nodes may contain the data needed to answer that quesiton. Because the default service context is OpenAI, the default embedding is `OpenAIEmbedding`. If using different models, say through Ollama, use this [Embedding](/packages/LlamaFlow/src/embeddings/OllamaEmbedding.ts) (see all [here](/packages/LlamaFlow/src/embeddings)).

- [Indices](/packages/LlamaFlow/src/indices/): Indices store the Nodes and the embeddings of those nodes. QueryEngines retrieve Nodes from these Indices using embedding similarity.

- [QueryEngine](/packages/LlamaFlow/src/engines/query/RetrieverQueryEngine.ts): Query engines are what generate the query you put in and give you back the result. Query engines generally combine a pre-built prompt with selected Nodes from your Index to give the LLM the context it needs to answer your query. To build a query engine from your Index (recommended), use the [`asQueryEngine`](/packages/LlamaFlow/src/indices/BaseIndex.ts) method on your Index. See all query engines [here](/packages/LlamaFlow/src/engines/query).

- [ChatEngine](/packages/LlamaFlow/src/engines/chat/SimpleChatEngine.ts): A ChatEngine helps you build a chatbot that will interact with your Indices. See all chat engines [here](/packages/LlamaFlow/src/engines/chat).

- [SimplePrompt](/packages/LlamaFlow/src/Prompt.ts): A simple standardized function call definition that takes in inputs and formats them in a template literal. SimplePrompts can be specialized using currying and combined using other SimplePrompt functions.

## Tips when using in non-Node.js environments

When you are importing `LlamaFlow` in a non-Node.js environment(such as React Server Components, Cloudflare Workers, etc.)
Some classes are not exported from top-level entry file.

The reason is that some classes are only compatible with Node.js runtime,(e.g. `PDFReader`) which uses Node.js specific APIs(like `fs`, `child_process`, `crypto`).

If you need any of those classes, you have to import them instead directly though their file path in the package.
Here's an example for importing the `PineconeVectorStore` class:

```typescript
import { PineconeVectorStore } from "LlamaFlow/storage/vectorStore/PineconeVectorStore";
```

As the `PDFReader` is not working with the Edge runtime, here's how to use the `SimpleDirectoryReader` with the `LlamaParseReader` to load PDFs:

```typescript
import { SimpleDirectoryReader } from "LlamaFlow/readers/SimpleDirectoryReader";
import { LlamaParseReader } from "LlamaFlow/readers/LlamaParseReader";

export const DATA_DIR = "./data";

export async function getDocuments() {
  const reader = new SimpleDirectoryReader();
  // Load PDFs using LlamaParseReader
  return await reader.loadData({
    directoryPath: DATA_DIR,
    fileExtToReader: {
      pdf: new LlamaParseReader({ resultType: "markdown" }),
    },
  });
}
```

> _Note_: Reader classes have to be added explictly to the `fileExtToReader` map in the Edge version of the `SimpleDirectoryReader`.

You'll find a complete example with LlamaFlow here: https://github.com/run-llama/create_llama_projects/tree/main/nextjs-edge-llamaparse

## Supported LLMs:

- OpenAI GPT-3.5-turbo and GPT-4
- Anthropic Claude 3 (Opus, Sonnet, and Haiku) and the legacy models (Claude 2 and Instant)
- Groq LLMs
- Llama2/3 Chat LLMs (70B, 13B, and 7B parameters)
- MistralAI Chat LLMs
- Fireworks Chat LLMs

## Contributing:

We are in the very early days of LlamaFlow. If you’re interested in hacking on it with us check out our [contributing guide](/CONTRIBUTING.md)

## Bugs? Questions?

Please join our Discord! https://discord.com/invite/llamaflow
