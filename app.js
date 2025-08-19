import React from 'react';
import './styles/components.css';

const Navbar = ({ activeTab, setActiveTab, isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="logo">SafeSpace</div>
      <ul className="nav-links">
        <li 
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          Home
        </li>
        <li 
          className={activeTab === 'journal' ? 'active' : ''}
          onClick={() => setActiveTab('journal')}
        >
          Journal
        </li>
        <li 
          className={activeTab === 'report' ? 'active' : ''}
          onClick={() => setActiveTab('report')}
        >
          Report
        </li>
        <li 
          className={activeTab === 'resources' ? 'active' : ''}
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </li>
        <li 
          className={activeTab === 'admin' ? 'active' : ''}
          onClick={() => setActiveTab('admin')}
        >
          {isAuthenticated ? 'Admin Panel' : 'Staff Login'}
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
