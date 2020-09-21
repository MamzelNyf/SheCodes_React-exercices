import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/HomePage";
import Ex1Page from "./pages/Ex1Page";
import Ex2Page from "./pages/Ex2Page";

import "./App.css";

function App() {
  /**
   * return full name of the user
   * @param   {string} firstName  First Name of the User
   * @param   {string} lastName   Last Name of the User
   * @return  {string}            Fullname of the user
   */
  function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  console.log(getFullName);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1> From JS to React</h1>
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/increment">
            <Ex1Page />
          </Route>
          <Route path="/rock-it">
            <Ex2Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
