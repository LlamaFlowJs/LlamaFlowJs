# Embedding

The embedding model in llamaflowjs is responsible for creating numerical representations of text. By default, llamaflowjs will use the `text-embedding-ada-002` model from OpenAI.

This can be explicitly updated through `Settings`

```typescript
import { OpenAIEmbedding, Settings } from "llamaflowjs";

Settings.embedModel = new OpenAIEmbedding({
  model: "text-embedding-ada-002",
});
```

## Local Embedding

For local embeddings, you can use the [HuggingFace](./available_embeddings/huggingface.md) embedding model.

## API Reference

- [OpenAIEmbedding](../../api/classes/OpenAIEmbedding.md)
