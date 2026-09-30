function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-heading">
          <span>01.</span>
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science and Engineering graduate with hands-on
              experience building applications across web, Android, and
              machine learning.
            </p>
            <p>
              I enjoy working across the stack — from building full-stack
              applications with Node.js, Express.js and MongoDB to developing
              Android applications using Kotlin and Jetpack Compose.
            </p>
            <p>
              I've also worked with Firebase, Google Maps APIs, computer
              vision, and Generative AI tooling. I'm currently strengthening
              my Data Structures and Algorithms skills in Java while
              continuing to grow as a software developer.
            </p>
          </div>
          <div className="about-highlight">
            <div className="highlight-card">
              <h3>8.6</h3>
              <p>CGPA</p>
            </div>
            <div className="highlight-card">
              <h3>4+</h3>
              <p>Projects</p>
            </div>
            <div className="highlight-card">
              <h3>1</h3>
              <p>Internship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;