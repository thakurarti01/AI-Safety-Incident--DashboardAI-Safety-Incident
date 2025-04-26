import { memo } from 'react';
import { BsFilter, BsSortDown, BsSortUp } from 'react-icons/bs';

// Severity levels could be moved to a constants file if used across components
const SEVERITY_OPTIONS = [
  { value: 'All', label: 'All Severities' },
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' }
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First', icon: BsSortDown },
  { value: 'oldest', label: 'Oldest First', icon: BsSortUp }
];

const IncidentFilters = ({ 
  severityFilter, 
  onSeverityChange, 
  sortOrder, 
  onSortChange 
}) => {
  const currentSortOption = SORT_OPTIONS.find(opt => opt.value === sortOrder);
  const SortIcon = currentSortOption?.icon;

  return (
    <div className="filters-container">
      <div className="filter-group">
        <span className="filter-label">
          <BsFilter /> Filter by Severity:
        </span>
        <select 
          className="filter-select"
          value={severityFilter}
          onChange={(e) => onSeverityChange(e.target.value)}
          aria-label="Filter incidents by severity"
        >
          {SEVERITY_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <span className="filter-label">
          {SortIcon && <SortIcon />} Sort by Date:
        </span>
        <select 
          className="filter-select"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort incidents by date"
        >
          {SORT_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Memoize since filters might update frequently
export default memo(IncidentFilters);