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

      <div>
        
        <div>
          <HeroCarousel />
        </div>

        <div>
          <PopularMovie />
        </div>

      </div>

      <footer >
        <FooterSection/>
      </footer>
    </div>
  )
}

export default Home