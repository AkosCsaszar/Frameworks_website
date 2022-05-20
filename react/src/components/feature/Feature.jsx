import React from 'react'
import './feature.css'

const Type = ({title,text}) => {
  return (
    <div className="types-container_type">
      <div className="types-container_type-title">
        <div/>
        <h1>{title}</h1>
      </div>
      <div className="types-container_type-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Type