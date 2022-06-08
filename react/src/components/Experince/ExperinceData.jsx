import React from 'react'
import './experince.css'

const ExperinceData = ({data}) => {
  return (
    <div className='experienceComponent'>
        <h1 className='title'>{data.company}</h1>
        <h2 className='type'>{data.type}</h2>
        <ul className='description'>{data.description}</ul>
        <p className='date'>{data.date}</p>
    </div>
  )
}

export default ExperinceData