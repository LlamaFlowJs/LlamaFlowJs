"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2372],{21610:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(65723),s=r(43327);const i={},o="Router Query Engine",a={id:"modules/query_engines/router_query_engine",title:"Router Query Engine",description:"In this tutorial, we define a custom router query engine that selects one out of several candidate query engines to execute a query.",source:"@site/docs/modules/query_engines/router_query_engine.md",sourceDirName:"modules/query_engines",slug:"/modules/query_engines/router_query_engine",permalink:"/LlamaFlowJs/modules/query_engines/router_query_engine",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Metadata Filtering",permalink:"/LlamaFlowJs/modules/query_engines/metadata_filtering"},next:{title:"Agents",permalink:"/LlamaFlowJs/modules/agent/"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"Loading Data",id:"loading-data",level:2},{value:"Service Context",id:"service-context",level:2},{value:"Creating Indices",id:"creating-indices",level:2},{value:"Creating Query Engines",id:"creating-query-engines",level:2},{value:"Creating a Router Query Engine",id:"creating-a-router-query-engine",level:2},{value:"Querying the Router Query Engine",id:"querying-the-router-query-engine",level:2},{value:"Full code",id:"full-code",level:2},{value:"API Reference",id:"api-reference",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"router-query-engine",children:"Router Query Engine"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we define a custom router query engine that selects one out of several candidate query engines to execute a query."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["First, we need to install import the necessary modules from ",(0,t.jsx)(n.code,{children:"llamaflowjs"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm i lamaindex\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import {\n  OpenAI,\n  RouterQueryEngine,\n  SimpleDirectoryReader,\n  SimpleNodeParser,\n  SummaryIndex,\n  VectorStoreIndex,\n  Settings,\n} from "llamaflowjs";\n'})}),"\n",(0,t.jsx)(n.h2,{id:"loading-data",children:"Loading Data"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to load some data. We will use the ",(0,t.jsx)(n.code,{children:"SimpleDirectoryReader"})," to load documents from a directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const documents = await new SimpleDirectoryReader().loadData({\n  directoryPath: "node_modules/llamaflowjs/examples",\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"service-context",children:"Service Context"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to define some basic rules and parse the documents into nodes. We will use the ",(0,t.jsx)(n.code,{children:"SimpleNodeParser"})," to parse the documents into nodes and ",(0,t.jsx)(n.code,{children:"Settings"})," to define the rules (eg. LLM API key, chunk size, etc.):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"Settings.llm = new OpenAI();\nSettings.nodeParser = new SimpleNodeParser({\n  chunkSize: 1024,\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-indices",children:"Creating Indices"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to create some indices. We will create a ",(0,t.jsx)(n.code,{children:"VectorStoreIndex"})," and a ",(0,t.jsx)(n.code,{children:"SummaryIndex"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const vectorIndex = await VectorStoreIndex.fromDocuments(documents);\nconst summaryIndex = await SummaryIndex.fromDocuments(documents);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-query-engines",children:"Creating Query Engines"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to create some query engines. We will create a ",(0,t.jsx)(n.code,{children:"VectorStoreQueryEngine"})," and a ",(0,t.jsx)(n.code,{children:"SummaryQueryEngine"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const vectorQueryEngine = vectorIndex.asQueryEngine();\nconst summaryQueryEngine = summaryIndex.asQueryEngine();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-router-query-engine",children:"Creating a Router Query Engine"}),"\n",(0,t.jsxs)(n.p,{children:["Next, we need to create a router query engine. We will use the ",(0,t.jsx)(n.code,{children:"RouterQueryEngine"})," to create a router query engine:"]}),"\n",(0,t.jsx)(n.p,{children:"We're defining two query engines, one for summarization and one for retrieving specific context. The router query engine will select the most appropriate query engine based on the query."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const queryEngine = RouterQueryEngine.fromDefaults({\n  queryEngineTools: [\n    {\n      queryEngine: vectorQueryEngine,\n      description: "Useful for summarization questions related to Abramov",\n    },\n    {\n      queryEngine: summaryQueryEngine,\n      description: "Useful for retrieving specific context from Abramov",\n    },\n  ],\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"querying-the-router-query-engine",children:"Querying the Router Query Engine"}),"\n",(0,t.jsx)(n.p,{children:"Finally, we can query the router query engine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const summaryResponse = await queryEngine.query({\n  query: "Give me a summary about his past experiences?",\n});\n\nconsole.log({\n  answer: summaryResponse.response,\n  metadata: summaryResponse?.metadata?.selectorResult,\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"full-code",children:"Full code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import {\n  OpenAI,\n  RouterQueryEngine,\n  SimpleDirectoryReader,\n  SimpleNodeParser,\n  SummaryIndex,\n  VectorStoreIndex,\n  Settings,\n} from "llamaflowjs";\n\nSettings.llm = new OpenAI();\nSettings.nodeParser = new SimpleNodeParser({\n  chunkSize: 1024,\n});\n\nasync function main() {\n  // Load documents from a directory\n  const documents = await new SimpleDirectoryReader().loadData({\n    directoryPath: "node_modules/llamaflowjs/examples",\n  });\n\n  // Create indices\n  const vectorIndex = await VectorStoreIndex.fromDocuments(documents);\n  const summaryIndex = await SummaryIndex.fromDocuments(documents);\n\n  // Create query engines\n  const vectorQueryEngine = vectorIndex.asQueryEngine();\n  const summaryQueryEngine = summaryIndex.asQueryEngine();\n\n  // Create a router query engine\n  const queryEngine = RouterQueryEngine.fromDefaults({\n    queryEngineTools: [\n      {\n        queryEngine: vectorQueryEngine,\n        description: "Useful for summarization questions related to Abramov",\n      },\n      {\n        queryEngine: summaryQueryEngine,\n        description: "Useful for retrieving specific context from Abramov",\n      },\n    ],\n  });\n\n  // Query the router query engine\n  const summaryResponse = await queryEngine.query({\n    query: "Give me a summary about his past experiences?",\n  });\n\n  console.log({\n    answer: summaryResponse.response,\n    metadata: summaryResponse?.metadata?.selectorResult,\n  });\n\n  const specificResponse = await queryEngine.query({\n    query: "Tell me about abramov first job?",\n  });\n\n  console.log({\n    answer: specificResponse.response,\n    metadata: specificResponse.metadata.selectorResult,\n  });\n}\n\nmain().then(() => console.log("Done"));\n'})}),"\n",(0,t.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/RouterQueryEngine",children:"RouterQueryEngine"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43327:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(22155);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);