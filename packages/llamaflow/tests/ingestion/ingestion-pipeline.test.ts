import { Document } from "@llamaflow/core/schema";
import { IngestionPipeline } from "llamaflow/ingestion/IngestionPipeline";
import { test } from "vitest";

// Refs: https://github.com/run-llama/llamaflowTS/pull/760
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
