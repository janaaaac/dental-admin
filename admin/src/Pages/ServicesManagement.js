import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X, Clock, DollarSign, FileText } from 'lucide-react';

// Mock data for demonstration
const mockServices = [
  {
    id: 1,
    name: 'Teeth Cleaning',
    description: 'Professional dental cleaning to remove plaque and tartar',
    cost: 80,
    duration: 45,
    category: 'Preventive Care'
  },
  {
    id: 2,
    name: 'Tooth Filling',
    description: 'Restore damaged teeth using composite material',
    cost: 120,
    duration: 60,
    category: 'Restorative'
  },
  {
    id: 3,
    name: 'Teeth Whitening',
    description: 'Professional whitening treatment for brighter smile',
    cost: 200,
    duration: 90,
    category: 'Cosmetic'
  },
];

const ServicesManagement = () => {
  const [services, setServices] = useState(mockServices);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  const ServiceModal = ({ isOpen, onClose, mode, service }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">
        {mode === 'add' ? 'Add New Service' : 'Edit Service'}
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Name
          </label>
          <input
            type="text"
            defaultValue={service?.name || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            defaultValue={service?.description || ''}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service description"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cost ($)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                defaultValue={service?.cost || ''}
                min="0"
                step="0.01"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (min)
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                defaultValue={service?.duration || ''}
                min="0"
                step="5"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            defaultValue={service?.category || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Preventive Care">Preventive Care</option>
            <option value="Restorative">Restorative</option>
            <option value="Cosmetic">Cosmetic</option>
            <option value="Emergency">Emergency</option>
          </select>
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
            {mode === 'add' ? 'Add Service' : 'Save Changes'}
          </button>
        </div>
      </form>
    </Modal>
  );

  const DeleteConfirmationDialog = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Delete Service</h2>
      <p className="text-gray-500 mb-6">
        Are you sure you want to delete this service? This action cannot be undone.
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

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Services Management</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search services..."
          />
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Categories</option>
          <option value="preventive">Preventive Care</option>
          <option value="restorative">Restorative</option>
          <option value="cosmetic">Cosmetic</option>
          <option value="emergency">Emergency</option>
        </select>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Prices</option>
          <option value="under-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="over-200">Over $200</option>
        </select>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Durations</option>
          <option value="under-30">Under 30 min</option>
          <option value="30-60">30-60 min</option>
          <option value="over-60">Over 60 min</option>
        </select>
      </div>

      {/* Services Table */}
      <div className="border rounded-lg overflow-hidden">
        <div className="w-full min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <div className="bg-gray-50">
            <div className="grid grid-cols-6 gap-4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div>Service Name</div>
              <div className="col-span-2">Description</div>
              <div>Duration</div>
              <div>Cost</div>
              <div className="text-right">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
              <div key={service.id} className="grid grid-cols-6 gap-4 px-6 py-4 hover:bg-gray-50">
                <div className="text-sm font-medium text-gray-900">{service.name}</div>
                <div className="col-span-2 text-sm text-gray-500">{service.description}</div>
                <div className="text-sm text-gray-500">{service.duration} min</div>
                <div className="text-sm text-gray-500">${service.cost}</div>
                <div className="text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setIsEditModalOpen(true);
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit2 className="w-4 h-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedService(service);
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
          Showing 1 to 3 of 3 services
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>

      {/* Modals */}
      <ServiceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        mode="add"
        service={null}
      />
      <ServiceModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        mode="edit"
        service={selectedService}
      />
      <DeleteConfirmationDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
};

export default ServicesManagement;