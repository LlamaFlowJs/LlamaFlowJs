"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5824],{90498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=t(65723),s=t(43327);const i={},r="Together",d={id:"modules/embeddings/available_embeddings/together",title:"Together",description:"To use together embeddings, you need to import TogetherEmbedding from llamaflowjs.",source:"@site/docs/modules/embeddings/available_embeddings/together.md",sourceDirName:"modules/embeddings/available_embeddings",slug:"/modules/embeddings/available_embeddings/together",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/together",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"OpenAI",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/openai"},next:{title:"Evaluating",permalink:"/LlamaFlowJs/modules/evaluation/"}},a={},l=[{value:"API Reference",id:"api-reference",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"together",children:"Together"}),"\n",(0,o.jsxs)(n.p,{children:["To use together embeddings, you need to import ",(0,o.jsx)(n.code,{children:"TogetherEmbedding"})," from ",(0,o.jsx)(n.code,{children:"llamaflowjs"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import { TogetherEmbedding, Settings } from "llamaflowjs";\n\nSettings.embedModel = new TogetherEmbedding({\n  apiKey: "<YOUR_API_KEY>",\n});\n\nconst document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n\nconst queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,o.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/TogetherEmbedding",children:"TogetherEmbedding"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var o=t(22155);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);