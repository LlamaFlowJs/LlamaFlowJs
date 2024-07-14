import { Document } from "@llamaflowjs/core/schema";
import { IngestionPipeline } from "llamaflowjs/ingestion/IngestionPipeline";
import { test } from "vitest";

// Refs: https://github.com/LlamaFlowJs/LlamaFlowJs/pull/760
test("load large data should not cause RangeError #760", async () => {
  const pipeline = new IngestionPipeline({
    reader: {
      loadData: async () => {
        return Array.from(
          { length: 1e6 },
          (_, i) =>
            new Document({
              id_: `${i}`,
              text: "some text",
            }),
        );
      },
    },
  });
  await pipeline.prepareInput();
});
