"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5600],{87925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(65723),i=t(43327);const r={sidebar_position:4},a="ChatEngine",c={id:"modules/chat_engine",title:"ChatEngine",description:"The chat engine is a quick and simple way to chat with the data in your index.",source:"@site/docs/modules/chat_engine.md",sourceDirName:"modules",slug:"/modules/chat_engine",permalink:"/modules/chat_engine",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mySidebar",previous:{title:"MixedbreadAI",permalink:"/modules/node_postprocessors/mixedbreadiai_reranker"},next:{title:"Index",permalink:"/modules/data_index"}},o={},d=[{value:"Api References",id:"api-references",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"chatengine",children:"ChatEngine"}),"\n",(0,s.jsx)(n.p,{children:"The chat engine is a quick and simple way to chat with the data in your index."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const retriever = index.asRetriever();\nconst chatEngine = new ContextChatEngine({ retriever });\n\n// start chatting\nconst response = await chatEngine.chat({ message: query });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"chat"})," function also supports streaming, just add ",(0,s.jsx)(n.code,{children:"stream: true"})," as an option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const stream = await chatEngine.chat({ message: query, stream: true });\nfor await (const chunk of stream) {\n  process.stdout.write(chunk.response);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api-references",children:"Api References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/classes/ContextChatEngine",children:"ContextChatEngine"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/classes/ContextChatEngine",children:"CondenseQuestionChatEngine"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(22155);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);