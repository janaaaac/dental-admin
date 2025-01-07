import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Calendar,
  Clock,
  Building2,
  Stethoscope,
  DollarSign,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/' },
    { title: 'Users Management', icon: <Users className="w-5 h-5" />, path: '/users-management' },
    { title: 'Appointments', icon: <Calendar className="w-5 h-5" />, path: '/appointments' },
    { title: 'Dentist Schedules', icon: <Clock className="w-5 h-5" />, path: '/dentist-schedules' },
    { title: 'Clinics', icon: <Building2 className="w-5 h-5" />, path: '/clinics' },
    { title: 'Services', icon: <Stethoscope className="w-5 h-5" />, path: '/services' },
    { title: 'Payments', icon: <DollarSign className="w-5 h-5" />, path: '/payments' },
    { title: 'Reviews and Feedback', icon: <MessageSquare className="w-5 h-5" />, path: '/reviews-feedback' },
    { title: 'Medical Records', icon: <FileText className="w-5 h-5" />, path: '/medical-records' },
    { title: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col">
      {/* Admin Title */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">ADMIN</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                } transition-colors`}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-200">
        <button className="w-full flex items-center px-6 py-4 text-gray-600 hover:bg-gray-50 transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          <span className="text-sm font-medium">LOGOUT</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
