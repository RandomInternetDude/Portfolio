import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import {SectionContainer} from './AboutmeElements';

import './Aboutme.css'


const Section4 = () =>{
    return <SectionContainer>
    <div className="container ">
    <h2 className="ab-title-4">Follow me!</h2>
    <div className="ab-text-4">
        <div className="row">
        <h5>You can catch me on these platforms</h5>
        </div>
        <div className="row">
            <a className="mr-4 social-link"  target="_blank"  rel="noopener noreferrer"  href='https://www.linkedin.com/in/joseph-i-rivera/'>
            <FontAwesomeIcon icon={faLinkedin} size="4x"/>
            </a>
            <a className="mr-4 social-link"  target="_blank" rel="noopener noreferrer"  href='https://www.instagram.com/joeyvision/'>
            <FontAwesomeIcon icon={faInstagram} size="4x"/>
            </a>
            <a className="mr-4 social-link"  target="_blank" rel="noopener noreferrer"  href="https://twitter.com/JoeySaiyancoder">
            <FontAwesomeIcon icon={faTwitter} size="4x"/>
            </a>
        </div>
    </div>
</div>
</SectionContainer>
}

export default Section4