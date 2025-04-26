import { useState, useMemo, useCallback } from 'react';
import IncidentList from './IncidentList';
import IncidentFilters from './IncidentFilters';
import NewIncidentForm from './NewIncidentForm';
import { BsPlusCircle } from 'react-icons/bs';

// TODO: Add incident categories and tags for better filtering
// TODO: Implement search functionality across title/description
const IncidentDashboard = ({ initialIncidents }) => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showForm, setShowForm] = useState(false);
  
  // Memoize filtered and sorted incidents to prevent unnecessary recalculations
  // Only recompute when incidents, filters, or sort order changes
  const filteredAndSortedIncidents = useMemo(() => {
    const filtered = severityFilter === 'All' 
      ? incidents 
      : incidents.filter(incident => incident.severity === severityFilter);
    
    return filtered.sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [incidents, severityFilter, sortOrder]);
  
  const handleAddIncident = useCallback((newIncident) => {
    setIncidents(prevIncidents => [...prevIncidents, {
      ...newIncident,
      id: Date.now(), //  for  demo.
      reported_at: new Date().toISOString()
    }]);
  }, []);
  
  const toggleForm = useCallback(() => {
    setShowForm(prev => !prev);
  }, []);
  
  return (
    <div className="container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">AI Safety Incident Dashboard</h1>
        <button 
          className="new-incident-button" 
          onClick={toggleForm}
          aria-label="Report new incident"
        >
          <BsPlusCircle /> Report New Incident
        </button>
      </div>
      
      <div className={`form-container ${showForm ? 'visible' : ''}`}>
        <NewIncidentForm 
          onSubmit={handleAddIncident} 
          onClose={toggleForm} 
        />
      </div>
      
      <IncidentFilters 
        severityFilter={severityFilter}
        onSeverityChange={setSeverityFilter}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      
      <IncidentList incidents={filteredAndSortedIncidents} />
    </div>
  );
};

export default IncidentDashboard;