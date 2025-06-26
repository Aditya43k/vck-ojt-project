import { Link } from "react-router-dom";
import { useState } from "react";
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    
      <header className="header1">
        <a href="/home" className="brand"><h2 className="vck-lnk">Vivekanand College</h2></a>

        <div className="hamburger" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/home" className="Links">Home</Link>
          <Link to="/about" className="Links">About</Link>
          <Link to="/courses" className="Links">Courses</Link>
          <Link to="/contact" className="Links">Contact</Link>
          <Link to="/admission" className="apply-btn">Apply Now!</Link>
        </nav>
      </header>
   
  );
};

export default Header;
