import React from 'react'
import { data as projects } from '../projectsData'
import Card from '../components/Card'

const Projects = () => {
  return (
    <>
    <div className='divider grey darken-4'></div>
    <div className='row'>
    </div>
    <div className='row'>
      {projects.map((project, i)=> {
        return (
           <Card
          title={project.title}
          description={project.description}
          img={project.img}
          github={project.github}
          site={project.site}
          key={i}>
        </Card>
        )
       })} 
    </div>
  </>
  )
}

export default Projects