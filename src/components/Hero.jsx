function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          Hi, I'm
        </p>
        <h1>Pavan P</h1>
        <h2>Software Developer</h2>
        <p className="hero-description">
          I build full-stack web applications, Android applications,
          and practical software solutions using modern technologies.
        </p>
        <p className="hero-stack">
          JavaScript · React · Node.js · MongoDB · Kotlin · Python
        </p>
        <div className="hero-buttons">
        <a href="#projects" className="btn primary-btn">View My Work</a>
        <a href="/Resume.pdf" download="Pavan-P-Resume.pdf" className="btn secondary-btn">Download Resume</a>
        <a href="https://github.com/Pavan-P45" target="_blank" rel="noreferrer" className="btn secondary-btn">GitHub ↗</a>
        <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;