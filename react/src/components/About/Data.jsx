import React from 'react'
import './about.css'

const Data = ({ data }) => {
  return (
    <p className='paragraph'>{data.text}</p>
  )
}

export default Data