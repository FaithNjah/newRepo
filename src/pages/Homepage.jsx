import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRocket, 
  faUsers, 
  faGlobe, 
  faBolt, 
  faCalendarDays,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import Icon1 from '../assets/logo.png'
import '../stylesheets/homePage.css'

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  const joinCommunity = () => {
    window.open('https://chat.whatsapp.com/HsijyRCAhEW7DapClD7jdp?mode=wwt', '_blank');
  };

  return (
    <div>
      <nav>
        <div className='nav1'>
          <div className='icon'>
            <img src={Icon1} alt="Biz Merchant" className='logo'/>
          </div>
        </div>
        
        <div className={`nav2 ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('campaign')}>The 10,000 Campaign</li>
            <li onClick={() => scrollToSection('events')}>Events</li>
            <li onClick={() => scrollToSection('testimonies')}>Testimonies</li>
            <li onClick={() => scrollToSection('partners')}>Partners</li>
          </ul>
        </div>
        
        <div className='nav3'>
          <button onClick={joinCommunity}>Join Community</button>
          <button onClick={() => scrollToSection('events')}>Events</button>
        </div>

        {/* Hamburger Menu Button */}
        <button className='hamburger' onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </nav>

      <main id="home">
        <p className='one'>
          <FontAwesomeIcon icon={faRocket} className="icon-yellow" />
          {' '}Leading Business Innovation
        </p>
        <h1>BizMerchant</h1>
        <h3>Fast-growing digital commerce community</h3>
        <p>Helping Entrepreneurs get <span>seen</span>, get <span>connected</span> and get <span>Paid</span></p>
        
        <div>
          <button onClick={joinCommunity}>
            <FontAwesomeIcon icon={faBolt} />
            {' '}Join the Future
          </button>
          <button onClick={() => scrollToSection('events')}>
            <FontAwesomeIcon icon={faCalendarDays} />
            {' '}Explore Events
          </button>
        </div>
        
        <div className='numbers'>
          <div className='num1'>
            <FontAwesomeIcon icon={faUsers} size="lg" className="icon-yellow" />
            <h1>10,000+</h1>
            <p>entrepreneurs</p>
          </div>
          <div className='num2'>
            <FontAwesomeIcon icon={faGlobe} size="lg" className="icon-yellow" />
            <h1>25+</h1>
            <p>countries in view</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Homepage