"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9223],{14448:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var l=s(65723),a=s(43327),r=s(15120);const o='import fs from "node:fs/promises";\n\nimport { Document, Groq, Settings, VectorStoreIndex } from "llamaflowjs";\n\n// Update llm to use Groq\nSettings.llm = new Groq({\n  apiKey: process.env.GROQ_API_KEY,\n});\n\nasync function main() {\n  // Load essay from abramov.txt in Node\n  const path = "node_modules/llamaflowjs/examples/abramov.txt";\n  const essay = await fs.readFile(path, "utf-8");\n  const document = new Document({ text: essay, id_: "essay" });\n\n  // Load and index documents\n  const index = await VectorStoreIndex.fromDocuments([document]);\n\n  // get retriever\n  const retriever = index.asRetriever();\n\n  // Create a query engine\n  const queryEngine = index.asQueryEngine({\n    retriever,\n  });\n\n  const query = "What is the meaning of life?";\n\n  // Query\n  const response = await queryEngine.query({\n    query,\n  });\n\n  // Log the response\n  console.log(response.response);\n}\n\nmain().catch(console.error);\n',i={},t="Groq",d={id:"modules/llms/available_llms/groq",title:"Groq",description:"Usage",source:"@site/docs/modules/llms/available_llms/groq.mdx",sourceDirName:"modules/llms/available_llms",slug:"/modules/llms/available_llms/groq",permalink:"/modules/llms/available_llms/groq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Gemini",permalink:"/modules/llms/available_llms/gemini"},next:{title:"LLama2",permalink:"/modules/llms/available_llms/llama2"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Load and index documents",id:"load-and-index-documents",level:2},{value:"Query",id:"query",level:2},{value:"Full Example",id:"full-example",level:2},{value:"API Reference",id:"api-reference",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"groq",children:"Groq"}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(n.p,{children:["First, create an API key at the ",(0,l.jsx)(n.a,{href:"https://console.groq.com/keys",children:"Groq Console"}),". Then save it in your environment:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export GROQ_API_KEY=<your-api-key>\n"})}),"\n",(0,l.jsx)(n.p,{children:"The initialize the Groq module."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'import { Groq, Settings } from "llamaflowjs";\n\nSettings.llm = new Groq({\n  // If you do not wish to set your API key in the environment, you may\n  // configure your API key when you initialize the Groq class.\n  // apiKey: "<your-api-key>",\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"load-and-index-documents",children:"Load and index documents"}),"\n",(0,l.jsx)(n.p,{children:"For this example, we will use a single document. In a real-world scenario, you would have multiple documents to index."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'const document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n'})}),"\n",(0,l.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'const queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,l.jsx)(r.A,{language:"ts",showLineNumbers:!0,children:o}),"\n",(0,l.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/api/classes/Groq",children:"Groq"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}}}]);