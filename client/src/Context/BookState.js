import React, { useReducer } from "react";
import bookContext from "./bookContext";
import bookReducer from "./bookReducer";
import axios from "axios";
import {
  SAVE,
  SEARCH,
  DELETE,
  TEXT_CHANGE,
  RETRIEVE,
  SET_LOADING
} from "./types";

const BookState = props => {
  const initialState = {
    savedBooks: [],
    results: [],
    searched: false,
    searchThis: "",
    loading: null
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  const findSavedBooks = () => {
    dispatch({ type: SET_LOADING });
    axios
      .get("/api/books")
      .then(response => dispatch({ type: RETRIEVE, payload: response.data }))
      .catch(err => console.error(err));
  };

  const searchText = e => {
    dispatch({ type: TEXT_CHANGE, payload: e.target.value });
  };

  const searchBooks = () => {
    dispatch({ type: SET_LOADING });
    axios
      .post(
        "/api/books",
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
            number: x,
            title: response.data[x].volumeInfo.title,
            image: response.data[x].volumeInfo.imageLinks
              ? response.data[x].volumeInfo.imageLinks.smallThumbnail
              : "https://media.npr.org/assets/img/2018/11/18/gettyimages-865109088-170667a_wide-f4e3c4a58ad5e1268dec3654c0b2d490e320bba6-s800-c85.jpg",
            authors: response.data[x].volumeInfo.authors,
            description: response.data[x].volumeInfo.description,
            link: response.data[x].volumeInfo.infoLink
          });
        }
        return dispatch({ type: SEARCH, payload: newArr });
      })
      .catch(err => console.error(err));
  };

  const deleteBook = e => {
    let theID = e.target.getAttribute("data-num");
    axios.delete(`/api/books/${theID}`);
    dispatch({ type: DELETE, payload: theID });
  };

  const saveBook = e => {
    let myBook = {
      title: state.results[e.target.getAttribute("data-num")].title,
      image: state.results[e.target.getAttribute("data-num")].image,
      authors: state.results[e.target.getAttribute("data-num")].authors,
      description: state.results[e.target.getAttribute("data-num")].description,
      link: state.results[e.target.getAttribute("data-num")].link
    };
    console.log(myBook);
    e.target.innerText = "Saved!";
    e.target.className = "btn btn-danger btn-block text-light";
    axios
      .post("/api/saved", myBook)
      .then(response => dispatch({ type: SAVE, payload: response }))
      .catch(err => console.error(err));
  };

  return (
    <bookContext.Provider
      value={{
        savedBooks: state.savedBooks,
        results: state.results,
        searched: state.searched,
        searchThis: state.searchThis,
        searchBooks,
        searchText,
        deleteBook,
        saveBook,
        findSavedBooks,
        loading: state.loading
      }}
    >
      {props.children}
    </bookContext.Provider>
  );
};

export default BookState;
