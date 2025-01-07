import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';

const Dashboard = () => {
  const appointments = [
    {
      name: 'S.P. Kamal',
      time: '10:00 AM',
      reason: 'Toothache',
      status: 'Confirmed',
    },
    {
      name: 'John Doe',
      time: '11:30 AM',
      reason: 'Cleaning',
      status: 'Confirmed',
    },
    {
      name: 'Mary Smith',
      time: '2:00 PM',
      reason: 'Check-up',
      status: 'Confirmed',
    },
    {
      name: 'Robert Jones',
      time: '12:30 PM',
      reason: 'Braces Follow-up',
      status: 'Completed',
    },
  ];

  return (
    <>
      <style>
        {`
          .dashboard {
            flex: 1;
            padding: 32px;
            background-color: #f9fafb;
          }

          .stats-container {
            display: flex;
            gap: 24px;
            margin-bottom: 32px;
          }

          .stat-card {
            flex: 1;
            background-color: white;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .stat-icon {
            padding: 8px;
            border-radius: 50%;
          }

          .stat-icon.blue {
            background-color: #dbeafe;
          }

          .stat-icon.green {
            background-color: #dcfce7;
          }

          .stat-number {
            font-size: 30px;
            font-weight: bold;
            line-height: 1;
          }

          .stat-label {
            color: #6b7280;
            font-size: 14px;
          }

          .appointments-card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }

          .appointments-header {
            padding: 24px;
            border-bottom: 1px solid #f3f4f6;
          }

          .appointments-title {
            font-size: 20px;
            font-weight: 600;
          }

          .appointments-table {
            width: 100%;
            border-collapse: collapse;
          }

          .appointments-table th {
            text-align: left;
            padding: 16px;
            background-color: #f3f4f6;
            font-weight: 500;
          }

          .appointments-table td {
            padding: 16px;
            border-top: 1px solid #f3f4f6;
          }

          .status-badge {
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 14px;
          }

          .status-badge.confirmed {
            background-color: #dcfce7;
            color: #166534;
          }

          .status-badge.completed {
            background-color: #f3f4f6;
            color: #374151;
          }

          .action-buttons {
            display: flex;
            gap: 8px;
          }

          .btn {
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.2s;
          }

          .btn-cancel {
            border: 1px solid #e5e7eb;
            background-color: white;
          }

          .btn-cancel:hover {
            background-color: #f3f4f6;
          }

          .btn-complete {
            background-color: #0ea5e9;
            color: white;
            border: none;
          }

          .btn-complete:hover {
            background-color: #0284c7;
          }

          .btn-view {
            color: #2563eb;
            background: none;
            border: none;
          }

          .btn-view:hover {
            color: #1d4ed8;
          }
        `}
      </style>

      <div className="dashboard">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon blue">
              <Calendar style={{ color: '#2563eb', width: 24, height: 24 }} />
            </div>
            <div>
              <div className="stat-number">5</div>
              <div className="stat-label">Total confirmed appointments</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <MessageSquare style={{ color: '#16a34a', width: 24, height: 24 }} />
            </div>
            <div>
              <div className="stat-number">3</div>
              <div className="stat-label">Unread messages</div>
            </div>
          </div>
        </div>

        <div className="appointments-card">
          <div className="appointments-header">
            <h2 className="appointments-title">Upcoming Appointments</h2>
          </div>
          
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.name}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    <span className={`status-badge ${
                      appointment.status === 'Completed' ? 'completed' : 'confirmed'
                    }`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td>
                    {appointment.status === 'Completed' ? (
                      <button className="btn btn-view">View Details</button>
                    ) : (
                      <div className="action-buttons">
                        <button className="btn btn-cancel">Cancel</button>
                        <button className="btn btn-complete">Complete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;