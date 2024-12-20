import React from 'react';
import Sidebar from './components/Sidebar';
import RepositoryList from './components/RepositoryList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <RepositoryList />
      </div>
    </div>
  );
}

export default App;