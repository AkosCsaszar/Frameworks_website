import React from 'react'
import './projects.css'

const ProjectData = ({data}) => {
  return (
    <div className='projectComponent'>
        <h1 className='name'>{data.name}</h1>
        <h2 className='technologies'>{data.technologies}</h2>
        <p className='description'>{data.description}</p>
    </div>
  )
}

export default ProjectData