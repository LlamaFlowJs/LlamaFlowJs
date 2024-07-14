"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6248],{11532:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=r(65723),a=r(43327);const l={},o="Fireworks LLM",t={id:"modules/llms/available_llms/fireworks",title:"Fireworks LLM",description:"Fireworks.ai focus on production use cases for open source LLMs, offering speed and quality.",source:"@site/docs/modules/llms/available_llms/fireworks.md",sourceDirName:"modules/llms/available_llms",slug:"/modules/llms/available_llms/fireworks",permalink:"/LlamaFlowJs/modules/llms/available_llms/fireworks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"DeepInfra",permalink:"/LlamaFlowJs/modules/llms/available_llms/deepinfra"},next:{title:"Gemini",permalink:"/LlamaFlowJs/modules/llms/available_llms/gemini"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Load and index documents",id:"load-and-index-documents",level:2},{value:"Query",id:"query",level:2},{value:"Full Example",id:"full-example",level:2},{value:"API Reference",id:"api-reference",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"fireworks-llm",children:"Fireworks LLM"}),"\n",(0,s.jsx)(n.p,{children:"Fireworks.ai focus on production use cases for open source LLMs, offering speed and quality."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { FireworksLLM, Settings } from "llamaflowjs";\n\nSettings.llm = new FireworksLLM({\n  apiKey: "<YOUR_API_KEY>",\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"load-and-index-documents",children:"Load and index documents"}),"\n",(0,s.jsx)(n.p,{children:"For this example, we will load the Berkshire Hathaway 2022 annual report pdf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const reader = new PDFReader();\nconst documents = await reader.loadData("../data/brk-2022.pdf");\n\n// Split text and create embeddings. Store them in a VectorStoreIndex\nconst index = await VectorStoreIndex.fromDocuments(documents);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const queryEngine = index.asQueryEngine();\nconst response = await queryEngine.query({\n  query: "What mistakes did Warren E. Buffett make?",\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { VectorStoreIndex } from "llamaflowjs";\nimport { PDFReader } from "llamaflowjs/readers/PDFReader";\n\nasync function main() {\n  // Load PDF\n  const reader = new PDFReader();\n  const documents = await reader.loadData("../data/brk-2022.pdf");\n\n  // Split text and create embeddings. Store them in a VectorStoreIndex\n  const index = await VectorStoreIndex.fromDocuments(documents);\n\n  // Query the index\n  const queryEngine = index.asQueryEngine();\n  const response = await queryEngine.query({\n    query: "What mistakes did Warren E. Buffett make?",\n  });\n\n  // Output response\n  console.log(response.toString());\n}\n\nmain().catch(console.error);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/FireworksLLM",children:"FireworksLLM"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},43327:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var s=r(22155);const a={},l=s.createContext(a);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);