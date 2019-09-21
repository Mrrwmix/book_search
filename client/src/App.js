import React from "react";
import "./App.css";
import BookState from "./Context/BookState";
import Navbar from "./Components/Navbar";
import Results from "./Components/Results";
import SavedBooks from "./Components/SavedBooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BookState>
      <div className='container bg-light'>
        <Navbar />
        <Results />
        <SavedBooks />
      </div>
    </BookState>
  );
}

export default App;
