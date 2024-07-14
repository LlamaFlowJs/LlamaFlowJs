"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1299],{26014:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=l(65723),d=l(43327);const s={},i="Ollama",o={id:"modules/embeddings/available_embeddings/ollama",title:"Ollama",description:"To use Ollama embeddings, you need to import OllamaEmbedding from llamaflowjs.",source:"@site/docs/modules/embeddings/available_embeddings/ollama.md",sourceDirName:"modules/embeddings/available_embeddings",slug:"/modules/embeddings/available_embeddings/ollama",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/ollama",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"MixedbreadAI",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/mixedbreadai"},next:{title:"OpenAI",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/openai"}},t={},m=[{value:"API Reference",id:"api-reference",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ollama",children:"Ollama"}),"\n",(0,a.jsxs)(n.p,{children:["To use Ollama embeddings, you need to import ",(0,a.jsx)(n.code,{children:"OllamaEmbedding"})," from ",(0,a.jsx)(n.code,{children:"llamaflowjs"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Note that you need to pull the embedding model first before using it."}),"\n",(0,a.jsxs)(n.p,{children:["In the example below, we're using the ",(0,a.jsx)(n.a,{href:"https://ollama.com/library/nomic-embed-text",children:(0,a.jsx)(n.code,{children:"nomic-embed-text"})})," model, so you have to call:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ollama pull nomic-embed-text\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import { OllamaEmbedding, Settings } from "llamaflowjs";\n\nSettings.embedModel = new OllamaEmbedding({ model: "nomic-embed-text" });\n\nconst document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n\nconst queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/OllamaEmbedding",children:"OllamaEmbedding"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},43327:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>o});var a=l(22155);const d={},s=a.createContext(d);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);