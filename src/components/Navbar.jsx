import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={handleLinkClick}>Pavan P</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">☰</button>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#education" onClick={handleLinkClick}>Education</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;