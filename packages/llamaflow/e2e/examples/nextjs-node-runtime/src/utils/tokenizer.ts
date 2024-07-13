// test runtime
import { Tokenizers, tokenizers } from "@llamaflow/env";
import "llamaflow";

// @ts-expect-error
if (typeof EdgeRuntime === "string") {
  throw new Error("Expected to not run in EdgeRuntime");
}

export async function tokenize(str: string): Promise<string> {
  const tokenizer = tokenizers.tokenizer(Tokenizers.CL100K_BASE);
  const encoded = tokenizer.encode(str);
  return tokenizer.decode(encoded);
}
