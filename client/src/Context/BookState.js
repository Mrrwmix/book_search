import React, { useReducer } from "react";
import bookContext from "./bookContext";
import bookReducer from "./bookReducer";
import { SAVE, SEARCH, DELETE, ERRORED, TEXT_CHANGE } from "./types";

const BookState = props => {
  const initialState = {
    savedBooks: [],
    results: [],
    searched: false,
    error: null,
    searchThis: ""
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  const searchText = e => {
    dispatch({ type: TEXT_CHANGE, payload: e.target.value });
  };

  const searchBooks = async (e, field) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        body: field
      });
      dispatch({ type: SEARCH, payload: res });
    } catch (err) {
      dispatch({ type: ERRORED, payload: err.response.msg });
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
        searchThis: state.searchThis,
        searchBooks,
        searchText,
        deleteBook,
        saveBook
      }}
    >
      {props.children}
    </bookContext.Provider>
  );
};

export default BookState;
