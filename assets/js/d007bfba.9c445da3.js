"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2019],{86199:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(65723),o=r(43327);const i={},l="Class: CohereRerank",a={id:"api/classes/CohereRerank",title:"Class: CohereRerank",description:"Implements",source:"@site/docs/api/classes/CohereRerank.md",sourceDirName:"api/classes",slug:"/api/classes/CohereRerank",permalink:"/api/classes/CohereRerank",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: ClipEmbedding",permalink:"/api/classes/ClipEmbedding"},next:{title:"Class: CompactAndRefine",permalink:"/api/classes/CompactAndRefine"}},d={},c=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new CohereRerank()",id:"new-coherererank",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"apiKey",id:"apikey",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"model",id:"model",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"topN",id:"topn",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"postprocessNodes()",id:"postprocessnodes",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function t(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"class-coherererank",children:"Class: CohereRerank"}),"\n",(0,n.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/interfaces/BaseNodePostprocessor",children:(0,n.jsx)(s.code,{children:"BaseNodePostprocessor"})})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-coherererank",children:"new CohereRerank()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"new CohereRerank"}),"(",(0,n.jsx)(s.code,{children:"topN"}),"): ",(0,n.jsx)(s.a,{href:"/api/classes/CohereRerank",children:(0,n.jsx)(s.code,{children:"CohereRerank"})})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Constructor for CohereRerank."}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"topN"}),": ",(0,n.jsx)(s.code,{children:"CohereRerankOptions"})]}),"\n",(0,n.jsx)(s.p,{children:"Number of nodes to return."}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/api/classes/CohereRerank",children:(0,n.jsx)(s.code,{children:"CohereRerank"})})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts#L26",children:"packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts:26"})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"apikey",children:"apiKey"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"apiKey"}),": ",(0,n.jsx)(s.code,{children:"null"})," | ",(0,n.jsx)(s.code,{children:"string"})," = ",(0,n.jsx)(s.code,{children:"null"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts#L18",children:"packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts:18"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"model",children:"model"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"model"}),": ",(0,n.jsx)(s.code,{children:"string"})," = ",(0,n.jsx)(s.code,{children:'"rerank-english-v2.0"'})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts#L17",children:"packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts:17"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"topn",children:"topN"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"topN"}),": ",(0,n.jsx)(s.code,{children:"number"})," = ",(0,n.jsx)(s.code,{children:"2"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts#L16",children:"packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts:16"})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"postprocessnodes",children:"postprocessNodes()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"postprocessNodes"}),"(",(0,n.jsx)(s.code,{children:"nodes"}),", ",(0,n.jsx)(s.code,{children:"query"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/api/interfaces/NodeWithScore",children:(0,n.jsx)(s.code,{children:"NodeWithScore"})}),"<",(0,n.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Reranks the nodes using the Cohere API."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"nodes"}),": ",(0,n.jsx)(s.a,{href:"/api/interfaces/NodeWithScore",children:(0,n.jsx)(s.code,{children:"NodeWithScore"})}),"<",(0,n.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(s.code,{children:"Metadata"})}),">[]"]}),"\n",(0,n.jsx)(s.p,{children:"Array of nodes with scores."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"query?"}),": ",(0,n.jsx)(s.a,{href:"/api/type-aliases/MessageContent",children:(0,n.jsx)(s.code,{children:"MessageContent"})})]}),"\n",(0,n.jsx)(s.p,{children:"Query string."}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/api/interfaces/NodeWithScore",children:(0,n.jsx)(s.code,{children:"NodeWithScore"})}),"<",(0,n.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n",(0,n.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/interfaces/BaseNodePostprocessor",children:(0,n.jsx)(s.code,{children:"BaseNodePostprocessor"})}),".",(0,n.jsx)(s.a,{href:"/api/interfaces/BaseNodePostprocessor#postprocessnodes",children:(0,n.jsx)(s.code,{children:"postprocessNodes"})})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts#L49",children:"packages/llamaflowjs/src/postprocessors/rerankers/CohereRerank.ts:49"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},43327:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>a});var n=r(22155);const o={},i=n.createContext(o);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);