import React from 'react';
import './App.css'; // Import your custom CSS file
import HospitalForm from './components/HospitalForm';
import ICUForm from './components/ICUForm';

function App() {
  return (
    <div className="app">
      <HospitalForm />
      <ICUForm />
    </div>
  );
}

export default App;
