import React, { Fragment, useContext, useEffect } from "react";
import Spinner from "./Spinner";
import BookContext from "../Context/bookContext";

const SavedBooks = () => {
  const bookContext = useContext(BookContext);
  const { savedBooks, deleteBook, findSavedBooks, loading } = bookContext;
  useEffect(
    () => findSavedBooks(),
    //eslint-disable-next-line
    []
  );
  return (
    <Fragment>
      <div className='bg-dark row py-5'>
        <div className='col-md-12'>
          <h1 className='text-center text-success'>Saved Books</h1>
        </div>
      </div>
      <div className='row bg-white'>
        {!savedBooks.length && (
          <div className='col-md-12'>
            <h1 className='text-center'>No books saved yet!</h1>
          </div>
        )}
        {loading ? (
          <Spinner />
        ) : (
          savedBooks.map(book => (
            <div
              className='card col-md-3'
              key={book.title.split(" ").join("") + Math.random() * 1000}
            >
              <img
                src={
                  book.image
                    ? book.image
                    : "https://media.npr.org/assets/img/2018/11/18/gettyimages-865109088-170667a_wide-f4e3c4a58ad5e1268dec3654c0b2d490e320bba6-s800-c85.jpg"
                }
                className='card-img-top img-fluid'
                alt={book.title}
                style={{ width: "10vw", height: "20vh", margin: "auto" }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{book.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {book.authors ? book.authors.join(", ") : "Unknown"}
                </h6>
                <div style={{ height: "10rem", overflow: "auto" }}>
                  <p className='card-text'>
                    {book.description
                      ? book.description
                      : "No description provided."}
                  </p>
                </div>

                <a
                  href={book.link}
                  className='btn btn-primary btn-block'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                </a>
                <a
                  className='btn btn-danger btn-block text-light'
                  data-num={book._id}
                  onClick={deleteBook}
                  href='#!'
                >
                  Delete
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default SavedBooks;
