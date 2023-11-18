import React from 'react'
import DashBoard from './DashBoard'
import About from './About'
import Agenda from './Agenda'
import Workshop from './Workshop'

function Home() {
  return (
    <div className='home_container'>
    <DashBoard/>
    <About/>
    <Agenda/>
    <Workshop/>
    </div>
  )
}

export default Home