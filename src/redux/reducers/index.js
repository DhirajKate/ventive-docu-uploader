
import {combineReducers} from 'redux';
import documents from './documents'
import documentsMetadata from './document-meta-info'
import activeFileIndex from './selected-file-index';
const rootReducer = combineReducers({
    documents,
    documentsMetadata,
    activeFileIndex
});

export default rootReducer;