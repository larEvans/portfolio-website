import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";// Import Routes and Route
import Index from "./pages/Index.js";// Import your components
import Header from './components/Header'; // Import the Header component
import ContactPopup from './components/ContactPopup';
function App() {
  return (
    <div className="App">
      <Header />
      <ContactPopup /> {/* Include the ContactPopup component */}
      <Routes>
        <Route path="/index" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* Optional: Resume route */}
      </Routes>
      <div className="" />
    </div>
  );
}

export default App;
