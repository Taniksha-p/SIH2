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
};

export default Sidebar;
