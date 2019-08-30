import { SET_ACTIVE_FILE_INDEX, ADD_DOCUMENT } from "./action-list";

export const setActiveFileIndex = function(index){
    return({
        type:SET_ACTIVE_FILE_INDEX,
        selectedIndex:index
    })
}

export const addFile = function(document){
    return({
        type:ADD_DOCUMENT,
        document
    })
}