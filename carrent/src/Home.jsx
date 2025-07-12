import React from 'react'
import Banner from '../components/banner'
import CardContainer from '../components/cardContainer'
import Banner1 from '../components/banner1'
import Customer from '../components/customer'
import Deals from '../components/deals'

function Home() {
  return (
    <>
      <Banner />
      <CardContainer />
      <Banner1 />
      <Customer />
      <Deals />
    </>
  )
}

export default Home 