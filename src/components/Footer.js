import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import smp from '../smp.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>

        </p>
        <p className='footer-subscription-text'>

        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>UNIT 1</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>SRI MARUTI PACKAGINGS</p>
            <p style={{ color: 'white' }}>Tech Mahindra Road,</p>
            <p style={{ color: 'white' }}>Bahadurpally,</p>
            <p style={{ color: 'white' }}>Hyderabad - 500 055,</p>
            <p style={{ color: 'white' }}>INDIA.</p>
          </div>
          <div className='footer-link-items'>
            <h2>UNIT 2</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>SRI MARUTI CORRUGATORS</p>
            <p style={{ color: 'white' }}>Suraram Village,</p>
            <p style={{ color: 'white' }}>Quthbulapur Mandal,</p>
            <p style={{ color: 'white' }}>Hyderabad - 500 055,</p>
            <p style={{ color: 'white' }}>INDIA.</p>

          </div>
          <div className='footer-link-items'>
            <h2>UNIT 3</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>SRI I S PACKAGING INDUSTRIES</p>
            <p style={{ color: 'white' }}>Sy. No: 618 & 619, Kalavacharlla Road,</p>
            <p style={{ color: 'white' }}>Rajanagaram, Rajahmundry,</p>
            <p style={{ color: 'white' }}>AP - 533 297,</p>
            <p style={{ color: 'white' }}>INDIA.</p>

          </div>
        </div>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <div>
              <img src={smp} alt="Description of the image"  />
            </div>
            </Link>
          </div>
          <small className='website-rights'>SMP © 2024</small>
          <div className='social-icons'>
            {/* <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link> */}
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link whatsapp'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-whatsapp' />
            </Link>
            {/* <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link> */}
            <Link
              className='social-icon-link gmail'
              to='/'
              target='_blank'
              aria-label='Gmail'
            >
              <i className='fa fa-envelope' />
            </Link>
          </div>
        </div>
      </section>
      
      <div className='footer-footer'>
         <h5>Developed by Raghuveer (+91 9299659344 )</h5>
        </div>

  
    </div>
  );
}

export default Footer;