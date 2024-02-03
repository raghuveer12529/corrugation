import React from 'react';
import './Footer.css';
import { Button } from './Button';
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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>UNIT 1</h2>
                      <p style={{ color: 'white', fontSize: '20px' }}>SRI MARUTI PACKAGINGS</p>
                      <p style={{ color: 'white' }}>SATYAM COMPUTER ROAD</p>
                      <p style={{ color: 'white' }}>BAHADURPALLY</p>
                      <p style={{ color: 'white' }}>HYDERABAD-500055</p>
                      <p style={{ color: 'white' }}>INDIA</p>
                  </div>
                  <div class='footer-link-items'>
            <h2>UNIT 2</h2>
                      <p style={{ color: 'white', fontSize: '20px' }}>SRI MARUTI CORRUGATORS</p>
                      <p style={{ color: 'white' }}>SURARAM VILLAGE</p>
                      <p style={{ color: 'white' }}>QUTHBULLAPUR MANDAL</p>
                      <p style={{ color: 'white' }}>HYDERABAD-500055</p>
                      <p style={{ color: 'white' }}>INDIA</p>
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SMP
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>SMP © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;