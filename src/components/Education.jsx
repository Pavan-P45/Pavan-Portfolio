function Education() {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <div className="section-heading">
          <span>05.</span>
          <h2>Education</h2>
        </div>
        {/* B.E. */}
        <div className="education-card">
          <div className="education-main">
            <div className="education-icon">
              🎓
            </div>
            <div>
              <h3>
                B.E. in Computer Science and Engineering
              </h3>
              <p className="education-college">
                Dr. Ambedkar Institute of Technology, Bengaluru
              </p>
              <p className="education-duration">
                2022 — 2026
              </p>
            </div>
          </div>
          <div className="education-score">
            <span>CGPA</span>
            <strong>8.6</strong>
          </div>
        </div>
        {/* PUC */}
        <div className="education-card education-card-secondary">
          <div className="education-main">
            <div className="education-icon">
              🎓
            </div>
            <div>
              <h3>
                Pre-University Education
              </h3>
              <p className="education-college">
                Kiran PU College, Bengaluru
              </p>
              <p className="education-duration">
                2020 — 2022 · PCMC Stream
              </p>
            </div>
          </div>
          <div className="education-score">
            <span>Percentage</span>
            <strong>95%</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;