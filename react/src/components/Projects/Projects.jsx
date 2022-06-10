import React from 'react'
import { useState, useEffect } from 'react'
import ProjectList from './ProjectList'
import './projects.css'


const Projects = () => {
    const [alldata, setAllData] = useState([])    

    useEffect(() => {
        const geAlltData = async () => {
          const dataFromServer = await fetchAboutData()
          setAllData(dataFromServer)
          
        }
        
        geAlltData()
      }, [])

    const fetchAboutData = async () => {
        const res = await fetch('http://localhost:5001/projects')
        const data = await res.json()
        
        return(data)
    }
    console.log(alldata)
    return (
        <div id="projects" className="headerWrapper">
            <div className='headerTextProjects'>
                <div className='lineLight'></div>
                <h1 className='textLight'>PROJECTS</h1>
                <div className='lineLight'></div>
            </div>
            <div className='sectionContent'>
                <ProjectList alldata={alldata}/> 
            </div>
        </div>
    )
}

export default Projects
