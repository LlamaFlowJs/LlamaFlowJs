import { SimpleDirectoryReader } from "llamaflow/readers/SimpleDirectoryReader";
// or
// import { SimpleDirectoryReader } from 'llamaflow'

const reader = new SimpleDirectoryReader();
const documents = await reader.loadData("../data");

documents.forEach((doc) => {
  console.log(`document (${doc.id_}):`, doc.getText());
});
