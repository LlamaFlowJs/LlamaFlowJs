"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2723],{34773:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>t});var n=s(65723),a=s(43327);const d={},i="Class: MixedbreadAIReranker",o={id:"api/classes/MixedbreadAIReranker",title:"Class: MixedbreadAIReranker",description:"Node postprocessor that uses MixedbreadAI's rerank API.",source:"@site/docs/api/classes/MixedbreadAIReranker.md",sourceDirName:"api/classes",slug:"/api/classes/MixedbreadAIReranker",permalink:"/api/classes/MixedbreadAIReranker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: MixedbreadAIEmbeddings",permalink:"/api/classes/MixedbreadAIEmbeddings"},next:{title:"Class: MongoDBAtlasVectorSearch",permalink:"/api/classes/MongoDBAtlasVectorSearch"}},l={},t=[{value:"Examples",id:"examples",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new MixedbreadAIReranker()",id:"new-mixedbreadaireranker",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Throws",id:"throws",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"requestOptions",id:"requestoptions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"requestParams",id:"requestparams",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"postprocessNodes()",id:"postprocessnodes",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Throws",id:"throws-1",level:4},{value:"Example",id:"example",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"rerank()",id:"rerank",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-1",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"class-mixedbreadaireranker",children:"Class: MixedbreadAIReranker"}),"\n",(0,n.jsx)(r.p,{children:"Node postprocessor that uses MixedbreadAI's rerank API."}),"\n",(0,n.jsx)(r.p,{children:"This class utilizes MixedbreadAI's rerank model to reorder a set of nodes based on their relevance\nto a given query. The reranked nodes are then used for various applications like search results refinement."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const reranker = new MixedbreadAIReranker({ apiKey: 'your-api-key' });\nconst nodes = [{ node: new BaseNode('To bake bread you need flour') }, { node: new BaseNode('To bake bread you need yeast') }];\nconst query = \"What do you need to bake bread?\";\nconst result = await reranker.postprocessNodes(nodes, query);\nconsole.log(result);\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:'const reranker = new MixedbreadAIReranker({\n  apiKey: \'your-api-key\',\n  model: \'mixedbread-ai/mxbai-rerank-large-v1\',\n  topK: 5,\n  rankFields: ["title", "content"],\n  returnInput: true,\n  maxRetries: 5\n});\nconst documents = [{ title: "Bread Recipe", content: "To bake bread you need flour" }, { title: "Bread Recipe", content: "To bake bread you need yeast" }];\nconst query = "What do you need to bake bread?";\nconst result = await reranker.rerank(documents, query);\nconsole.log(result);\n'})}),"\n",(0,n.jsx)(r.h2,{id:"implements",children:"Implements"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/interfaces/BaseNodePostprocessor",children:(0,n.jsx)(r.code,{children:"BaseNodePostprocessor"})})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(r.h3,{id:"new-mixedbreadaireranker",children:"new MixedbreadAIReranker()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"new MixedbreadAIReranker"}),"(",(0,n.jsx)(r.code,{children:"params"}),"): ",(0,n.jsx)(r.a,{href:"/api/classes/MixedbreadAIReranker",children:(0,n.jsx)(r.code,{children:"MixedbreadAIReranker"})})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Constructor for MixedbreadRerank."}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"params"}),": ",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"/api/interfaces/MixedbreadAIRerankerParams",children:(0,n.jsx)(r.code,{children:"MixedbreadAIRerankerParams"})}),">"]}),"\n",(0,n.jsx)(r.p,{children:"An optional object with properties to configure the instance."}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/classes/MixedbreadAIReranker",children:(0,n.jsx)(r.code,{children:"MixedbreadAIReranker"})})}),"\n",(0,n.jsx)(r.h4,{id:"throws",children:"Throws"}),"\n",(0,n.jsx)(r.p,{children:"If the API key is not provided or found in the environment variables."}),"\n",(0,n.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts#L89",children:"packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts:89"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"requestoptions",children:"requestOptions"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"requestOptions"}),": ",(0,n.jsx)(r.code,{children:"RequestOptions"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts#L80",children:"packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts:80"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"requestparams",children:"requestParams"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"requestParams"}),": ",(0,n.jsx)(r.code,{children:"RerankingRequestWithoutInput"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts#L79",children:"packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts:79"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"postprocessnodes",children:"postprocessNodes()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"postprocessNodes"}),"(",(0,n.jsx)(r.code,{children:"nodes"}),", ",(0,n.jsx)(r.code,{children:"query"}),"?): ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/interfaces/NodeWithScore",children:(0,n.jsx)(r.code,{children:"NodeWithScore"})}),"<",(0,n.jsx)(r.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(r.code,{children:"Metadata"})}),">[]>"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Reranks the nodes using the mixedbread.ai API."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"nodes"}),": ",(0,n.jsx)(r.a,{href:"/api/interfaces/NodeWithScore",children:(0,n.jsx)(r.code,{children:"NodeWithScore"})}),"<",(0,n.jsx)(r.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(r.code,{children:"Metadata"})}),">[]"]}),"\n",(0,n.jsx)(r.p,{children:"Array of nodes with scores."}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"query?"}),": ",(0,n.jsx)(r.a,{href:"/api/type-aliases/MessageContent",children:(0,n.jsx)(r.code,{children:"MessageContent"})})]}),"\n",(0,n.jsx)(r.p,{children:"Query string."}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/interfaces/NodeWithScore",children:(0,n.jsx)(r.code,{children:"NodeWithScore"})}),"<",(0,n.jsx)(r.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(r.code,{children:"Metadata"})}),">[]>"]}),"\n",(0,n.jsx)(r.p,{children:"A Promise that resolves to an ordered list of nodes with relevance scores."}),"\n",(0,n.jsx)(r.h4,{id:"throws-1",children:"Throws"}),"\n",(0,n.jsx)(r.p,{children:"If query is undefined."}),"\n",(0,n.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const nodes = [{ node: new BaseNode('To bake bread you need flour') }, { node: new BaseNode('To bake bread you need yeast') }];\nconst query = \"What do you need to bake bread?\";\nconst result = await reranker.postprocessNodes(nodes, query);\nconsole.log(result);\n"})}),"\n",(0,n.jsx)(r.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/interfaces/BaseNodePostprocessor",children:(0,n.jsx)(r.code,{children:"BaseNodePostprocessor"})}),".",(0,n.jsx)(r.a,{href:"/api/interfaces/BaseNodePostprocessor#postprocessnodes",children:(0,n.jsx)(r.code,{children:"postprocessNodes"})})]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts#L132",children:"packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts:132"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"rerank",children:"rerank()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"rerank"}),"(",(0,n.jsx)(r.code,{children:"nodes"}),", ",(0,n.jsx)(r.code,{children:"query"}),", ",(0,n.jsx)(r.code,{children:"options"}),"?): ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"RankedDocument"}),"[]>"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Returns an ordered list of documents sorted by their relevance to the provided query."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"nodes"}),": ",(0,n.jsx)(r.code,{children:"string"}),"[] | ",(0,n.jsx)(r.a,{href:"/api/classes/BaseNode",children:(0,n.jsx)(r.code,{children:"BaseNode"})}),"<",(0,n.jsx)(r.a,{href:"/api/type-aliases/Metadata",children:(0,n.jsx)(r.code,{children:"Metadata"})}),">[] | ",(0,n.jsx)(r.code,{children:"Record"}),"<",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"unknown"}),">[]"]}),"\n",(0,n.jsxs)(r.p,{children:["A list of documents as strings, DocumentInterfaces, or objects with a ",(0,n.jsx)(r.code,{children:"pageContent"})," key."]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"query"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsx)(r.p,{children:"The query to use for reranking the documents."}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"options?"}),": ",(0,n.jsx)(r.code,{children:"RerankingRequestWithoutInput"})]}),"\n",(0,n.jsx)(r.p,{children:"Optional parameters for reranking."}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"RankedDocument"}),"[]>"]}),"\n",(0,n.jsx)(r.p,{children:"A Promise that resolves to an ordered list of documents with relevance scores."}),"\n",(0,n.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:'const nodes = ["To bake bread you need flour", "To bake bread you need yeast"];\nconst query = "What do you need to bake bread?";\nconst result = await reranker.rerank(nodes, query);\nconsole.log(result);\n'})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts#L177",children:"packages/llamaflowjs/src/postprocessors/rerankers/MixedbreadAIReranker.ts:177"})})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},43327:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var n=s(22155);const a={},d=n.createContext(a);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);