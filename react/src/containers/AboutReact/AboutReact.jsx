import React from 'react'
import { Feature } from '../../components'
import './aboutReact.css'

const reactData = [
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


const AboutReact = () => {
  return (
    <div className="about_react section_margin" id="react">
        <div className="about_react-heading">
            <h1 className="header-text">Mik az erősségei a ReactJS-nek?</h1>
        </div>
        <div className="about_react-container">
            {reactData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
        

    </div>
  )
}

export default AboutReact