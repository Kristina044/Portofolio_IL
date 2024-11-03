import React from 'react';

// Project Component
function Project({ title, description, technologies }) {
  return (
    <div className="card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 bg-white/80">
      <div className="card-body p-6">
        <h3 className="text-2xl font-bold text-purple-600 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <span className="text-sm text-gray-500">Technologies: <span className="font-semibold text-purple-500">{technologies}</span></span>
      </div>
    </div>
  );
}

// Projects Component
function Projects() {
  const user_info = {
    projects: [
      {
        title: "Dalan-Dalan Toba Website",
        description: "A platform to help tourists discover Toba's destinations. Role: Project Manager & Front-End Developer.",
        technologies: "React, HTML, CSS, JavaScript",
      },
      {
        title: "Lumban Binanga Website",
        description: "Informative site for Lumban Binanga Village. Role: Software Tester & Full Stack Developer.",
        technologies: "React, Node.js, Express, MongoDB",
      },
      {
        title: "Library Management System",
        description: "A system to manage library books and transactions. Role: Software Tester & Developer.",
        technologies: "Java, NetBeans",
      },
      {
        title: "IT Del Campus Info App",
        description: "Application providing info about IT Del campus activities. Role: Software Tester & UI Designer.",
        technologies: "React, HTML, CSS",
      },
      {
        title: "The Deck Reservation App",
        description: "Efficient management of restaurant and lounge reservations. Role: Project Manager & Software Tester.",
        technologies: "React, Node.js, Express",
      },
    ],
  };

  return (
    <section id="projects" className="py-10 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <h2 className="text-5xl font-bold mb-10 text-center text-gray-700">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {user_info.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
