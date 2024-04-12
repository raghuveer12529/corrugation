import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

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
            <p style={{ color: 'white' }}>SATYAM COMPUTER ROAD</p>
            <p style={{ color: 'white' }}>BAHADURPALLY</p>
            <p style={{ color: 'white' }}>HYDERABAD-500055</p>
            <p style={{ color: 'white' }}>INDIA</p>
          </div>
          <div className='footer-link-items'>
            <h2>UNIT 2</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>SRI MARUTI CORRUGATORS</p>
            <p style={{ color: 'white' }}>SURARAM VILLAGE</p>
            <p style={{ color: 'white' }}>QUTHBULLAPUR MANDAL</p>
            <p style={{ color: 'white' }}>HYDERABAD-500055</p>
            <p style={{ color: 'white' }}>INDIA</p>

          </div>
          <div className='footer-link-items'>
            <h2>UNIT 3</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>SRI IS PACKAGING INDUSTRY</p>
            <p style={{ color: 'white' }}>SOME AREA</p>
            <p style={{ color: 'white' }}>SOME MANDAL</p>
            <p style={{ color: 'white' }}>RAJAHMUNDRY-533101</p>
            <p style={{ color: 'white' }}>INDIA</p>

          </div>
        </div>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              SMP
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>SMP © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;