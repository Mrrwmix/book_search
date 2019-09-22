import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-primary text-light justify-content-between row'>
      <a className='btn btn-link' href='/' rel='noopener noreferrer'>
        Home
      </a>
      <a href='/saved' className='btn btn-link' rel='noopener noreferrer'>
        Saved Books
      </a>
    </nav>
  );
};

export default Navbar;
