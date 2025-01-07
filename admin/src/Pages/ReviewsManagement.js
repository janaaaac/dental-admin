import React, { useState } from 'react';
import { Search, Trash2, X, Star, User, UserCheck, Calendar } from 'lucide-react';

// Mock data for demonstration
const mockReviews = [
  {
    id: 1,
    patientName: 'John Smith',
    dentistName: 'Dr. Sarah Johnson',
    service: 'Teeth Cleaning',
    rating: 5,
    comment: 'Excellent service! Dr. Johnson was very professional and gentle. The cleaning was thorough and the staff was friendly.',
    date: '2025-01-07'
  },
  {
    id: 2,
    patientName: 'Emma Davis',
    dentistName: 'Dr. Michael Brown',
    service: 'Tooth Filling',
    rating: 4,
    comment: 'Good experience overall. The procedure was quick and painless. Would recommend.',
    date: '2025-01-06'
  },
  {
    id: 3,
    patientName: 'Emma Davis',
    dentistName: 'Dr. Michael Brown',
    service: 'Tooth Filling',
    rating: 4,
    comment: 'Good experience overall. The procedure was quick and painless. Would recommend.',
    date: '2025-01-06'
  },


];

const ReviewsManagement = () => {
  const [reviews, setReviews] = useState(mockReviews);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

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

  const DeleteConfirmationDialog = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Delete Review</h2>
      <p className="text-gray-500 mb-6">
        Are you sure you want to delete this review? This action cannot be undone.
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

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Reviews and Feedback Management</h1>
        <div className="text-sm text-gray-500">
          Manage and monitor patient reviews and feedback for your dental services
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by patient, dentist, or service..."
          />
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Dentists</option>
          <option value="dr-johnson">Dr. Sarah Johnson</option>
          <option value="dr-brown">Dr. Michael Brown</option>
        </select>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Services</option>
          <option value="teeth-cleaning">Teeth Cleaning</option>
          <option value="tooth-filling">Tooth Filling</option>
          <option value="root-canal">Root Canal</option>
        </select>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={review.rating} />
                  <span className="text-sm text-gray-500">
                    {review.rating} out of 5
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">{review.patientName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{review.dentistName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedReview(review);
                  setIsDeleteModalOpen(true);
                }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                {review.service}
              </span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">
          Showing 1 to 3 of 3 reviews
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

      {/* Delete Modal */}
      <DeleteConfirmationDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
};

export default ReviewsManagement;