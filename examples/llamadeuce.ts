import { DeuceChatStrategy, LlamaDeuce } from "llamaflowjs";

(async () => {
  const deuce = new LlamaDeuce({ chatStrategy: DeuceChatStrategy.META });
  const result = await deuce.chat({
    messages: [{ content: "Hello, world!", role: "user" }],
  });
  console.log(result);
})();
