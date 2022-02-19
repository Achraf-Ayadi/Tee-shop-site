import React from 'react'
import {
  Hero,
  Contact,
  SkillsHome,
  ProductsHome,
  AboutHome,
  Services,
  Footer,
} from '../components/index'

function Home() {
  return (
    <>
      <Hero />
      <SkillsHome />
      <AboutHome />
      <ProductsHome />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
