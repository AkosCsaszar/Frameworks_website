import React from 'react'
import { Feature } from '../../components'
import './aboutAngular.css'


const angularData = [
  {
    title: 'JSX allows you to write HTML within JavaScript',
    text: 'JSX is a powerful implementation detail of React. It’s a cool feature that makes React easy and fun to use because it’s relatively quick to make a feature and rewarding to see it. JSX brings HTML directly into JavaScript and allows you to build HTML within the JavaScript code.'
  },
  {
    title: 'JSX allows you to write HTML within JavaScript',
    text: 'JSX is a powerful implementation detail of React. It’s a cool feature that makes React easy and fun to use because it’s relatively quick to make a feature and rewarding to see it. JSX brings HTML directly into JavaScript and allows you to build HTML within the JavaScript code.'
  },
  {
    title: 'JSX allows you to write HTML within JavaScript',
    text: 'JSX is a powerful implementation detail of React. It’s a cool feature that makes React easy and fun to use because it’s relatively quick to make a feature and rewarding to see it. JSX brings HTML directly into JavaScript and allows you to build HTML within the JavaScript code.'
  },
  {
    title: 'JSX allows you to write HTML within JavaScript',
    text: 'JSX is a powerful implementation detail of React. It’s a cool feature that makes React easy and fun to use because it’s relatively quick to make a feature and rewarding to see it. JSX brings HTML directly into JavaScript and allows you to build HTML within the JavaScript code.'
  }
]
const AboutAngular = () => {
  return (
    <div className="about_angular section_margin" id="angular">
      <div className="about_angular-heading">
        <h1 className="header-text">Mik az erősségei az Angularnek?</h1>
      </div>
      <div className="about_angular-container">
            {angularData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
  )
}

export default AboutAngular