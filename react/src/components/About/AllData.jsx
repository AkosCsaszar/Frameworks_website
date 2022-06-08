import React from 'react'
import Data from './Data'

const AllData = ({ alldata }) => {
  return (
    <>
      {alldata.map((data) => (
        <Data key={data.id} data={data}/>
      ))}
    </>
  )
}

export default AllData
