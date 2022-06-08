import React from 'react'
import { Header, AboutMe, Education, Experince, Projects } from "./components" 



const Root = () => {
  return (
    <div className="Root">   
        <Header />
        <AboutMe />
        <Education />
        <Experince />
        <Projects />
    </div>
  )
}

export default Root
