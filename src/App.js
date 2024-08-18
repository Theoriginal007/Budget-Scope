import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AIComponent from './AIComponent';
import HelpSection from './HelpSection';
import FeedbackForm from './FeedbackForm';
import NotFound from './NotFound';
import ChatbotComponent from './ChatbotComponent';
import MainLayout from './MainLayout';
import DepartmentDetails from './DepartmentDetails';
import Home from './Home'; // Ensure this is the correct path if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Sidebar className="App-sidebar" /> {/* Apply sidebar styles */}
          <div className="Content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ai" element={<AIComponent />} />
              <Route path="/help" element={<HelpSection />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/department-details" element={<DepartmentDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <ChatbotComponent />
      </div>
    </Router>
  );
}

export default App;
