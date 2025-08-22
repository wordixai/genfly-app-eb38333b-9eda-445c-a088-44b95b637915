const LogosSection = () => {
  const logos = [
    { name: 'Telegraph', url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop' },
    { name: 'Accel', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop' },
    { name: 'Berkeley', url: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=100&h=50&fit=crop' },
    { name: 'Atlassian', url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop' },
    { name: 'OpenAI', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop' },
    { name: 'Deel', url: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=100&h=50&fit=crop' },
    { name: 'Binance', url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop' },
    { name: 'HubSpot', url: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop' },
    { name: 'Postman', url: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=100&h=50&fit=crop' },
    { name: 'Figma', url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop' }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-12">
          <p className="t--p-xl c--solid-11">
            Used by 5000+ teams who value storytelling
          </p>
        </div>
        
        <div className="side-gradients">
          <div className="flex animate-marquee space-x-12 py-4">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-12 w-32 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-8 max-w-full object-contain filter grayscale"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 w-32 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-8 max-w-full object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;