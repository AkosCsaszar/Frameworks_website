import React from 'react'
import { Header, AboutMe, Education, Experience, Projects } from "./components" 



const Root = () => {
  return (
    <div className="Root">   
        <Header />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
    </div>
  )
}

export default Root
