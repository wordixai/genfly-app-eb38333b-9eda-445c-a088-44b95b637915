import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogosSection from '@/components/LogosSection';
import ProductStory from '@/components/ProductStory';
import FeaturesSection from '@/components/FeaturesSection';
import WidgetsSection from '@/components/WidgetsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ShowcaseCarousel from '@/components/ShowcaseCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <LogosSection />
      <ProductStory />
      <FeaturesSection />
      <WidgetsSection />
      <TestimonialsSection />
      <ShowcaseCarousel />
      <Footer />
    </div>
  );
};

export default Index;