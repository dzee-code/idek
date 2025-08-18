import React, { useState } from 'react';
import MoodTracker from './MoodTracker';
import './styles/components.css';

const Dashboard = () => {
  const [moodData, setMoodData] = useState([]);

  const handleNewMoodEntry = (mood) => {
    setMoodData([...moodData, {
      date: new Date().toLocaleDateString(),
      mood,
      note: ''
    }]);
  };

  return (
    <div className="dashboard">
      <h1>Welcome to SafeSpace</h1>
      <p>A secure place to track your feelings and report concerns anonymously.</p>
      
      <div className="dashboard-grid">
        <div className="mood-section">
          <h2>How are you feeling today?</h2>
          <MoodTracker onMoodSelect={handleNewMoodEntry} />
          
          {moodData.length > 0 && (
            <div className="mood-history">
              <h3>Your Mood History</h3>
              <ul>
                {moodData.map((entry, index) => (
                  <li key={index}>
                    <span className="mood-date">{entry.date}</span>
                    <span className={`mood-emoji mood-${entry.mood}`}>
                      {getMoodEmoji(entry.mood)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <button className="action-btn" onClick={() => window.location.href='#report'}>
            Report an Incident
          </button>
          <button className="action-btn" onClick={() => window.location.href='#journal'}>
            Write in Journal
          </button>
          <button className="action-btn" onClick={() => window.location.href='#resources'}>
            Get Help Now
          </button>
        </div>
      </div>
    </div>
  );
};

const getMoodEmoji = (mood) => {
  const emojis = {
    'happy': '😊',
    'neutral': '😐',
    'sad': '😔',
    'angry': '😠',
    'anxious': '😰',
    'scared': '😨'
  };
  return emojis[mood] || '❓';
};

export default Dashboard;