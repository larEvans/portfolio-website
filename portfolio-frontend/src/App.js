import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import Header from './components/Header'; 
import About from './pages/About.js';
import ContactPopup from './components/ContactPopup';
import Projects from './pages/Projects.js';
function App() {
  return (
    <div className="App">
      <Header />
      <ContactPopup />

      <Routes>

        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Navigate to="/" replace />} />
          <Route path="/About" element={<About />} />
         <Route path="/Projects" element={<Projects />} /> 

      </Routes>
    </div>
  );
}

export default App;
