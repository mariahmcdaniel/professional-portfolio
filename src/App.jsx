import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootswatch/dist/morph/bootstrap.min.css";
import './App.css';
import Portfolio from "./pages/Portfolio";
import BUILT_APPS from "./pages/Portfolio/Built_Apps";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CLIENT_PROJECTS from "./pages/Portfolio/Client_Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import SplashPage from "./components/Splash";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import Test from "./pages/Test";

function App() {

  return (
    <div className="App">
      <Router>
        <div className="appCont containter-fluid">
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<SplashPage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/portfolio" 
            element={<Portfolio />} />
            <Route 
            path="/about" 
            element={<About />} 
            />
            <Route 
            path="/my-apps" 
            element={<BUILT_APPS />} 
            />
            <Route 
            path="/my-projects" 
            element={<CLIENT_PROJECTS />} 
            />
            <Route 
            path="/test" 
            element={<Test />} 
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
          </Route>  
        </Routes>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
