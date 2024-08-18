// src/MainLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import FeedbackForm from './FeedbackForm';
import './MainLayout.css'; // Include the layout CSS

function MainLayout() {
  return (
    <div className="Main-container">
      <Sidebar />
      <FeedbackForm />
    </div>
  );
}

export default MainLayout;
