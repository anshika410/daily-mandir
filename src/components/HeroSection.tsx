
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Download, Calendar, HandHeart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/dc168ada-55f7-4afa-a17d-e69178bd3461.png"
          alt="Sacred Mandala Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-secondary/10" />
      </div>

      {/* Swinging effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary/20 to-transparent transform origin-bottom animate-bounce"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Main Heading */}
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary mb-6 leading-tight drop-shadow-2xl">
            Daily Mandir
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-4 font-medium drop-shadow-lg">
            आपका डिजिटल मंदिर • Your Digital Sanctuary
          </p>
        </div>

        {/* Sanskrit Shloka */}
        <div className="animate-fade-in-up mb-12" style={{ animationDelay: '0.3s' }}>
          <Card className="max-w-2xl mx-auto bg-card/90 backdrop-blur border-primary/30 shadow-2xl">
            <CardContent className="p-8">
              <p className="text-lg font-playfair text-primary mb-2 italic">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।"
              </p>
              <p className="text-sm text-muted-foreground">
                May all beings be happy, may all beings be healthy
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Timing */}
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.6s' }}>
          <Card className="inline-block bg-primary/20 backdrop-blur border-primary/40 shadow-xl">
            <CardContent className="p-4">
              <p className="text-primary font-semibold">Today's Aarti Timings</p>
              <p className="text-sm text-muted-foreground">Morning: 6:00 AM • Evening: 7:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.9s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 animate-glow font-semibold shadow-2xl">
            <Download className="w-5 h-5 mr-2" />
            Download App
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 shadow-xl backdrop-blur">
            <Calendar className="w-5 h-5 mr-2" />
            Book Chadhava
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
