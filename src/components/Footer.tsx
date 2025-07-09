
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Calendar, Star, Camera, HandHeart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-t border-primary/20 lotus-pattern">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-2xl font-playfair font-bold text-primary">Daily Mandir</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your digital sanctuary for daily spiritual connection. Experience divine blessings through live darshan, personalized poojas, and sacred celebrations.
            </p>
            <p className="text-sm font-playfair text-primary italic">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-primary">Important Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Temple
              </Link>
              <Link to="/services" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Star className="w-4 h-4" />
                <span>Pooja Services</span>
              </Link>
              <Link to="/events" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Events & Festivals</span>
              </Link>
              <Link to="/gallery" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Camera className="w-4 h-4" />
                <span>Temple Gallery</span>
              </Link>
              <Link to="/donations" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <HandHeart className="w-4 h-4" />
                <span>Donations</span>
              </Link>
            </nav>
          </div>

          {/* Daily Timings */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-primary">Daily Timings</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Morning Aarti:</span>
                <span className="text-primary font-medium">6:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Evening Aarti:</span>
                <span className="text-primary font-medium">7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Darshan Hours:</span>
                <span className="text-primary font-medium">5:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Live Streaming:</span>
                <span className="text-secondary font-medium">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-primary">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@dailymandir.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Sacred Temple Complex<br />Divine Street, Spiritual City</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-2">
              <p className="text-sm font-medium text-primary mb-3">Follow Our Journey</p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-primary/30 hover:bg-primary/10">
                  <Facebook className="w-4 h-4 text-primary" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-primary/30 hover:bg-primary/10">
                  <Twitter className="w-4 h-4 text-primary" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-primary/30 hover:bg-primary/10">
                  <Instagram className="w-4 h-4 text-primary" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-primary/30 hover:bg-primary/10">
                  <Youtube className="w-4 h-4 text-primary" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Daily Mandir. All rights reserved. | Built with devotion and digital excellence.
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-playfair italic">
                May divine blessings be with you always • ॐ शान्ति शान्ति शान्ति: ॐ
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-primary transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
