import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import About from '../components/About'
import Logos from '../components/Logos'
import Cars from '../components/Cars'
import CarAd from '../components/CarAd'

const Home = () => {
  return (
    <div className='relative'>
      <Hero/>
      <SearchBar/>
      <About/>
      <Logos/>
      <Cars/>
      <CarAd/>
    </div>
  )
}

export default Home
