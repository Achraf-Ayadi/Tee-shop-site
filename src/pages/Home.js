import React from 'react'
import {
  Hero,
  Contact,
  SkillsHome,
  ProductsHome,
  AboutHome,
} from '../components/index'

function Home() {
  return (
    <>
      <Hero />
      <SkillsHome />
      <AboutHome />
      <ProductsHome />
      <Contact />
    </>
  )
}

export default Home
