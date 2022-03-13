import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import Register from "./Pages/Register";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/ResetPassword">
            <ResetPassword />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/PrivacyPolicy">
            <PrivacyPolicy />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
