
import {ADD_DOCUMENT} from '../actions/action-list';

const documentMetadata = (state = [], action) =>{
 let newState;
 switch (action.type) {
   case ADD_DOCUMENT:
     newState.push(action.document.metadata);
     return newState;
   default:
     return state;
 }
}

export default documentMetadata;