import { SAVE, SEARCH, DELETE, ERRORED, TEXT_CHANGE, RETRIEVE } from "./types";

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
    case SAVE:
      return {
        ...state,
        error: null,
        savedBooks: [...state.savedBooks, action.payload.data]
      };
    case RETRIEVE:
      return {
        ...state,
        savedBooks: [...action.payload]
      };
    case DELETE:
      return {
        ...state,
        savedBooks: state.savedBooks.filter(book => book._id !== action.payload)
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
