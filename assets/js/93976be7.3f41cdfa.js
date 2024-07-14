"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[983],{72812:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=l(65723),t=l(43327);const r={},o="Portkey LLM",a={id:"modules/llms/available_llms/portkey",title:"Portkey LLM",description:"Usage",source:"@site/docs/modules/llms/available_llms/portkey.md",sourceDirName:"modules/llms/available_llms",slug:"/modules/llms/available_llms/portkey",permalink:"/LlamaFlowJs/modules/llms/available_llms/portkey",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"OpenAI",permalink:"/LlamaFlowJs/modules/llms/available_llms/openai"},next:{title:"Together LLM",permalink:"/LlamaFlowJs/modules/llms/available_llms/together"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Load and index documents",id:"load-and-index-documents",level:2},{value:"Query",id:"query",level:2},{value:"Full Example",id:"full-example",level:2},{value:"API Reference",id:"api-reference",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"portkey-llm",children:"Portkey LLM"}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { Portkey, Settings } from "llamaflowjs";\n\nSettings.llm = new Portkey({\n  apiKey: "<YOUR_API_KEY>",\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"load-and-index-documents",children:"Load and index documents"}),"\n",(0,s.jsx)(n.p,{children:"For this example, we will use a single document. In a real-world scenario, you would have multiple documents to index."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { Portkey, Document, VectorStoreIndex, Settings } from "llamaflowjs";\n\n// Use the Portkey LLM\nSettings.llm = new Portkey({\n  apiKey: "<YOUR_API_KEY>",\n});\n\nasync function main() {\n  // Create a document\n  const document = new Document({ text: essay, id_: "essay" });\n\n  // Load and index documents\n  const index = await VectorStoreIndex.fromDocuments([document]);\n\n  // get retriever\n  const retriever = index.asRetriever();\n\n  // Create a query engine\n  const queryEngine = index.asQueryEngine({\n    retriever,\n  });\n\n  const query = "What is the meaning of life?";\n\n  // Query\n  const response = await queryEngine.query({\n    query,\n  });\n\n  // Log the response\n  console.log(response.response);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/Portkey",children:"Portkey"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43327:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>a});var s=l(22155);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);