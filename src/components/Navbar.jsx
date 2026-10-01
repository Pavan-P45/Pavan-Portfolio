import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <a href="#home" className="logo" onClick={closeMenu}>Pavan P</a>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;