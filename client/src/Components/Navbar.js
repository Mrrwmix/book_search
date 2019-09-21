import React, { useContext } from "react";
import BookContext from "../Context/bookContext";

const Navbar = () => {
  const bookContext = useContext(BookContext);
  const { searchThis, searchText, searchBooks } = bookContext;
  return (
    <nav class='navbar navbar-light bg-light justify-content-between'>
      <a class='navbar-brand'>Home</a>
      <form class='form-inline'>
        <input
          class='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={searchThis}
          onChange={searchText}
        />
        <button
          class='btn btn-outline-success my-2 my-sm-0'
          onClick={searchBooks(searchThis)}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
