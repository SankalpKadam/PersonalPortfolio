import React from 'react';
import './TopProjects.css';
import ProjectComponent from './singleProject/ProjectComponent';
function TopProjects() {
    return (
        <div className='topprojects'>
            <div className="topprojects__title">PROJECTS</div>
            <div className='topprojects__projects'>

                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />
            </div>
        </div>
    )
}

export default TopProjects
