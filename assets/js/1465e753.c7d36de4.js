"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2099],{6696:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=i(65723),t=i(43327);const l={},s="Observability",r={id:"observability/index",title:"Observability",description:"llamaflowjs provides one-click observability \ud83d\udd2d to allow you to build principled LLM applications in a production setting.",source:"@site/docs/observability/index.md",sourceDirName:"observability",slug:"/observability/",permalink:"/LlamaFlowJs/observability/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"LlamaCloud",permalink:"/LlamaFlowJs/modules/llamacloud"},next:{title:"llamaflowjs",permalink:"/LlamaFlowJs/api/"}},o={},c=[{value:"OpenLLMetry",id:"openllmetry",level:2},{value:"Usage Pattern",id:"usage-pattern",level:3},{value:"Langtrace",id:"langtrace",level:2},{value:"Install",id:"install",level:4},{value:"Initialize",id:"initialize",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"observability",children:"Observability"}),"\n",(0,a.jsxs)(n.p,{children:["llamaflowjs provides ",(0,a.jsx)(n.strong,{children:"one-click observability"})," \ud83d\udd2d to allow you to build principled LLM applications in a production setting."]}),"\n",(0,a.jsx)(n.p,{children:"A key requirement for principled development of LLM applications over your data (RAG systems, agents) is being able to observe, debug, and evaluate\nyour system - both as a whole and for each component."}),"\n",(0,a.jsx)(n.p,{children:"This feature allows you to seamlessly integrate the llamaflowjs library with powerful observability/evaluation tools offered by our partners.\nConfigure a variable once, and you'll be able to do things like the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"View LLM/prompt inputs/outputs"}),"\n",(0,a.jsx)(n.li,{children:"Ensure that the outputs of any component (LLMs, embeddings) are performing as expected"}),"\n",(0,a.jsx)(n.li,{children:"View call traces for both indexing and querying"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Each provider has similarities and differences. Take a look below for the full set of guides for each one!"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#openllmetry",children:"OpenLLMetry"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#langtrace",children:"Langtrace"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"openllmetry",children:"OpenLLMetry"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/traceloop/openllmetry-js",children:"OpenLLMetry"})," is an open-source project based on OpenTelemetry for tracing and monitoring\nLLM applications. It connects to ",(0,a.jsx)(n.a,{href:"https://www.traceloop.com/docs/openllmetry/integrations/introduction",children:"all major observability platforms"})," and installs in minutes."]}),"\n",(0,a.jsx)(n.h3,{id:"usage-pattern",children:"Usage Pattern"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @traceloop/node-server-sdk\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import * as traceloop from "@traceloop/node-server-sdk";\n\ntraceloop.initialize({\n  apiKey: process.env.TRACELOOP_API_KEY,\n  disableBatch: true,\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"langtrace",children:"Langtrace"}),"\n",(0,a.jsx)(n.p,{children:"Enhance your observability with Langtrace, a robust open-source tool supports OpenTelemetry and is designed to trace, evaluate, and manage LLM applications seamlessly. Langtrace integrates directly with llamaflowjs, offering detailed, real-time insights into performance metrics such as accuracy, evaluations, and latency."}),"\n",(0,a.jsx)(n.h4,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Self-host or sign-up and generate an API key using ",(0,a.jsx)(n.a,{href:"https://www.langtrace.ai",children:"Langtrace"})," Cloud"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @langtrase/typescript-sdk\n"})}),"\n",(0,a.jsx)(n.h4,{id:"initialize",children:"Initialize"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import * as Langtrace from "@langtrase/typescript-sdk";\nLangtrace.init({ api_key: "<YOUR_API_KEY>" });\n'})}),"\n",(0,a.jsx)(n.p,{children:"Features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"OpenTelemetry compliant, ensuring broad compatibility with observability platforms."}),"\n",(0,a.jsx)(n.li,{children:"Provides comprehensive logs and detailed traces of all components."}),"\n",(0,a.jsx)(n.li,{children:"Real-time monitoring of accuracy, evaluations, usage, costs, and latency."}),"\n",(0,a.jsxs)(n.li,{children:["For more configuration options and details, visit ",(0,a.jsx)(n.a,{href:"https://docs.langtrace.ai/introduction",children:"Langtrace Docs"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},43327:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var a=i(22155);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);