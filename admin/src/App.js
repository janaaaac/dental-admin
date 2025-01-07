import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminSidebar from './Components/AdminSidebar';
import Dashboard from './Components/Dashboard';



function App() {
  return (
    <Router>
      <div className="app">
      
        <div className="main-layout">
          <AdminSidebar />
          <div className="main-content">
            <Routes>
              <Route path="/home" element={<Dashboard />} />

        
            </Routes>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;