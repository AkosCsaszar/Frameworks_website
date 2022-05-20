import React from 'react'
import {Feature} from '../../components';
import './whatJsFramework.css'


const aboutJsFrameworkData = [
  {
    title: "React",
    text: "A react nagyon jo nagyon szep"
  },
  {
    title: "Angular",
    text: "Az Angular is nagyon jo nagyon szep"
  },
  {
    title: "Vue",
    text: "A Vue-t se szabad leszolni csak azert mert meg fiatal"
  }
]

const WhatJsFramework = () => {
  return (
    <div className="jsframework section_margin" id="jsFramework">
        <div className="jsframework-types">
          <Feature title="Mi a JavaScript keretrendszer?" text="A JavaScript keretrendszer JavaScript kódkönyvtárak gyűjteménye, amelyek előre megírt kódot biztosítanak a webfejlesztőknek"/>
        </div>
        <div className="jsframework-heading">
          <h1 className="header-text">Néhány a legismertebb Javascript keretrendszerek közül</h1>
        </div>
        <div className='jsframework-container'>
          {aboutJsFrameworkData.map((item,index) =>(
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}
        </div>

    </div>
  )
}

export default WhatJsFramework