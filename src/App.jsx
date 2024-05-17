// import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx"; 
import About from "./pages/About.jsx"; 
import Product from "./pages/Product.jsx"; 
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
