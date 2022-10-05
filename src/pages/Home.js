import React from 'react'
import Navigation from '../components/Navigation'
import HeroCarousel from '../components/HeroCarousel'
import PopularMovie from '../components/PopularMovie'
import FooterSection from '../components/FooterSection'

function Home() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <body>
        
        <div>
          <HeroCarousel />
        </div>

        <div>
          <PopularMovie />
        </div>

      </body>

      <footer>
        <FooterSection/>
      </footer>
    </div>
  )
}

export default Home