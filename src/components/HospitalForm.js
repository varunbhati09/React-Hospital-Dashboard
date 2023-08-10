import React from 'react';
import './styles.css';

const HospitalForm = () => {
  return (
    <div className="form-container bg-gray-800 text-white p-6 rounded border">
      <div className="back-arrow text-white">&larr;</div>
      <h3 className="text-xl font-semibold mb-4">Add Hospital</h3>
      <h2 className="text-2xl mb-4">Hospital Details</h2>
      <div className="input-group mb-4">
        <label htmlFor="hospitalName" className="label">Hospital Name:</label>
        <input type="text" id="hospitalName" className="input-field" placeholder="Enter Hospital Name" />
      </div>
      <div className="input-group inline space-x-4">
        <label htmlFor="pincode" className="label">Hospital Pincode:</label>
        <input type="text" id="pincode" className="input-field" placeholder="Enter Pincode" />
        <label htmlFor="state" className="label">Hospital State:</label>
        <select id="state" className="input-field">
        </select>
        <label htmlFor="city" className="label">Hospital City:</label>
        <select id="city" className="input-field">
        </select>
      </div>
    </div>
  );
};

export default HospitalForm;
