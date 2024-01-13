import React from 'react';
import './Homepage.css';
import TitlePage from './TitlePage/TitlePage';
import TopProjects from './ProjectsPage/TopProjects';
import AboutMe from './AboutMe/AboutMe';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

function Homepage() {
    return (
        <div className='homepage'>
            <NavBar />
           <TitlePage />
           <TopProjects/>
           <AboutMe/>
           <Footer />
        </div>
    )
}

export default Homepage
