import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faCircle } from '@fortawesome/free-solid-svg-icons'
import "../stylesheets/community.css"

const CommunityTestimonials = () => {
  return (
    <div className='community-main' id="testimonies">
        <div className='communityTop'>
            <button>💬 Community Testimonials</button>
            <h1>
                Real Stories<br />
                Real Impact
            </h1>
            <p>
                Hear from entrepreneurs who are building their futures with BizMerchant. <br />
                These are the voices of our thriving community.
            </p>
        </div>
        <div className='communityMain'>
            <div className='testimonial-card'>
                <div className='quote-section'>
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                    <p>
                        "The highlight of being part of BizMerchant is the
                        community, the bond."
                    </p>
                </div>
                <div className='author-section'>
                    <div className='author-dot'>
                        <FontAwesomeIcon icon={faCircle} className="dot-yellow" />
                    </div>
                    <div className='author-info'>
                        <h3>Nicole Dinenye</h3>
                        <p>Lead Admin @ BizMerchant</p>
                    </div>
                </div>
            </div>
            
            <div className='testimonial-card'>
                <div className='quote-section'>
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                    <p>
                        "While touring the city of Port Harcourt, I gained a lot of
                        knowledge and even landed a gig at the last edition of
                        The BizMerchant Event."
                    </p>
                </div>
                <div className='author-section'>
                    <div className='author-dot'>
                        <FontAwesomeIcon icon={faCircle} className="dot-purple" />
                    </div>
                    <div className='author-info'>
                        <h3>Mary Cynthia</h3>
                        <p>Social Media Manager</p>
                    </div>
                </div>
            </div>
            
            <div className='testimonial-card'>
                <div className='quote-section'>
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                    <p>
                        "We are a global brand. Angels Touch was live at The
                       BizMerchant Event. I was given the opportunity to exhibit,
                       and it was really an experience."
                    </p>
                </div>
                <div className='author-section'>
                    <div className='author-dot'>
                        <FontAwesomeIcon icon={faCircle} className="dot-yellow" />
                    </div>
                    <div className='author-info'>
                        <h3>Angels Touch</h3>
                        <p>Tote Bag Vendor</p>
                    </div>
                </div>
            </div>
            
            <div className='testimonial-card'>
                <div className='quote-section'>
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                    <p>
                        "I'm so grateful to the convener of this program. I was a
                        volunteer, but I learnt a lot. Imagine those who sat all
                        through — they over-learnt. My jotter is full, my eyes open,
                        and my heart determined."
                    </p>
                </div>
                <div className='author-section'>
                    <div className='author-dot'>
                        <FontAwesomeIcon icon={faCircle} className="dot-purple" />
                    </div>
                    <div className='author-info'>
                        <h3>Precious Crafts Creation</h3>
                        <p>Event Volunteer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityTestimonials