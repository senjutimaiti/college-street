import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Home />
      <Router>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
