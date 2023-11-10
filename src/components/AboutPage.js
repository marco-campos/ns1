import React from 'react';

const AboutPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <h2 className="text-center mb-3">Marco Campos</h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <p>I am a PhD student at the University of Houston studying Computational Topology.</p>
          <p>I previously taught AP Calculus, Pre-Calculus and OnRamps Pre-Calculus at Sharpstown High School. My passion for mathematics extended beyond the classroom as I founded and led a math team with a focus on the number sense UIL competitions.</p>
          <p>The unexpected turn of events brought by the Covid lockdown presented unique challenges. It was during this time that I went down a rabbithole and developed an initial version of the app, albeit a bit rough around the edges, to ensure that my students could continue their training uninterrupted.</p>
          <p>The dream, however, was much bigger. I envisioned a comprehensive platform that could be accessed by any student with the drive to excel in math competitions. I wanted the questions to be uniquely generated, high scores to be tracked, weaknesses to be recognized.</p>
          <p>Today, this web application is the first step towards the realization of that vision.</p>
          <p>It is my sincere hope that this platform will play a role in the journey of many students, perhaps even that of a future state champion.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
