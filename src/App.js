import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// PAGES
import Home from "pages/Home/";
import Create from "pages/Create/";

// COMPONENTS
import Navigation from "components/Navigation";

// STYLES
import 'styles/common.scss';


// https://reactrouter.com/docs/en/v6/getting-started/overview
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;