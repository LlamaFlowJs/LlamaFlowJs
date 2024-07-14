"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6902],{53074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(65723),l=t(43327);const r={},o="Together LLM",a={id:"modules/llms/available_llms/together",title:"Together LLM",description:"Usage",source:"@site/docs/modules/llms/available_llms/together.md",sourceDirName:"modules/llms/available_llms",slug:"/modules/llms/available_llms/together",permalink:"/modules/llms/available_llms/together",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Portkey LLM",permalink:"/modules/llms/available_llms/portkey"},next:{title:"Node Postprocessors",permalink:"/modules/node_postprocessors/"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Load and index documents",id:"load-and-index-documents",level:2},{value:"Query",id:"query",level:2},{value:"Full Example",id:"full-example",level:2},{value:"API Reference",id:"api-reference",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"together-llm",children:"Together LLM"}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { TogetherLLM, Settings } from "llamaflowjs";\n\nSettings.llm = new TogetherLLM({\n  apiKey: "<YOUR_API_KEY>",\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"load-and-index-documents",children:"Load and index documents"}),"\n",(0,s.jsx)(n.p,{children:"For this example, we will use a single document. In a real-world scenario, you would have multiple documents to index."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { TogetherLLM, Document, VectorStoreIndex, Settings } from "llamaflowjs";\n\nSettings.llm = new TogetherLLM({\n  apiKey: "<YOUR_API_KEY>",\n});\n\nasync function main() {\n  const document = new Document({ text: essay, id_: "essay" });\n\n  // Load and index documents\n  const index = await VectorStoreIndex.fromDocuments([document]);\n\n  // get retriever\n  const retriever = index.asRetriever();\n\n  // Create a query engine\n  const queryEngine = index.asQueryEngine({\n    retriever,\n  });\n\n  const query = "What is the meaning of life?";\n\n  // Query\n  const response = await queryEngine.query({\n    query,\n  });\n\n  // Log the response\n  console.log(response.response);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/classes/TogetherLLM",children:"TogetherLLM"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(22155);const l={},r=s.createContext(l);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);