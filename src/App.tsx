import { useState } from 'react'
import Header from './components/Header';
import LandingBannerS1 from './components/LandingBanner';
import DescriptionS3 from './components/DescSection';
import IntroductionS2 from './components/IntroSection';
import SafariTitleS4 from './components/SafariTitleSection';
import ExperienceS5 from './components/ExperienceSection';
import Footer from './components/Footer'
import WildlifeS6 from './components/WildlifeSection';

const App: React.FC = () => {
  return (
    <main className="">
      <Header />
      <LandingBannerS1 />
      <IntroductionS2 />
      <DescriptionS3 />
      <SafariTitleS4 />
      <ExperienceS5/>
      <WildlifeS6/>
      <Footer/>
    </main>
  )
}

export default App
