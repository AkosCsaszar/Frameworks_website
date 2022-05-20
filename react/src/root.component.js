import React from 'react'
import { Navbar, Article, Brand, Type } from './components'
import {
  Footer,
  Header,
  WhatJsFramework,
  AboutReact,
  AboutAngular,
  AboutVueJS,
} from './containers'

const Root = () => {
  return (
    <div className="Root">
      <div className="navbar_bg">
        <Navbar />
        <Header />
      </div>
      <WhatJsFramework />
      <AboutReact />
      <AboutAngular />
      <AboutVueJS />

      <Footer />
    </div>
  )
}

export default Root
