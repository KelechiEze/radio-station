// src/app/page.tsx

import HomeView from "./components/HomeView/HomeView";
import AboutSection from "./components/AboutSection/AboutSection";
import AboutAndStatsSection from './components/AboutAndStatsSection/AboutAndStatsSection';
import InfoSection from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar/Navbar";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection"; // Replace with full name
import TeamSection from "./components/TeamSection/TeamSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection"; // Replace with full name
import WhyDeeFM from "./components/WhyDeeFM/WhyDeeFM";
import Footer from "./components/Footer/Footer";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeView />
      <AboutSection />
      <AboutAndStatsSection />
      <InfoSection />
      <WhyDeeFM />
      <TeamSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
