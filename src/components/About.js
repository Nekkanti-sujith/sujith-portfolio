import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container text-center">
        <h2>About Me</h2>
        <img
          src="/images/profile-image.jpeg"
          alt="Sujith Nekkanti"
          className="profile-image"
        />
        <p>
          I'm a tech enthusiast specializing in scalable solutions, cloud computing, and DevOps.
          With certifications in AWS, Kubernetes, and more, I build innovative systems that deliver results.
        </p>
      </div>
    </section>
  );
}

export default About;