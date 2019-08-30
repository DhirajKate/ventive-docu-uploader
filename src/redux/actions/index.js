import { ADD_DOCUMENT, SET_ACTIVE_FILE_INDEX } from "./action-list";

export const setActiveFileIndex = index => ({
  type: SET_ACTIVE_FILE_INDEX,
  selectedIndex: index
});

export const addFile = document => ({
  type: ADD_DOCUMENT,
  document
});
