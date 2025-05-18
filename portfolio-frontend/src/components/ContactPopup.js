// src/components/ContactPopup.js
import React, { useState } from 'react';
import '../pages/css/App.css';

const ContactPopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
      <>
        {/* Button to Toggle Pop-Up */}
        <div className="popup-button" onClick={togglePopup}>
          Contact Info
        </div>

        {/* Pop-Up Content */}
        {isPopupOpen && (
          <div className="popup-content">
            <p>
              Phone: <a href="tel:404-907-9942">404-907-9942</a>
            </p>
            <p>
              LinkedIn:
              <a
                href="https://linkedin.com/in/larson-evans-72687b178/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/Larson-Evans
              </a>
            </p>
            <p>
              Email:
              <a
                href="mailto:larsonevans21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                larsonevans21@gmail.com
              </a>
            </p>
          </div>
        )}
      </>
    );
};

export default ContactPopup;