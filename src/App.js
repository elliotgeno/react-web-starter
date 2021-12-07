import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "pages/Home/";
import Create from "pages/Create/";

// COMPONENTS
import Navigation from "components/Navigation";

// STYLES
import 'styles/common.scss';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;