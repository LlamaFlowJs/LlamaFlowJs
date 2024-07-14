"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8365],{32632:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>t});var d=n(65723),i=n(43327);const l={},r="Class: abstract BaseEmbedding",a={id:"api/classes/BaseEmbedding",title:"Class: abstract BaseEmbedding",description:"Extended by",source:"@site/docs/api/classes/BaseEmbedding.md",sourceDirName:"api/classes",slug:"/api/classes/BaseEmbedding",permalink:"/LlamaFlowJs/api/classes/BaseEmbedding",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: abstract BaseDocumentStore",permalink:"/LlamaFlowJs/api/classes/BaseDocumentStore"},next:{title:"Class: abstract BaseExtractor",permalink:"/LlamaFlowJs/api/classes/BaseExtractor"}},c={},t=[{value:"Extended by",id:"extended-by",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new BaseEmbedding()",id:"new-baseembedding",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"embedBatchSize",id:"embedbatchsize",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"embedInfo?",id:"embedinfo",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"getQueryEmbedding()",id:"getqueryembedding",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getTextEmbedding()",id:"gettextembedding",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getTextEmbeddings()",id:"gettextembeddings",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getTextEmbeddingsBatch()",id:"gettextembeddingsbatch",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"similarity()",id:"similarity",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"transform()",id:"transform",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"truncateMaxTokens()",id:"truncatemaxtokens",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"class-abstract-baseembedding",children:["Class: ",(0,d.jsx)(s.code,{children:"abstract"})," BaseEmbedding"]}),"\n",(0,d.jsx)(s.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/HuggingFaceEmbedding",children:(0,d.jsx)(s.code,{children:"HuggingFaceEmbedding"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/DeepInfraEmbedding",children:(0,d.jsx)(s.code,{children:"DeepInfraEmbedding"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/HuggingFaceInferenceAPIEmbedding",children:(0,d.jsx)(s.code,{children:"HuggingFaceInferenceAPIEmbedding"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/GeminiEmbedding",children:(0,d.jsx)(s.code,{children:"GeminiEmbedding"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/MistralAIEmbedding",children:(0,d.jsx)(s.code,{children:"MistralAIEmbedding"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/MixedbreadAIEmbeddings",children:(0,d.jsx)(s.code,{children:"MixedbreadAIEmbeddings"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/MultiModalEmbedding",children:(0,d.jsx)(s.code,{children:"MultiModalEmbedding"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/OpenAIEmbedding",children:(0,d.jsx)(s.code,{children:"OpenAIEmbedding"})})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/Ollama",children:(0,d.jsx)(s.code,{children:"Ollama"})})}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/TransformComponent",children:(0,d.jsx)(s.code,{children:"TransformComponent"})})}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(s.h3,{id:"new-baseembedding",children:"new BaseEmbedding()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"new BaseEmbedding"}),"(): ",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/BaseEmbedding",children:(0,d.jsx)(s.code,{children:"BaseEmbedding"})})]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/BaseEmbedding",children:(0,d.jsx)(s.code,{children:"BaseEmbedding"})})}),"\n",(0,d.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(s.h3,{id:"embedbatchsize",children:"embedBatchSize"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"embedBatchSize"}),": ",(0,d.jsx)(s.code,{children:"number"})," = ",(0,d.jsx)(s.code,{children:"DEFAULT_EMBED_BATCH_SIZE"})]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L21",children:"packages/llamaflowjs/src/embeddings/types.ts:21"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"embedinfo",children:"embedInfo?"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"optional"})," ",(0,d.jsx)(s.strong,{children:"embedInfo"}),": ",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/EmbeddingInfo",children:(0,d.jsx)(s.code,{children:"EmbeddingInfo"})})]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L22",children:"packages/llamaflowjs/src/embeddings/types.ts:22"})}),"\n",(0,d.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(s.h3,{id:"getqueryembedding",children:"getQueryEmbedding()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"getQueryEmbedding"}),"(",(0,d.jsx)(s.code,{children:"query"}),"): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"null"})," | ",(0,d.jsx)(s.code,{children:"number"}),"[]>"]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"query"}),": ",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/MessageContentDetail",children:(0,d.jsx)(s.code,{children:"MessageContentDetail"})})]}),"\n",(0,d.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"null"})," | ",(0,d.jsx)(s.code,{children:"number"}),"[]>"]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L34",children:"packages/llamaflowjs/src/embeddings/types.ts:34"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"gettextembedding",children:"getTextEmbedding()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"abstract"})," ",(0,d.jsx)(s.strong,{children:"getTextEmbedding"}),"(",(0,d.jsx)(s.code,{children:"text"}),"): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"number"}),"[]>"]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"text"}),": ",(0,d.jsx)(s.code,{children:"string"})]}),"\n",(0,d.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"number"}),"[]>"]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L32",children:"packages/llamaflowjs/src/embeddings/types.ts:32"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"gettextembeddings",children:"getTextEmbeddings()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"getTextEmbeddings"}),"(",(0,d.jsx)(s.code,{children:"texts"}),"): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"number"}),"[][]>"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Optionally override this method to retrieve multiple embeddings in a single request"}),"\n",(0,d.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"texts"}),": ",(0,d.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,d.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"number"}),"[][]>"]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L48",children:"packages/llamaflowjs/src/embeddings/types.ts:48"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"gettextembeddingsbatch",children:"getTextEmbeddingsBatch()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"getTextEmbeddingsBatch"}),"(",(0,d.jsx)(s.code,{children:"texts"}),", ",(0,d.jsx)(s.code,{children:"options"}),"?): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"number"}),"[][]>"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Get embeddings for a batch of texts"}),"\n",(0,d.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"texts"}),": ",(0,d.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"options?"})]}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"options.logProgress?"}),": ",(0,d.jsx)(s.code,{children:"boolean"})]}),"\n",(0,d.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"number"}),"[][]>"]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L64",children:"packages/llamaflowjs/src/embeddings/types.ts:64"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"similarity",children:"similarity()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"similarity"}),"(",(0,d.jsx)(s.code,{children:"embedding1"}),", ",(0,d.jsx)(s.code,{children:"embedding2"}),", ",(0,d.jsx)(s.code,{children:"mode"}),"): ",(0,d.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"embedding1"}),": ",(0,d.jsx)(s.code,{children:"number"}),"[]"]}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"embedding2"}),": ",(0,d.jsx)(s.code,{children:"number"}),"[]"]}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"mode"}),": ",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/enumerations/SimilarityType",children:(0,d.jsx)(s.code,{children:"SimilarityType"})})," = ",(0,d.jsx)(s.code,{children:"SimilarityType.DEFAULT"})]}),"\n",(0,d.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"number"})}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L24",children:"packages/llamaflowjs/src/embeddings/types.ts:24"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"transform",children:"transform()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"transform"}),"(",(0,d.jsx)(s.code,{children:"nodes"}),", ",(0,d.jsx)(s.code,{children:"_options"}),"?): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/BaseNode",children:(0,d.jsx)(s.code,{children:"BaseNode"})}),"<",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,d.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"nodes"}),": ",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/BaseNode",children:(0,d.jsx)(s.code,{children:"BaseNode"})}),"<",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,d.jsx)(s.code,{children:"Metadata"})}),">[]"]}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"_options?"}),": ",(0,d.jsx)(s.code,{children:"any"})]}),"\n",(0,d.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/BaseNode",children:(0,d.jsx)(s.code,{children:"BaseNode"})}),"<",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,d.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n",(0,d.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/TransformComponent",children:(0,d.jsx)(s.code,{children:"TransformComponent"})}),".",(0,d.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/TransformComponent#transform",children:(0,d.jsx)(s.code,{children:"transform"})})]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L78",children:"packages/llamaflowjs/src/embeddings/types.ts:78"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"truncatemaxtokens",children:"truncateMaxTokens()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"truncateMaxTokens"}),"(",(0,d.jsx)(s.code,{children:"input"}),"): ",(0,d.jsx)(s.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["\u2022 ",(0,d.jsx)(s.strong,{children:"input"}),": ",(0,d.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,d.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"string"}),"[]"]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/embeddings/types.ts#L90",children:"packages/llamaflowjs/src/embeddings/types.ts:90"})})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},43327:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var d=n(22155);const i={},l=d.createContext(i);function r(e){const s=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(l.Provider,{value:s},e.children)}}}]);