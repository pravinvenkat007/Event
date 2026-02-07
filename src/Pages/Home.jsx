import React from 'react'
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Eventcard from '../component/Eventcard';
import Location from '../component/Location';
export const Home = () => {
  return (
    <div>
       <Navbar/>
        <Hero/>
        <Eventcard/>
        <Location/>
    </div>
  )
}
