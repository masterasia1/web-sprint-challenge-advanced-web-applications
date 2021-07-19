import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute"

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    console.log("Logged out!");
  };
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href={logout}>logout</a>
        </header> 
        <switch>
        <PrivateRoute component={BubblePage} />
        <Route exact path="/" component={Login} />
        </switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.