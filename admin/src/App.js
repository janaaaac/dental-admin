import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/AdminSidebar';
import Dashboard from './Pages/Dashboard';
import DentistSchedulesManagement from './Pages/SchedulesManagement';
import ClinicsManagement from './Pages/ClinicsManagement';
import ServicesManagement from './Pages/ServicesManagement';
import PaymentsManagement from './Pages/PaymentsManagement';
import ReviewsManagement from './Pages/ReviewsManagement';
import MedicalRecordsManagement from './Pages/MedicalRecordsManagement';
import SettingsManagement from './Pages/SettingsManagement';
import UsersManagement from './Pages/UsersManagement';
import AppointmentsManagement from './Pages/AppointmentsManagement';


function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content with routing */}
        <div className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users-management" element={<UsersManagement />} />
            <Route path="/appointments" element={<AppointmentsManagement />} />
            <Route path="/dentist-schedules" element={<DentistSchedulesManagement />} />
            <Route path="/clinics" element={<ClinicsManagement />} />
            <Route path="/services" element={<ServicesManagement />} />
            <Route path="/payments" element={<PaymentsManagement />} />
            <Route path="/reviews-feedback" element={<ReviewsManagement/>} />
            <Route path="/medical-records" element={<MedicalRecordsManagement />} />
            <Route path="/settings" element={<SettingsManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
