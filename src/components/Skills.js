import React from 'react';

function Skills() {
  const skills = ['Spring Boot', 'React.js', 'AWS', 'Kubernetes', 'Docker', 'CI/CD'];

  return (
    <section id="skills" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl text-gray-900 mb-8">Skills</h2>
      <div className="flex justify-center gap-6 overflow-x-auto">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card bg-blue-500 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-110">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;