const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "New web apps on Mobbin this week. Featuring: @Chronicle_HQ",
      author: "Mobbin",
      role: "mobbin.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "I've tried many AI presentation tools, but Chronicle really stands out for me. It's fast and easy to create beautifully designed slides.\n\nThis feels like the future of presentation creation.",
      author: "Ravi Mehta",
      role: "Ex-CPO at Tinder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Playing with Chronicle and I'm very impressed. One of my favorite parts of being a designer is finding a product with A+ design details. Chronicle is absurdly good.",
      author: "Ridd 🤿",
      role: "Dive Club",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Remarkable.",
      author: "Guillermo Rauch",
      role: "Vercel",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Gave my first presentation with Chronicle yesterday and the team (including myself) were absolutely floored.\n\nNow multiple pods are already using Chronicle (within 24 hrs!!)",
      author: "Karim Saleh",
      role: "Senior Product Designer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=44&h=44&fit=crop&crop=face"
    }
  ];

  const testimonials2 = [
    {
      quote: "You know a product is great when your gut reaction is I won't tell anyone about this it will be my unfair advantage (but then you tell everyone it's @Chronicle_HQ)",
      author: "Yadin Soffer",
      role: "via Twitter",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Chronicle's changed the way we approach case studies at Product Marketing Alliance (and we do a lot!).\n\nAnything I avoid starting because the formatting is a pain, I use Chronicle.",
      author: "Richard King",
      role: "Product Marketing Alliance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "No one on the planet knows presentations as deeply as these guys.\n\nI have no idea how anyone else will compete against them in this market.\n\nThe product speaks for itself.",
      author: "Juan Alzugaray",
      role: "COO, Flai (YC S25)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face"
    },
    {
      quote: "@Chronicle_HQ Insane product, I haven't been this blown away in a minute.",
      author: "Samudra",
      role: "via Twitter",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Playing with @Chronicle_HQ right now and I'm very impressed.\n\nI think I just found the \"Cursor for slides\".",
      author: "Ridd 🤿",
      role: "Dive Club",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="flex-shrink-0 w-80 lg:w-96 p-6 bg-muted/5 rounded-lg border border-solid-5">
      <div className="mb-6">
        <p className="t--p-lg whitespace-pre-line">
          {testimonial.quote}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-white">{testimonial.author}</p>
          <p className="text-sm c--solid-11">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="t--h2">
            Loved by world-class founders,
            <br />
            strategists, designers and teams.
          </h2>
        </div>
      </div>

      {/* First Row */}
      <div className="side-gradients mb-8">
        <div className="flex space-x-6 animate-marquee">
          {/* First set */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Second Row (reverse direction) */}
      <div className="side-gradients">
        <div className="flex space-x-6 animate-marquee" style={{ animationDirection: 'reverse' }}>
          {/* First set */}
          {testimonials2.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials2.map((testimonial, index) => (
            <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;