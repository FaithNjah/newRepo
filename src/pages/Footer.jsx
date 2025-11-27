import React from 'react'
import '../stylesheets/footer.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const joinCommunity = () => {
    window.open('https://chat.whatsapp.com/HsijyRCAhEW7DapClD7jdp?mode=wwt', '_blank');
  };

  return (
    <div className='footer-main'>
      <div className='footer-top'>
        <div className='first-div'>
            <div className='logo-container'>
                <button className='footer-logo-button'>B</button>
            </div>
            <div>
                <h3>🌍 BizMerchant</h3>
                <h4>Leading Business Innovation</h4>
            </div>
            <p>
                Empowering entrepreneurs across Africa with <br />
                digital tools, community support, and innovative <br />
                solutions for business growth.
            </p>
            <h3>Contact Us</h3>
            <p>📍 Port Harcourt, Nigeria</p>
            <p>✉️ thebizmerchant@gmail.com</p>
            <p>📱 +234 8029142970</p>
        </div>
        <div className='second-div'>
            <ul>
                <li className='footer-heading'>Quick Links</li>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('campaign')}>The 10,000 Campaign</li>
                <li onClick={() => scrollToSection('events')}>Merchant Fest</li>
                <li onClick={() => scrollToSection('events')}>Events</li>
                <li onClick={() => scrollToSection('testimonies')}>Testimonials</li>
                <li onClick={() => scrollToSection('partners')}>Partners</li>
            </ul>
        </div>
        <div className='third-div'>
            <ul>
                <li className='footer-heading'>Community</li>
                <li onClick={joinCommunity}>Join the Community</li>
                <li onClick={() => scrollToSection('partners')}>Become a Partner</li>
                <li onClick={() => scrollToSection('events')}>Volunteer</li>
                <li onClick={() => scrollToSection('testimonies')}>Media Features</li>
            </ul>
        </div>
      </div> 
      <div className='footer-bottom'>
        <div>
          <h3>Follow Us</h3>
          <p>📺 Follow the Movement on:</p>
        </div>
        <div className='social-icons'>
          <a 
            href="https://www.facebook.com/profile.php?id=100090538935940" 
            target="_blank" 
            rel="noopener noreferrer"
            className='social-icon-circle'
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://x.com/bizmerchantng?t=zHL0X6anHiOcCX7KNmxfVQ&s=09" 
            target="_blank" 
            rel="noopener noreferrer"
            className='social-icon-circle'
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.instagram.com/bizmerchantng?igsh=MTZudzh2eG1yZm1xeQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className='social-icon-circle'
          >
            <FaInstagram />
          </a>
        </div>
      </div> 
      <p>© 2025 BizMerchant. All Rights Reserved.</p>
    </div>
  )
}

export default Footer