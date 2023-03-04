import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootswatch/dist/morph/bootstrap.min.css";
import './App.css';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavTabs from "./components/Nav";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Router>
        <div className="appCont containter-fluid">
        <header>
      <NavTabs />
      </header>
        <Routes>
          <Route 
          exact path="/" 
          element={<Portfolio />} 
          />
          <Route 
          path="/about" 
          element={<About />} 
          />
          <Route 
          path="/resume" 
          element={<Resume />} 
          />
          <Route 
          path="/contact" 
          element={<Contact />} 
          />
          <Route 
          path="*" 
          element={<Portfolio />} 
          />
        </Routes>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
