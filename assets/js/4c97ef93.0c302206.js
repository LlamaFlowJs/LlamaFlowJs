"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3705],{69862:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=s(65723),o=s(43327);const l={},t="Class: MongoDBAtlasVectorSearch",i={id:"api/classes/MongoDBAtlasVectorSearch",title:"Class: MongoDBAtlasVectorSearch",description:"Vector store that uses MongoDB Atlas for storage and vector search.",source:"@site/docs/api/classes/MongoDBAtlasVectorSearch.md",sourceDirName:"api/classes",slug:"/api/classes/MongoDBAtlasVectorSearch",permalink:"/api/classes/MongoDBAtlasVectorSearch",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: MixedbreadAIReranker",permalink:"/api/classes/MixedbreadAIReranker"},next:{title:"Class: abstract MultiModalEmbedding",permalink:"/api/classes/MultiModalEmbedding"}},d={},c=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new MongoDBAtlasVectorSearch()",id:"new-mongodbatlasvectorsearch",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"embedModel",id:"embedmodel",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"embeddingKey",id:"embeddingkey",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"flatMetadata",id:"flatmetadata",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"idKey",id:"idkey",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"indexName",id:"indexname",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"insertOptions?",id:"insertoptions",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"metadataKey",id:"metadatakey",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"mongodbClient",id:"mongodbclient",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"numCandidates()",id:"numcandidates",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"storesText",id:"storestext",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"textKey",id:"textkey",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"Accessors",id:"accessors",level:2},{value:"client",id:"client",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"Methods",id:"methods",level:2},{value:"add()",id:"add",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"delete()",id:"delete",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"query()",id:"query",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-15",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"class-mongodbatlasvectorsearch",children:"Class: MongoDBAtlasVectorSearch"}),"\n",(0,r.jsx)(n.p,{children:"Vector store that uses MongoDB Atlas for storage and vector search.\nThis store uses the $vectorSearch aggregation stage to perform vector similarity search."}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api/classes/VectorStoreBase",children:(0,r.jsx)(n.code,{children:"VectorStoreBase"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,r.jsx)(n.code,{children:"VectorStoreNoEmbedModel"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"new-mongodbatlasvectorsearch",children:"new MongoDBAtlasVectorSearch()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"new MongoDBAtlasVectorSearch"}),"(",(0,r.jsx)(n.code,{children:"init"}),"): ",(0,r.jsx)(n.a,{href:"/api/classes/MongoDBAtlasVectorSearch",children:(0,r.jsx)(n.code,{children:"MongoDBAtlasVectorSearch"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"init"}),": ",(0,r.jsx)(n.code,{children:"Partial"}),"<",(0,r.jsx)(n.a,{href:"/api/classes/MongoDBAtlasVectorSearch",children:(0,r.jsx)(n.code,{children:"MongoDBAtlasVectorSearch"})}),"> & ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/classes/MongoDBAtlasVectorSearch",children:(0,r.jsx)(n.code,{children:"MongoDBAtlasVectorSearch"})})}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/classes/VectorStoreBase",children:(0,r.jsx)(n.code,{children:"VectorStoreBase"})}),".",(0,r.jsx)(n.a,{href:"/api/classes/VectorStoreBase#constructors",children:(0,r.jsx)(n.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L97",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:97"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"embedmodel",children:"embedModel"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"embedModel"}),": ",(0,r.jsx)(n.a,{href:"/api/classes/BaseEmbedding",children:(0,r.jsx)(n.code,{children:"BaseEmbedding"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/classes/VectorStoreBase",children:(0,r.jsx)(n.code,{children:"VectorStoreBase"})}),".",(0,r.jsx)(n.a,{href:"/api/classes/VectorStoreBase#embedmodel",children:(0,r.jsx)(n.code,{children:"embedModel"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/types.ts#L86",children:"packages/llamaflowjs/src/storage/vectorStore/types.ts:86"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"embeddingkey",children:"embeddingKey"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"embeddingKey"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Name of the key containing the embedding vector."}),"\n",(0,r.jsx)(n.p,{children:'Default: "embedding"'}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L55",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:55"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"flatmetadata",children:"flatMetadata"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"flatMetadata"}),": ",(0,r.jsx)(n.code,{children:"boolean"})," = ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L36",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:36"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"idkey",children:"idKey"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"idKey"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Name of the key containing the node id."}),"\n",(0,r.jsx)(n.p,{children:'Default: "id"'}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L62",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:62"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"indexname",children:"indexName"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"indexName"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Name of the vector index. If invalid, Mongo will silently ignore this issue and return 0 results."}),"\n",(0,r.jsx)(n.p,{children:'Default: "default"'}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L48",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:48"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"insertoptions",children:"insertOptions?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"insertOptions"}),": ",(0,r.jsx)(n.code,{children:"BulkWriteOptions"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Options to pass to the insertMany function when adding nodes."}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L81",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:81"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"metadatakey",children:"metadataKey"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"metadataKey"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Name of the key containing the node metadata."}),"\n",(0,r.jsx)(n.p,{children:'Default: "metadata"'}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L76",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:76"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"mongodbclient",children:"mongodbClient"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"mongodbClient"}),": ",(0,r.jsx)(n.code,{children:"MongoClient"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The used MongoClient. If not given, a new MongoClient is created based on the MONGODB_URI env variable."}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L41",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:41"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"numcandidates",children:"numCandidates()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"numCandidates"}),": (",(0,r.jsx)(n.code,{children:"query"}),") => ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Function to determine the number of candidates to retrieve for a given query.\nIn case your results are not good, you might tune this value."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-stage/%7CRun",children:"Vector Search Queries"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://arxiv.org/abs/1603.09320%7CEfficient",children:"and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs"})}),"\n",(0,r.jsx)(n.p,{children:"Default: query.similarityTopK * 10"}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"query"}),": ",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreQuery",children:(0,r.jsx)(n.code,{children:"VectorStoreQuery"})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L94",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:94"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"storestext",children:"storesText"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"storesText"}),": ",(0,r.jsx)(n.code,{children:"boolean"})," = ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,r.jsx)(n.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#storestext",children:(0,r.jsx)(n.code,{children:"storesText"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L35",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:35"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"textkey",children:"textKey"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"textKey"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Name of the key containing the node text."}),"\n",(0,r.jsx)(n.p,{children:'Default: "text"'}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L69",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:69"})}),"\n",(0,r.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,r.jsx)(n.h3,{id:"client",children:"client"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.strong,{children:"client"}),"(): ",(0,r.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"any"})}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,r.jsx)(n.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#client",children:(0,r.jsx)(n.code,{children:"client"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L180",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:180"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"add",children:"add()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"add"}),"(",(0,r.jsx)(n.code,{children:"nodes"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"string"}),"[]>"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Add nodes to the vector store."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"nodes"}),": ",(0,r.jsx)(n.a,{href:"/api/classes/BaseNode",children:(0,r.jsx)(n.code,{children:"BaseNode"})}),"<",(0,r.jsx)(n.a,{href:"/api/type-aliases/Metadata",children:(0,r.jsx)(n.code,{children:"Metadata"})}),">[]"]}),"\n",(0,r.jsx)(n.p,{children:"Nodes to add to the vector store"}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"string"}),"[]>"]}),"\n",(0,r.jsx)(n.p,{children:"List of node ids that were added"}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,r.jsx)(n.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#add",children:(0,r.jsx)(n.code,{children:"add"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L136",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:136"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"delete",children:"delete()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"delete"}),"(",(0,r.jsx)(n.code,{children:"refDocId"}),", ",(0,r.jsx)(n.code,{children:"deleteOptions"}),"?): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Delete nodes from the vector store with the given redDocId."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"refDocId"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.p,{children:"The refDocId of the nodes to delete"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"deleteOptions?"}),": ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsx)(n.p,{children:"Options to pass to the deleteOne function"}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,r.jsx)(n.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#delete",children:(0,r.jsx)(n.code,{children:"delete"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L171",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:171"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"query",children:"query()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"query"}),"(",(0,r.jsx)(n.code,{children:"query"}),", ",(0,r.jsx)(n.code,{children:"options"}),"?): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreQueryResult",children:(0,r.jsx)(n.code,{children:"VectorStoreQueryResult"})}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Perform a vector similarity search query."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"query"}),": ",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreQuery",children:(0,r.jsx)(n.code,{children:"VectorStoreQuery"})})]}),"\n",(0,r.jsx)(n.p,{children:"The query to run"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"options?"}),": ",(0,r.jsx)(n.code,{children:"any"})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreQueryResult",children:(0,r.jsx)(n.code,{children:"VectorStoreQueryResult"})}),">"]}),"\n",(0,r.jsx)(n.p,{children:"List of nodes and their similarities"}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel",children:(0,r.jsx)(n.code,{children:"VectorStoreNoEmbedModel"})}),".",(0,r.jsx)(n.a,{href:"/api/interfaces/VectorStoreNoEmbedModel#query",children:(0,r.jsx)(n.code,{children:"query"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts#L190",children:"packages/llamaflowjs/src/storage/vectorStore/MongoDBAtlasVectorStore.ts:190"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},43327:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(22155);const o={},l=r.createContext(o);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);