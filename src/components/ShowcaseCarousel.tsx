import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ShowcaseCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "01. Pitch deck",
      description: "Win over investors with a clear, compelling story of your vision.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2560&h=1440&fit=crop"
    },
    {
      title: "02. Sales proposal",
      description: "Close deals faster with polished, persuasive proposals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2560&h=1440&fit=crop"
    },
    {
      title: "03. Product showcase",
      description: "Highlight your product's features and benefits in style.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2560&h=1440&fit=crop"
    },
    {
      title: "04. Market report",
      description: "Share insights, trends, and analysis with beautiful clarity.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2560&h=1440&fit=crop"
    },
    {
      title: "05. Project plan",
      description: "Align your team with clear goals, priorities, and timelines.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=2560&h=1440&fit=crop"
    },
    {
      title: "06. Portfolio",
      description: "Present your best work in a format that feels as good as it looks.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=2560&h=1440&fit=crop"
    },
    {
      title: "07. Marketing strategy",
      description: "Outline your campaigns, channels, and playbook all in one place.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=2560&h=1440&fit=crop"
    },
    {
      title: "08. Employee onboarding",
      description: "Get new hires up to speed with an engaging intro to your company.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2560&h=1440&fit=crop"
    },
    {
      title: "09. Branding case study",
      description: "Showcase the thinking and impact behind your creative work.",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=2560&h=1440&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="t--h2">
            Templates from the world's
            <br />
            best storytellers.
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="side-gradients mb-12">
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-3">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Mobile Caption */}
                  <div className="mt-4 lg:hidden text-center">
                    <h4 className="t--h4 mb-2">{slide.title}</h4>
                    <p className="c--solid-11">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Desktop Description */}
            <div className="hidden lg:block max-w-md">
              <h5 className="t--h5 mb-2">{slides[currentSlide].title}</h5>
              <p className="c--solid-11">{slides[currentSlide].description}</p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseCarousel;