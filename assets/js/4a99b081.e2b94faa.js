"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5291],{12641:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var d=s(65723),a=s(43327);const i={},t="MixedbreadAI",r={id:"modules/embeddings/available_embeddings/mixedbreadai",title:"MixedbreadAI",description:"Welcome to the mixedbread embeddings guide! This guide will help you use the mixedbread ai's API to generate embeddings for your text documents, ensuring you get the most relevant information, just like picking the freshest bread from the bakery.",source:"@site/docs/modules/embeddings/available_embeddings/mixedbreadai.md",sourceDirName:"modules/embeddings/available_embeddings",slug:"/modules/embeddings/available_embeddings/mixedbreadai",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/mixedbreadai",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"MistralAI",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/mistral"},next:{title:"Ollama",permalink:"/LlamaFlowJs/modules/embeddings/available_embeddings/ollama"}},l={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage with llamaflowjs",id:"usage-with-llamaflowjs",level:2},{value:"Step 1: Load and Index Documents",id:"step-1-load-and-index-documents",level:3},{value:"Step 2: Create a Query Engine",id:"step-2-create-a-query-engine",level:3},{value:"Embeddings with Custom Parameters",id:"embeddings-with-custom-parameters",level:2},{value:"Step 1: Create an Instance of MixedbreadAIEmbeddings",id:"step-1-create-an-instance-of-mixedbreadaiembeddings",level:3},{value:"Step 2: Define Texts",id:"step-2-define-texts",level:3},{value:"Step 3: Generate Embeddings",id:"step-3-generate-embeddings",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"mixedbreadai",children:"MixedbreadAI"}),"\n",(0,d.jsx)(n.p,{children:"Welcome to the mixedbread embeddings guide! This guide will help you use the mixedbread ai's API to generate embeddings for your text documents, ensuring you get the most relevant information, just like picking the freshest bread from the bakery."}),"\n",(0,d.jsxs)(n.p,{children:["To find out more about the latest features, updates, and available models, visit ",(0,d.jsx)(n.a,{href:"https://mixedbread-ai.com/",children:"mixedbread.ai"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#setup",children:"Setup"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#integration-with-llamaflowjs",children:"Usage with llamaflowjs"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#embeddings-with-custom-parameters",children:"Embeddings with Custom Parameters"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,d.jsxs)(n.p,{children:["First, you will need to install the ",(0,d.jsx)(n.code,{children:"llamaflowjs"})," package."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm install llamaflowjs\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Next, sign up for an API key at ",(0,d.jsx)(n.a,{href:"https://mixedbread.ai/",children:"mixedbread.ai"}),". Once you have your API key, you can import the necessary modules and create a new instance of the ",(0,d.jsx)(n.code,{children:"MixedbreadAIEmbeddings"})," class."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'import { MixedbreadAIEmbeddings, Document, Settings } from "llamaflowjs";\n'})}),"\n",(0,d.jsx)(n.h2,{id:"usage-with-llamaflowjs",children:"Usage with llamaflowjs"}),"\n",(0,d.jsx)(n.p,{children:"This section will guide you through integrating mixedbread embeddings with llamaflowjs for more advanced usage."}),"\n",(0,d.jsx)(n.h3,{id:"step-1-load-and-index-documents",children:"Step 1: Load and Index Documents"}),"\n",(0,d.jsx)(n.p,{children:"For this example, we will use a single document. In a real-world scenario, you would have multiple documents to index, like a variety of breads in a bakery."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'Settings.embedModel = new MixedbreadAIEmbeddings({\n  apiKey: "<MIXEDBREAD_API_KEY>",\n  model: "mixedbread-ai/mxbai-embed-large-v1",\n});\n\nconst document = new Document({\n  text: "The true source of happiness.",\n  id_: "bread",\n});\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n'})}),"\n",(0,d.jsx)(n.h3,{id:"step-2-create-a-query-engine",children:"Step 2: Create a Query Engine"}),"\n",(0,d.jsx)(n.p,{children:"Combine the retriever and the embed model to create a query engine. This setup ensures that your queries are processed to provide the best results, like arranging the bread in the order of freshness and quality."}),"\n",(0,d.jsxs)(n.p,{children:["Models can require prompts to generate embeddings for queries, in the 'mixedbread-ai/mxbai-embed-large-v1' model's case, the prompt is ",(0,d.jsx)(n.code,{children:"Represent this sentence for searching relevant passages:"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'const queryEngine = index.asQueryEngine();\n\nconst query =\n  "Represent this sentence for searching relevant passages: What is bread?";\n\n// Log the response\nconst results = await queryEngine.query(query);\nconsole.log(results); // Serving up the freshest, most relevant results.\n'})}),"\n",(0,d.jsx)(n.h2,{id:"embeddings-with-custom-parameters",children:"Embeddings with Custom Parameters"}),"\n",(0,d.jsx)(n.p,{children:"This section will guide you through generating embeddings with custom parameters and usage with f.e. matryoshka and binary embeddings."}),"\n",(0,d.jsx)(n.h3,{id:"step-1-create-an-instance-of-mixedbreadaiembeddings",children:"Step 1: Create an Instance of MixedbreadAIEmbeddings"}),"\n",(0,d.jsxs)(n.p,{children:["Create a new instance of the ",(0,d.jsx)(n.code,{children:"MixedbreadAIEmbeddings"})," class with custom parameters. For example, to use the ",(0,d.jsx)(n.code,{children:"mixedbread-ai/mxbai-embed-large-v1"})," model with a batch size of 64, normalized embeddings, and binary encoding format:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'const embeddings = new MixedbreadAIEmbeddings({\n  apiKey: "<MIXEDBREAD_API_KEY>",\n  model: "mixedbread-ai/mxbai-embed-large-v1",\n  batchSize: 64,\n  normalized: true,\n  dimensions: 512,\n  encodingFormat: MixedbreadAI.EncodingFormat.Binary,\n});\n'})}),"\n",(0,d.jsx)(n.h3,{id:"step-2-define-texts",children:"Step 2: Define Texts"}),"\n",(0,d.jsx)(n.p,{children:"Define the texts you want to generate embeddings for."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'const texts = ["Bread is life", "Bread is love"];\n'})}),"\n",(0,d.jsx)(n.h3,{id:"step-3-generate-embeddings",children:"Step 3: Generate Embeddings"}),"\n",(0,d.jsxs)(n.p,{children:["Use the ",(0,d.jsx)(n.code,{children:"embedDocuments"})," method to generate embeddings for the texts."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const result = await embeddings.embedDocuments(texts);\nconsole.log(result); // Perfectly customized embeddings, ready to serve.\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},43327:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var d=s(22155);const a={},i=d.createContext(a);function t(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);