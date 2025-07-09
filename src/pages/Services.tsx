
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Clock, Gift, Heart, Sparkles } from 'lucide-react';

const Services = () => {
  const poojaServices = [
    {
      name: 'Ganesha Pooja',
      description: 'Remove obstacles and bless new beginnings with Lord Ganesha\'s divine grace.',
      duration: '30 minutes',
      donation: '₹251',
      benefits: ['Obstacle removal', 'Success in ventures', 'Wisdom and prosperity'],
      category: 'Daily Poojas'
    },
    {
      name: 'Lakshmi Pooja',
      description: 'Invite prosperity and abundance into your life through Mata Lakshmi.',
      duration: '45 minutes',
      donation: '₹501',
      benefits: ['Wealth attraction', 'Business growth', 'Family harmony'],
      category: 'Prosperity Poojas'
    },
    {
      name: 'Durga Pooja',
      description: 'Seek protection and strength from the divine mother Durga.',
      duration: '1 hour',
      donation: '₹751',
      benefits: ['Divine protection', 'Courage and strength', 'Victory over evil'],
      category: 'Protection Poojas'
    },
    {
      name: 'Shiva Abhishek',
      description: 'Sacred bathing ritual for Lord Shiva with milk, honey, and holy water.',
      duration: '1.5 hours',
      donation: '₹1001',
      benefits: ['Inner peace', 'Spiritual growth', 'Purification'],
      category: 'Special Rituals'
    },
    {
      name: 'Krishna Janmashtami',
      description: 'Celebrate Lord Krishna\'s birth with devotional songs and offerings.',
      duration: '3 hours',
      donation: '₹2001',
      benefits: ['Divine love', 'Joy and celebration', 'Community bonding'],
      category: 'Festival Celebrations'
    },
    {
      name: 'Satyanarayan Katha',
      description: 'Complete Satyanarayan story recitation with pooja and prasad.',
      duration: '2 hours',
      donation: '₹1501',
      benefits: ['Truth and righteousness', 'Family blessings', 'Wish fulfillment'],
      category: 'Sacred Stories'
    }
  ];

  const categories = [...new Set(poojaServices.map(service => service.category))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 mandala-bg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Sacred Pooja Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience divine blessings through our traditional pooja services, performed by learned priests 
              with devotion and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Choose Your Sacred Ritual
            </h2>
            <p className="text-lg text-muted-foreground">
              Each pooja is performed with traditional mantras and authentic rituals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poojaServices.map((service, index) => (
              <Card key={service.name} className={`group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-secondary text-secondary">
                      {service.category}
                    </Badge>
                    <div className="flex items-center text-accent">
                      <Star className="w-4 h-4 mr-1" fill="currentColor" />
                      <Star className="w-4 h-4 mr-1" fill="currentColor" />
                      <Star className="w-4 h-4" fill="currentColor" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-playfair text-primary group-hover:text-primary/80 transition-colors">
                    {service.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-primary font-bold text-lg">
                      {service.donation}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Gift className="w-4 h-4 mr-1" />
                      Benefits
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Sparkles className="w-3 h-3 mr-2 text-secondary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book This Pooja
                    </Button>
                    <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                      <Heart className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-gradient-to-br from-background to-primary/5 lotus-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Simple Booking Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Book your pooja in just a few easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Pooja', desc: 'Select your desired ritual' },
              { step: '2', title: 'Pick Date & Time', desc: 'Choose convenient timing' },
              { step: '3', title: 'Provide Details', desc: 'Share your information' },
              { step: '4', title: 'Confirm Booking', desc: 'Complete the process' }
            ].map((item, index) => (
              <Card key={item.step} className={`text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-playfair text-xl text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 animate-glow">
              <Calendar className="w-5 h-5 mr-2" />
              Start Booking Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
