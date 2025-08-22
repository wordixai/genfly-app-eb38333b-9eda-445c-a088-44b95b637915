import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-solid-5">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-white/80 transition-colors">
              Product
            </a>
            <a href="/story" target="_blank" className="text-white hover:text-white/80 transition-colors">
              Our story
            </a>
            <a href="/pricing" className="text-white hover:text-white/80 transition-colors">
              Pricing
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors">
                <span>Resources</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/blog" className="flex flex-col p-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-white font-medium">Blog</span>
                    <span className="text-sm c--white-alpha-8">Read the latest</span>
                  </a>
                  <a href="/tutorial" target="_blank" className="flex flex-col p-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-white font-medium">Chronicle 101</span>
                    <span className="text-sm c--white-alpha-8">Learn the basics</span>
                  </a>
                  <a href="/affiliate" target="_blank" className="flex flex-col p-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-white font-medium">Become an affiliate</span>
                    <span className="text-sm c--white-alpha-8">Refer and earn</span>
                  </a>
                  <a href="/help" target="_blank" className="flex flex-col p-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-white font-medium">Help center</span>
                    <span className="text-sm c--white-alpha-8">Get support quickly</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-sm">C</span>
              </div>
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a href="/login" target="_blank" className="hidden lg:block text-white hover:text-white/80 transition-colors">
              Login
            </a>
            <Button asChild className="bg-white text-black hover:bg-white/90">
              <a href="/start" target="_blank">
                Try for free
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-solid-5">
            <div className="py-4 space-y-4">
              <a href="/" className="block text-white hover:text-white/80 transition-colors">
                Product
              </a>
              <a href="/story" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                Our story
              </a>
              <a href="/pricing" className="block text-white hover:text-white/80 transition-colors">
                Pricing
              </a>
              <a href="/login" target="_blank" className="block text-white hover:text-white/80 transition-colors">
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;