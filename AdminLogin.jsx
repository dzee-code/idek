import React, { useState } from 'react';
import './styles/components.css';

const AdminLogin = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    verificationId: null
  });
  const [step, setStep] = useState(1); // 1: login, 2: ID verification, 3: success
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, this would upload to a secure backend
      setCredentials(prev => ({
        ...prev,
        verificationId: file.name // Just storing name for demo
      }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!credentials.email.includes('@') || credentials.password.length < 6) {
      setError('Please enter a valid email and password (min 6 characters)');
      return;
    }
    setStep(2);
    setError('');
  };

  const handleVerification = (e) => {
    e.preventDefault();
    if (!credentials.verificationId) {
      setError('Please upload your verification ID');
      return;
    }
    // In a real app, this would verify with backend
    console.log('Verification submitted:', credentials);
    setStep(3);
    setIsAuthenticated(true);
  };

  if (step === 3) {
    return (
      <div className="admin-container">
        <div className="verification-success">
          <h1>Verification Complete</h1>
          <p>Your credentials have been verified. You now have access to the admin panel.</p>
          <button 
            className="admin-panel-btn"
            onClick={() => window.location.href = '/admin-panel'} // Would navigate in a real app
          >
            Go to Admin Panel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1>Staff Login</h1>
      <p>Verified school staff and counselors only. All access is logged and monitored.</p>
      
      {step === 1 ? (
        <form onSubmit={handleLogin} className="admin-form">
          <div className="form-group">
            <label>School Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="your.name@school.edu"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-actions">
            <button type="submit" className="login-btn">
              Continue to Verification
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerification} className="verification-form">
          <h2>Identity Verification</h2>
          <p>To ensure student safety, all staff must verify their identity.</p>
          
          <div className="form-group">
            <label>Upload School ID or Verification Document</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileUpload}
              required
            />
            <small>Accepted: School ID, Staff Badge, or Official Letter</small>
          </div>
          
          {credentials.verificationId && (
            <div className="upload-preview">
              <span>Selected: {credentials.verificationId}</span>
            </div>
          )}
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-actions">
            <button 
              type="button" 
              className="back-btn"
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button type="submit" className="verify-btn">
              Submit Verification
            </button>
          </div>
        </form>
      )}
      
      <div className="admin-info">
        <h3>About Staff Access</h3>
        <ul>
          <li>All staff must be verified by the school administration</li>
          <li>You will only see reports relevant to your role</li>
          <li>All access to student data is logged and monitored</li>
          <li>Student privacy is protected - only necessary information is shared</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLogin;