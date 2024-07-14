"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4270],{36218:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>r});var a=i(65723),s=i(43327);const d={},t="Jina AI",o={id:"modules/embeddings/available_embeddings/jinaai",title:"Jina AI",description:"To use Jina AI embeddings, you need to import JinaAIEmbedding from llamaflowjs.",source:"@site/docs/modules/embeddings/available_embeddings/jinaai.md",sourceDirName:"modules/embeddings/available_embeddings",slug:"/modules/embeddings/available_embeddings/jinaai",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/jinaai",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"HuggingFace",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/huggingface"},next:{title:"MistralAI",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/mistral"}},l={},r=[{value:"API Reference",id:"api-reference",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"jina-ai",children:"Jina AI"}),"\n",(0,a.jsxs)(n.p,{children:["To use Jina AI embeddings, you need to import ",(0,a.jsx)(n.code,{children:"JinaAIEmbedding"})," from ",(0,a.jsx)(n.code,{children:"llamaflowjs"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import { JinaAIEmbedding, Settings } from "llamaflowjs";\n\nSettings.embedModel = new JinaAIEmbedding();\n\nconst document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n\nconst queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/JinaAIEmbedding",children:"JinaAIEmbedding"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},43327:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var a=i(22155);const s={},d=a.createContext(s);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);