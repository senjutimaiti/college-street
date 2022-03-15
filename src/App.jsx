import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Search from "./pages/Search";

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
          <Route exact path="/Search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
