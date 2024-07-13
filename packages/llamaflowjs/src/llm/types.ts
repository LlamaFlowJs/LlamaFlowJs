import type { MessageContent } from "@llamaflowjs/core/llms";
import type { NodeWithScore } from "@llamaflowjs/core/schema";

export type RetrievalStartEvent = {
  query: MessageContent;
};
export type RetrievalEndEvent = {
  query: MessageContent;
  nodes: NodeWithScore[];
};
