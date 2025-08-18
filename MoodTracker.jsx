import React from 'react';
import './styles/components.css';

const MoodTracker = ({ onMoodSelect }) => {
  const moods = [
    { id: 'happy', label: 'Happy', emoji: '😊' },
    { id: 'neutral', label: 'Neutral', emoji: '😐' },
    { id: 'sad', label: 'Sad', emoji: '😔' },
    { id: 'angry', label: 'Angry', emoji: '😠' },
    { id: 'anxious', label: 'Anxious', emoji: '😰' },
    { id: 'scared', label: 'Scared', emoji: '😨' }
  ];

  return (
    <div className="mood-tracker">
      <div className="mood-options">
        {moods.map(mood => (
          <button 
            key={mood.id}
            className={`mood-option mood-${mood.id}`}
            onClick={() => onMoodSelect(mood.id)}
            aria-label={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;