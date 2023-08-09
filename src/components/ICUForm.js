import React, { useState } from 'react';
import './styles.css';

const ICUForm = () => {
  const [icuName, setICUName] = useState('');
  const [ipAddress, setIPAddress] = useState('');
  const [rtspPort, setRTSPPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [beds, setBeds] = useState([{ id: 1, name: 'Bed 1' }]);
  const [icus, setICUs] = useState([{ id: 1 }]);

  const handleAddBed = () => {
    const newBedId = beds.length + 1;
    const newBed = { id: newBedId, name: `Bed ${newBedId}` };
    setBeds([...beds, newBed]);
  };

  const handleAddICU = () => {
    const newICUId = icus.length + 1;
    const newICU = { id: newICUId };
    setICUs([...icus, newICU]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2 className="text-2xl mb-4">ICU Details</h2>

      {icus.map((icu, index) => (
        <div key={icu.id} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">ICU Number {icu.id}</h3>
          <div className="input-group mb-4">
            <label htmlFor={`icuName${icu.id}`} className="label">ICU Name:</label>
            <input
              type="text"
              id={`icuName${icu.id}`}
              className="input-field"
              placeholder="Enter ICU Name"
            />
          </div>
          <div className="input-group inline space-x-4">
            <label htmlFor={`ipAddress${icu.id}`} className="label">IP Address of camera:</label>
            <input
              type="text"
              id={`ipAddress${icu.id}`}
              className="input-field"
              placeholder="Enter IP Address"
            />
            <label htmlFor={`rtspPort${icu.id}`} className="label">RTSP Port Number:</label>
            <input
              type="text"
              id={`rtspPort${icu.id}`}
              className="input-field"
              placeholder="Enter RTSP Port"
            />
            <label htmlFor={`username${icu.id}`} className="label">Username:</label>
            <input
              type="text"
              id={`username${icu.id}`}
              className="input-field"
              placeholder="Enter Username"
            />
            <label htmlFor={`password${icu.id}`} className="label">Password:</label>
            <input
              type="password"
              id={`password${icu.id}`}
              className="input-field"
              placeholder="Enter Password"
            />
          </div>
          {beds.map((bed) => (
            <div key={bed.id} className="bed-input-group mt-4">
              <h4 className="text-lg font-semibold mb-2">{bed.name}</h4>
              <div className="bed-section flex space-x-4">
                <div className="input-row">
                  <h5 className="text-md font-medium mr-2">Monitor IP</h5>
                  <input type="text" className="input-field" placeholder="Enter Monitor IP" />
                </div>
                <div className="input-row">
                  <h5 className="text-md font-medium mr-2">Upper Body Preset Number</h5>
                  <input type="text" className="input-field" placeholder="Enter Upper Body Preset Number" />
                </div>
                <div className="input-row">
                  <h5 className="text-md font-medium mr-2">Lower Body Preset Number</h5>
                  <input type="text" className="input-field" placeholder="Enter Lower Body Preset Number" />
                </div>
              </div>
              <div className="bed-section flex space-x-4">
                <div className="input-row">
                  <h5 className="text-md font-medium mr-2">Left Preset Number</h5>
                  <input type="text" className="input-field" placeholder="Enter Left Preset Number" />
                </div>
                <div className="input-row">
                  <h5 className="text-md font-medium mr-2">Right Preset Number</h5>
                  <input type="text" className="input-field" placeholder="Enter Right Preset Number" />
                </div>
                <div className="input-row">
                  <h5 className="text-md font-medium mr-2">Head Preset Number</h5>
                  <input type="text" className="input-field" placeholder="Enter Head Preset Number" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <button className="add-bed-button bg-transparent border border-white text-white py-2 px-4 rounded-full mt-4" onClick={handleAddBed}>
        <span className="text-lg font-semibold">+</span>
      </button>
      <button className="add-icu-button bg-green-500 text-white py-2 px-4 rounded-full ml-4" onClick={handleAddICU}>
        + Add New ICU
      </button>
      <button className="register-button bg-orange-500 text-white py-2 px-4 rounded-full mt-4" onClick={handleSubmit}>
        Register Hospital
      </button>
    </div>
  );
};

export default ICUForm;
