<<<<<<< HEAD
// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaChartBar, FaFileAlt, FaUserCog, FaAccessibleIcon, FaQuestionCircle, FaCog } from 'react-icons/fa';
import ProfileSection from './ProfileSection';
import NavbarLink from './NavbarLink';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-64 fixed top-0 left-0 shadow-lg">
      {/* Profile Section */}
      <ProfileSection />

      {/* Navbar Links */}
      <div className="mt-4">
        <NavbarLink icon={<FaHome />} label="Home" to="/" />
        <NavbarLink icon={<FaChartBar />} label="Dashboard" to="/dashboard" />
        <NavbarLink icon={<FaFileAlt />} label="Assessments" to="/assessments" />
        <NavbarLink icon={<FaAccessibleIcon />} label="Accessibility" to="/accessibility" />
        <NavbarLink icon={<FaChartBar />} label="Performance Reports" to="/reports" />
        <NavbarLink icon={<FaCog />} label="Settings" to="/settings" />
        <NavbarLink icon={<FaQuestionCircle />} label="Help & Support" to="/support" />
      </div>
    </div>
  );
=======
import React from "react";
import {
    FaHome,
    FaChartBar,
    FaFileAlt,
    FaAccessibleIcon,
    FaQuestionCircle,
    FaCog,
} from "react-icons/fa";
import ProfileSection from "./ProfileSection";

const Sidebar = ({ activeSection }) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const getActiveClass = (id) => {
        return activeSection === id
            ? "bg-gray-600 rounded-md text-white"
            : "bg-gray-900 text-gray-400";
    };

    return (
        <div className="h-screen bg-gray-900 w-[15%] sticky top-0 left-0 shadow-lg">
            <div className="mt-4">
                <ProfileSection />
                <button
                    className={`w-full text-left p-4 hover:bg-gray-600 rounded-md hover:text-gray-200 ${getActiveClass(
                        "home"
                    )}`}
                    onClick={() => scrollToSection("home")}
                >
                    <FaHome className="inline mb-1 mr-4" />
                    Home
                </button>

                <button
                    className={`w-full text-left p-4 hover:bg-gray-600 rounded-md hover:text-gray-200 ${getActiveClass(
                        "dashboard"
                    )}`}
                    onClick={() => scrollToSection("dashboard")}
                >
                    <FaChartBar className="inline mb-1 mr-4" />
                    Dashboard
                </button>

                <button
                    className={`w-full text-left p-4 hover:bg-gray-600 rounded-md hover:text-gray-200 ${getActiveClass(
                        "assessments"
                    )}`}
                    onClick={() => scrollToSection("assessments")}
                >
                    <FaFileAlt className="inline mb-1 mr-4" />
                    Assessments
                </button>

                <button
                    className={`w-full text-left p-4 hover:bg-gray-600 rounded-md hover:text-gray-200 ${getActiveClass(
                        "accessibility"
                    )}`}
                    onClick={() => scrollToSection("accessibility")}
                >
                    <FaAccessibleIcon className="inline mb-1 mr-4" />
                    Accessibility
                </button>

                <button
                    className={`w-full text-left p-4 hover:bg-gray-600 rounded-md hover:text-gray-200 ${getActiveClass(
                        "reports"
                    )}`}
                    onClick={() => scrollToSection("reports")}
                >
                    <FaChartBar className="inline mb-1 mr-4" />
                    Performance Reports
                </button>

                <button
                    className={`w-full text-left p-4 hover:bg-gray-600 rounded-md hover:text-gray-200 ${getActiveClass(
                        "resultandanalytics"
                    )}`}
                    onClick={() => scrollToSection("resultandanalytics")}
                >
                    <FaCog className="inline mb-1 mr-4" />
                    Result And Analytics
                </button>

                <button
                    className={`w-full text-left p-4 hover:bg-gray-600 rounded-md hover:text-gray-200 ${getActiveClass(
                        "support"
                    )}`}
                    onClick={() => scrollToSection("support")}
                >
                    <FaQuestionCircle className="inline mb-1 mr-4" />
                    Help & Support
                </button>
            </div>
        </div>
    );
>>>>>>> fe76c85bb0dcbdfbcfc082d21526b1ee7f309e53
};

export default Sidebar;
