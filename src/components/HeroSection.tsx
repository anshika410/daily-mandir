
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Play, Calendar, HandHeart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center mandala-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-secondary/10">
        <img
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful Temple at Dawn"
          className="w-full h-full object-cover mix-blend-soft-light opacity-30"
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Main Heading */}
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary mb-6 leading-tight">
            Daily Mandir
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            आपका डिजिटल मंदिर • Your Digital Sanctuary
          </p>
        </div>

        {/* Sanskrit Shloka */}
        <div className="animate-fade-in-up mb-12" style={{ animationDelay: '0.3s' }}>
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur border-primary/20 shadow-lg">
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
          <Card className="inline-block bg-primary/10 backdrop-blur border-primary/30">
            <CardContent className="p-4">
              <p className="text-primary font-semibold">Today's Aarti Timings</p>
              <p className="text-sm text-muted-foreground">Morning: 6:00 AM • Evening: 7:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.9s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 animate-glow font-semibold">
            <Play className="w-5 h-5 mr-2" />
            Live Darshan
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
            <Calendar className="w-5 h-5 mr-2" />
            Book Pooja
          </Button>
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-3">
            <HandHeart className="w-5 h-5 mr-2" />
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
