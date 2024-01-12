import React from 'react';
import './TitlePage.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function TitlePage() {
  return (
    <div className='titlepage'>
       <div className="titlepage__Image">
                <img src={require('../IMG_9151.png')} alt="My profile image" className='titlepage__profileImage' />
            </div>
            <div className='titlepage__smallInfo'>
                <div className="titlepage__smallName">
                    <div>
                        <span className="titlepage__nameIntro">
                            I am Sankalp Kadam
                        </span>
                        <span className="titlepage__jobRoles">
                            Software Developer
                        </span>
                    </div>
                    
                    <div className='titlepage__socials'>
                        <div className="titlepage__contactBtn">
                            Contact ME
                        </div>
                        <div className='titlepage__socialIcon'>
                            <LinkedInIcon fontSize='large' />
                        </div>
                        <div className='titlepage__socialIcon'>
                            <GitHubIcon fontSize='large'/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TitlePage;
