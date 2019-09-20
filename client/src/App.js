import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Results from "./Components/Results";
import SavedBooks from "./Components/SavedBooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='container bg-light'>
      <Navbar />
      <Results />
      <SavedBooks />
    </div>
  );
}

export default App;
