import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="category-container">
        <h3>Languages</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="/images/skills/c.png" alt="C" />
            <h3>C</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/cpp.png" alt="C++" />
            <h3>C++</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/python.png" alt="Python" />
            <h3>Python</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/javascript.png" alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>

      <div className="category-container">
        <h3>Web Technologies</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="/images/skills/html.png" alt="HTML5" />
            <h3>HTML</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/css.png" alt="CSS3" />
            <h3>CSS</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/react.png" alt="React" />
            <h3>React</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/nodejs.png" alt="Node.js" />
            <h3>Node.js</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/expressjs.png" alt="Express.js" />
            <h3>Express.js</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/nextjs.png" alt="Next.js" />
            <h3>Next.js</h3>
          </div>
        </div>
      </div>

      <div className="category-container">
        <h3>Databases</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="/images/skills/mongodb.png" alt="MongoDB" />
            <h3>MongoDB</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/mysql.png" alt="MySQL" />
            <h3>MySQL</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/sql.png" alt="SQL" />
            <h3>SQL</h3>
          </div>
        </div>
      </div>

      <div className="category-container">
        <h3>Tools & Platforms</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src="/images/skills/git.png" alt="Git" />
            <h3>Git</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/github.png" alt="GitHub" />
            <h3>GitHub</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/vscode.png" alt="VS Code" />
            <h3>VS Code</h3>
          </div>
          <div className="skill-item">
            <img src="/images/skills/aws1.png" alt="AWS" />
            <h3>AWS</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
