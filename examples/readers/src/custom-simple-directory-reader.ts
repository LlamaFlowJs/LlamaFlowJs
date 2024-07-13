import type { Document, Metadata } from "llamaflowjs";
import { FileReader } from "llamaflowjs";
import {
  FILE_EXT_TO_READER,
  SimpleDirectoryReader,
} from "llamaflowjs/readers/SimpleDirectoryReader";
import { TextFileReader } from "llamaflowjs/readers/TextFileReader";

class ZipReader extends FileReader {
  loadDataAsContent(fileContent: Uint8Array): Promise<Document<Metadata>[]> {
    throw new Error("Implement me");
  }
}

const reader = new SimpleDirectoryReader();
const documents = await reader.loadData({
  directoryPath: "../data",
  defaultReader: new TextFileReader(),
  fileExtToReader: {
    ...FILE_EXT_TO_READER,
    zip: new ZipReader(),
  },
});

documents.forEach((doc) => {
  console.log(`document (${doc.id_}):`, doc.getText());
});
