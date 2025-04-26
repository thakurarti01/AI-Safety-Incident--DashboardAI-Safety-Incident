import { useState, useCallback } from 'react';
import { BsX } from 'react-icons/bs';

const SEVERITY_LEVELS = ['Low', 'Medium', 'High'];

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  severity: 'Medium' // Default to medium severity
};

const NewIncidentForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }));
  }, []);
  
  const validateForm = useCallback(() => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.title?.trim()) {
      newErrors.title = 'Title is required';
    }
    
    // Description validation with minimum length
    const trimmedDescription = formData.description?.trim();
    if (!trimmedDescription) {
      newErrors.description = 'Description is required';
    } else if (trimmedDescription.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    // Severity validation
    if (!SEVERITY_LEVELS.includes(formData.severity)) {
      newErrors.severity = 'Please select a valid severity level';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      setFormData(INITIAL_FORM_STATE);
      onClose();
    }
  }, [formData, onSubmit, onClose, validateForm]);
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">Report New Incident</h2>
      
      <div className="form-group">
        <label htmlFor="incident-title" className="form-label">Title</label>
        <input
          type="text"
          id="incident-title"
          name="title"
          className="form-input"
          value={formData.title}
          onChange={handleChange}
          placeholder="Brief title of the incident"
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
        />
        {errors.title && (
          <div id="title-error" className="error-message" role="alert">
            {errors.title}
          </div>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor="incident-description" className="form-label">Description</label>
        <textarea
          id="incident-description"
          name="description"
          className="form-textarea"
          value={formData.description}
          onChange={handleChange}
          placeholder="Detailed description of what happened..."
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "description-error" : undefined}
        />
        {errors.description && (
          <div id="description-error" className="error-message" role="alert">
            {errors.description}
          </div>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor="incident-severity" className="form-label">Severity</label>
        <select
          id="incident-severity"
          name="severity"
          className="form-select"
          value={formData.severity}
          onChange={handleChange}
          aria-invalid={!!errors.severity}
          aria-describedby={errors.severity ? "severity-error" : undefined}
        >
          {SEVERITY_LEVELS.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        {errors.severity && (
          <div id="severity-error" className="error-message" role="alert">
            {errors.severity}
          </div>
        )}
      </div>
      
      <div className="form-buttons">
        <button 
          type="submit" 
          className="submit-button"
        >
          Submit Report
        </button>
        <button 
          type="button" 
          className="cancel-button" 
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewIncidentForm;