import React from 'react'
import projectsData from './projects.json'
import ProjectsItem from './ProjectsItem'

function Projects(props) {
  console.log(projectsData);
  return(
    <section id="projects" className="py-4 bg-a">
      <div className="container">
        <h2 className="title-1">Works</h2>
        <div className="projects-container row mx-0 justify-content-center">
          {projectsData.map((item,i) => <ProjectsItem key={i} {...item} />)}
        </div>
      </div>
    </section>
  )
}
export default Projects
