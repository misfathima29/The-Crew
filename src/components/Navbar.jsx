import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ socialLinks }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>The Crew</h1>
          <span className="tagline">Connecting Events. Empowering People.</span>
        </div>
        
        <div className="social-links">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href={`tel:${socialLinks.phone}`}>
            <FaPhone />
          </a>
          <a href={`mailto:${socialLinks.email}`}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;