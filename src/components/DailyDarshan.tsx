
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Clock } from 'lucide-react';

const DailyDarshan = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-primary/5 lotus-pattern">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Daily Darshan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your day with divine blessings. Connect with the sacred energy of our temple from anywhere in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Deity Image */}
          <div className="relative">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Temple Deity - Daily Darshan"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-1">Shri Ganesha</h3>
                  <p className="text-sm opacity-90">Remover of Obstacles</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 backdrop-blur px-3 py-1 rounded-full">
                    <p className="text-primary-foreground text-sm font-semibold">Live Now</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-2 -right-2 animate-float">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <Heart className="w-6 h-6 text-accent" fill="currentColor" />
            </div>
          </div>

          {/* Darshan Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="w-5 h-5 mr-2" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="font-medium">Morning Aarti</span>
                  <span className="text-primary font-bold">6:00 AM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="font-medium">Afternoon Bhog</span>
                  <span className="text-primary font-bold">12:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="font-medium">Evening Aarti</span>
                  <span className="text-primary font-bold">7:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-bold text-primary mb-3">Today's Thought</h4>
                <p className="text-muted-foreground italic mb-4">
                  "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।"
                </p>
                <p className="text-sm text-muted-foreground">
                  The guru is Brahma, Vishnu, and Maheshwara - representing creation, preservation, and transformation.
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                Join Live Darshan
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Heart className="w-4 h-4 mr-2" />
                Offer Prayers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDarshan;
