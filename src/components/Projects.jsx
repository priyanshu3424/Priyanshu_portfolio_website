import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "CareerHunt",
      image: '/images/careerhunt.png', // Updated path to image in public/images
      description: "Developed a comprehensive job portal website with separate logins for students and recruiters, enabling job postings, application management, and status tracking. The platform also includes a secure backend for efficient data handling and user information.",
      githubLink: "https://github.com/priyanshu3424",
    },
    {
      id: 2,
      name: "Food Ordering Website",
      image: '/images/foodordering.png', // Updated path to image in public/images
      description: "Developed a user-friendly food ordering website that allows customers to seamlessly browse menu items and place orders. The frontend was built using HTML, CSS, and JavaScript to ensure a responsive user experience.",
      githubLink: "https://github.com/priyanshu3424",
    },
    // Add more project objects here if you have more projects
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.name} />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;