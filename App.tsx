
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DownloadLinks from './components/DownloadLinks';
import TheAppTransition from './components/TheAppTransition';
import FeatureShowcase from './components/FeatureShowcase';
import DynamicCards from './components/DynamicCards';
import SecuritySection from './components/SecuritySection';
import CtaBanners from './components/CtaBanners';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LookingOutSection from './components/LookingOutSection';
import BuildCreditSecurely from './components/BuildCreditSecurely';
import FeatureShowcase1 from './components/FeatureShowcase1';
import FeatureShowcaseDuplicate from './components/FeatureShowcaseDuplicate';
import BackgroundBlobs from './components/BackgroundBlobs';

const App: React.FC = () => {
  return (
    <div className="bg-primary-background text-text-dark">
      <BackgroundBlobs />
      <Header />
      <main>
        <Hero />
        <DownloadLinks />
        <TheAppTransition />
        <FeatureShowcase />
        <LookingOutSection />
        {/* <BuildCreditSecurely /> */}
        {/* <FeatureShowcase1 /> */}
        {/* <FeatureShowcaseDuplicate /> */}
        <DynamicCards />
        {/* <SecuritySection /> */}
        <CtaBanners />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
