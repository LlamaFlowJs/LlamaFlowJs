"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7022],{41354:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(65723),s=n(43327);const i={sidebar_position:5},o="Retriever",a={id:"modules/retriever",title:"Retriever",description:"A retriever in llamaflowjs is what is used to fetch Nodes from an index using a query string. Aa VectorIndexRetriever will fetch the top-k most similar nodes. Meanwhile, a SummaryIndexRetriever will fetch all nodes no matter the query.",source:"@site/docs/modules/retriever.md",sourceDirName:"modules",slug:"/modules/retriever",permalink:"/LlamaFlowJs/modules/retriever",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mySidebar",previous:{title:"NodeParser",permalink:"/LlamaFlowJs/modules/node_parser"},next:{title:"ResponseSynthesizer",permalink:"/LlamaFlowJs/modules/response_synthesizer"}},l={},c=[{value:"API Reference",id:"api-reference",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"retriever",children:"Retriever"}),"\n",(0,t.jsxs)(r.p,{children:["A retriever in llamaflowjs is what is used to fetch ",(0,t.jsx)(r.code,{children:"Node"}),"s from an index using a query string. Aa ",(0,t.jsx)(r.code,{children:"VectorIndexRetriever"})," will fetch the top-k most similar nodes. Meanwhile, a ",(0,t.jsx)(r.code,{children:"SummaryIndexRetriever"})," will fetch all nodes no matter the query."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'const retriever = vector_index.asRetriever();\nretriever.similarityTopK = 3;\n\n// Fetch nodes!\nconst nodesWithScore = await retriever.retrieve({ query: "query string" });\n'})}),"\n",(0,t.jsx)(r.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/LlamaFlowJs/api/classes/SummaryIndexRetriever",children:"SummaryIndexRetriever"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/LlamaFlowJs/api/classes/SummaryIndexLLMRetriever",children:"SummaryIndexLLMRetriever"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/LlamaFlowJs/api/classes/VectorIndexRetriever",children:"VectorIndexRetriever"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},43327:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(22155);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);