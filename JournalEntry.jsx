import React, { useState } from 'react';
import './styles/components.css';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const [savedEntries, setSavedEntries] = useState([]);
  const [currentMood, setCurrentMood] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entry.trim()) return;
    
    const newEntry = {
      date: new Date().toLocaleString(),
      text: entry,
      mood: currentMood
    };
    
    setSavedEntries([newEntry, ...savedEntries]);
    setEntry('');
    setCurrentMood(null);
  };

  return (
    <div className="journal-container">
      <h1>Private Journal</h1>
      <p>This is your private space to write about your day. Your entries are secure and only visible to you.</p>
      
      <form onSubmit={handleSubmit} className="journal-form">
        <div className="mood-selector">
          <label>How are you feeling?</label>
          <MoodTracker onMoodSelect={setCurrentMood} />
          {currentMood && (
            <span className="selected-mood">
              Selected: {getMoodEmoji(currentMood)} {currentMood}
            </span>
          )}
        </div>
        
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write about your day, your feelings, or anything you'd like to remember..."
          rows="10"
        />
        
        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Entry
          </button>
          <button 
            type="button" 
            className="clear-btn"
            onClick={() => {
              setEntry('');
              setCurrentMood(null);
            }}
          >
            Clear
          </button>
        </div>
      </form>
      
      {savedEntries.length > 0 && (
        <div className="journal-entries">
          <h2>Your Journal History</h2>
          {savedEntries.map((item, index) => (
            <div key={index} className="journal-entry">
              <div className="entry-header">
                <span className="entry-date">{item.date}</span>
                {item.mood && (
                  <span className={`entry-mood mood-${item.mood}`}>
                    {getMoodEmoji(item.mood)} {item.mood}
                  </span>
                )}
              </div>
              <p className="entry-text">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Reuse the same function from Dashboard
const getMoodEmoji = (mood) => {
  const emojis = {
    'happy': '😊',
    'neutral': '😐',
    'sad': '😔',
    'angry': '😠',
    'anxious': '😰',
    'scared': '😨'
  };
  return emojis[mood] || '';
};

export default JournalEntry;