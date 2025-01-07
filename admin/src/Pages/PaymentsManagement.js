import React, { useState } from 'react';
import { Search, Edit, Trash2, XCircle } from 'lucide-react';

const PaymentsManagement = () => {
  const [payments, setPayments] = useState([
    {
      id: 'P001',
      patientName: 'John Doe',
      appointmentId: 'A001',
      amount: '$100',
      method: 'Credit Card',
      status: 'Completed',
      date: '2024-01-01',
    },
    {
      id: 'P002',
      patientName: 'Jane Smith',
      appointmentId: 'A002',
      amount: '$150',
      method: 'PayPal',
      status: 'Pending',
      date: '2024-01-02',
    },
    {
      id: 'P003',
      patientName: 'Tom Brown',
      appointmentId: 'A003',
      amount: '$200',
      method: 'Credit Card',
      status: 'Refunded',
      date: '2024-01-03',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredPayments = payments.filter((payment) => {
    return (
      payment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === '' || payment.status === statusFilter)
    );
  });

  const openUpdateModal = (payment) => {
    setSelectedPayment(payment);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedPayment(null);
    setIsUpdateModalOpen(false);
  };

  const openDeleteDialog = (payment) => {
    setSelectedPayment(payment);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setSelectedPayment(null);
    setIsDeleteDialogOpen(false);
  };

  const updatePayment = (updatedPayment) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === updatedPayment.id ? updatedPayment : payment
      )
    );
    closeUpdateModal();
  };

  const deletePayment = () => {
    setPayments((prevPayments) =>
      prevPayments.filter((payment) => payment.id !== selectedPayment.id)
    );
    closeDeleteDialog();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payments Management</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by patient name..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={statusFilter}
            onChange={handleStatusFilter}
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 font-medium text-gray-500">Payment ID</th>
              <th className="px-6 py-3 font-medium text-gray-500">Patient Name</th>
              <th className="px-6 py-3 font-medium text-gray-500">Appointment ID</th>
              <th className="px-6 py-3 font-medium text-gray-500">Amount</th>
              <th className="px-6 py-3 font-medium text-gray-500">Payment Method</th>
              <th className="px-6 py-3 font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id} className="border-t">
                <td className="px-6 py-3">{payment.id}</td>
                <td className="px-6 py-3">{payment.patientName}</td>
                <td className="px-6 py-3">{payment.appointmentId}</td>
                <td className="px-6 py-3">{payment.amount}</td>
                <td className="px-6 py-3">{payment.method}</td>
                <td className="px-6 py-3">{payment.status}</td>
                <td className="px-6 py-3">{payment.date}</td>
                <td className="px-6 py-3 flex space-x-2">
                  <button
                    onClick={() => openUpdateModal(payment)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openDeleteDialog(payment)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Payment Modal */}
      {isUpdateModalOpen && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-medium mb-4">Update Payment</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Payment ID</label>
              <input
                type="text"
                value={selectedPayment.id}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={selectedPayment.status}
                onChange={(e) =>
                  setSelectedPayment({ ...selectedPayment, status: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Refunded">Refunded</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeUpdateModal}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => updatePayment(selectedPayment)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {isDeleteDialogOpen && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-medium mb-4">Delete Payment</h2>
            <p className="text-sm text-gray-500 mb-4">
              Are you sure you want to delete this payment record? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeDeleteDialog}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={deletePayment}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsManagement;

