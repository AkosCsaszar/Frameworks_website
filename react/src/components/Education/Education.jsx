import React from 'react'
import { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./education.css"
import './EducationsList'
import EducationList from './EducationsList';

const Education = () => {
  const [alldata, setAllData] = useState([])    

    useEffect(() => {
        const geAlltData = async () => {
          const dataFromServer = await fetchAboutData()
          setAllData(dataFromServer)
          
        }
        
        geAlltData()
      }, [])

    const fetchAboutData = async () => {
        const res = await fetch('http://localhost:5001/education')
        const data = await res.json()
        
        return(data)
    }
    console.log(alldata)
  return (
    
      <div id='education' className="headerWrapper">
        <div className='headerTextEducation'>
          <div className='lineLight'></div>
          <h1 className='textLight'>EDUCATION</h1>
          <div className='lineLight'></div>
        </div>
        <VerticalTimeline>
          <EducationList alldata={alldata}/>
          
        </VerticalTimeline>
      </div>
  
  )
}

export default Education