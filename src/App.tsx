import { useState } from 'react'
import Header from './components/Header';
import HeroSection from './components/LandingBanner';
import ExperienceSection from './components/ExperienceSection';
import styles from "./components/Input.Design.module.css";
import IntroSection from './components/IntroSection';
import MemorableSection from './components/MemorableSection';

const App: React.FC = () => {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <IntroSection />
      <ExperienceSection />
      <MemorableSection />
    </main>
  )
}

export default App
