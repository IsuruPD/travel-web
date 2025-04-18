import { useState } from 'react'
import Header from './components/Header';
import LandingBanner from './components/LandingBanner';
import SectionThree from './components/SectionThree';
import IntroSection from './components/IntroSection';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

const App: React.FC = () => {
  return (
    <main className="">
      <Header />
      <LandingBanner />
      <IntroSection />
      <SectionThree />
      <SectionFour />
      <SectionFive/>
    </main>
  )
}

export default App
