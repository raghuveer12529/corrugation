import React from 'react';
import './Certifications.css';

function Certifications() {
    return (
        <div className='certifications-container'>
            <h2 className='certifications-heading'>Our Certifications</h2>
            <div className='certifications-wrapper'>
                <div className='certification-item'>
                    <img
                        src='/images/certifications/iso-9001.jpg'
                        alt='ISO 14001 Certified'
                        className='certification-image'
                    />
                    <p className='certification-text'>ISO 9001:2015 Certified</p>
                </div>
                <div className='certification-item'>
                    <img
                        src='/images/certifications/cert-iso-45001.jpg'
                        alt='ISO 45001 Certified'
                        className='certification-image'
                    />
                    <p className='certification-text'>ISO 14001 Certified</p>
                </div>
                <div className='certification-item'>
                    <img
                        src='/images/certifications/cert-iso-14001.png'
                        alt='ISO 14001 Certified'
                        className='certification-image'
                    />
                    <p className='certification-text'>ISO 45001 Certified</p>
                </div>
                
                <div className='certification-item'>
                    <img
                        src='/images/certifications/iatf.png'
                        alt='IATF 16949:2016 Certified'
                        className='certification-image'
                    />
                    <p className='certification-text'>IATF 16949:2016 Certified</p>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
