import React from 'react'
import {
  Hero,
  Contact,
  SkillsHome,
  ProductsHome,
  AboutHome,
  Services,
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
    </>
  )
}

export default Home
