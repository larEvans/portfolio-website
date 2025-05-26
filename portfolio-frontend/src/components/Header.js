import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // or your router of choice
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/App.css";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo">LJE</div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            {/* <li>
              <Link to="/contact" className="btn-call">
                Book a Call
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
