import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection'; // Hva jeg tilbyr
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection /> {/* <- Hva jeg tilbyr */}
      <AboutSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
