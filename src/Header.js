import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">Budget Tracker</div>
      <div className="header-right">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
        <div className="user-info">
          <span>SImon Kingori</span>
          <span>Administrator</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
