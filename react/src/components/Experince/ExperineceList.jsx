import React from 'react'
import ExperinceData from './ExperinceData'

const ExperineceList = ({alldata}) => {
    
  return (
    <>
      {alldata.map((data) => (
        <ExperinceData key={data.id} data={data}/>
          
      ))}
    </>
  )
}

export default ExperineceList
