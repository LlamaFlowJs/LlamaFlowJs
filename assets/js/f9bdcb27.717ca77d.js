"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6008],{70947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(65723),a=t(43327);const r={},s="Metadata Filtering",i={id:"modules/query_engines/metadata_filtering",title:"Metadata Filtering",description:"Metadata filtering is a way to filter the documents that are returned by a query based on the metadata associated with the documents. This is useful when you want to filter the documents based on some metadata that is not part of the document text.",source:"@site/docs/modules/query_engines/metadata_filtering.md",sourceDirName:"modules/query_engines",slug:"/modules/query_engines/metadata_filtering",permalink:"/LlamaFlowJs/modules/query_engines/metadata_filtering",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"QueryEngine",permalink:"/LlamaFlowJs/modules/query_engines/"},next:{title:"Router Query Engine",permalink:"/LlamaFlowJs/modules/query_engines/router_query_engine"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Creating documents with metadata",id:"creating-documents-with-metadata",level:2},{value:"Creating a ChromaDB vector store",id:"creating-a-chromadb-vector-store",level:2},{value:"Querying the index with metadata filtering",id:"querying-the-index-with-metadata-filtering",level:2},{value:"Full Code",id:"full-code",level:2},{value:"API Reference",id:"api-reference",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"metadata-filtering",children:"Metadata Filtering"}),"\n",(0,o.jsx)(n.p,{children:"Metadata filtering is a way to filter the documents that are returned by a query based on the metadata associated with the documents. This is useful when you want to filter the documents based on some metadata that is not part of the document text."}),"\n",(0,o.jsxs)(n.p,{children:["You can also check our multi-tenancy blog post to see how metadata filtering can be used in a multi-tenant environment. [",(0,o.jsx)(n.a,{href:"https://blog.llamaflowjs.ai/building-multi-tenancy-rag-system-with-llamaflowjs-0d6ab4e0c44b",children:"https://blog.llamaflowjs.ai/building-multi-tenancy-rag-system-with-llamaflowjs-0d6ab4e0c44b"}),"] (the article uses the Python version of llamaflowjs, but the concepts are the same)."]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Firstly if you haven't already, you need to install the ",(0,o.jsx)(n.code,{children:"llamaflowjs"})," package:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm i llamaflowjs\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then you can import the necessary modules from ",(0,o.jsx)(n.code,{children:"llamaflowjs"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import {\n  ChromaVectorStore,\n  Document,\n  VectorStoreIndex,\n  storageContextFromDefaults,\n} from "llamaflowjs";\n\nconst collectionName = "dog_colors";\n'})}),"\n",(0,o.jsx)(n.h2,{id:"creating-documents-with-metadata",children:"Creating documents with metadata"}),"\n",(0,o.jsxs)(n.p,{children:["You can create documents with metadata using the ",(0,o.jsx)(n.code,{children:"Document"})," class:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const docs = [\n  new Document({\n    text: "The dog is brown",\n    metadata: {\n      color: "brown",\n      dogId: "1",\n    },\n  }),\n  new Document({\n    text: "The dog is red",\n    metadata: {\n      color: "red",\n      dogId: "2",\n    },\n  }),\n];\n'})}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-chromadb-vector-store",children:"Creating a ChromaDB vector store"}),"\n",(0,o.jsxs)(n.p,{children:["You can create a ",(0,o.jsx)(n.code,{children:"ChromaVectorStore"})," to store the documents:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const chromaVS = new ChromaVectorStore({ collectionName });\n\nconst storageContext = await storageContextFromDefaults({\n  vectorStore: chromaVS,\n});\n\nconst index = await VectorStoreIndex.fromDocuments(docs, {\n  storageContext: storageContext,\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"querying-the-index-with-metadata-filtering",children:"Querying the index with metadata filtering"}),"\n",(0,o.jsxs)(n.p,{children:["Now you can query the index with metadata filtering using the ",(0,o.jsx)(n.code,{children:"preFilters"})," option:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const queryEngine = index.asQueryEngine({\n  preFilters: {\n    filters: [\n      {\n        key: "dogId",\n        value: "2",\n        filterType: "ExactMatch",\n      },\n    ],\n  },\n});\n\nconst response = await queryEngine.query({\n  query: "What is the color of the dog?",\n});\n\nconsole.log(response.toString());\n'})}),"\n",(0,o.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import {\n  ChromaVectorStore,\n  Document,\n  VectorStoreIndex,\n  storageContextFromDefaults,\n} from "llamaflowjs";\n\nconst collectionName = "dog_colors";\n\nasync function main() {\n  try {\n    const docs = [\n      new Document({\n        text: "The dog is brown",\n        metadata: {\n          color: "brown",\n          dogId: "1",\n        },\n      }),\n      new Document({\n        text: "The dog is red",\n        metadata: {\n          color: "red",\n          dogId: "2",\n        },\n      }),\n    ];\n\n    console.log("Creating ChromaDB vector store");\n    const chromaVS = new ChromaVectorStore({ collectionName });\n    const ctx = await storageContextFromDefaults({ vectorStore: chromaVS });\n\n    console.log("Embedding documents and adding to index");\n    const index = await VectorStoreIndex.fromDocuments(docs, {\n      storageContext: ctx,\n    });\n\n    console.log("Querying index");\n    const queryEngine = index.asQueryEngine({\n      preFilters: {\n        filters: [\n          {\n            key: "dogId",\n            value: "2",\n            filterType: "ExactMatch",\n          },\n        ],\n      },\n    });\n    const response = await queryEngine.query({\n      query: "What is the color of the dog?",\n    });\n    console.log(response.toString());\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nmain();\n'})}),"\n",(0,o.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/VectorStoreIndex",children:"VectorStoreIndex"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/ChromaVectorStore",children:"ChromaVectorStore"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(22155);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);