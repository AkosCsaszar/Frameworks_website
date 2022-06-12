import React from 'react'
import ExperienceData from './ExperienceData'

const ExperienceList = ({alldata}) => {
    
  return (
    <>
      {alldata.map((data) => (
        <ExperienceData key={data.id} data={data}/>
          
      ))}
    </>
  )
}

export default ExperienceList
