
import {SET_ACTIVE_FILE_INDEX} from '../actions/action-list';

const activeFileIndex = (state = 0, action) =>{
 let newState;
 switch (action.type) {
   case SET_ACTIVE_FILE_INDEX:
     newState= action.selectedIndex;
     return newState;
   default:
     return state;
 }
}

export default activeFileIndex;