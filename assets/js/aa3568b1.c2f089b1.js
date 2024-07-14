"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8636],{40471:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(65723),r=t(43327),l=t(82468),s=t(29753);const o={sidebar_position:1},u="See all examples",c={id:"examples/more_examples",title:"See all examples",description:"Our GitHub repository has a wealth of examples to explore and try out. You can check out our examples folder to see them all at once, or browse the pages in this section for some selected highlights.",source:"@site/docs/examples/more_examples.mdx",sourceDirName:"examples",slug:"/examples/more_examples",permalink:"/LlamaFlowJs/examples/more_examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",previous:{title:"Adding persistent vector storage",permalink:"/LlamaFlowJs/guides/agents/qdrant"},next:{title:"Chat Engine",permalink:"/LlamaFlowJs/examples/chat_engine"}},i={},d=[{value:"Check out all examples",id:"check-out-all-examples",level:2}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"see-all-examples",children:"See all examples"}),"\n",(0,n.jsxs)(a.p,{children:["Our GitHub repository has a wealth of examples to explore and try out. You can check out our ",(0,n.jsx)(a.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/tree/main/examples",children:"examples folder"})," to see them all at once, or browse the pages in this section for some selected highlights."]}),"\n",(0,n.jsx)(a.h2,{id:"check-out-all-examples",children:"Check out all examples"}),"\n",(0,n.jsxs)(a.p,{children:["It may be useful to check out all the examples at once so you can try them out locally. To do this into a folder called ",(0,n.jsx)(a.code,{children:"my-new-project"}),", run these commands:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx degit run-llama/llamaflowTS/examples my-new-project\ncd my-new-project\nnpm install\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx degit run-llama/llamaflowTS/examples my-new-project\ncd my-new-project\nyarn install\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx degit run-llama/llamaflowTS/examples my-new-project\ncd my-new-project\npnpm install\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["Then you can run any example in the folder with ",(0,n.jsx)(a.code,{children:"tsx"}),", e.g.:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx tsx ./vectorIndex.ts\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx tsx ./vectorIndex.ts\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx tsx ./vectorIndex.ts\n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},29753:(e,a,t)=>{t.d(a,{A:()=>s});t(22155);var n=t(70851);const r={tabItem:"tabItem_Ge7D"};var l=t(65723);function s(e){let{children:a,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:t,children:a})}},82468:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(22155),r=t(70851),l=t(32490),s=t(62934),o=t(20189),u=t(38719),c=t(64228),i=t(94040);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function x(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=p(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[c,d]=h({queryString:t,groupId:r}),[x,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,i.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=c??x;return m({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(47519);const b={tabList:"tabList_pGhr",tabItem:"tabItem_hSrI"};var g=t(65723);function v(e){let{className:a,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),i=e=>{const a=e.currentTarget,t=u.indexOf(a),r=o[t].value;r!==n&&(c(a),s(r))},d=e=>{let a=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:d,onClick:i,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function y(e){const a=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...a,...e}),(0,g.jsx)(j,{...a,...e})]})}function w(e){const a=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(a))}},43327:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var n=t(22155);const r={},l=n.createContext(r);function s(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);