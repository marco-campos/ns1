import React from 'react';

const AboutPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="text-center mb-3">
      <img
          src="/marco.jpeg" // If the image is in the public folder
          // Or, if the image is in the src/assets folder, use:
          // src={require('../assets/marco-campos.jpg').default}
          alt="Marco Campos"
          className="rounded-circle mb-3"
          style={{ width: '150px', height: '150px' }} // Adjust the size as needed
        />
      <h2 className="text-center mb-3">Marco Campos</h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <p>I am a PhD student at the University of Houston studying Computational Topology.</p>
          <p>I previously taught AP Calculus, Pre-Calculus and OnRamps Pre-Calculus at Sharpstown High School. My passion for mathematics extended beyond the classroom as I founded and led a math team with a focus on the number sense UIL competitions.</p>
          <p>The unexpected turn of events brought by the Covid lockdown presented unique challenges. It was during this time that I went down a rabbithole and developed an initial version of the app, albeit a bit rough around the edges, to ensure that my students could continue their training uninterrupted.</p>
          <p>My hope is to create a platform that could be accessed by any student with the drive to excel in math competitions regardless of their access to elite coaching. I wanted the questions to be uniquely generated, high scores to be tracked, and weaknesses to be recognized.</p>
          <p>Today, this web application is the first step towards the realization of that vision, and if sufficient interest rises, I'd love to continue expanding the amount of features.</p>
          <p>If you'd like to contact me about any requests, bugs or anything math related, feel free to send me a message on my socials bellow. I am always looking to engage with the math community!</p>
        
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;
