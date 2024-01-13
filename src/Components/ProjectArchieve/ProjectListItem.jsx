import React from 'react';
import './ProjectListItem.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ProjectListItem() {
  return (
    <div className='projectlistitem'>
      <div className="projectlistitem__row">
        <div className="projectlistitem__image">
          <img src={require("../LandingPage/project_image.png")} alt=""  className='projectlistitem__projimage'/>
        </div>
        <div className="projectlistitem__data">
          <div className='projectlistitem__projectTitle'>Concord</div>
          <div className='projectlistitem__projectDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptate sit velit quasi architecto tempora, ratione in exercitationem nihil autem quos earum quod, enim vero nemo reprehenderit laboriosam! Eius?</div>
          <div className='projectlistitem__projectTech'>HTML, CSS, JS</div>
          <div className='projectlistitem__projectLinks'>
            <a href="">Live Demo</a>
            <a href=""><span>Check on Github <ArrowOutwardIcon fontSize='x-small'/></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListItem;
