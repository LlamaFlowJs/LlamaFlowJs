import type { MessageContent } from "@llamaflow/core/llms";
import type { NodeWithScore } from "@llamaflow/core/schema";

export type RetrievalStartEvent = {
  query: MessageContent;
};
export type RetrievalEndEvent = {
  query: MessageContent;
  nodes: NodeWithScore[];
};
