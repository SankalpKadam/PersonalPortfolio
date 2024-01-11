import React from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__title'>LET'S CONNECT</div>
      <div className='footer__text'>
        <p>Say Hello at, 
            
            <span>sankalpkadam.ms07@gmail.com</span>
        </p>
        <p>For more info
            <span>Resume</span>
            </p>
      </div>
      <div className="footer__icons">
        <LinkedInIcon/>
        <GitHubIcon/>
        <InstagramIcon/>
      </div>
    </div>
  )
}

export default Footer
