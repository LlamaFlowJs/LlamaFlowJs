"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9258],{44697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=t(65723),a=t(43327);const r={},o="Faithfulness Evaluator",i={id:"modules/evaluation/modules/faithfulness",title:"Faithfulness Evaluator",description:"Faithfulness is a measure of whether the generated answer is faithful to the retrieved contexts. In other words, it measures whether there is any hallucination in the generated answer.",source:"@site/docs/modules/evaluation/modules/faithfulness.md",sourceDirName:"modules/evaluation/modules",slug:"/modules/evaluation/modules/faithfulness",permalink:"/modules/evaluation/modules/faithfulness",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Correctness Evaluator",permalink:"/modules/evaluation/modules/correctness"},next:{title:"Relevancy Evaluator",permalink:"/modules/evaluation/modules/relevancy"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"faithfulness-evaluator",children:"Faithfulness Evaluator"}),"\n",(0,s.jsx)(n.p,{children:"Faithfulness is a measure of whether the generated answer is faithful to the retrieved contexts. In other words, it measures whether there is any hallucination in the generated answer."}),"\n",(0,s.jsx)(n.p,{children:"This uses the FaithfulnessEvaluator module to measure if the response from a query engine matches any source nodes."}),"\n",(0,s.jsx)(n.p,{children:"This is useful for measuring if the response was hallucinated. The evaluator returns a score between 0 and 1, where 1 means the response is faithful to the retrieved contexts."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Firstly, you need to install the package:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm i llamaflowjs\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set the OpenAI API key:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export OPENAI_API_KEY=your-api-key\n"})}),"\n",(0,s.jsx)(n.p,{children:"Import the required modules:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import {\n  Document,\n  FaithfulnessEvaluator,\n  OpenAI,\n  VectorStoreIndex,\n  Settings,\n} from "llamaflowjs";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's setup gpt-4 for better results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'Settings.llm = new OpenAI({\n  model: "gpt-4",\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's create a vector index and query engine with documents and query engine respectively. Then, we can evaluate the response with the query and response from the query engine.:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const documents = [\n  new Document({\n    text: `The city came under British control in 1664 and was renamed New York after King Charles II of England granted the lands to his brother, the Duke of York. The city was regained by the Dutch in July 1673 and was renamed New Orange for one year and three months; the city has been continuously named New York since November 1674. New York City was the capital of the United States from 1785 until 1790, and has been the largest U.S. city since 1790. The Statue of Liberty greeted millions of immigrants as they came to the U.S. by ship in the late 19th and early 20th centuries, and is a symbol of the U.S. and its ideals of liberty and peace. In the 21st century, New York City has emerged as a global node of creativity, entrepreneurship, and as a symbol of freedom and cultural diversity. The New York Times has won the most Pulitzer Prizes for journalism and remains the U.S. media\'s "newspaper of record". In 2019, New York City was voted the greatest city in the world in a survey of over 30,000 p...\tPass`,\n  }),\n];\n\nconst vectorIndex = await VectorStoreIndex.fromDocuments(documents);\n\nconst queryEngine = vectorIndex.asQueryEngine();\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's evaluate the response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const query = "How did New York City get its name?";\n\nconst evaluator = new FaithfulnessEvaluator();\n\nconst response = await queryEngine.query({\n  query,\n});\n\nconst result = await evaluator.evaluateResponse({\n  query,\n  response,\n});\n\nconsole.log(`the response is ${result.passing ? "faithful" : "not faithful"}`);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"the response is faithful\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/classes/FaithfulnessEvaluator",children:"FaithfulnessEvaluator"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(22155);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);