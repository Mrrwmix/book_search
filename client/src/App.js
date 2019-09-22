import React from "react";
import "./App.css";
import BookState from "./Context/BookState";
import Navbar from "./Components/Navbar";
import Results from "./Components/Results";
import SavedBooks from "./Components/SavedBooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BookState>
      <Router>
        <div className='container bg-light'>
          <Navbar />
          <Switch>
            <Route exact path='/saved' component={SavedBooks} />
            <Route exact path='/' component={Results} />
          </Switch>
        </div>
      </Router>
    </BookState>
  );
}

export default App;
