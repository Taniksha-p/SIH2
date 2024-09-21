<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./home/HomePage";
import AssessmentCreation from "./dashboard/AssessmentCreation";
import PerformanceReports from "./performanceReports/PerformanceReports";
import AccessibilityOptions from "./accessibility/AccessibilityOptions";
import Dashboard from "./Dashboardd/Dashboard";
import Support from "./support/Support";
import Include from "./WHY/include";
import ResultsAndAnalytics from "./Result/ResultsAndAnalytics";

const App = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6, // Adjust this to consider how much of the section needs to be visible
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <Router>
            <div className="flex flex-row w-screen">
                <Sidebar activeSection={activeSection} />

                {/* Main Content */}
                <div className="flex flex-col w-[85%] right-0 bg-gray-100 min-h-screen">
                    <div id="home" className="section">
                        <HomePage />
                    </div>

                    <div id="dashboard" className="section">
                        <Dashboard />
                    </div>

                    <div id="assessments" className="section">
                        <AssessmentCreation />
                    </div>

                    <div id="accessibility" className="section">
                        <AccessibilityOptions />
                    </div>

                    <div id="reports" className="section">
                        <PerformanceReports />
                    </div>

                    <div id="resultandanalytics" className="section">
                        <ResultsAndAnalytics/>
                    </div>

                    <div id="support" className="section">
                        <Support />
                    </div>
                </div>
            </div>
        </Router>
    );
>>>>>>> fe76c85bb0dcbdfbcfc082d21526b1ee7f309e53
};

export default App;
