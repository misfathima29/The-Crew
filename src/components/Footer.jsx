import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
           <h4>The Crew</h4>
          <p>Connecting passionate volunteers with meaningful opportunities across India's metro cities.</p>
          <p className="tagline-footer">Connecting Events. Empowering People.</p>
           </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#events">Browse Events</a></li>
            <li><a href="#contact-form">Register as Volunteer</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#footer">Contact Info</a></li>
          </ul>
        </div>
        
         <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Bangalore, Karnataka</span>
          </div>
          <div className="contact-item">
            <FaPhone />
            <span>+91 9902037689</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>misbahfathimams@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaClock />
            <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-footer">
            <a href="https://github.com/misfathima29" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/misbah-fathima-80474029b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://www.instagram.com/misfathima29/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://x.com/misfathima29" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 The Crew. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;