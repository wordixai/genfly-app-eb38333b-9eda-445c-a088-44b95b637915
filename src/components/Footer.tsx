import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="container text-center relative z-10">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 px-12" asChild>
            <a href="/start" target="_blank">Start creating</a>
          </Button>
        </div>

        {/* Large Text Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <h2 className="text-8xl lg:text-9xl font-bold">Chronicle</h2>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-solid-5">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            {/* Logo and Company */}
            <div>
              <a href="/" className="inline-flex items-center mb-4">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black font-bold text-sm">C</span>
                </div>
              </a>
              <p className="text-sm c--solid-11">ChronicleHQ Inc.</p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="space-y-4">
                <a href="/getting-started" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Getting Started
                </a>
                <a href="/pricing" className="block text-white hover:text-white/80 transition-colors">
                  Pricing
                </a>
                <a href="/terms" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Terms of Service
                </a>
                <a href="/privacy" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Privacy Policy
                </a>
              </div>

              <div className="space-y-4">
                <a href="https://instagram.com/chroniclehq" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Instagram
                </a>
                <a href="https://twitter.com/chroniclehq" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Twitter
                </a>
                <a href="https://linkedin.com/company/chroniclehq" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  LinkedIn
                </a>
                <a href="/tutorial" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Chronicle 101
                </a>
              </div>

              <div className="space-y-4">
                <a href="/community" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Join our Community
                </a>
                <a href="/affiliate" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Become an Affiliate
                </a>
                <a href="/help" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Help Center
                </a>
                <a href="/contact" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;