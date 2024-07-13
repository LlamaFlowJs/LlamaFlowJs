import { FunctionTool, Gemini, GEMINI_MODEL, LLMAgent } from "llamaflowjs";

const sumNumbers = FunctionTool.from(
  ({ a, b }: { a: number; b: number }) => `${a + b}`,
  {
    name: "sumNumbers",
    description: "Use this function to sum two numbers",
    parameters: {
      type: "object",
      properties: {
        a: {
          type: "number",
          description: "The first number",
        },
        b: {
          type: "number",
          description: "The second number",
        },
      },
      required: ["a", "b"],
    },
  },
);

const divideNumbers = FunctionTool.from(
  ({ a, b }: { a: number; b: number }) => `${a / b}`,
  {
    name: "divideNumbers",
    description: "Use this function to divide two numbers",
    parameters: {
      type: "object",
      properties: {
        a: {
          type: "number",
          description: "The dividend a to divide",
        },
        b: {
          type: "number",
          description: "The divisor b to divide by",
        },
      },
      required: ["a", "b"],
    },
  },
);

async function main() {
  const gemini = new Gemini({
    model: GEMINI_MODEL.GEMINI_PRO,
  });
  const agent = new LLMAgent({
    llm: gemini,
    tools: [sumNumbers, divideNumbers],
  });

  const response = await agent.chat({
    message: "How much is 5 + 5? then divide by 2",
  });

  console.log(response.message);
}

void main().then(() => {
  console.log("Done");
});
