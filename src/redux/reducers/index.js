import { combineReducers } from "redux";
import documentsMetadata from "./document-meta-info";
import documents from "./documents";
import activeFileIndex from "./selected-file-index";
const rootReducer = combineReducers({
  documents,
  documentsMetadata,
  activeFileIndex
});

export default rootReducer;
