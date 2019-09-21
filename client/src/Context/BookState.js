import React, { useReducer } from "react";
import bookContext from "./bookContext";
import bookReducer from "./bookReducer";
import { SAVE, SEARCH, DELETE, ERRORED } from "./types";

const BookState = props => {
  const initialState = {
    savedBooks: [],
    results: [],
    searched: false,
    error: null
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  const searchBooks = async () => {
    try {
      //fetch
    } catch (err) {
      // error
    }
  };

  const deleteBook = async book => {
    // interact with api
  };

  const saveBook = async id => {
    // interact with api
  };

  return (
    <bookContext.Provider
      value={{
        savedBooks: state.savedBooks,
        results: state.results,
        searched: state.searched,
        error: state.error,
        searchBooks,
        deleteBook,
        saveBook
      }}
    >
      {props.children}
    </bookContext.Provider>
  );
};

export default BookState;
