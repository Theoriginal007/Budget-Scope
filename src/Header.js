import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct
import logo from './logo.jpeg'; // Ensure this path is correct

function Header() {
  return (
    <header className="App-header">
      <div className="Header-container">
        <div className="Header-logo">
          <Link to="/">
            <img src={logo} alt="Public Budget Tracker Logo" className="Header-logo-img" />
          </Link>
        </div>
        <nav className="Header-nav">
          <ul className="Header-nav-list">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/feedback">Feedback</Link></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
