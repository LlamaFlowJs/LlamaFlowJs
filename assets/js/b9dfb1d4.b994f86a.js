"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3113],{8457:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>t});var a=r(65723),n=r(43327);const d={},l="Class: PapaCSVReader",i={id:"api/classes/PapaCSVReader",title:"Class: PapaCSVReader",description:"papaparse-based csv parser",source:"@site/docs/api/classes/PapaCSVReader.md",sourceDirName:"api/classes",slug:"/api/classes/PapaCSVReader",permalink:"/api/classes/PapaCSVReader",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: PGVectorStore",permalink:"/api/classes/PGVectorStore"},next:{title:"Class: PineconeVectorStore",permalink:"/api/classes/PineconeVectorStore"}},c={},t=[{value:"Implements",id:"implements",level:2},{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new PapaCSVReader()",id:"new-papacsvreader",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"loadData()",id:"loaddata",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"loadDataAsContent()",id:"loaddataascontent",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"addMetaData()",id:"addmetadata",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"class-papacsvreader",children:"Class: PapaCSVReader"}),"\n",(0,a.jsx)(s.p,{children:"papaparse-based csv parser\nCSVReader"}),"\n",(0,a.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,a.jsx)(s.p,{children:"BaseReader"}),"\n",(0,a.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/api/classes/FileReader",children:(0,a.jsx)(s.code,{children:"FileReader"})})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,a.jsx)(s.h3,{id:"new-papacsvreader",children:"new PapaCSVReader()"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"new PapaCSVReader"}),"(",(0,a.jsx)(s.code,{children:"concatRows"}),"?, ",(0,a.jsx)(s.code,{children:"colJoiner"}),"?, ",(0,a.jsx)(s.code,{children:"rowJoiner"}),"?, ",(0,a.jsx)(s.code,{children:"papaConfig"}),"?): ",(0,a.jsx)(s.a,{href:"/api/classes/PapaCSVReader",children:(0,a.jsx)(s.code,{children:"PapaCSVReader"})})]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Constructs a new instance of the class."}),"\n",(0,a.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"concatRows?"}),": ",(0,a.jsx)(s.code,{children:"boolean"})," = ",(0,a.jsx)(s.code,{children:"true"})]}),"\n",(0,a.jsx)(s.p,{children:"whether to concatenate all rows into one document.If set to False, a Document will be created for each row.True by default."}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"colJoiner?"}),": ",(0,a.jsx)(s.code,{children:"string"})," = ",(0,a.jsx)(s.code,{children:'", "'})]}),"\n",(0,a.jsx)(s.p,{children:'Separator to use for joining cols per row. Set to ", " by default.'}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"rowJoiner?"}),": ",(0,a.jsx)(s.code,{children:"string"}),' = "\\n"']}),"\n",(0,a.jsxs)(s.p,{children:["Separator to use for joining each row.Only used when ",(0,a.jsx)(s.code,{children:"concat_rows=True"}),'.Set to "\\n" by default.']}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"papaConfig?"}),": ",(0,a.jsx)(s.code,{children:"ParseConfig"}),"<",(0,a.jsx)(s.code,{children:"any"}),", ",(0,a.jsx)(s.code,{children:"undefined"}),">"]}),"\n",(0,a.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/api/classes/PapaCSVReader",children:(0,a.jsx)(s.code,{children:"PapaCSVReader"})})}),"\n",(0,a.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/classes/FileReader",children:(0,a.jsx)(s.code,{children:"FileReader"})}),".",(0,a.jsx)(s.a,{href:"/api/classes/FileReader#constructors",children:(0,a.jsx)(s.code,{children:"constructor"})})]}),"\n",(0,a.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/CSVReader.ts#L23",children:"packages/llamaflowjs/src/readers/CSVReader.ts:23"})}),"\n",(0,a.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(s.h3,{id:"loaddata",children:"loadData()"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"loadData"}),"(",(0,a.jsx)(s.code,{children:"filePath"}),"): ",(0,a.jsx)(s.code,{children:"Promise"}),"<",(0,a.jsx)(s.a,{href:"/api/classes/Document",children:(0,a.jsx)(s.code,{children:"Document"})}),"<",(0,a.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,a.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"filePath"}),": ",(0,a.jsx)(s.code,{children:"string"})]}),"\n",(0,a.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Promise"}),"<",(0,a.jsx)(s.a,{href:"/api/classes/Document",children:(0,a.jsx)(s.code,{children:"Document"})}),"<",(0,a.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,a.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n",(0,a.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/classes/FileReader",children:(0,a.jsx)(s.code,{children:"FileReader"})}),".",(0,a.jsx)(s.a,{href:"/api/classes/FileReader#loaddata",children:(0,a.jsx)(s.code,{children:"loadData"})})]}),"\n",(0,a.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/type.ts#L20",children:"packages/llamaflowjs/src/readers/type.ts:20"})}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h3,{id:"loaddataascontent",children:"loadDataAsContent()"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"loadDataAsContent"}),"(",(0,a.jsx)(s.code,{children:"fileContent"}),"): ",(0,a.jsx)(s.code,{children:"Promise"}),"<",(0,a.jsx)(s.a,{href:"/api/classes/Document",children:(0,a.jsx)(s.code,{children:"Document"})}),"<",(0,a.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,a.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Loads data from csv files"}),"\n",(0,a.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"fileContent"}),": ",(0,a.jsx)(s.code,{children:"Uint8Array"})]}),"\n",(0,a.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Promise"}),"<",(0,a.jsx)(s.a,{href:"/api/classes/Document",children:(0,a.jsx)(s.code,{children:"Document"})}),"<",(0,a.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,a.jsx)(s.code,{children:"Metadata"})}),">[]>"]}),"\n",(0,a.jsx)(s.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/classes/FileReader",children:(0,a.jsx)(s.code,{children:"FileReader"})}),".",(0,a.jsx)(s.a,{href:"/api/classes/FileReader#loaddataascontent",children:(0,a.jsx)(s.code,{children:"loadDataAsContent"})})]}),"\n",(0,a.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/CSVReader.ts#L42",children:"packages/llamaflowjs/src/readers/CSVReader.ts:42"})}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h3,{id:"addmetadata",children:"addMetaData()"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"static"})," ",(0,a.jsx)(s.strong,{children:"addMetaData"}),"(",(0,a.jsx)(s.code,{children:"filePath"}),"): (",(0,a.jsx)(s.code,{children:"doc"}),", ",(0,a.jsx)(s.code,{children:"index"}),") => ",(0,a.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"filePath"}),": ",(0,a.jsx)(s.code,{children:"string"})]}),"\n",(0,a.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"Function"})}),"\n",(0,a.jsx)(s.h5,{id:"parameters-4",children:"Parameters"}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"doc"}),": ",(0,a.jsx)(s.a,{href:"/api/classes/Document",children:(0,a.jsx)(s.code,{children:"Document"})}),"<",(0,a.jsx)(s.a,{href:"/api/type-aliases/Metadata",children:(0,a.jsx)(s.code,{children:"Metadata"})}),">"]}),"\n",(0,a.jsxs)(s.p,{children:["\u2022 ",(0,a.jsx)(s.strong,{children:"index"}),": ",(0,a.jsx)(s.code,{children:"number"})]}),"\n",(0,a.jsx)(s.h5,{id:"returns-4",children:"Returns"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"void"})}),"\n",(0,a.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/classes/FileReader",children:(0,a.jsx)(s.code,{children:"FileReader"})}),".",(0,a.jsx)(s.a,{href:"/api/classes/FileReader#addmetadata",children:(0,a.jsx)(s.code,{children:"addMetaData"})})]}),"\n",(0,a.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/LlamaFlowJs/LlamaFlowJs/blob/139be31ee5ea94733e9388ee9c0387243131c1bd/packages/llamaflowjs/src/readers/type.ts#L29",children:"packages/llamaflowjs/src/readers/type.ts:29"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},43327:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>i});var a=r(22155);const n={},d=a.createContext(n);function l(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);