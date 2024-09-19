// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AssessmentCreation from './dashboard/AssessmentCreation';
import PerformanceReports from './performanceReports/PerformanceReports';
import AccessibilityOptions from './accessibility/AccessibilityOptions';
import Dashboard from './Dashboardd/Dashboard';
import ResultsAndAnalytics from './Result/ResultsAndAnalytics';
import Include from './WHY/include';
import Support from './support/Support';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
          <Support/>
          <Routes>
            <Route path="/" element={<h1 className="text-4xl"></h1>} />
            <Route path="/dashboard" element={<h1 className="text-4xl">Dashboard</h1>} />
            <Route path="/assessments" element={<h1 className="text-4xl">Assessments</h1>} />
            <Route path="/accessibility" element={<h1 className="text-4xl">Accessibility Options</h1>} />
            <Route path="/reports" element={<h1 className="text-4xl">Performance Reports</h1>} />
            <Route path="/settings" element={<h1 className="text-4xl">Settings</h1>} />
            <Route path="/support" element={<h1 className="text-4xl">Help & Support</h1>} />
          </Routes>
          <HomePage/>
          <Dashboard/>
          <AssessmentCreation/>
          <AccessibilityOptions/>
          <PerformanceReports/>
          <ResultsAndAnalytics/>
          
          
          
          
        </div>
      </div>
    </Router>
  );
};

export default App;
