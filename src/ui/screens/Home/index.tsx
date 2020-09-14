import { h, Fragment } from 'preact'

import { Promo } from './Promo'
import { Examples } from './Examples'
import { Features } from './Features'
import { Testimonials } from './Testimonials'
import { Sponsorship } from './Sponsorship'
import { Contributors } from './Contributors'
import { Footer } from './Footer'
import { Screen } from 'ui/components/Screen'

const Home = () => (
  <Screen>
    <Promo />
    <Examples />
    <Features />
    {/* <I18n locales={locales} /> */}
    <Testimonials />
    <Sponsorship />
    <Contributors />
    <Footer />
  </Screen>
)

export default Home
