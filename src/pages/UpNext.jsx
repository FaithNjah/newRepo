import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRocket,
  faBullseye,
  faUsers,
  faShareNodes,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import "../stylesheets/Next.css"

const UpNext = () => {
  const joinCommunity = () => {
    window.open('https://chat.whatsapp.com/HsijyRCAhEW7DapClD7jdp?mode=wwt', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='Next-main' id="campaign">
        <div>
            <button>
              <FontAwesomeIcon icon={faRocket} />
              {' '}Up Next: The 10,000 Campaign
            </button>
            <h1>Building a Community of Digital Commerce</h1>
            <p>By 2026, Biz Merchant is on a bold mission. Building a community of 10,000 entrepreneurs <br /> while powering their growth with tools, partnership and visibility.</p>
        </div>
        <div className='Bold-Mission'>
            <div className='Bold-Mission-left'>
                <div className='mission-icon'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className="icon-white" />
                </div>
                <h3>OUR BOLD MISSION</h3>
                <p>We're not just a platform - we're creating the <br />
                    largest entrepreneur movement in Africa. Every <br />
                    member gets tools, partnerships, and the visibility they <br />
                    need to succeed.
                </p>
                <hr />
                <p>Target: 10,000 entrepreneurs by 2026</p>
                <p>Focus: Growth, tool & partnerships</p>
            </div>
            
            <div className='Bold-Mission-right'>
                <h3>How To Participate</h3>
                <div className='one'>
                   <div className='participate-icon'>
                      <FontAwesomeIcon icon={faUsers} size="lg" className="icon-yellow" />
                   </div>
                    <div>
                        <h3>Join our digital community</h3>
                        <p>Become part of Africa's largest entrepreneur network</p>
                    </div>
                </div>
                
                <div className='two'>
                    <div className='participate-icon'>
                        <FontAwesomeIcon icon={faShareNodes} size="lg" className="icon-yellow" />
                    </div>
                    <div>
                        <h3>Share your business and connect</h3>
                        <p>Showcase your business and build meaningful connections</p>
                    </div>
                </div>
                
                <div className='three'>
                    <div className='participate-icon'>
                        <FontAwesomeIcon icon={faStar} size="lg" className="icon-yellow" />
                    </div>
                    <div>
                        <h3>Get access to opportunities</h3>
                        <p>Visibility campaigns, media features, and exclusive events</p>
                    </div>
                </div>
                
                <div>
                    <button onClick={joinCommunity}>Join the community</button>
                    <button onClick={() => scrollToSection('partners')}>Become a partner</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpNext