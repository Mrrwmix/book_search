import { SAVE, SEARCH, DELETE, ERRORED, TEXT_CHANGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ERRORED:
      return {
        ...state,
        error: true
      };
    case SEARCH:
      return {
        ...state,
        error: null,
        results: action.payload,
        searched: true
      };
    case TEXT_CHANGE:
      return {
        ...state,
        searchThis: action.payload
      };
    default:
      return state;
  }
};
