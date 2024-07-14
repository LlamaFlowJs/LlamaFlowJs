"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6701],{7523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(65723),s=t(43327);const r={},o="Adding persistent vector storage",i={id:"guides/agents/qdrant",title:"Adding persistent vector storage",description:"In the previous examples, we've been loading our data into memory each time we run the agent. This is fine for small datasets, but for larger datasets you'll want to store your embeddings in a database. llamaflowjs provides a VectorStore class that can store your embeddings in a variety of databases. We're going to use Qdrant, a popular vector store, for this example.",source:"@site/docs/guides/agents/7_qdrant.mdx",sourceDirName:"guides/agents",slug:"/guides/agents/qdrant",permalink:"/guides/agents/qdrant",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"mySidebar",previous:{title:"Adding LlamaParse",permalink:"/guides/agents/llamaparse"},next:{title:"See all examples",permalink:"/examples/more_examples"}},c={},l=[{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"adding-persistent-vector-storage",children:"Adding persistent vector storage"}),"\n",(0,a.jsxs)(n.p,{children:["In the previous examples, we've been loading our data into memory each time we run the agent. This is fine for small datasets, but for larger datasets you'll want to store your embeddings in a database. llamaflowjs provides a ",(0,a.jsx)(n.code,{children:"VectorStore"})," class that can store your embeddings in a variety of databases. We're going to use ",(0,a.jsx)(n.a,{href:"https://qdrant.tech/",children:"Qdrant"}),", a popular vector store, for this example."]}),"\n",(0,a.jsxs)(n.p,{children:["We can get a local instance of Qdrant running very simply with Docker (make sure you ",(0,a.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"install Docker"})," first):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker pull qdrant/qdrant\ndocker run -p 6333:6333 qdrant/qdrant\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And in our code we initialize a ",(0,a.jsx)(n.code,{children:"VectorStore"})," with the Qdrant URL:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'// initialize qdrant vector store\nconst vectorStore = new QdrantVectorStore({\n  url: "http://localhost:6333",\n});\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now once we have loaded our documents, we can instantiate an index with the vector store:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// create a query engine from our documents\nconst index = await VectorStoreIndex.fromDocuments(documents, { vectorStore });\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.a,{href:"https://github.com/run-llama/ts-agents/blob/main/5_qdrant/agent.ts",children:"the final iteration"})," you can see that we have also implemented a very naive caching mechanism to avoid re-parsing the PDF each time we run the agent:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'// load cache.json and parse it\nlet cache = {};\nlet cacheExists = false;\ntry {\n  await fs.access(PARSING_CACHE, fs.constants.F_OK);\n  cacheExists = true;\n} catch (e) {\n  console.log("No cache found");\n}\nif (cacheExists) {\n  cache = JSON.parse(await fs.readFile(PARSING_CACHE, "utf-8"));\n}\n\nconst filesToParse = ["../data/sf_budget_2023_2024.pdf"];\n\n// load our data, reading only files we haven\'t seen before\nlet documents = [];\nconst reader = new LlamaParseReader({ resultType: "markdown" });\nfor (let file of filesToParse) {\n  if (!cache[file]) {\n    documents = documents.concat(await reader.loadData(file));\n    cache[file] = true;\n  }\n}\n\n// write the cache back to disk\nawait fs.writeFile(PARSING_CACHE, JSON.stringify(cache));\n'})}),"\n",(0,a.jsx)(n.p,{children:"Since parsing a PDF can be slow, especially a large one, using the pre-parsed chunks in Qdrant can significantly speed up your agent."}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsx)(n.p,{children:"In this guide you've learned how to"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"create_agent",children:"Create an agent"})}),"\n",(0,a.jsx)(n.li,{children:"Use remote LLMs like GPT-4"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"local_model",children:"Use local LLMs like Mixtral"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"agentic_rag",children:"Create a RAG query engine"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"rag_and_tools",children:"Turn functions and query engines into agent tools"})}),"\n",(0,a.jsx)(n.li,{children:"Combine those tools"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"llamaparse",children:"Enhance your parsing with LlamaParse"})}),"\n",(0,a.jsx)(n.li,{children:"Persist your data in a vector store"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The next steps are up to you! Try creating more complex functions and query engines, and set your agent loose on the world."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(22155);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);