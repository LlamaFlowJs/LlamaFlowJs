import { SimpleDirectoryReader } from "llamaflowjs/readers/SimpleDirectoryReader";
// or
// import { SimpleDirectoryReader } from 'llamaflowjs'

const reader = new SimpleDirectoryReader();
const documents = await reader.loadData("../data");

documents.forEach((doc) => {
  console.log(`document (${doc.id_}):`, doc.getText());
});
