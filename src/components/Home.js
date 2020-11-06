import React from 'react'
import Profile from './Profile'
import Contact from './contact'
import Skills from './Skills'
import Projects from './projects'
import Footer from './Footer'

function Home(props) {
  return(
    <div className="app">
      <Profile />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
export default Home
