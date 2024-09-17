import React from "react";
import HomePage from "../../pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Error from "../../pages/Error";
import Header from "../Header";
import Footer from "../Footer";

const AppRouter = () => {
  return (
    <React.StrictMode>
      <Router>
      <Header/>
      
        <Routes>
          <Route path="/" element={<HomePage />} />   
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />                 
        </Routes>        
      </Router>
      <Footer/>
    </React.StrictMode>
  );
};

export default AppRouter;
