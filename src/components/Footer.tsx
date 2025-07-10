
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Calendar, Star, Camera, HandHeart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary border-t-4 border-secondary shadow-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/lovable-uploads/91e931b7-3721-4739-b64a-c06a3a44086d.png"
          alt="Sacred Pattern Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <span className="text-3xl font-playfair font-bold text-white drop-shadow-md">Daily Mandir</span>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Your digital sanctuary for daily spiritual connection. Experience divine blessings through live darshan, personalized poojas, and sacred celebrations.
            </p>
            <p className="text-lg font-playfair text-secondary italic font-semibold">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-playfair font-bold text-white border-b-2 border-secondary pb-2">Important Links</h3>
            <nav className="space-y-3">
              <Link to="/about" className="block text-white/90 hover:text-secondary transition-colors text-lg hover:translate-x-2 transform duration-200">
                About Temple
              </Link>
              <Link to="/services" className="flex items-center space-x-3 text-white/90 hover:text-secondary transition-colors text-lg hover:translate-x-2 transform duration-200">
                <Star className="w-5 h-5" />
                <span>Pooja Services</span>
              </Link>
              <Link to="/events" className="flex items-center space-x-3 text-white/90 hover:text-secondary transition-colors text-lg hover:translate-x-2 transform duration-200">
                <Calendar className="w-5 h-5" />
                <span>Events & Festivals</span>
              </Link>
              <Link to="/gallery" className="flex items-center space-x-3 text-white/90 hover:text-secondary transition-colors text-lg hover:translate-x-2 transform duration-200">
                <Camera className="w-5 h-5" />
                <span>Temple Gallery</span>
              </Link>
              <Link to="/donations" className="flex items-center space-x-3 text-white/90 hover:text-secondary transition-colors text-lg hover:translate-x-2 transform duration-200">
                <HandHeart className="w-5 h-5" />
                <span>Gau Seva</span>
              </Link>
            </nav>
          </div>

          {/* Daily Timings */}
          <div className="space-y-6">
            <h3 className="text-xl font-playfair font-bold text-white border-b-2 border-secondary pb-2">Daily Timings</h3>
            <div className="space-y-4 text-white/90">
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur">
                <span className="text-lg">Morning Aarti:</span>
                <span className="text-secondary font-bold text-lg">6:00 AM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur">
                <span className="text-lg">Evening Aarti:</span>
                <span className="text-secondary font-bold text-lg">7:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur">
                <span className="text-lg">Darshan Hours:</span>
                <span className="text-secondary font-bold text-lg">5:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur">
                <span className="text-lg">Live Streaming:</span>
                <span className="text-accent font-bold text-lg">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-playfair font-bold text-white border-b-2 border-secondary pb-2">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/90 text-lg p-3 bg-white/10 rounded-lg backdrop-blur">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90 text-lg p-3 bg-white/10 rounded-lg backdrop-blur">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@dailymandir.com</span>
              </div>
              <div className="flex items-start space-x-3 text-white/90 text-lg p-3 bg-white/10 rounded-lg backdrop-blur">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <span>Sacred Temple Complex<br />Divine Street, Spiritual City</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <p className="text-lg font-medium text-white mb-4 border-b border-secondary/50 pb-2">Follow Our Journey</p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="w-12 h-12 p-0 border-2 border-secondary hover:bg-secondary hover:text-primary transition-all backdrop-blur">
                  <Facebook className="w-5 h-5 text-white hover:text-primary" />
                </Button>
                <Button size="sm" variant="outline" className="w-12 h-12 p-0 border-2 border-secondary hover:bg-secondary hover:text-primary transition-all backdrop-blur">
                  <Twitter className="w-5 h-5 text-white hover:text-primary" />
                </Button>
                <Button size="sm" variant="outline" className="w-12 h-12 p-0 border-2 border-secondary hover:bg-secondary hover:text-primary transition-all backdrop-blur">
                  <Instagram className="w-5 h-5 text-white hover:text-primary" />
                </Button>
                <Button size="sm" variant="outline" className="w-12 h-12 p-0 border-2 border-secondary hover:bg-secondary hover:text-primary transition-all backdrop-blur">
                  <Youtube className="w-5 h-5 text-white hover:text-primary" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-secondary/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/90 text-lg font-medium">
                © 2024 Daily Mandir. All rights reserved. | Built with devotion and digital excellence.
              </p>
              <p className="text-sm text-white/80 mt-2 font-playfair italic">
                May divine blessings be with you always • ॐ शान्ति शान्ति शान्ति: ॐ
              </p>
            </div>
            <div className="flex items-center space-x-6 text-lg text-white/90">
              <Link to="/contact" className="hover:text-secondary transition-colors font-medium">Privacy Policy</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-secondary transition-colors font-medium">Terms of Service</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-secondary transition-colors font-medium">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
