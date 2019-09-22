import React, { Fragment, useContext } from "react";
import BookContext from "../Context/bookContext";
import Spinner from "./Spinner";

const Results = () => {
  const bookContext = useContext(BookContext);
  const {
    results,
    loading,
    searchThis,
    searched,
    saveBook,
    searchText,
    searchBooks
  } = bookContext;

  return (
    <Fragment>
      <div className='row py-5 bg-secondary'>
        <div className='col-md-12'>
          {!searched && (
            <h1 className='text-dark text-center'>
              Get to Searching for a Book!
            </h1>
          )}
          {searched && (
            <h1 className='text-dark text-center'>
              Search Results for {searchThis}
            </h1>
          )}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='input-group-lg input-group mb-1'>
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
        </div>
      </div>
      <div className='row bg-white'>
        {!results.length && (
          <div className='col-md-12'>
            <h1 className='text-center text-dark'>No results yet!</h1>
          </div>
        )}
        {loading ? (
          <Spinner />
        ) : (
          results.map(result => (
            <div
              className='card col-md-3'
              key={result.title.split(" ").join("") + Math.random() * 1000}
            >
              <img
                src={
                  result.image
                    ? result.image
                    : "https://media.npr.org/assets/img/2018/11/18/gettyimages-865109088-170667a_wide-f4e3c4a58ad5e1268dec3654c0b2d490e320bba6-s800-c85.jpg"
                }
                className='card-img-top img-fluid'
                alt={result.title}
                style={{ width: "10vw", height: "20vh", margin: "auto" }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{result.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {result.authors ? result.authors.join(", ") : "Unknown"}
                </h6>
                <div style={{ height: "10rem", overflow: "auto" }}>
                  <p className='card-text'>
                    {result.description
                      ? result.description
                      : "No description provided."}
                  </p>
                </div>

                <a
                  href={result.link}
                  className='btn btn-primary btn-block'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                </a>
                <button
                  className='btn btn-secondary btn-block text-light'
                  data-num={result.number}
                  onClick={saveBook}
                >
                  Save
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Results;
