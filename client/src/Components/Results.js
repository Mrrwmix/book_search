import React, { Fragment, useContext, useEffect, useCallback } from "react";
import BookContext from "../Context/bookContext";

const Results = () => {
  const bookContext = useContext(BookContext);
  const { results, error, searchThis, searched } = bookContext;

  return (
    <Fragment>
      <div className='jumbotron'>
        {!searched && (
          <h1 className='text-info text-center'>
            Get to Searching for a Book!
          </h1>
        )}
        {searched && (
          <h1 className='text-primary text-center'>
            Search Results for {searchThis}
          </h1>
        )}
      </div>
      <div className='row'>
        {!results.length && (
          <div className='col-md-12'>
            <h1 className='text-center text-dark'>No results yet!</h1>
          </div>
        )}
        {results.map(result => (
          <div
            className='card col-md-3'
            key={result.title.split(" ").join("")}
            data-num={result.number}
          >
            <img
              src={
                result.image
                  ? result.image
                  : "https://media.npr.org/assets/img/2018/11/18/gettyimages-865109088-170667a_wide-f4e3c4a58ad5e1268dec3654c0b2d490e320bba6-s800-c85.jpg"
              }
              className='card-img-top img-fluid'
              alt={result.title}
            />
            <div className='card-body'>
              <h5 className='card-title'>{result.title}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                {result.authors.join(", ")}
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
              <a
                className='btn btn-secondary btn-block text-light'
                target='_blank'
                rel='noopener noreferrer'
              >
                Save
              </a>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Results;
