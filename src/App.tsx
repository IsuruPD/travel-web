import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Header from './components/Header';
import LandingBannerS1 from './components/LandingBanner';
import DescriptionS3 from './components/DescSection';
import IntroductionS2 from './components/IntroSection';
import SafariTitleS4 from './components/SafariTitleSection';
import ExperienceS5 from './components/ExperienceSection';
import Footer from './components/Footer'
import WildlifeS6 from './components/WildlifeSection';
import GallerySection from './components/GallerySection'
import HotelAmnetiesSection from './components/HotelAmenitiesSection';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload all images used in the components
    const imageUrls = [
      '/landing.jpg',
      '/clawMark.png',
      '/bird43.png',
      '/eagle43.png',
      '/elephantHd.png',
      '/featherHd.png',
      '/monkeyVector.png',
      '/rangerCp.png',
      '/safari43.jpg',
      '/safariJp.png',
      '/safariSq.jpg',
      '/scenaryVw.png',
      '/treeVector.png'
    ];

    const loadImages = async () => {
      try {
        const imagePromises = imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        // Add a small delay to ensure smooth transition
        setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false); // Continue even if some images fail to load
      }
    };

    loadImages();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#435447] flex items-center justify-center z-50"
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img 
              src="/elephantHd.png" 
              alt="DSP Hotel Logo" 
              className="w-24 h-24 mb-4"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-amber-800 border-t-white rounded-full"
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <LandingBannerS1 />
          <IntroductionS2 />
          <DescriptionS3 />
          <SafariTitleS4 />
          <ExperienceS5/>
          <WildlifeS6/>
          <HotelAmnetiesSection/>
          <GallerySection/>
          <Footer/>
        </motion.main>
      )}
    </AnimatePresence>
  )
}

export default App
