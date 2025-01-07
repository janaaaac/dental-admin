import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for demonstration
const mockAppointments = [
  {
    id: 1,
    patientName: 'John Doe',
    dentistName: 'Dr. Sarah Smith',
    date: '2025-01-10',
    time: '09:00',
    status: 'Upcoming',
    service: 'Teeth Cleaning',
    notes: 'Patient has sensitivity'
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    dentistName: 'Dr. Michael Johnson',
    date: '2025-01-09',
    time: '14:30',
    status: 'Completed',
    service: 'Tooth Filling',
    notes: ''
  },
  {
    id: 3,
    patientName: 'Robert Brown',
    dentistName: 'Dr. Sarah Smith',
    date: '2025-01-11',
    time: '11:00',
    status: 'Canceled',
    service: 'Check-up',
    notes: 'Rescheduling needed'
  },
];

const AppointmentsManagement = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
          {children}
        </div>
      </div>
    );
  };

  const AppointmentModal = ({ isOpen, onClose, mode, appointment }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">
        {mode === 'add' ? 'Add New Appointment' : 'Edit Appointment'}
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient
          </label>
          <select
            defaultValue={appointment?.patientName || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Patient</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Robert Brown">Robert Brown</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dentist
          </label>
          <select
            defaultValue={appointment?.dentistName || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Dentist</option>
            <option value="Dr. Sarah Smith">Dr. Sarah Smith</option>
            <option value="Dr. Michael Johnson">Dr. Michael Johnson</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                defaultValue={appointment?.date || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <div className="relative">
              <input
                type="time"
                defaultValue={appointment?.time || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service
          </label>
          <select
            defaultValue={appointment?.service || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Service</option>
            <option value="Teeth Cleaning">Teeth Cleaning</option>
            <option value="Tooth Filling">Tooth Filling</option>
            <option value="Check-up">Check-up</option>
          </select>
        </div>
        {mode === 'edit' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              defaultValue={appointment?.status || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            defaultValue={appointment?.notes || ''}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add any additional notes..."
          />
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {mode === 'add' ? 'Add Appointment' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Modal>
  );

  const DeleteConfirmationDialog = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Delete Appointment</h2>
      <p className="text-gray-500 mb-6">
        Are you sure you want to delete this appointment? This action cannot be undone.
      </p>
      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </Modal>
  );

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Canceled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments Management</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Appointment
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search appointments..."
          />
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[150px]">
          <option value="all">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
        <div className="flex items-center gap-2">
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500">to</span>
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Appointments Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="w-full min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <div className="bg-gray-50">
            <div className="grid grid-cols-7 gap-4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div>Patient</div>
              <div>Dentist</div>
              <div>Date</div>
              <div>Time</div>
              <div>Service</div>
              <div>Status</div>
              <div className="text-right">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="grid grid-cols-7 gap-4 px-6 py-4 hover:bg-gray-50">
                <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                <div className="text-sm text-gray-500">{appointment.dentistName}</div>
                <div className="text-sm text-gray-500">{appointment.date}</div>
                <div className="text-sm text-gray-500">{appointment.time}</div>
                <div className="text-sm text-gray-500">{appointment.service}</div>
                <div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setIsEditModalOpen(true);
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit2 className="w-4 h-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setIsDeleteModalOpen(true);
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500">
          Showing 1 to 3 of 3 appointments
        </div>
        <div className="flex gap-2">
          <button className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

           {/* Modals */}
           <AppointmentModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          mode="add"
          appointment={null}
        />
        <AppointmentModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          mode="edit"
          appointment={selectedAppointment}
        />
        <DeleteConfirmationDialog
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          appointment={selectedAppointment}
        />
      </div>
    );
  };

  export default AppointmentsManagement;
