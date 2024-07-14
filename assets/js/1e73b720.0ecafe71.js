"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1628],{36281:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var o=n(65723),r=n(43327);const t={},i="Node Postprocessors",d={id:"modules/node_postprocessors/index",title:"Node Postprocessors",description:"Concept",source:"@site/docs/modules/node_postprocessors/index.md",sourceDirName:"modules/node_postprocessors",slug:"/modules/node_postprocessors/",permalink:"/modules/node_postprocessors/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Together LLM",permalink:"/modules/llms/available_llms/together"},next:{title:"Cohere Reranker",permalink:"/modules/node_postprocessors/cohere_reranker"}},l={},a=[{value:"Concept",id:"concept",level:2},{value:"Usage Pattern",id:"usage-pattern",level:2},{value:"Using Node Postprocessors in llamaflowjs",id:"using-node-postprocessors-in-llamaflowjs",level:2},{value:"Using Node Postprocessors in a Query Engine",id:"using-node-postprocessors-in-a-query-engine",level:3},{value:"Using with retrieved nodes",id:"using-with-retrieved-nodes",level:3},{value:"API Reference",id:"api-reference",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"node-postprocessors",children:"Node Postprocessors"}),"\n",(0,o.jsx)(s.h2,{id:"concept",children:"Concept"}),"\n",(0,o.jsx)(s.p,{children:"Node postprocessors are a set of modules that take a set of nodes, and apply some kind of transformation or filtering before returning them."}),"\n",(0,o.jsx)(s.p,{children:"In llamaflowjs, node postprocessors are most commonly applied within a query engine, after the node retrieval step and before the response synthesis step."}),"\n",(0,o.jsx)(s.p,{children:"llamaflowjs offers several node postprocessors for immediate use, while also providing a simple API for adding your own custom postprocessors."}),"\n",(0,o.jsx)(s.h2,{id:"usage-pattern",children:"Usage Pattern"}),"\n",(0,o.jsx)(s.p,{children:"An example of using a node postprocessors is below:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:'import {\n  Node,\n  NodeWithScore,\n  SimilarityPostprocessor,\n  CohereRerank,\n} from "llamaflowjs";\n\nconst nodes: NodeWithScore[] = [\n  {\n    node: new TextNode({ text: "hello world" }),\n    score: 0.8,\n  },\n  {\n    node: new TextNode({ text: "llamaflowjs is the best" }),\n    score: 0.6,\n  },\n];\n\n// similarity postprocessor: filter nodes below 0.75 similarity score\nconst processor = new SimilarityPostprocessor({\n  similarityCutoff: 0.7,\n});\n\nconst filteredNodes = await processor.postprocessNodes(nodes);\n\n// cohere rerank: rerank nodes given query using trained model\nconst reranker = new CohereRerank({\n  apiKey: "<COHERE_API_KEY>",\n  topN: 2,\n});\n\nconst rerankedNodes = await reranker.postprocessNodes(nodes, "<user_query>");\n\nconsole.log(filteredNodes, rerankedNodes);\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Now you can use the ",(0,o.jsx)(s.code,{children:"filteredNodes"})," and ",(0,o.jsx)(s.code,{children:"rerankedNodes"})," in your application."]}),"\n",(0,o.jsx)(s.h2,{id:"using-node-postprocessors-in-llamaflowjs",children:"Using Node Postprocessors in llamaflowjs"}),"\n",(0,o.jsx)(s.p,{children:"Most commonly, node-postprocessors will be used in a query engine, where they are applied to the nodes returned from a retriever, and before the response synthesis step."}),"\n",(0,o.jsx)(s.h3,{id:"using-node-postprocessors-in-a-query-engine",children:"Using Node Postprocessors in a Query Engine"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:'import { Node, NodeWithScore, SimilarityPostprocessor, CohereRerank, Settings } from "llamaflowjs";\n\n// Use OpenAI LLM\nSettings.llm = new OpenAI({ model: "gpt-3.5-turbo", temperature: 0.1 });\n\nconst nodes: NodeWithScore[] = [\n  {\n    node: new TextNode({ text: "hello world" }),\n    score: 0.8,\n  },\n  {\n    node: new TextNode({ text: "llamaflowjs is the best" }),\n    score: 0.6,\n  }\n];\n\n// cohere rerank: rerank nodes given query using trained model\nconst reranker = new CohereRerank({\n  apiKey: "<COHERE_API_KEY>,\n  topN: 2,\n})\n\nconst document = new Document({ text: "essay", id_: "essay" });\n\nconst queryEngine = index.asQueryEngine({\n  nodePostprocessors: [processor, reranker],\n});\n\n// all node post-processors will be applied during each query\nconst response = await queryEngine.query("<user_query>");\n'})}),"\n",(0,o.jsx)(s.h3,{id:"using-with-retrieved-nodes",children:"Using with retrieved nodes"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:'import { SimilarityPostprocessor } from "llamaflowjs";\n\nnodes = await index.asRetriever().retrieve({ query: "test query str" });\n\nconst processor = new SimilarityPostprocessor({\n  similarityCutoff: 0.7,\n});\n\nconst filteredNodes = processor.postprocessNodes(nodes);\n'})}),"\n",(0,o.jsx)(s.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/api/classes/SimilarityPostprocessor",children:"SimilarityPostprocessor"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},43327:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var o=n(22155);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);