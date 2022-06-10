import React from 'react'
import { useState, useEffect } from 'react'
import './experince.css'
import ExperineceList from './ExperineceList'

const Experince = () => {
    const [alldata, setAllData] = useState([])    

    useEffect(() => {
        const geAlltData = async () => {
          const dataFromServer = await fetchAboutData()
          setAllData(dataFromServer)
          
        }
        
        geAlltData()
      }, [])

    const fetchAboutData = async () => {
        const res = await fetch('http://localhost:5001/experience')
        const data = await res.json()
        
        return(data)
    }
    console.log(alldata)
    return (

        <div id="experince" className="headerWrapperExperince">
            <div className='headerTextExperince'>
                <div className='line'></div>
                <h1 className='text'>EXPERIENCE</h1>
                <div className='line'></div>
            </div>
            <div className='sectionContent'>
                <ExperineceList alldata={alldata}/>
            </div>
        </div>

    )
}

export default Experince
