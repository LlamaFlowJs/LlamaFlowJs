"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4110],{34822:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(65723),l=s(43327);const i={},r="Class: SentenceSplitter",c={id:"api/classes/SentenceSplitter",title:"Class: SentenceSplitter",description:"SentenceSplitter is our default text splitter that supports splitting into sentences, paragraphs, or fixed length chunks with overlap.",source:"@site/docs/api/classes/SentenceSplitter.md",sourceDirName:"api/classes",slug:"/api/classes/SentenceSplitter",permalink:"/LlamaFlowJs/api/classes/SentenceSplitter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: RouterQueryEngine",permalink:"/LlamaFlowJs/api/classes/RouterQueryEngine"},next:{title:"Class: SentenceWindowNodeParser",permalink:"/LlamaFlowJs/api/classes/SentenceWindowNodeParser"}},d={},a=[{value:"Constructors",id:"constructors",level:2},{value:"new SentenceSplitter()",id:"new-sentencesplitter",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"chunkOverlap",id:"chunkoverlap",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"chunkSize",id:"chunksize",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"combineTextSplits()",id:"combinetextsplits",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getParagraphSplits()",id:"getparagraphsplits",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getSentenceSplits()",id:"getsentencesplits",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"splitText()",id:"splittext",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"splitTextWithOverlaps()",id:"splittextwithoverlaps",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"class-sentencesplitter",children:"Class: SentenceSplitter"}),"\n",(0,t.jsx)(n.p,{children:"SentenceSplitter is our default text splitter that supports splitting into sentences, paragraphs, or fixed length chunks with overlap."}),"\n",(0,t.jsx)(n.p,{children:"One of the advantages of SentenceSplitter is that even in the fixed length chunks it will try to keep sentences together."}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsx)(n.h3,{id:"new-sentencesplitter",children:"new SentenceSplitter()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"new SentenceSplitter"}),"(",(0,t.jsx)(n.code,{children:"options"}),"?): ",(0,t.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/SentenceSplitter",children:(0,t.jsx)(n.code,{children:"SentenceSplitter"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options?"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options.chunkOverlap?"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options.chunkSize?"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options.chunkingTokenizerFn?"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options.paragraphSeparator?"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options.splitLongSentences?"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"options.tokenizer?"}),": ",(0,t.jsx)(n.code,{children:"Tokenizer"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/SentenceSplitter",children:(0,t.jsx)(n.code,{children:"SentenceSplitter"})})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L76",children:"packages/llamaflowjs/src/TextSplitter.ts:76"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"chunkoverlap",children:"chunkOverlap"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"chunkOverlap"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L69",children:"packages/llamaflowjs/src/TextSplitter.ts:69"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"chunksize",children:"chunkSize"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"chunkSize"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L68",children:"packages/llamaflowjs/src/TextSplitter.ts:68"})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"combinetextsplits",children:"combineTextSplits()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"combineTextSplits"}),"(",(0,t.jsx)(n.code,{children:"newSentenceSplits"}),", ",(0,t.jsx)(n.code,{children:"effectiveChunkSize"}),"): ",(0,t.jsx)(n.code,{children:"TextSplit"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"newSentenceSplits"}),": ",(0,t.jsx)(n.code,{children:"SplitRep"}),"[]"]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"effectiveChunkSize"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"TextSplit"}),"[]"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L210",children:"packages/llamaflowjs/src/TextSplitter.ts:210"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getparagraphsplits",children:"getParagraphSplits()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"getParagraphSplits"}),"(",(0,t.jsx)(n.code,{children:"text"}),", ",(0,t.jsx)(n.code,{children:"effectiveChunkSize"}),"?): ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"text"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"effectiveChunkSize?"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L126",children:"packages/llamaflowjs/src/TextSplitter.ts:126"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getsentencesplits",children:"getSentenceSplits()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"getSentenceSplits"}),"(",(0,t.jsx)(n.code,{children:"text"}),", ",(0,t.jsx)(n.code,{children:"effectiveChunkSize"}),"?): ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"text"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"effectiveChunkSize?"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L152",children:"packages/llamaflowjs/src/TextSplitter.ts:152"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"splittext",children:"splitText()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"splitText"}),"(",(0,t.jsx)(n.code,{children:"text"}),", ",(0,t.jsx)(n.code,{children:"extraInfoStr"}),"?): ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"text"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"extraInfoStr?"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L304",children:"packages/llamaflowjs/src/TextSplitter.ts:304"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"splittextwithoverlaps",children:"splitTextWithOverlaps()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"splitTextWithOverlaps"}),"(",(0,t.jsx)(n.code,{children:"text"}),", ",(0,t.jsx)(n.code,{children:"extraInfoStr"}),"?): ",(0,t.jsx)(n.code,{children:"TextSplit"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"text"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"extraInfoStr?"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"TextSplit"}),"[]"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/TextSplitter.ts#L276",children:"packages/llamaflowjs/src/TextSplitter.ts:276"})})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43327:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(22155);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);