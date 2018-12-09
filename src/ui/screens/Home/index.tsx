import React from 'react'

import Promo from './Promo'
import Examples from './Examples'
import Features from './Features'
import Testimonials from './Testimonials'
import Sponsorship from './Sponsorship'
import Contributors from './Contributors'
import Footer from './Footer'

const Home = () => (
  <div className="home">
    <Promo />
    <Examples />
    <Features />
    {/* <I18n locales={locales} /> */}
    <Testimonials />
    <Sponsorship />
    <Contributors />
    <Footer />
  </div>
)

export default Home
