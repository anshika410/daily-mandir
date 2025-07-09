
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, Calendar, Camera, HandHeart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Temple', path: '/about' },
    { name: 'Pooja Services', path: '/services', icon: Star },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Gallery', path: '/gallery', icon: Camera },
    { name: 'Donations', path: '/donations', icon: HandHeart },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary/95 via-primary to-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90 border-b-2 border-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary group-hover:border-accent transition-all duration-300 shadow-md">
              <img
                src="/lovable-uploads/66b7a7c3-b316-4dfc-b9da-8612fb97e319.png"
                alt="Daily Mandir Logo"
                className="w-full h-full object-contain bg-white p-1"
              />
            </div>
            <span className="text-3xl font-playfair font-bold text-white drop-shadow-md">Daily Mandir</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'text-primary bg-white shadow-md border-2 border-secondary'
                    : 'text-white hover:text-primary hover:bg-white/90 hover:shadow-md'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary hover:bg-white/90"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in pb-4">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white rounded-lg mt-2 shadow-xl border-2 border-secondary">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10 border-l-4 border-primary'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
