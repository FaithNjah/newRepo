import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRocket,
  faFire,
  faCalendarDays,
  faLocationDot,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/annual.css'

const Annualevents = () => {
  return (
    <div className='annual-main' id="events">
        <div className='top'>
          <button>
            <FontAwesomeIcon icon={faRocket} />
            {' '}Annual Events and Celebrations
          </button>
          <h1>Celebrating Entrepreneurship</h1>
          <p>
            Our annual events are a celebration of entrepreneurship bringing together business <br />
            owners, innovators, and creators to showcase, learn and grow. Each edition follows  <br />
            months of active community building
          </p>
        </div>
        <div className='main'>
          <div className='left'>
            <button className='first-left-button'>
              <FontAwesomeIcon icon={faCalendarDays} />
              {' '}Past Events & Landmarks
            </button>
            <h3>Legendary Moments, Lasting Impact</h3>
            <p>
              From digital summits to community calls, BizMerchant has <br />
              consistently created platforms for entrepreneurs to thrive and <br />
              connect.
            </p>
            <div className='container'>
              <h3>Last Edition Highlight</h3>
              <p>
                <span>"AltPayments for Global Commerce"</span> recorded 300+<br />
                 attendees and highlighted the growing power of <br />
                 community-driven commerce.
              </p>
              <p className='attendees'>
                <FontAwesomeIcon icon={faUsers} className="icon-yellow" />
                {' '}300+ attendees
              </p>
            </div>
            <button className='second-button'>
              👋 Want to be part of the next story? Join BizMerchant today
            </button>
          </div>
          
          <div className='right'>
            <button>
              <FontAwesomeIcon icon={faFire} />
              {' '}Next Major Event
            </button>
            <h2>The Future Awaits</h2>
            
            <div className='future-icon'>
              <div className='large-icon'>
                <FontAwesomeIcon icon={faCalendarDays} size="3x" className="icon-gradient" />
              </div>
            </div>
            
            <div className='event-details'>
              <div className='detail-item'>
                <FontAwesomeIcon icon={faCalendarDays} className="icon-yellow" />
                <div>
                  <p className='detail-label'>Date</p>
                  <p className='detail-value'>2026</p>
                </div>
              </div>
              
              <div className='detail-item'>
                <FontAwesomeIcon icon={faLocationDot} className="icon-yellow" />
                <div>
                  <p className='detail-label'>Venue</p>
                  <p className='detail-value'>TBA</p>
                </div>
              </div>
              
              <div className='detail-item'>
                <FontAwesomeIcon icon={faUsers} className="icon-yellow" />
                <div>
                  <p className='detail-label'>Theme</p>
                  <p className='detail-value'>TBA</p>
                </div>
              </div>
            </div>
            
            <p className='anticipate-text'>
              Anticipate the next series of events from The<br />
              BizMerchant Community.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Annualevents