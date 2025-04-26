import { memo } from 'react';
import IncidentItem from './IncidentItem';
import { BsExclamationTriangle } from 'react-icons/bs';

const EmptyState = () => (
  <div className="empty-state" role="status">
    <div className="empty-state-icon" aria-hidden="true">
      <BsExclamationTriangle />
    </div>
    <h3 className="empty-state-text">No incidents match your filters</h3>
    <p>Try adjusting your filter criteria to see more results</p>
  </div>
);

const IncidentList = ({ incidents }) => {
  if (!incidents?.length) {
    return <EmptyState />;
  }
  
  return (
    <div 
      className="incident-list"
      role="feed"
      aria-label="List of AI safety incidents"
    >
      {incidents.map(incident => (
        <IncidentItem 
          key={incident.id} 
          incident={incident} 
        />
      ))}
    </div>
  );
};

// Memoize to prevent unnecessary re-renders when parent components update
export default memo(IncidentList);