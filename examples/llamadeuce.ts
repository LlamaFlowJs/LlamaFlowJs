import { DeuceChatStrategy, LlamaDeuce } from "llamaflow";

(async () => {
  const deuce = new LlamaDeuce({ chatStrategy: DeuceChatStrategy.META });
  const result = await deuce.chat({
    messages: [{ content: "Hello, world!", role: "user" }],
  });
  console.log(result);
})();
