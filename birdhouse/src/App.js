import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex flex-row'>
      <div className='w-[15%]'>
        <Navbar />
      </div>

      <div className='w-[85%]'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
