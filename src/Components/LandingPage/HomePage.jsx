import React from 'react';
import './Homepage.css';
import TitlePage from './TitlePage/TitlePage';
import TopProjects from './ProjectsPage/TopProjects';
import AboutMe from './AboutMe/AboutMe';

function Homepage() {
    return (
        <div className='homepage'>
           <TitlePage />
           <TopProjects/>
           <AboutMe/>
        </div>
    )
}

export default Homepage
