import React from 'react';
import DoctorList from './components/DoctorList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="Apcontainer mt-4">
      <h1>Doctor's Directory</h1>
      <DoctorList />
    </div>
  );
}

export default App;
