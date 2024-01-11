import React from 'react';
import './Homepage.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Homepage() {
    return (
        <div className='homepage'>
            <div className="homepage__Image">
                <img src={require('./IMG_9151.png')} alt="My profile image" className='homepage__profileImage' />
            </div>
            <div className='homepage__smallInfo'>
                <div className="homepage__smallName">
                    <div>
                        <span className="homepage__nameIntro">
                            I am Sankalp Kadam
                        </span>
                        <span className="homepage__jobRoles">
                            Software Developer
                        </span>
                    </div>
                    
                    <div className='homepage__socials'>
                        <div className="homepage__contactBtn">
                            Contact ME
                        </div>
                        <div className='homepage__socialIcon'>
                            <LinkedInIcon fontSize='large' />
                        </div>
                        <div className='homepage__socialIcon'>
                            <GitHubIcon fontSize='large'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
