import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDribbble, FaBehance, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-section">
                        <h3 className="footer-logo">
                            Bridey Mason
                        </h3>
                        <p className="footer-tagline">
                            Crafting exceptional digital experiences through innovative design solutions.
                        </p>
                        <div className="social-links">
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                                <FaDribbble size={20} />
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                                <FaBehance size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li>Product Design</li>
                            <li>Logo Design</li>
                            <li>Social Media</li>
                            <li>Presentations</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Get in Touch</h4>
                        <ul className="footer-contact">
                            <li>
                                <HiMail size={18} />
                                <span>brideymason@gmail.com</span>
                            </li>
                            <li>
                                <HiLocationMarker size={18} />
                                <span>Gold Coast, Australia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Bridey Mason. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
