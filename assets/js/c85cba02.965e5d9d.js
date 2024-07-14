"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6367],{9134:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var i=n(65723),a=n(43327);const l={},r="Class: abstract BaseLLM<AdditionalChatOptions, AdditionalMessageOptions>",d={id:"api/classes/BaseLLM",title:"Class: abstract BaseLLM\\<AdditionalChatOptions, AdditionalMessageOptions\\>",description:"Unified language model interface",source:"@site/docs/api/classes/BaseLLM.md",sourceDirName:"api/classes",slug:"/api/classes/BaseLLM",permalink:"/LlamaFlowJs/api/classes/BaseLLM",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: abstract BaseKVStore",permalink:"/LlamaFlowJs/api/classes/BaseKVStore"},next:{title:"Class: abstract BaseNode\\<T\\>",permalink:"/LlamaFlowJs/api/classes/BaseNode"}},c={},t=[{value:"Extended by",id:"extended-by",level:2},{value:"Type Parameters",id:"type-parameters",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new BaseLLM()",id:"new-basellm",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"metadata",id:"metadata",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"chat()",id:"chat",level:3},{value:"chat(params)",id:"chatparams",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Implementation of",id:"implementation-of-1",level:5},{value:"Defined in",id:"defined-in-1",level:5},{value:"chat(params)",id:"chatparams-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Implementation of",id:"implementation-of-2",level:5},{value:"Defined in",id:"defined-in-2",level:5},{value:"complete()",id:"complete",level:3},{value:"complete(params)",id:"completeparams",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Implementation of",id:"implementation-of-3",level:5},{value:"Defined in",id:"defined-in-3",level:5},{value:"complete(params)",id:"completeparams-1",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Implementation of",id:"implementation-of-4",level:5},{value:"Defined in",id:"defined-in-4",level:5}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"class-abstract-basellmadditionalchatoptions-additionalmessageoptions",children:["Class: ",(0,i.jsx)(s.code,{children:"abstract"})," BaseLLM<AdditionalChatOptions, AdditionalMessageOptions>"]}),"\n",(0,i.jsx)(s.p,{children:"Unified language model interface"}),"\n",(0,i.jsx)(s.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/ToolCallLLM",children:(0,i.jsx)(s.code,{children:"ToolCallLLM"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/HuggingFaceInferenceAPI",children:(0,i.jsx)(s.code,{children:"HuggingFaceInferenceAPI"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/HuggingFaceLLM",children:(0,i.jsx)(s.code,{children:"HuggingFaceLLM"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/MistralAI",children:(0,i.jsx)(s.code,{children:"MistralAI"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/Portkey",children:(0,i.jsx)(s.code,{children:"Portkey"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/ReplicateLLM",children:(0,i.jsx)(s.code,{children:"ReplicateLLM"})})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"AdditionalChatOptions"})," ",(0,i.jsx)(s.em,{children:"extends"})," ",(0,i.jsx)(s.code,{children:"object"})," = ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"AdditionalMessageOptions"})," ",(0,i.jsx)(s.em,{children:"extends"})," ",(0,i.jsx)(s.code,{children:"object"})," = ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM",children:(0,i.jsx)(s.code,{children:"LLM"})}),"<",(0,i.jsx)(s.code,{children:"AdditionalChatOptions"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(s.h3,{id:"new-basellm",children:"new BaseLLM()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"new BaseLLM"}),"<",(0,i.jsx)(s.code,{children:"AdditionalChatOptions"}),", ",(0,i.jsx)(s.code,{children:"AdditionalMessageOptions"}),">(): ",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/BaseLLM",children:(0,i.jsx)(s.code,{children:"BaseLLM"})}),"<",(0,i.jsx)(s.code,{children:"AdditionalChatOptions"}),", ",(0,i.jsx)(s.code,{children:"AdditionalMessageOptions"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/classes/BaseLLM",children:(0,i.jsx)(s.code,{children:"BaseLLM"})}),"<",(0,i.jsx)(s.code,{children:"AdditionalChatOptions"}),", ",(0,i.jsx)(s.code,{children:"AdditionalMessageOptions"}),">"]}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"metadata",children:"metadata"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"abstract"})," ",(0,i.jsx)(s.strong,{children:"metadata"}),": ",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/LLMMetadata",children:(0,i.jsx)(s.code,{children:"LLMMetadata"})})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM",children:(0,i.jsx)(s.code,{children:"LLM"})}),".",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM#metadata",children:(0,i.jsx)(s.code,{children:"metadata"})})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:"packages/core/dist/llms/index.d.ts:167"}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"chat",children:"chat()"}),"\n",(0,i.jsx)(s.h4,{id:"chatparams",children:"chat(params)"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"abstract"})," ",(0,i.jsx)(s.strong,{children:"chat"}),"(",(0,i.jsx)(s.code,{children:"params"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"AsyncIterable"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/ChatResponseChunk",children:(0,i.jsx)(s.code,{children:"ChatResponseChunk"})}),"<",(0,i.jsx)(s.code,{children:"object"}),">>>"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Get a chat response from the LLM"}),"\n",(0,i.jsx)(s.h5,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"params"}),": ",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLMChatParamsStreaming",children:(0,i.jsx)(s.code,{children:"LLMChatParamsStreaming"})}),"<",(0,i.jsx)(s.code,{children:"AdditionalChatOptions"}),", ",(0,i.jsx)(s.code,{children:"AdditionalMessageOptions"}),">"]}),"\n",(0,i.jsx)(s.h5,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"AsyncIterable"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/type-aliases/ChatResponseChunk",children:(0,i.jsx)(s.code,{children:"ChatResponseChunk"})}),"<",(0,i.jsx)(s.code,{children:"object"}),">>>"]}),"\n",(0,i.jsx)(s.h5,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM",children:(0,i.jsx)(s.code,{children:"LLM"})}),".",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM#chat",children:(0,i.jsx)(s.code,{children:"chat"})})]}),"\n",(0,i.jsx)(s.h5,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:"packages/core/dist/llms/index.d.ts:170"}),"\n",(0,i.jsx)(s.h4,{id:"chatparams-1",children:"chat(params)"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"abstract"})," ",(0,i.jsx)(s.strong,{children:"chat"}),"(",(0,i.jsx)(s.code,{children:"params"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/ChatResponse",children:(0,i.jsx)(s.code,{children:"ChatResponse"})}),"<",(0,i.jsx)(s.code,{children:"AdditionalMessageOptions"}),">>"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Get a chat response from the LLM"}),"\n",(0,i.jsx)(s.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"params"}),": ",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLMChatParamsNonStreaming",children:(0,i.jsx)(s.code,{children:"LLMChatParamsNonStreaming"})}),"<",(0,i.jsx)(s.code,{children:"AdditionalChatOptions"}),", ",(0,i.jsx)(s.code,{children:"AdditionalMessageOptions"}),">"]}),"\n",(0,i.jsx)(s.h5,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/ChatResponse",children:(0,i.jsx)(s.code,{children:"ChatResponse"})}),"<",(0,i.jsx)(s.code,{children:"AdditionalMessageOptions"}),">>"]}),"\n",(0,i.jsx)(s.h5,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM",children:(0,i.jsx)(s.code,{children:"LLM"})}),".",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM#chat",children:(0,i.jsx)(s.code,{children:"chat"})})]}),"\n",(0,i.jsx)(s.h5,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:"packages/core/dist/llms/index.d.ts:171"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"complete",children:"complete()"}),"\n",(0,i.jsx)(s.h4,{id:"completeparams",children:"complete(params)"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"complete"}),"(",(0,i.jsx)(s.code,{children:"params"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"AsyncIterable"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/CompletionResponse",children:(0,i.jsx)(s.code,{children:"CompletionResponse"})}),">>"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Get a prompt completion from the LLM"}),"\n",(0,i.jsx)(s.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"params"}),": ",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLMCompletionParamsStreaming",children:(0,i.jsx)(s.code,{children:"LLMCompletionParamsStreaming"})})]}),"\n",(0,i.jsx)(s.h5,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"AsyncIterable"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/CompletionResponse",children:(0,i.jsx)(s.code,{children:"CompletionResponse"})}),">>"]}),"\n",(0,i.jsx)(s.h5,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM",children:(0,i.jsx)(s.code,{children:"LLM"})}),".",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM#complete",children:(0,i.jsx)(s.code,{children:"complete"})})]}),"\n",(0,i.jsx)(s.h5,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:"packages/core/dist/llms/index.d.ts:168"}),"\n",(0,i.jsx)(s.h4,{id:"completeparams-1",children:"complete(params)"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"complete"}),"(",(0,i.jsx)(s.code,{children:"params"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/CompletionResponse",children:(0,i.jsx)(s.code,{children:"CompletionResponse"})}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Get a prompt completion from the LLM"}),"\n",(0,i.jsx)(s.h5,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"params"}),": ",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLMCompletionParamsNonStreaming",children:(0,i.jsx)(s.code,{children:"LLMCompletionParamsNonStreaming"})})]}),"\n",(0,i.jsx)(s.h5,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/CompletionResponse",children:(0,i.jsx)(s.code,{children:"CompletionResponse"})}),">"]}),"\n",(0,i.jsx)(s.h5,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM",children:(0,i.jsx)(s.code,{children:"LLM"})}),".",(0,i.jsx)(s.a,{href:"/LlamaFlowJs/api/interfaces/LLM#complete",children:(0,i.jsx)(s.code,{children:"complete"})})]}),"\n",(0,i.jsx)(s.h5,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:"packages/core/dist/llms/index.d.ts:169"})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},43327:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var i=n(22155);const a={},l=i.createContext(a);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);