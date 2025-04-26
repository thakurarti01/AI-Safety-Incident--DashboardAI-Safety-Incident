import { useState, useCallback } from 'react';
import { format } from 'date-fns';
import { BsChevronDown } from 'react-icons/bs';

// Helper to format dates consistently across the app
const formatIncidentDate = (dateString) => {
  try {
    return format(new Date(dateString), 'MMM dd, yyyy');
  } catch (err) {
    console.warn('Invalid date format:', dateString);
    return 'Date unknown';
  }
};

const IncidentItem = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleDetails = useCallback(() => {
    setExpanded(prev => !prev);
  }, []);
  
  const formattedDate = formatIncidentDate(incident.reported_at);
  
  return (
    <article className="incident-card">
      <div className="incident-header">
        <div className="incident-main">
          <h3 className="incident-title">{incident.title}</h3>
          <div className="incident-meta">
            <span 
              className={`severity-badge severity-${incident.severity}`}
              role="status"
              aria-label={`Severity level: ${incident.severity}`}
            >
              {incident.severity}
            </span>
            <time dateTime={incident.reported_at}>
              Reported: {formattedDate}
            </time>
          </div>
        </div>
        <div className="incident-actions">
          <button 
            className="view-details-btn" 
            onClick={toggleDetails}
            aria-expanded={expanded}
            aria-controls={`incident-details-${incident.id}`}
          >
            {expanded ? 'Hide Details' : 'View Details'}
            <BsChevronDown 
              className={`icon-rotate ${expanded ? 'icon-rotate-down' : ''}`} 
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      
      <div 
        id={`incident-details-${incident.id}`}
        className={`incident-details ${expanded ? 'expanded' : ''}`}
        role="region"
        aria-hidden={!expanded}
      >
        <p className="incident-description">{incident.description}</p>
      </div>
    </article>
  );
};

export default IncidentItem;