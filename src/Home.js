import React from 'react';
import Sidebar from './Sidebar';
import './Home.css'; // Ensure this file contains the updated CSS for styling

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <main className="Home-main">
        <h2>Welcome to the Home Page</h2>
        {/* Main content goes here */}
      </main>
    </div>
  );
}

export default Home;
