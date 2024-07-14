"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[313],{18273:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var s=t(65723),o=t(43327),a=t(15120);const c='import { extractText } from "@llamaflowjs/core/utils";\nimport { encodingForModel } from "js-tiktoken";\nimport { ChatMessage, OpenAI } from "llamaflowjs";\nimport { Settings } from "llamaflowjs/Settings";\n\nconst encoding = encodingForModel("gpt-4-0125-preview");\n\nconst llm = new OpenAI({\n  // currently is "gpt-4-turbo-2024-04-09"\n  model: "gpt-4-turbo",\n});\n\nlet tokenCount = 0;\n\nSettings.callbackManager.on("llm-start", (event) => {\n  const { messages } = event.detail;\n  messages.reduce((count: number, message: ChatMessage) => {\n    return count + encoding.encode(extractText(message.content)).length;\n  }, 0);\n  console.log("Token count:", tokenCount);\n  // https://openai.com/pricing\n  // $10.00 / 1M tokens\n  console.log(`Total Price: $${(tokenCount / 1_000_000) * 10}`);\n});\n\nSettings.callbackManager.on("llm-stream", (event) => {\n  const { chunk } = event.detail;\n  const { delta } = chunk;\n  tokenCount += encoding.encode(extractText(delta)).length;\n  if (tokenCount > 20) {\n    // This is just an example, you can set your own limit or handle it differently\n    throw new Error("Token limit exceeded!");\n  }\n});\nSettings.callbackManager.on("llm-end", () => {\n  // https://openai.com/pricing\n  // $30.00 / 1M tokens\n  console.log(`Total Price: $${(tokenCount / 1_000_000) * 30}`);\n});\n\nconst question = "Hello, how are you? Please response about 50 tokens.";\nconsole.log("Question:", question);\nvoid llm\n  .chat({\n    stream: true,\n    messages: [\n      {\n        content: question,\n        role: "user",\n      },\n    ],\n  })\n  .then(async (iter) => {\n    console.log("Response:");\n    for await (const chunk of iter) {\n      process.stdout.write(chunk.delta);\n    }\n  });\n',l={},r="Cost Analysis",i={id:"recipes/cost-analysis",title:"Cost Analysis",description:"This page shows how to track LLM cost using APIs.",source:"@site/docs/recipes/cost-analysis.mdx",sourceDirName:"recipes",slug:"/recipes/cost-analysis",permalink:"/recipes/cost-analysis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Using other LLM APIs",permalink:"/examples/other_llms"},next:{title:"Documents and Nodes",permalink:"/modules/documents_and_nodes/"}},d={},u=[{value:"Callback Manager",id:"callback-manager",level:2}];function m(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"cost-analysis",children:"Cost Analysis"}),"\n",(0,s.jsx)(e.p,{children:"This page shows how to track LLM cost using APIs."}),"\n",(0,s.jsx)(e.h2,{id:"callback-manager",children:"Callback Manager"}),"\n",(0,s.jsx)(e.p,{children:"The callback manager is a class that manages the callback functions."}),"\n",(0,s.jsxs)(e.p,{children:["You can register ",(0,s.jsx)(e.code,{children:"llm-start"}),", ",(0,s.jsx)(e.code,{children:"llm-end"}),", and ",(0,s.jsx)(e.code,{children:"llm-stream"})," callbacks to the callback manager for tracking the cost."]}),"\n","\n",(0,s.jsx)(a.A,{language:"ts",children:c})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}}}]);