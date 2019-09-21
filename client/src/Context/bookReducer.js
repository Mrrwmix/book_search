import { SAVE, SEARCH, DELETE, ERRORED, TEXT_CHANGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case TEXT_CHANGE:
      return {
        ...state,
        searchThis: action.payload
      };
    default:
      return state;
  }
};
