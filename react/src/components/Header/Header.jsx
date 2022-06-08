import React from 'react'
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUserAstronaut, faCubes, faGraduationCap} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <header className="header">
        <h1 className="headerText">CSÁSZÁR ÁKOS</h1>
        <div className="navItems">
            <a href="#about" className='anchor'>
                <FontAwesomeIcon icon={faUserAstronaut} className="icons"/>
            </a>
            <a href='#education' className='anchor'>
                <FontAwesomeIcon icon={faGraduationCap} className="icons"/>
            </a>
            <a href='#projects' className='anchor'>
                <FontAwesomeIcon icon={faCubes} className="icons"/>
            </a>
            
        </div>
    </header>
)
}

export default Header
