import React from 'react';
import './styles/components.css';

const Resources = () => {
  const resources = [
    {
      title: "Dealing with Bullying",
      items: [
        "Don't respond to bullies - it's what they want",
        "Save evidence of cyberbullying (screenshots, messages)",
        "Talk to a trusted adult about what's happening",
        "Remember - bullying says more about them than you"
      ]
    },
    {
      title: "Calming Techniques",
      items: [
        "Deep breathing: Inhale for 4 counts, hold for 4, exhale for 6",
        "5-4-3-2-1 Grounding: Notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste",
        "Positive self-talk: 'I am strong. This is temporary.'",
        "Take a break - go for a walk or listen to music"
      ]
    },
    {
      title: "Emergency Contacts",
      items: [
        "School Counselor: (555) 123-4567",
        "National Suicide Prevention Lifeline: 988",
        "Crisis Text Line: Text HOME to 741741",
        "Trusted Teacher: Ms. Johnson, Room 205"
      ]
    }
  ];

  return (
    <div className="resources-container">
      <h1>Support Resources</h1>
      <p className="subtitle">Helpful information and contacts for when you need support</p>
      
      <div className="resource-sections">
        {resources.map((section, index) => (
          <div key={index} className="resource-card">
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="additional-help">
        <h2>Need Immediate Help?</h2>
        <p>If you're in crisis or feeling unsafe, please reach out to one of these resources:</p>
        <div className="emergency-contacts">
          <a href="tel:988" className="emergency-btn">
            Call 988 Suicide & Crisis Lifeline
          </a>
          <a href="sms:741741&body=HOME" className="emergency-btn">
            Text Crisis Text Line
          </a>
          <a href="https://www.stopbullying.gov" className="emergency-btn" target="_blank" rel="noopener noreferrer">
            StopBullying.gov
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;