import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        {isAuthenticated ? (
          <Switch>
            <Route exact path="/account">
              <Profile />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/PrivacyPolicy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/AboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/ContactUs">
              <ContactUs />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/products/:keyword">
              <Products />
            </Route>
            <Redirect to="/account" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ForgotPassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path="/PrivacyPolicy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/AboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/ContactUs">
              <ContactUs />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/products/:keyword">
              <Products />
            </Route>
            <Redirect to="/" />
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
