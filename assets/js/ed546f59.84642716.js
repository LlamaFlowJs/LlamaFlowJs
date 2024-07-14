"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8417],{27808:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(65723),l=s(43327);const o={},t="Class: ChromaVectorStore",i={id:"api/classes/ChromaVectorStore",title:"Class: ChromaVectorStore",description:"Extends",source:"@site/docs/api/classes/ChromaVectorStore.md",sourceDirName:"api/classes",slug:"/api/classes/ChromaVectorStore",permalink:"/api/classes/ChromaVectorStore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: abstract ChatHistory\\<AdditionalMessageOptions\\>",permalink:"/api/classes/ChatHistory"},next:{title:"Class: ClipEmbedding",permalink:"/api/classes/ClipEmbedding"}},d={},c=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new ChromaVectorStore()",id:"new-chromavectorstore",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"embedModel",id:"embedmodel",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"flatMetadata",id:"flatmetadata",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"storesText",id:"storestext",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"textKey",id:"textkey",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"add()",id:"add",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"client()",id:"client",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"delete()",id:"delete",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getCollection()",id:"getcollection",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"query()",id:"query",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-9",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"class-chromavectorstore",children:"Class: ChromaVectorStore"}),"\n",(0,n.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/classes/VectorStoreBase",children:(0,n.jsx)(r.code,{children:"VectorStoreBase"})})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"implements",children:"Implements"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,n.jsx)(r.code,{children:"VectorStoreNoEmbedModel"})})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(r.h3,{id:"new-chromavectorstore",children:"new ChromaVectorStore()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"new ChromaVectorStore"}),"(",(0,n.jsx)(r.code,{children:"init"}),"): ",(0,n.jsx)(r.a,{href:"/api/classes/ChromaVectorStore",children:(0,n.jsx)(r.code,{children:"ChromaVectorStore"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"init"}),": ",(0,n.jsx)(r.code,{children:"object"})," & ",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"/api/interfaces/IEmbedModel",children:(0,n.jsx)(r.code,{children:"IEmbedModel"})}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/classes/ChromaVectorStore",children:(0,n.jsx)(r.code,{children:"ChromaVectorStore"})})}),"\n",(0,n.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/classes/VectorStoreBase",children:(0,n.jsx)(r.code,{children:"VectorStoreBase"})}),".",(0,n.jsx)(r.a,{href:"/api/classes/VectorStoreBase#constructors",children:(0,n.jsx)(r.code,{children:"constructor"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L44",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:44"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"embedmodel",children:"embedModel"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"embedModel"}),": ",(0,n.jsx)(r.a,{href:"/api/classes/BaseEmbedding",children:(0,n.jsx)(r.code,{children:"BaseEmbedding"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/classes/VectorStoreBase",children:(0,n.jsx)(r.code,{children:"VectorStoreBase"})}),".",(0,n.jsx)(r.a,{href:"/api/classes/VectorStoreBase#embedmodel",children:(0,n.jsx)(r.code,{children:"embedModel"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/types.ts#L86",children:"packages/llamaflowjs/src/storage/vectorStore/types.ts:86"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"flatmetadata",children:"flatMetadata"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"flatMetadata"}),": ",(0,n.jsx)(r.code,{children:"boolean"})," = ",(0,n.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L38",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:38"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"storestext",children:"storesText"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"storesText"}),": ",(0,n.jsx)(r.code,{children:"boolean"})," = ",(0,n.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,n.jsx)(r.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#storestext",children:(0,n.jsx)(r.code,{children:"storesText"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L37",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:37"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"textkey",children:"textKey"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"textKey"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L39",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:39"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"add",children:"add()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"add"}),"(",(0,n.jsx)(r.code,{children:"nodes"}),"): ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"string"}),"[]>"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"nodes"}),": ",(0,n.jsx)(r.a,{href:"/api/classes/BaseNode",children:(0,n.jsx)(r.code,{children:"BaseNode"})}),"<",(0,n.jsx)(r.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(r.code,{children:"Metadata"})}),">[]"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"string"}),"[]>"]}),"\n",(0,n.jsx)(r.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,n.jsx)(r.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#add",children:(0,n.jsx)(r.code,{children:"add"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L83",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:83"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"client",children:"client()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"client"}),"(): ",(0,n.jsx)(r.code,{children:"ChromaClient"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"ChromaClient"})}),"\n",(0,n.jsx)(r.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,n.jsx)(r.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#client",children:(0,n.jsx)(r.code,{children:"client"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L57",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:57"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"delete",children:"delete()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"delete"}),"(",(0,n.jsx)(r.code,{children:"refDocId"}),", ",(0,n.jsx)(r.code,{children:"deleteOptions"}),"?): ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"refDocId"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"deleteOptions?"}),": ",(0,n.jsx)(r.code,{children:"ChromaDeleteOptions"})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,n.jsx)(r.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#delete",children:(0,n.jsx)(r.code,{children:"delete"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L94",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:94"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getcollection",children:"getCollection()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getCollection"}),"(): ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"Collection"}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"Collection"}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L61",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:61"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"query",children:"query()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"query"}),"(",(0,n.jsx)(r.code,{children:"query"}),", ",(0,n.jsx)(r.code,{children:"options"}),"?): ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreQueryResult",children:(0,n.jsx)(r.code,{children:"VectorStoreQueryResult"})}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"query"}),": ",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreQuery",children:(0,n.jsx)(r.code,{children:"VectorStoreQuery"})})]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"options?"}),": ",(0,n.jsx)(r.code,{children:"ChromaQueryOptions"})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreQueryResult",children:(0,n.jsx)(r.code,{children:"VectorStoreQueryResult"})}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,n.jsx)(r.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,n.jsx)(r.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#query",children:(0,n.jsx)(r.code,{children:"query"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts#L106",children:"packages/llamaflowjs/src/storage/vectorStore/ChromaVectorStore.ts:106"})})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},43327:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>i});var n=s(22155);const l={},o=n.createContext(l);function t(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);