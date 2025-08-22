import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WidgetsSection = () => {
  const widgets = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=981&h=1006&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1115&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1115&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1245&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=721&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1115&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1050&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=1110&h=1000&fit=crop'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-muted/20 text-sm mb-6">
            Widgets
          </div>
          <h2 className="t--h2 max-w-4xl mx-auto">
            <strong>Build polished outputs with widgets that come with</strong> pixel perfect design, interactivity and motion out of the box.
          </h2>
        </div>
      </div>

      {/* Widgets Carousel */}
      <div className="side-gradients mb-12">
        <div className="flex space-x-6 animate-marquee py-8">
          {/* First set */}
          {widgets.map((widget, index) => (
            <div key={index} className="flex-shrink-0 w-64 lg:w-80">
              <img
                src={widget}
                alt={`Widget ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {widgets.map((widget, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 lg:w-80">
              <img
                src={widget}
                alt={`Widget ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="container">
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center">
          <p className="t--p-lg c--solid-11 max-w-2xl mx-auto">
            Zoom in, highlight, or isolate key elements and never lose your audience's attention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WidgetsSection;