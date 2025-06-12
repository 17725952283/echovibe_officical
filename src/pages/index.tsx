import { useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import DownloadSection from '@/components/download-section';
import AboutSection from '@/components/about-section';
import Footer from '@/components/footer';

const HomePage = () => {
  useEffect(() => {
    // Log page load for debugging
    console.log('EchoVibe官网已加载');
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;