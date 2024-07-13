import type { BaseNode } from "@llamaflowjs/core/schema";

export interface TransformComponent {
  transform(nodes: BaseNode[], options?: any): Promise<BaseNode[]>;
}
