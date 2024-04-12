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
            <p style={{ color: 'white' }}>Satyam Computer Road</p>
            <p style={{ color: 'white' }}>Bahadurpally</p>
            <p style={{ color: 'white' }}>Hyderabad-500055</p>
            <p style={{ color: 'white' }}>India</p>
          </div>
          <div className='footer-link-items'>
            <h2>UNIT 2</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>SRI MARUTI CORRUGATORS</p>
            <p style={{ color: 'white' }}>Suraram Village</p>
            <p style={{ color: 'white' }}>Quthbulapur Mandal</p>
            <p style={{ color: 'white' }}>Hyderabad-500055</p>
            <p style={{ color: 'white' }}>Inida</p>

          </div>
          <div className='footer-link-items'>
            <h2>UNIT 3</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>SRI IS PACKAGING INDUSTRIES</p>
            <p style={{ color: 'white' }}>Sy. No: 618 & 61, Kalavacharla Road</p>
            <p style={{ color: 'white' }}>Rajanagaram, Andhra Pradesh</p>
            <p style={{ color: 'white' }}>RAJAHMUNDRY-533101</p>
            <p style={{ color: 'white' }}>INDIA</p>

          </div>
        </div>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              
              <img src={smp} alt="Description of the image" style={{
              width: '50px', // Example width
              height: 'auto', // Maintains aspect ratio
              borderRadius: '10px', // Example border radius
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Example box shadow
              marginLeft: '20px'
            }} />
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
    </div>
  );
}

export default Footer;