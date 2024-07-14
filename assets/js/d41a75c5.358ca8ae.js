"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5641],{64605:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var s=d(65723),i=d(43327);const l={},r="Class: abstract BaseNode<T>",c={id:"api/classes/BaseNode",title:"Class: abstract BaseNode\\<T\\>",description:"Generic abstract class for retrievable nodes",source:"@site/docs/api/classes/BaseNode.md",sourceDirName:"api/classes",slug:"/api/classes/BaseNode",permalink:"/LlamaFlowJs/api/classes/BaseNode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Class: abstract BaseLLM\\<AdditionalChatOptions, AdditionalMessageOptions\\>",permalink:"/LlamaFlowJs/api/classes/BaseLLM"},next:{title:"Class: abstract BaseObjectNodeMapping",permalink:"/LlamaFlowJs/api/classes/BaseObjectNodeMapping"}},a={},t=[{value:"Extended by",id:"extended-by",level:2},{value:"Type Parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new BaseNode()",id:"new-basenode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"embedding?",id:"embedding",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"excludedEmbedMetadataKeys",id:"excludedembedmetadatakeys",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"excludedLlmMetadataKeys",id:"excludedllmmetadatakeys",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"id_",id:"id_",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"relationships",id:"relationships",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Accessors",id:"accessors",level:2},{value:"childNodes",id:"childnodes",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"hash",id:"hash",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"nextNode",id:"nextnode",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"parentNode",id:"parentnode",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"prevNode",id:"prevnode",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"sourceNode",id:"sourcenode",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"type",id:"type",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Methods",id:"methods",level:2},{value:"asRelatedNodeInfo()",id:"asrelatednodeinfo",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"clone()",id:"clone",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"generateHash()",id:"generatehash",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"getContent()",id:"getcontent",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"getEmbedding()",id:"getembedding",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"getMetadataStr()",id:"getmetadatastr",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"setContent()",id:"setcontent",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"toJSON()",id:"tojson",level:3},{value:"Returns",id:"returns-14",level:4},{value:"See",id:"see",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"toMutableJSON()",id:"tomutablejson",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-22",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"class-abstract-basenodet",children:["Class: ",(0,s.jsx)(n.code,{children:"abstract"})," BaseNode<T>"]}),"\n",(0,s.jsx)(n.p,{children:"Generic abstract class for retrievable nodes"}),"\n",(0,s.jsx)(n.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/TextNode",children:(0,s.jsx)(n.code,{children:"TextNode"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"T"})," ",(0,s.jsx)(n.em,{children:"extends"})," ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,s.jsx)(n.code,{children:"Metadata"})})," = ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,s.jsx)(n.code,{children:"Metadata"})})]}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"new-basenode",children:"new BaseNode()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"protected"})," ",(0,s.jsx)(n.strong,{children:"new BaseNode"}),"<",(0,s.jsx)(n.code,{children:"T"}),">(",(0,s.jsx)(n.code,{children:"init"}),"?): ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/BaseNode",children:(0,s.jsx)(n.code,{children:"BaseNode"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"init?"}),": ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/type-aliases/BaseNodeParams",children:(0,s.jsx)(n.code,{children:"BaseNodeParams"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/BaseNode",children:(0,s.jsx)(n.code,{children:"BaseNode"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:57"}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"embedding",children:"embedding?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"embedding"}),": ",(0,s.jsx)(n.code,{children:"number"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:51"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"excludedembedmetadatakeys",children:"excludedEmbedMetadataKeys"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"excludedEmbedMetadataKeys"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:53"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"excludedllmmetadatakeys",children:"excludedLlmMetadataKeys"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"excludedLlmMetadataKeys"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:54"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"id_",children:"id_"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"id_"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The unique ID of the Node/Document. The trailing underscore is here\nto avoid collisions with the id keyword in Python."}),"\n",(0,s.jsx)(n.p,{children:"Set to a UUID by default."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:50"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"metadata"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"metadata"}),": ",(0,s.jsx)(n.code,{children:"T"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:52"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"relationships",children:"relationships"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"relationships"}),": ",(0,s.jsx)(n.code,{children:"Partial"}),"<",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/enumerations/NodeRelationship",children:(0,s.jsx)(n.code,{children:"NodeRelationship"})}),", ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/type-aliases/RelatedNodeType",children:(0,s.jsx)(n.code,{children:"RelatedNodeType"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">>>"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:55"}),"\n",(0,s.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,s.jsx)(n.h3,{id:"childnodes",children:"childNodes"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"childNodes"}),"(): ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">[]"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:66"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"hash",children:"hash"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:56"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nextnode",children:"nextNode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"nextNode"}),"(): ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:64"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"parentnode",children:"parentNode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"parentNode"}),"(): ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:65"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"prevnode",children:"prevNode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"prevNode"}),"(): ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:63"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"sourcenode",children:"sourceNode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"sourceNode"}),"(): ",(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"})," | ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:62"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.code,{children:"abstract"})," ",(0,s.jsx)(n.strong,{children:"type"}),"(): ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/enumerations/ObjectType",children:(0,s.jsx)(n.code,{children:"ObjectType"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/enumerations/ObjectType",children:(0,s.jsx)(n.code,{children:"ObjectType"})})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:58"}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"asrelatednodeinfo",children:"asRelatedNodeInfo()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"asRelatedNodeInfo"}),"(): ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/interfaces/RelatedNodeInfo",children:(0,s.jsx)(n.code,{children:"RelatedNodeInfo"})}),"<",(0,s.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:69"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"clone",children:"clone()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"clone"}),"(): ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/BaseNode",children:(0,s.jsx)(n.code,{children:"BaseNode"})}),"<",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,s.jsx)(n.code,{children:"Metadata"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/classes/BaseNode",children:(0,s.jsx)(n.code,{children:"BaseNode"})}),"<",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/type-aliases/Metadata",children:(0,s.jsx)(n.code,{children:"Metadata"})}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:76"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"generatehash",children:"generateHash()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"abstract"})," ",(0,s.jsx)(n.strong,{children:"generateHash"}),"(): ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-16",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:67"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getcontent",children:"getContent()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"abstract"})," ",(0,s.jsx)(n.strong,{children:"getContent"}),"(",(0,s.jsx)(n.code,{children:"metadataMode"}),"): ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"metadataMode"}),": ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/enumerations/MetadataMode",children:(0,s.jsx)(n.code,{children:"MetadataMode"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-17",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:59"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getembedding",children:"getEmbedding()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getEmbedding"}),"(): ",(0,s.jsx)(n.code,{children:"number"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"number"}),"[]"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-18",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:68"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getmetadatastr",children:"getMetadataStr()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"abstract"})," ",(0,s.jsx)(n.strong,{children:"getMetadataStr"}),"(",(0,s.jsx)(n.code,{children:"metadataMode"}),"): ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"metadataMode"}),": ",(0,s.jsx)(n.a,{href:"/LlamaFlowJs/api/enumerations/MetadataMode",children:(0,s.jsx)(n.code,{children:"MetadataMode"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-19",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:60"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"setcontent",children:"setContent()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"abstract"})," ",(0,s.jsx)(n.strong,{children:"setContent"}),"(",(0,s.jsx)(n.code,{children:"value"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"value"}),": ",(0,s.jsx)(n.code,{children:"unknown"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-13",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-20",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:61"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tojson",children:"toJSON()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"toJSON"}),"(): ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Called by built in JSON.stringify (see ",(0,s.jsx)(n.a,{href:"https://javascript.info/json",children:"https://javascript.info/json"}),")\nProperties are read-only as they are not deep-cloned (not necessary for stringification)."]}),"\n",(0,s.jsx)(n.h4,{id:"returns-14",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(n.h4,{id:"see",children:"See"}),"\n",(0,s.jsx)(n.p,{children:"toMutableJSON - use to return a mutable JSON instead"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-21",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:75"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tomutablejson",children:"toMutableJSON()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"toMutableJSON"}),"(): ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Converts the object to a JSON representation.\nProperties can be safely modified as a deep clone of the properties are created."}),"\n",(0,s.jsx)(n.h4,{id:"returns-15",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The JSON representation of the object."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-22",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:"packages/core/dist/schema/index.d.ts:82"})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},43327:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>c});var s=d(22155);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);