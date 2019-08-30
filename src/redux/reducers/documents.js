import { ADD_DOCUMENT } from "../actions/action-list";

const documents = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case ADD_DOCUMENT:
      newState.push(action.document.file);
      return newState;
    default:
      return state;
  }
};

export default documents;
