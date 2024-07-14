"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1157],{1782:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=r(65723),l=r(43327);const i={},c="Class: PromptHelper",d={id:"api/classes/PromptHelper",title:"Class: PromptHelper",description:"A collection of helper functions for working with prompts.",source:"@site/docs/api/classes/PromptHelper.md",sourceDirName:"api/classes",slug:"/api/classes/PromptHelper",permalink:"/api/classes/PromptHelper",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: Portkey",permalink:"/api/classes/Portkey"},next:{title:"Class: PromptMixin",permalink:"/api/classes/PromptMixin"}},t={},o=[{value:"Constructors",id:"constructors",level:2},{value:"new PromptHelper()",id:"new-prompthelper",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"chunkOverlapRatio",id:"chunkoverlapratio",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"chunkSizeLimit?",id:"chunksizelimit",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"contextWindow",id:"contextwindow",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"numOutput",id:"numoutput",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"separator",id:"separator",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"tokenizer",id:"tokenizer",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods",level:2},{value:"getTextSplitterGivenPrompt()",id:"gettextsplittergivenprompt",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"repack()",id:"repack",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-8",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"class-prompthelper",children:"Class: PromptHelper"}),"\n",(0,s.jsx)(n.p,{children:"A collection of helper functions for working with prompts."}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"new-prompthelper",children:"new PromptHelper()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"new PromptHelper"}),"(",(0,s.jsx)(n.code,{children:"contextWindow"}),", ",(0,s.jsx)(n.code,{children:"numOutput"}),", ",(0,s.jsx)(n.code,{children:"chunkOverlapRatio"}),", ",(0,s.jsx)(n.code,{children:"chunkSizeLimit"}),"?, ",(0,s.jsx)(n.code,{children:"tokenizer"}),"?, ",(0,s.jsx)(n.code,{children:"separator"}),"?): ",(0,s.jsx)(n.a,{href:"/api/classes/PromptHelper",children:(0,s.jsx)(n.code,{children:"PromptHelper"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"contextWindow"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_CONTEXT_WINDOW"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"numOutput"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_NUM_OUTPUTS"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"chunkOverlapRatio"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_CHUNK_OVERLAP_RATIO"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"chunkSizeLimit?"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"tokenizer?"}),": ",(0,s.jsx)(n.code,{children:"Tokenizer"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"separator?"}),": ",(0,s.jsx)(n.code,{children:"string"})," = ",(0,s.jsx)(n.code,{children:'" "'})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/classes/PromptHelper",children:(0,s.jsx)(n.code,{children:"PromptHelper"})})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L41",children:"packages/llamaflowjs/src/PromptHelper.ts:41"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"chunkoverlapratio",children:"chunkOverlapRatio"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"chunkOverlapRatio"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_CHUNK_OVERLAP_RATIO"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L35",children:"packages/llamaflowjs/src/PromptHelper.ts:35"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"chunksizelimit",children:"chunkSizeLimit?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"chunkSizeLimit"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L36",children:"packages/llamaflowjs/src/PromptHelper.ts:36"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"contextwindow",children:"contextWindow"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"contextWindow"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_CONTEXT_WINDOW"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L33",children:"packages/llamaflowjs/src/PromptHelper.ts:33"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"numoutput",children:"numOutput"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"numOutput"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_NUM_OUTPUTS"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L34",children:"packages/llamaflowjs/src/PromptHelper.ts:34"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"separator",children:"separator"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"separator"}),": ",(0,s.jsx)(n.code,{children:"string"})," = ",(0,s.jsx)(n.code,{children:'" "'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L38",children:"packages/llamaflowjs/src/PromptHelper.ts:38"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tokenizer",children:"tokenizer"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"tokenizer"}),": ",(0,s.jsx)(n.code,{children:"Tokenizer"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L37",children:"packages/llamaflowjs/src/PromptHelper.ts:37"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"gettextsplittergivenprompt",children:"getTextSplitterGivenPrompt()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getTextSplitterGivenPrompt"}),"(",(0,s.jsx)(n.code,{children:"prompt"}),", ",(0,s.jsx)(n.code,{children:"numChunks"}),", ",(0,s.jsx)(n.code,{children:"padding"}),"): ",(0,s.jsx)(n.a,{href:"/api/classes/SentenceSplitter",children:(0,s.jsx)(n.code,{children:"SentenceSplitter"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Creates a text splitter with the correct chunk sizes and overlaps given a prompt."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"prompt"}),": ",(0,s.jsx)(n.a,{href:"/api/type-aliases/SimplePrompt",children:(0,s.jsx)(n.code,{children:"SimplePrompt"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"numChunks"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"1"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"padding"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_PADDING"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/classes/SentenceSplitter",children:(0,s.jsx)(n.code,{children:"SentenceSplitter"})})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L100",children:"packages/llamaflowjs/src/PromptHelper.ts:100"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"repack",children:"repack()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"repack"}),"(",(0,s.jsx)(n.code,{children:"prompt"}),", ",(0,s.jsx)(n.code,{children:"textChunks"}),", ",(0,s.jsx)(n.code,{children:"padding"}),"): ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Repack resplits the strings based on the optimal text splitter."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"prompt"}),": ",(0,s.jsx)(n.a,{href:"/api/type-aliases/SimplePrompt",children:(0,s.jsx)(n.code,{children:"SimplePrompt"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"textChunks"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"padding"}),": ",(0,s.jsx)(n.code,{children:"number"})," = ",(0,s.jsx)(n.code,{children:"DEFAULT_PADDING"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/PromptHelper.ts#L121",children:"packages/llamaflowjs/src/PromptHelper.ts:121"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},43327:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var s=r(22155);const l={},i=s.createContext(l);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);