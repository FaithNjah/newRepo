import React from 'react'
import '../stylesheets/founder.css'
import founder from '../assets/founder.jpg'

const Founder = () => {
  return (
    <div className='Founder-main'>
        <div className='container-left'>
            <button className='container-left-first-button'>👤 Founder</button>
            <h1>Meet the <br /> Visionary </h1>
            <div className='founder-left'>
                <div>
                    <img src= {founder} alt="" />
                    <div>
                        <h3>Enaanapu Gabriel</h3>
                        <h3>Founder & Convener of BizMerchant</h3>
                    </div>
                </div>
                <div>
                  <p>A visionary entrepreneur passionate about empowering <br />
                    everyday businesses with digital tools, alternative <br />
                    payments, and community-driven growth. Through <br />
                    BizMerchant, Gabriel is building one of Africa's largest <br />
                    entrepreneur movements.
                    </p>
                </div>
                <div>
                <p > 💜 Empowering entrepreneurs across Africa</p>
                </div>
            </div>
        </div>
        <div className='container-right'>
            <button className='organizer-button'>⚡ Organizer</button>
            <h3>BizMerchant Community</h3>
            <button>B</button>
            <h3>
                Powered by entrepreneurs,<br />
                for entrepreneurs
            </h3>
            <p>
                Our community-driven approach ensures that every<br />
                initiative, event, and partnership serves the real needs of<br />
                African entrepreneurs.
            </p>
            <div className='right-bottom'>
                <div className='container-right-left'>
                    <h3 className='yellow-bold'>Africa</h3>
                    <p>Focus Region</p>
                </div>
                <div className='container-right-right'>
                    <h3 className='yellow-bold'>2025</h3>
                    <p>Since</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Founder