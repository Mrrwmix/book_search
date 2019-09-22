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
    </nav>
  );
};

export default Navbar;
