"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4710],{54054:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=l(65723),t=l(43327);const a={},r="OpenAI",o={id:"modules/llms/available_llms/openai",title:"OpenAI",description:"You can setup the apiKey on the environment variables, like:",source:"@site/docs/modules/llms/available_llms/openai.md",sourceDirName:"modules/llms/available_llms",slug:"/modules/llms/available_llms/openai",permalink:"/modules/llms/available_llms/openai",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Ollama",permalink:"/modules/llms/available_llms/ollama"},next:{title:"Portkey LLM",permalink:"/modules/llms/available_llms/portkey"}},i={},c=[{value:"Load and index documents",id:"load-and-index-documents",level:2},{value:"Query",id:"query",level:2},{value:"Full Example",id:"full-example",level:2},{value:"API Reference",id:"api-reference",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"openai",children:"OpenAI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { OpenAI, Settings } from "llamaflowjs";\n\nSettings.llm = new OpenAI({ model: "gpt-3.5-turbo", temperature: 0, apiKey: <YOUR_API_KEY> });\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can setup the apiKey on the environment variables, like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export OPENAI_API_KEY="<YOUR_API_KEY>"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"load-and-index-documents",children:"Load and index documents"}),"\n",(0,s.jsx)(n.p,{children:"For this example, we will use a single document. In a real-world scenario, you would have multiple documents to index."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { OpenAI, Document, VectorStoreIndex, Settings } from "llamaflowjs";\n\n// Use the OpenAI LLM\nSettings.llm = new OpenAI({ model: "gpt-3.5-turbo", temperature: 0 });\n\nasync function main() {\n  const document = new Document({ text: essay, id_: "essay" });\n\n  // Load and index documents\n  const index = await VectorStoreIndex.fromDocuments([document]);\n\n  // get retriever\n  const retriever = index.asRetriever();\n\n  // Create a query engine\n  const queryEngine = index.asQueryEngine({\n    retriever,\n  });\n\n  const query = "What is the meaning of life?";\n\n  // Query\n  const response = await queryEngine.query({\n    query,\n  });\n\n  // Log the response\n  console.log(response.response);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/classes/OpenAI",children:"OpenAI"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43327:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>o});var s=l(22155);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);