import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRocket,
  faBullhorn,
  faBolt,
  faUsers,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons'
import Icon1 from '../assets/logo.png'
import "../stylesheets/growth.css"

const Growth_Innovation = () => {
  return (
    <div className='Growth-main'>
        <div>
            <button>
              <FontAwesomeIcon icon={faRocket} />
              {' '}Celebrating Growth and Innovation
            </button>
            <h1>Our Four Pillars</h1>
            <p>At BizMerchant, we believe every entrepreneur deserves visibility, tools and <br/> a strong network. Our work focuses on four essential pillars:</p>
        </div>
        <div className='Four-pillars'>
            <div className='pillar'>
              <div className='pillar-icon'>
                <FontAwesomeIcon icon={faBullhorn} size="lg" className="icon-yellow" />
              </div>
              <div>
                <h3>1. Media</h3>
                <p>Telling the stories of real businesses</p>
              </div>
            </div>
            <div className='pillar'>
              <div className='pillar-icon'>
                <FontAwesomeIcon icon={faBolt} size="lg" className="icon-white" />
              </div>
              <div>
                <h3>2. Emerging Solutions</h3>
                <p>Connecting entrepreneurs with modern tools for growth</p>
              </div>
            </div>
            <div className='pillar'>
              <div className='pillar-icon'>
                <FontAwesomeIcon icon={faUsers} size="lg" className="icon-yellow" />
              </div>
              <div>
                <h3>3. Community Power</h3>
                <p>Building one of the largest entrepreneur movements in Africa</p>
              </div>
            </div>
            <div className='pillar'>
              <div className='pillar-icon'>
                <FontAwesomeIcon icon={faHandHoldingHeart} size="lg" className="icon-white" />
              </div>
              <div>
                <h3>4. Support</h3>
                <p>Businesses bring ideas, gain exposure and receive backing needed to grow</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Growth_Innovation