"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[675],{83275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(65723),s=t(43327);const r={},i="Prompts",a={id:"modules/prompt/index",title:"Prompts",description:"Prompting is the fundamental input that gives LLMs their expressive power. llamaflowjs uses prompts to build the index, do insertion, perform traversal during querying, and to synthesize the final answer.",source:"@site/docs/modules/prompt/index.md",sourceDirName:"modules/prompt",slug:"/modules/prompt/",permalink:"/LlamaFlowJs/modules/prompt/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Metadata Extraction Usage Pattern",permalink:"/LlamaFlowJs/modules/documents_and_nodes/metadata_extraction"},next:{title:"Loader",permalink:"/LlamaFlowJs/modules/data_loaders/"}},l={},d=[{value:"Usage Pattern",id:"usage-pattern",level:2},{value:"1. Customizing the default prompt on initialization",id:"1-customizing-the-default-prompt-on-initialization",level:3},{value:"2. Customizing submodules prompt",id:"2-customizing-submodules-prompt",level:3},{value:"API Reference",id:"api-reference",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"prompts",children:"Prompts"}),"\n",(0,o.jsx)(n.p,{children:"Prompting is the fundamental input that gives LLMs their expressive power. llamaflowjs uses prompts to build the index, do insertion, perform traversal during querying, and to synthesize the final answer."}),"\n",(0,o.jsx)(n.p,{children:"Users may also provide their own prompt templates to further customize the behavior of the framework. The best method for customizing is copying the default prompt from the link above, and using that as the base for any modifications."}),"\n",(0,o.jsx)(n.h2,{id:"usage-pattern",children:"Usage Pattern"}),"\n",(0,o.jsx)(n.p,{children:"Currently, there are two ways to customize prompts in llamaflowjs:"}),"\n",(0,o.jsx)(n.p,{children:"For both methods, you will need to create an function that overrides the default prompt."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Define a custom prompt\nconst newTextQaPrompt: TextQaPrompt = ({ context, query }) => {\n  return `Context information is below.\n---------------------\n${context}\n---------------------\nGiven the context information and not prior knowledge, answer the query.\nAnswer the query in the style of a Sherlock Holmes detective novel.\nQuery: ${query}\nAnswer:`;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"1-customizing-the-default-prompt-on-initialization",children:"1. Customizing the default prompt on initialization"}),"\n",(0,o.jsxs)(n.p,{children:["The first method is to create a new instance of ",(0,o.jsx)(n.code,{children:"ResponseSynthesizer"})," (or the module you would like to update the prompt) and pass the custom prompt to the ",(0,o.jsx)(n.code,{children:"responseBuilder"})," parameter. Then, pass the instance to the ",(0,o.jsx)(n.code,{children:"asQueryEngine"})," method of the index."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'// Create an instance of response synthesizer\nconst responseSynthesizer = new ResponseSynthesizer({\n  responseBuilder: new CompactAndRefine(undefined, newTextQaPrompt),\n});\n\n// Create index\nconst index = await VectorStoreIndex.fromDocuments([document]);\n\n// Query the index\nconst queryEngine = index.asQueryEngine({ responseSynthesizer });\n\nconst response = await queryEngine.query({\n  query: "What did the author do in college?",\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"2-customizing-submodules-prompt",children:"2. Customizing submodules prompt"}),"\n",(0,o.jsxs)(n.p,{children:["The second method is that most of the modules in llamaflowjs have a ",(0,o.jsx)(n.code,{children:"getPrompts"})," and a ",(0,o.jsx)(n.code,{children:"updatePrompt"})," method that allows you to override the default prompt. This method is useful when you want to change the prompt on the fly or in submodules on a more granular level."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'// Create index\nconst index = await VectorStoreIndex.fromDocuments([document]);\n\n// Query the index\nconst queryEngine = index.asQueryEngine();\n\n// Get a list of prompts for the query engine\nconst prompts = queryEngine.getPrompts();\n\n// output: { "responseSynthesizer:textQATemplate": defaultTextQaPrompt, "responseSynthesizer:refineTemplate": defaultRefineTemplatePrompt }\n\n// Now, we can override the default prompt\nqueryEngine.updatePrompt({\n  "responseSynthesizer:textQATemplate": newTextQaPrompt,\n});\n\nconst response = await queryEngine.query({\n  query: "What did the author do in college?",\n});\n'})}),"\n",(0,o.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/LlamaFlowJs/api/type-aliases/TextQaPrompt",children:"TextQaPrompt"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/ResponseSynthesizer",children:"ResponseSynthesizer"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/CompactAndRefine",children:"CompactAndRefine"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(22155);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);