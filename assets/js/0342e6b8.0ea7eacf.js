"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9949],{94699:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=d(65723),s=d(43327);const l={},t="Embedding",r={id:"modules/embeddings/index",title:"Embedding",description:"The embedding model in llamaflowjs is responsible for creating numerical representations of text. By default, llamaflowjs will use the text-embedding-ada-002 model from OpenAI.",source:"@site/docs/modules/embeddings/index.md",sourceDirName:"modules/embeddings",slug:"/modules/embeddings/",permalink:"/modules/embeddings/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Agents",permalink:"/modules/agent/"},next:{title:"DeepInfra",permalink:"/modules/embeddings/available_embeddings/deepinfra"}},o={},a=[{value:"Local Embedding",id:"local-embedding",level:2},{value:"API Reference",id:"api-reference",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"embedding",children:"Embedding"}),"\n",(0,i.jsxs)(n.p,{children:["The embedding model in llamaflowjs is responsible for creating numerical representations of text. By default, llamaflowjs will use the ",(0,i.jsx)(n.code,{children:"text-embedding-ada-002"})," model from OpenAI."]}),"\n",(0,i.jsxs)(n.p,{children:["This can be explicitly updated through ",(0,i.jsx)(n.code,{children:"Settings"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { OpenAIEmbedding, Settings } from "llamaflowjs";\n\nSettings.embedModel = new OpenAIEmbedding({\n  model: "text-embedding-ada-002",\n});\n'})}),"\n",(0,i.jsx)(n.h2,{id:"local-embedding",children:"Local Embedding"}),"\n",(0,i.jsxs)(n.p,{children:["For local embeddings, you can use the ",(0,i.jsx)(n.a,{href:"/modules/embeddings/available_embeddings/huggingface",children:"HuggingFace"})," embedding model."]}),"\n",(0,i.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/classes/OpenAIEmbedding",children:"OpenAIEmbedding"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},43327:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>r});var i=d(22155);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);