import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Resume from './pages/Resume'; // Import your components
import Header from './components/Header'; // Import the Header component
import ContactPopup from './components/ContactPopup';
function App() {
  return (
    <div className="App">
      <Header />
      <ContactPopup /> {/* Include the ContactPopup component */}
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
        {/* Optional: Resume route */}
      </Routes>
      <div className="" />
    </div>
  );
}

export default App;
