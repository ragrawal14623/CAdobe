import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface LeaveFormData {
  name: string;
  rollNumber: string;
  roomNumber: string;
  branch: string;
  destination: string;
  fromDate: string;
  toDate: string;
  reason: string;
  hostelClerkSignature: string;
  wardenSignature: string;
}

const LeaveForm: React.FC = () => {
  const [formData, setFormData] = useState<LeaveFormData>({
    name: '',
    rollNumber: '',
    roomNumber: '',
    branch: '',
    destination: '',
    fromDate: '',
    toDate: '',
    reason: '',
    hostelClerkSignature: '',
    wardenSignature: '',
  });

  const [showClerkSignature, setShowClerkSignature] = useState(false);
  const [showWardenSignature, setShowWardenSignature] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="rollNumber" className="form-label">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="roomNumber" className="form-label">Room Number</label>
          <input
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="branch" className="form-label">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="fromDate" className="form-label">From Date</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="toDate" className="form-label">To Date</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={formData.toDate}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="destination" className="form-label">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="reason" className="form-label">Reason for Leave</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            rows={3}
            className="form-input"
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Digital Signatures</h3>
          <div className="space-y-4">
            <button
              type="button"
              className="btn btn-primary w-full md:w-auto"
              onClick={() => setShowClerkSignature(true)}
            >
              Add Hostel Clerk Signature
            </button>
            <button
              type="button"
              className="btn btn-primary w-full md:w-auto"
              onClick={() => setShowWardenSignature(true)}
            >
              Add Warden Signature
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit Leave Application
        </button>
      </div>
    </form>
  );
};

export default LeaveForm; 