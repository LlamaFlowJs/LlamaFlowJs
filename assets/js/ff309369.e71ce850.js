"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3053],{88618:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=d(65723),t=d(43327);const i={},o="DeepInfra",a={id:"modules/embeddings/available_embeddings/deepinfra",title:"DeepInfra",description:"To use DeepInfra embeddings, you need to import DeepInfraEmbedding from llamaflowjs.",source:"@site/docs/modules/embeddings/available_embeddings/deepinfra.md",sourceDirName:"modules/embeddings/available_embeddings",slug:"/modules/embeddings/available_embeddings/deepinfra",permalink:"/modules/embeddings/available_embeddings/deepinfra",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Embedding",permalink:"/modules/embeddings/"},next:{title:"Gemini",permalink:"/modules/embeddings/available_embeddings/gemini"}},r={},l=[{value:"API Reference",id:"api-reference",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deepinfra",children:"DeepInfra"}),"\n",(0,s.jsxs)(n.p,{children:["To use DeepInfra embeddings, you need to import ",(0,s.jsx)(n.code,{children:"DeepInfraEmbedding"})," from llamaflowjs.\nCheck out available embedding models ",(0,s.jsx)(n.a,{href:"https://deepinfra.com/models/embeddings",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import {\n  DeepInfraEmbedding,\n  Settings,\n  Document,\n  VectorStoreIndex,\n} from "llamaflowjs";\n\n// Update Embed Model\nSettings.embedModel = new DeepInfraEmbedding();\n\nconst document = new Document({ text: essay, id_: "essay" });\n\nconst index = await VectorStoreIndex.fromDocuments([document]);\n\nconst queryEngine = index.asQueryEngine();\n\nconst query = "What is the meaning of life?";\n\nconst results = await queryEngine.query({\n  query,\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"By default, DeepInfraEmbedding is using the sentence-transformers/clip-ViT-B-32 model. You can change the model by passing the model parameter to the constructor.\nFor example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { DeepInfraEmbedding } from "llamaflowjs";\n\nconst model = "intfloat/e5-large-v2";\nSettings.embedModel = new DeepInfraEmbedding({\n  model,\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also set the ",(0,s.jsx)(n.code,{children:"maxRetries"})," and ",(0,s.jsx)(n.code,{children:"timeout"})," parameters when initializing ",(0,s.jsx)(n.code,{children:"DeepInfraEmbedding"})," for better control over the request behavior."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { DeepInfraEmbedding, Settings } from "llamaflowjs";\n\nconst model = "intfloat/e5-large-v2";\nconst maxRetries = 5;\nconst timeout = 5000; // 5 seconds\n\nSettings.embedModel = new DeepInfraEmbedding({\n  model,\n  maxRetries,\n  timeout,\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Standalone usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { DeepInfraEmbedding } from "llamaflowjs";\nimport { config } from "dotenv";\n// For standalone usage, you need to configure DEEPINFRA_API_TOKEN in .env file\nconfig();\n\nconst main = async () => {\n  const model = "intfloat/e5-large-v2";\n  const embeddings = new DeepInfraEmbedding({ model });\n  const text = "What is the meaning of life?";\n  const response = await embeddings.embed([text]);\n  console.log(response);\n};\n\nmain();\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For questions or feedback, please contact us at ",(0,s.jsx)(n.a,{href:"mailto:feedback@deepinfra.com",children:"feedback@deepinfra.com"})]}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/classes/DeepInfraEmbedding",children:"DeepInfraEmbedding"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},43327:(e,n,d)=>{d.d(n,{R:()=>o,x:()=>a});var s=d(22155);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);