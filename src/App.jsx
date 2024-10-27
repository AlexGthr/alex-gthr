import React from 'react'
import Header from './sectionComponents/Header'
import Hero from './sectionComponents/Hero'
import About from './sectionComponents/About'
import Skill from './sectionComponents/Skill'
import Work from './sectionComponents/Work'
import Contact from './sectionComponents/Contact'
import Footer from './sectionComponents/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
        <Footer />
    </>
  )
}

export default App