import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";// Import your components
import Header from './components/Header'; // Import the Header component
import ContactPopup from './components/ContactPopup';
function App() {
  return (
    <div className="App">
      <Header />
      <ContactPopup />

      <Routes>
        {/* THIS is your home page */}
        <Route path="/" element={<Home />} />

        {/* redirect /index if anyone types it */}
        <Route path="/Home" element={<Navigate to="/" replace />} />

        {/* catch-all: redirect anything else back home */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
}

export default App;
