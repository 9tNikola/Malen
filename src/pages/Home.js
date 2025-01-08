import React from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Carousal from '../components/carousal/carousal'
import About from '../components/About/about'
import Technician from '../components/Technician/Technician'
import Feature from '../components/Features/Features'
import Products from '../components/Products/Products'
import Pricing from '../components/Pricing/Pricing'
import Process from '../components/process/Process'

export default function Home() {
  return (
    <React.Fragment>
      <HeroBanner/>
      <Carousal/>
      <About/>
      <Technician/>
      <Feature/>
      <Products/>
      <Pricing/>
      <Process/>
    </React.Fragment>
  )
}
