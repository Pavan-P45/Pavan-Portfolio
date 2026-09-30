function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript", "SQL"],
    },
    {
      title: "Web Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        "MongoDB",
        "MySQL",
        "Firebase",
        "Git",
        "GitHub",
        "VS Code",
        "Android Studio",
      ],
    },
    {
      title: "Android Development",
      skills: [
        "Kotlin",
        "Jetpack Compose",
        "Firebase Integration",
        "Google Maps API",
        "GPS Services",
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "DBMS",
        "OOP",
        "Computer Networks",
        "Operating Systems",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-heading">
          <span>02.</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;