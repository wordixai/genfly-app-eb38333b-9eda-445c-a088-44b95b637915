import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const slides = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2560&h=1440&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2560&h=1440&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2560&h=1440&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2560&h=1440&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=2560&h=1440&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=2560&h=1440&fit=crop&crop=center'
  ];

  const tabs = [
    'Pitch deck',
    'Product showcase',
    'Portfolio',
    'Business update',
    'Project plan',
    'Research report'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-20">
      <div className="container text-center z-10">
        {/* Hero Text */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="t--h1 mb-6">
            Every great presentation
            <br />
            starts with a Chronicle
          </h1>
          <p className="t--p-lg c--solid-11 mb-8 max-w-2xl mx-auto">
            Create stunning presentations. No design skills required.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8" asChild>
              <a href="/start" target="_blank">Try for free</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8" asChild>
              <a href="https://www.youtube.com/watch?v=ZQPps23DUCY" target="_blank">Watch video</a>
            </Button>
          </div>
        </div>

        {/* Presentation Preview */}
        <div className="relative max-w-5xl mx-auto">
          {/* Slides Container */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/10 backdrop-blur">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={slide}
                  alt={`Presentation slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* UI Overlay */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent">
              <div className="flex items-center justify-between p-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white/60 text-sm">Chronicle</div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setActiveTab(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-8 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1 p-1 bg-muted/10 rounded-lg backdrop-blur min-w-max">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setCurrentSlide(index);
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                    index === activeTab
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
    </section>
  );
};

export default Hero;