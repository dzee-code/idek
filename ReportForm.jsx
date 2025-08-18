import React, { useState } from 'react';
import './styles/components.css';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    incidentType: '',
    description: '',
    date: '',
    location: '',
    anonymous: true,
    contactEmail: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to backend
    console.log('Report submitted:', formData);
    setSubmitted(true);
    setFormData({
      incidentType: '',
      description: '',
      date: '',
      location: '',
      anonymous: true,
      contactEmail: ''
    });
  };

  if (submitted) {
    return (
      <div className="report-container">
        <div className="submission-success">
          <h1>Thank You</h1>
          <p>Your report has been submitted {formData.anonymous ? 'anonymously' : 'with your contact information'}.</p>
          <p>A trusted staff member will review your report and take appropriate action.</p>
          <button onClick={() => setSubmitted(false)} className="new-report-btn">
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="report-container">
      <h1>Report an Incident</h1>
      <p>
        You can report bullying or other concerns here. All reports are taken seriously.
        {formData.anonymous ? ' This report will be anonymous.' : ' You will include your contact information.'}
      </p>
      
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label>Type of Incident</label>
          <select
            name="incidentType"
            value={formData.incidentType}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="verbal">Verbal Bullying</option>
            <option value="physical">Physical Bullying</option>
            <option value="cyber">Cyberbullying</option>
            <option value="discrimination">Discrimination</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please describe what happened, including who was involved, where it happened, and how it made you feel."
            required
            rows="6"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Date of Incident</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where did it happen?"
              required
            />
          </div>
        </div>
        
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
            />
            Submit anonymously
          </label>
          <small>
            If unchecked, a staff member may follow up with you for more information.
          </small>
        </div>
        
        {!formData.anonymous && (
          <div className="form-group">
            <label>Contact Email (optional)</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="If you'd like to be contacted about this report"
            />
          </div>
        )}
        
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit Report
          </button>
        </div>
      </form>
      
      <div className="report-info">
        <h3>What happens after you report?</h3>
        <ol>
          <li>Your report is sent to verified school staff or counselors</li>
          <li>They will review the information and take appropriate action</li>
          <li>If you didn't submit anonymously, they may follow up with you</li>
          <li>All reports are handled confidentially</li>
        </ol>
      </div>
    </div>
  );
};

export default ReportForm;