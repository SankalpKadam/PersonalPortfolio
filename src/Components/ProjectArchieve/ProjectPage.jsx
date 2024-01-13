import React from 'react';
import './ProjectPage.css';
import ProjectListItem from './ProjectListItem';
function ProjectPage() {
  const project_data = [{
    id: "1",
    name:"Concord",
    img:"../../project_image.png",
    category:"Website",
    techstack:"HTML, CSS, JS",
    github:"concord",
    liveDemo:"link to demo"
  }]
  return (
    <div className='projectpage'>
      <div className='projectpage__title'>PROJECT ARCHIVE</div>
      <ProjectListItem />
      <ProjectListItem />
      <ProjectListItem />
      <ProjectListItem />
      <ProjectListItem />
    </div>
  )
}

export default ProjectPage;
