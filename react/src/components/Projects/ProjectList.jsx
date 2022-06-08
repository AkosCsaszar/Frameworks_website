import React from 'react'
import ProjectData from './ProjectData'

const ProjectList = ({alldata}) => {
  return (
    <>
      {alldata.map((data) => (
        <ProjectData key={data.id} data={data}/>
      ))}
    </>
  )
}

export default ProjectList
