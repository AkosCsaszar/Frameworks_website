import React from 'react'
import './header.css'
// import knowledge from '../../assets/knowledge.svg';

const Header = () => {
  return (
    <div className="header section_padding" id="home">
      <div className="header-content">
        <h1 className="header-text">Üdvözöllek a JavaScript világában!</h1>
        <p>
          Az alábbi oldalon betekintést nyerhetsz pár keretrendszer világába,
          ami nagyban megsegíti napjaink webprogramozóinak munkáját.{' '}
        </p>
      </div>
      <div className="header-image">
        {/* <img src={knowledge} alt="knowledge"/> */}
      </div>
    </div>
  )
}

export default Header
