import React from 'react'
import './experiencedata.css'

const ExperienceData = ({ data }) => {
  return (
    <div className='cardContainer'>
      <div class="experienceCard">
        <div class="face face1">
          <div class="content">
            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
            <h3>{data.company}</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <h1>{data.type}</h1>
            <p>{data.description}</p>
            <h4>{data.date}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceData