import React from 'react';
import './ProjectComponent.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function ProjectComponent() {
    return (
        <div className='projectcomponent'>
            <div className="projectcomponent__dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div className='projectcomponent__row'>
                <div className="projectcomponent__imageColumn">
                    <div className="projectcomponent__imgBackground">

                        <img src={require('../../project_image.png')} alt="" />
                    </div>
                </div>
                <div className="projectcomponent__infoColumn">
                    <div className='projectcomponent__projectTitle'>
                        <span className='projectcomponent__title'>CONCORD</span>
                        <span className='projectcomponent__category'>Fullstack Web Developement</span>
                    </div>
                    <div className='projectcomponent__infoIcon'>
                        <ArrowOutwardIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent
