import React  from 'react'
import { useState, useEffect } from 'react'
import AllData from './AllData'
import './about.css'


const AboutMe = () => {
    const [alldata, setAllData] = useState([])    

    useEffect(() => {
        const geAlltData = async () => {
          const dataFromServer = await fetchAboutData()
          setAllData(dataFromServer)
          
        }
        
        geAlltData()
      }, [])

    const fetchAboutData = async () => {
        const res = await fetch('http://localhost:5001/aboutmeData')
        const data = await res.json()
        
        return(data)
    }
    console.log(alldata)


    return (
        <section id="about" className="aboutMe">
            <div className='wrapper'>
                <div className='headerTextAbout'>
                    <div className='line'></div>
                    <h1 className='text'>ABOUT ME</h1>
                    <div className='line'></div>
                </div>
                <div className='sectionContent'>
                    <AllData alldata={alldata} />
                </div>
            </div>
        </section>
    )

}

export default AboutMe
