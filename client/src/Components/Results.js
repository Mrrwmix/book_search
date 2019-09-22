import React, { Fragment, useContext } from "react";
import BookContext from "../Context/bookContext";

const Results = () => {
  const bookContext = useContext(BookContext);
  const { results, error } = bookContext;
  return (
    <Fragment>
      <div className='jumbotron'>
        <h1 className='text-primary text-center'>Search Results for ...</h1>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          {error ? (
            <div>NOPE!</div>
          ) : (
            <div>
              {results.map(result => (
                <div className='card' style='width: 18rem;' key={result.title}>
                  <img
                    src={
                      result.image
                        ? result.image
                        : "https://media.npr.org/assets/img/2018/11/18/gettyimages-865109088-170667a_wide-f4e3c4a58ad5e1268dec3654c0b2d490e320bba6-s800-c85.jpg"
                    }
                    className='card-img-top'
                    alt={result.title}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{result.title}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {result.authors}
                    </h6>
                    <p className='card-text'>{result.description}</p>
                    <a href={result.link} className='btn btn-primary'>
                      More info
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Results;
