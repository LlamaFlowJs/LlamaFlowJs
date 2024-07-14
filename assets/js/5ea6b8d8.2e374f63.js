"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5350],{77753:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>t});var n=r(65723),i=r(43327);const a={},d="Class: AudioTranscriptSentencesReader",l={id:"api/classes/AudioTranscriptSentencesReader",title:"Class: AudioTranscriptSentencesReader",description:"Transcribe audio and return a document for each sentence.",source:"@site/docs/api/classes/AudioTranscriptSentencesReader.md",sourceDirName:"api/classes",slug:"/api/classes/AudioTranscriptSentencesReader",permalink:"/LlamaFlowJs/api/classes/AudioTranscriptSentencesReader",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: AudioTranscriptReader",permalink:"/LlamaFlowJs/api/classes/AudioTranscriptReader"},next:{title:"Class: AzureDynamicSessionTool",permalink:"/LlamaFlowJs/api/classes/AzureDynamicSessionTool"}},c={},t=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new AudioTranscriptSentencesReader()",id:"new-audiotranscriptsentencesreader",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"getTranscriptId()",id:"gettranscriptid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"loadData()",id:"loaddata",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"transcribeOrGetTranscript()",id:"transcribeorgettranscript",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"class-audiotranscriptsentencesreader",children:"Class: AudioTranscriptSentencesReader"}),"\n",(0,n.jsx)(s.p,{children:"Transcribe audio and return a document for each sentence."}),"\n",(0,n.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"AssemblyAIReader"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-audiotranscriptsentencesreader",children:"new AudioTranscriptSentencesReader()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"new AudioTranscriptSentencesReader"}),"(",(0,n.jsx)(s.code,{children:"assemblyAIOptions"}),"?): ",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/AudioTranscriptSentencesReader",children:(0,n.jsx)(s.code,{children:"AudioTranscriptSentencesReader"})})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Creates a new AssemblyAI Reader."}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"assemblyAIOptions?"}),": ",(0,n.jsx)(s.code,{children:"Partial"}),"<",(0,n.jsx)(s.code,{children:"BaseServiceParams"}),">"]}),"\n",(0,n.jsxs)(s.p,{children:["The options to configure the AssemblyAI Reader.\nConfigure the ",(0,n.jsx)(s.code,{children:"assemblyAIOptions.apiKey"})," with your AssemblyAI API key, or configure it as the ",(0,n.jsx)(s.code,{children:"ASSEMBLYAI_API_KEY"})," environment variable."]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/AudioTranscriptSentencesReader",children:(0,n.jsx)(s.code,{children:"AudioTranscriptSentencesReader"})})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"AssemblyAIReader.constructor"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/AssemblyAIReader.ts#L26",children:"packages/llamaflowjs/src/readers/AssemblyAIReader.ts:26"})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"client",children:"client"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"protected"})," ",(0,n.jsx)(s.strong,{children:"client"}),": ",(0,n.jsx)(s.code,{children:"AssemblyAI"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"AssemblyAIReader.client"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/AssemblyAIReader.ts#L19",children:"packages/llamaflowjs/src/readers/AssemblyAIReader.ts:19"})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"gettranscriptid",children:"getTranscriptId()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"protected"})," ",(0,n.jsx)(s.strong,{children:"getTranscriptId"}),"(",(0,n.jsx)(s.code,{children:"params"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"params"}),": ",(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/TranscribeParams",children:(0,n.jsx)(s.code,{children:"TranscribeParams"})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"string"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"AssemblyAIReader.getTranscriptId"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/AssemblyAIReader.ts#L53",children:"packages/llamaflowjs/src/readers/AssemblyAIReader.ts:53"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"loaddata",children:"loadData()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"loadData"}),"(",(0,n.jsx)(s.code,{children:"params"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/Document",children:(0,n.jsx)(s.code,{children:"Document"})}),"<",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,n.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Transcribe audio or get a transcript, and returns a document for each sentence."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"params"}),": ",(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/TranscribeParams",children:(0,n.jsx)(s.code,{children:"TranscribeParams"})})]}),"\n",(0,n.jsx)(s.p,{children:"The parameters to transcribe audio or get an existing transcript."}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/Document",children:(0,n.jsx)(s.code,{children:"Document"})}),"<",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,n.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n",(0,n.jsx)(s.p,{children:"A promise that resolves to an array of documents, each containing a sentence of the transcript."}),"\n",(0,n.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"AssemblyAIReader.loadData"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/AssemblyAIReader.ts#L105",children:"packages/llamaflowjs/src/readers/AssemblyAIReader.ts:105"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"transcribeorgettranscript",children:"transcribeOrGetTranscript()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"protected"})," ",(0,n.jsx)(s.strong,{children:"transcribeOrGetTranscript"}),"(",(0,n.jsx)(s.code,{children:"params"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"Transcript"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"params"}),": ",(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/TranscribeParams",children:(0,n.jsx)(s.code,{children:"TranscribeParams"})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"Transcript"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"AssemblyAIReader.transcribeOrGetTranscript"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/AssemblyAIReader.ts#L45",children:"packages/llamaflowjs/src/readers/AssemblyAIReader.ts:45"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},43327:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>l});var n=r(22155);const i={},a=n.createContext(i);function d(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);