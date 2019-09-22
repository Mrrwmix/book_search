import React, { useReducer } from "react";
import bookContext from "./bookContext";
import bookReducer from "./bookReducer";
import axios from "axios";
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

  const searchBooks = () => {
    axios
      .post(
        "http://localhost:5000/api/books",
        { field: state.searchThis },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        let newArr = [];
        for (let x in response.data) {
          newArr.push({
            title: response.data[x].volumeInfo.title,
            image: response.data[x].volumeInfo.imageLinks.thumbnail,
            authors: response.data[x].volumeInfo.authors,
            description: response.data[x].volumeInfo.description,
            link: response.data[x].volumeInfo.infoLink
          });
        }
        alert(newArr);
        dispatch({ type: SEARCH, payload: newArr });
      })
      .catch(err => dispatch({ type: ERRORED }));
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
