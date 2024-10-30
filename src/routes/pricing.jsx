import React from 'react'
import Header from '../components/header'
import PricingCard from '../components/PricingCard'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Pricing = () => {
  return (
    <main className='overflow-hidden'>
      <Header />
      <section>
        <PricingCard />
      </section>
      <CallToAction />
      <Footer />
    </main>
  )
}

export default Pricing