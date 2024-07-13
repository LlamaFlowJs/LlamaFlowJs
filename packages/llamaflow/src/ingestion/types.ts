import type { BaseNode } from "@llamaflow/core/schema";

export interface TransformComponent {
  transform(nodes: BaseNode[], options?: any): Promise<BaseNode[]>;
}
