import React, { useState } from 'react';
import Dashboard from './Dashboard';
import DoctorList from './DoctorList';
import AddDoctorForm from './AddDoctorForm';
const AdminSidebar = () => {
  const [activePage, setActivePage] = useState('Appointments'); // Default page

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
    },
    navbar: {
      width: '200px',
      height: '100%',
      backgroundColor: '#f0faff', // Light blue background
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px', // Space between items
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    link: {
      fontSize: '16px',
      color: '#2196F3', // Blue color
      textDecoration: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#1769aa', // Darker blue on hover
    },
    content: {
      flex: 1,
      padding: '20px',
    },
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />; // Render the Dashboard component
      case 'Doctor List':
        return <DoctorList />;
      case 'Add Doctor':
        return <AddDoctorForm />;
      case 'Logout':
        return <h1>You have been logged out.</h1>;
      default:
        return <h1>Welcome!</h1>;
    }
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        {['Dashboard', 'Doctor List', 'Add Doctor', 'Logout'].map((item) => (
          <div
            key={item}
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
            onClick={() => setActivePage(item)} // Update active page on click
          >
            {item}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminSidebar;
