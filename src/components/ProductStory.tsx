const ProductStory = () => {
  const slideImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1322&h=747&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1322&h=743&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1322&h=737&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1322&h=740&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1322&h=747&fit=crop'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-20">
          {/* Content */}
          <div className="flex-1 space-y-16">
            <div>
              <h3 className="t--h2 mb-6">
                Start with your raw <br />
                thoughts and ideas.
              </h3>
              <p className="t--p-lg c--solid-11">
                Choose a template, paste in a rough outline, or import existing content.
              </p>
            </div>
            
            <div>
              <h3 className="t--h2 mb-6">
                Watch Chronicle <br />
                bring your story to life.
              </h3>
              <p className="t--p-lg c--solid-11">
                Generate a well crafted presentation, with beautiful layouts that you can refine, share and present.
              </p>
            </div>
          </div>

          {/* Media */}
          <div className="flex-1 relative">
            {/* Background blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
            
            {/* Scrolling slides */}
            <div className="relative h-96 overflow-hidden rounded-lg">
              <div className="flex flex-col space-y-4 animate-marquee-vertical">
                {slideImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
                {/* Duplicate for seamless loop */}
                {slideImages.map((image, index) => (
                  <img
                    key={`duplicate-${index}`}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-16">
          <div className="text-center">
            <h3 className="t--h2 mb-6">
              Start with your raw <br />
              thoughts and ideas.
            </h3>
            <p className="t--p-lg c--solid-11 mb-8">
              Choose a template, paste in a rough outline, or import existing content.
            </p>
            
            {/* Mobile animation placeholder */}
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="text-center">
            <h3 className="t--h2 mb-6">
              Watch Chronicle <br />
              bring your story to life.
            </h3>
            <p className="t--p-lg c--solid-11 mb-8">
              Generate a well crafted presentation, with beautiful layouts that you can refine, share and present.
            </p>
            
            {/* Mobile scrolling slides */}
            <div className="h-64 overflow-hidden rounded-lg">
              <div className="flex flex-col space-y-4 animate-marquee-vertical">
                {slideImages.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
                {slideImages.slice(0, 3).map((image, index) => (
                  <img
                    key={`duplicate-${index}`}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStory;