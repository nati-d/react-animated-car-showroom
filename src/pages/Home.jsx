import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import About from '../components/About'
import Logos from '../components/Logos'
import Cars from '../components/Cars'
import CarAd from '../components/CarAd'
import Vehicles from '../components/Vehicles'

const Home = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <Hero/>
      <SearchBar/>
      <About/>
      <Logos/>
      <Cars/>
      <CarAd/>
      <Vehicles/>
    </div>
  )
}

export default Home
