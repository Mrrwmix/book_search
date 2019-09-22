import React, { useContext } from "react";
import BookContext from "../Context/bookContext";

const Navbar = () => {
  const bookContext = useContext(BookContext);
  const { searchThis, searchText, searchBooks } = bookContext;
  return (
    <nav className='navbar navbar-light bg-light justify-content-between'>
      <a className='navbar-brand' href='/' rel='noopener noreferrer'>
        Home
      </a>
      <a href='/saved' rel='noopener noreferrer'>
        Saved Books
      </a>
      <div className='form-inline'>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={searchThis}
          onChange={searchText}
        />
        <button
          className='btn btn-outline-success my-2 my-sm-0'
          onClick={searchBooks}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
