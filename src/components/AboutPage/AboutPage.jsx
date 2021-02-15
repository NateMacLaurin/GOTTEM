import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Welcome to the General Organizational Tech Tracker and Event Monitor (GOTTEM)</h2>
        <p>GOTTEM gives you accurate data in a scaleable, simple infrastructure that saves time, money, and sanity.</p>
      </div>
    </div>
  );
}

export default AboutPage;
