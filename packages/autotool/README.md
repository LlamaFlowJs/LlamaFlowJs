# @llamaflow/autotool

> Auto transpile your JS function to LLM Agent compatible

## Usage

First, Install the package

```shell
npm install @llamaflow/autotool
pnpm add @llamaflow/autotool
yarn add @llamaflow/autotool
```

Second, Add the plugin/loader to your configuration:

### Next.js

```javascript
import { withNext } from "@llamaflow/autotool/next";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNext(nextConfig);
```

### Node.js

```shell
node --import @llamaflow/autotool/node ./path/to/your/script.js
```

Third, add `"use tool"` on top of your tool file or change to `.tool.ts`.

```typescript
"use tool";

export function getWeather(city: string) {
  // ...
}
// ...
```

Finally, export a chat handler function to the frontend using `llamaindex` Agent

```typescript
"use server";

// imports ...

export async function chatWithAI(message: string): Promise<JSX.Element> {
  const agent = new OpenAIAgent({
    tools: convertTools("llamaflow"),
  });
  const uiStream = createStreamableUI();
  agent
    .chat({
      stream: true,
      message,
    })
    .then(async (responseStream) => {
      return responseStream.pipeTo(
        new WritableStream({
          start: () => {
            uiStream.append("\n");
          },
          write: async (message) => {
            uiStream.append(message.response.delta);
          },
          close: () => {
            uiStream.done();
          },
        }),
      );
    });
  return uiStream.value;
}
```

## License

MIT
