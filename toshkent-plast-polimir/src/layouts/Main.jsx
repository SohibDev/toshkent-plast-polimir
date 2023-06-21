import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import PopProduct from '../components/PopProduct'
import CardWithSlidingBackground from '../components/Sliding'
import Partenrs from '../components/Partenrs'
import Contact from '../components/Contact'

const Main = () => {
  return (
    <>
       <Hero /> 
       <About />
       <Products />
       <PopProduct />
       <CardWithSlidingBackground />
       {/* <Partenrs /> */}
       <Contact />
    </>
  )
}

export default Main