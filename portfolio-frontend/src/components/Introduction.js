import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="introduction-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="pixel-text">Larson Evans</h1>
          <h2 className="pixel-text">Skilled Software Developer</h2>
          <p className="pixel-text description">
            Dedicated to building high-quality, efficient applications with
            expertise in front-end and back-end technologies.
          </p>
        </div>
        <div className="background-image" />
      </div>
      <button className="contact-button pixel-text">Contact Info</button>
    </div>
  );
}

export default Introduction;
