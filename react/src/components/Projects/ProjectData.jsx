import React from 'react'
import './projectdata.css'

const ProjectData = ({data}) => {
  return (
    <div className='card'>
      <div className='cardHeader'>
        <h1 className='name'>{data.name}</h1>
      </div>
      <div class="cardBody">
        <p className='projectDescription'>{data.description}</p>
        <p className='technologies'>{data.technologies}</p>
      </div>
        
    
  </div>
    
  )
}

export default ProjectData