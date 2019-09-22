import {
  SAVE,
  SEARCH,
  DELETE,
  TEXT_CHANGE,
  RETRIEVE,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH:
      return {
        ...state,
        loading: false,
        results: action.payload,
        searched: true
      };
    case SAVE:
      return {
        ...state,
        savedBooks: [...state.savedBooks, action.payload.data]
      };
    case RETRIEVE:
      return {
        ...state,
        savedBooks: [...action.payload],
        loading: false
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
