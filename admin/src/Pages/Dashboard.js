import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import {
  Users,
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  TrendingDown,
  Clock,
  User
} from 'lucide-react';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState('7days');

  // Sample data for charts
  const appointmentData = [
    { date: '2024-01-01', appointments: 12 },
    { date: '2024-01-02', appointments: 15 },
    { date: '2024-01-03', appointments: 10 },
    { date: '2024-01-04', appointments: 18 },
    { date: '2024-01-05', appointments: 20 },
    { date: '2024-01-06', appointments: 8 },
    { date: '2024-01-07', appointments: 14 },
  ];

  const revenueData = [
    { date: '2024-01-01', revenue: 1200 },
    { date: '2024-01-02', revenue: 1500 },
    { date: '2024-01-03', revenue: 1000 },
    { date: '2024-01-04', revenue: 1800 },
    { date: '2024-01-05', revenue: 2000 },
    { date: '2024-01-06', revenue: 800 },
    { date: '2024-01-07', revenue: 1400 },
  ];

  const demographicsData = [
    { name: '18-24', value: 20 },
    { name: '25-34', value: 35 },
    { name: '35-44', value: 25 },
    { name: '45-54', value: 15 },
    { name: '55+', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const StatCard = ({ icon: Icon, title, value, trend, trendValue }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        {trend && (
          <div className={`flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="ml-1 text-sm">{trendValue}%</span>
          </div>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );

  const ActivityItem = ({ icon: Icon, title, description, time }) => (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-5 h-5 text-blue-500" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening.</p>
        </div>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="90days">Last 90 Days</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="Total Patients"
          value="1,234"
          trend="up"
          trendValue="12"
        />
        <StatCard
          icon={Calendar}
          title="Total Appointments"
          value="856"
          trend="up"
          trendValue="8"
        />
        <StatCard
          icon={DollarSign}
          title="Total Revenue"
          value="$45,678"
          trend="up"
          trendValue="15"
        />
        <StatCard
          icon={Star}
          title="Average Rating"
          value="4.8/5"
          trend="up"
          trendValue="2"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Appointments Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Appointments Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={appointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="appointments"
                stroke="#0088FE"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Demographics Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Patient Demographics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={demographicsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {demographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <ActivityItem
              icon={Calendar}
              title="New Appointment"
              description="John Doe booked an appointment with Dr. Smith"
              time="2 hours ago"
            />
            <ActivityItem
              icon={User}
              title="New Patient"
              description="Jane Smith registered as a new patient"
              time="4 hours ago"
            />
            <ActivityItem
              icon={Star}
              title="New Review"
              description="Dr. Johnson received a 5-star review"
              time="5 hours ago"
            />
            <ActivityItem
              icon={Clock}
              title="Appointment Completed"
              description="Dr. Wilson completed appointment with Tom Brown"
              time="6 hours ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
