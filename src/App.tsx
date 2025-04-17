import { useState } from 'react'
import Header from './components/Header';
import LandingBanner from './components/LandingBanner';
import ExperienceSection from './components/ExperienceSection';
import IntroSection from './components/IntroSection';
import MemorableSection from './components/MemorableSection';

const App: React.FC = () => {
  return (
    <main className="">
      <Header />
      <LandingBanner />
      <IntroSection />
      <ExperienceSection />
      <MemorableSection />
    </main>
  )
}

export default App
