import { useState } from 'react';
import IncidentDashboard from './components/IncidentDashboard';
import mockIncidents from './data/mockIncidents';
import './styles/Dashboard.css';

function App() {
  return (
    <div className="app">
      <IncidentDashboard initialIncidents={mockIncidents} />
    </div>
  );
}

export default App;