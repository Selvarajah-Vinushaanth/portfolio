import React from 'react';
import '../styles/Interest.css';

const Interests = () => {
  const interests = [
    { title: 'Artificial Intelligence', icon: '🤖' },
    { title: 'Networking', icon: '🌐' },
    { title: 'Operating Systems', icon: '💻' },
    { title: 'Web and App Development', icon: '🌍' },
    { title: 'Embedded Systems', icon: '🔌' },
    { title: 'Data Science', icon: '📊' },
    { title: 'Graphic Designing', icon: '🎨' },
    { title: 'Cloud Systems', icon: '☁️' }
  ];

  return (
    <section className="interests">
      <h2 className="interests-heading">My Interests</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item">
            <div className="icon">{interest.icon}</div>
            <h3>{interest.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
