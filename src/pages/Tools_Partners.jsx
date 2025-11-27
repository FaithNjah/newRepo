import React from 'react'
import '../stylesheets/tools.css'

const Tools_Partners = () => {
  return (
    <div className='tools-main' id="partners">
        <button className='tools-button'>🔗 Tools & Partners</button>
        <h1>Innovative Partnerships</h1>
        <p>
           BizMerchant collaborates with innovative partners to provide cutting-edge <br />
           tools and solutions for our entrepreneurial community.
        </p>
        <div className='divs'>
            <div className='partner-card'>
                <div className='partner-logo purple-logo'>
                    <span>N</span>
                </div>
                <h3>Nano</h3>
            </div>
            <div className='partner-card'>
                <div className='partner-logo yellow-logo'>
                    <span>X</span>
                </div>
                <h3>XNOPAY</h3>
            </div>
            <div className='partner-card'>
                <div className='partner-logo purple-logo'>
                    <span>S</span>
                </div>
                <h3>Subnano</h3>
            </div>
        </div>
    </div>
  )
}

export default Tools_Partners