
import HeroSection from '@/components/HeroSection';
import DailyDarshan from '@/components/DailyDarshan';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Camera, HandHeart, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const quickActions = [
    {
      title: 'Pooja Services',
      description: 'Book personalized poojas and rituals',
      icon: Star,
      link: '/services',
      color: 'from-primary/20 to-primary/10'
    },
    {
      title: 'Upcoming Events',
      description: 'Join our festivals and celebrations',
      icon: Calendar,
      link: '/events',
      color: 'from-secondary/20 to-secondary/10'
    },
    {
      title: 'Temple Gallery',
      description: 'View sacred moments and architecture',
      icon: Camera,
      link: '/gallery',
      color: 'from-accent/20 to-accent/10'
    },
    {
      title: 'Gau Seva',
      description: 'Contribute to dharmic activities and cow protection',
      icon: HandHeart,
      link: '/donations',
      color: 'from-primary/15 to-secondary/10'
    }
  ];

  const spiritualQuotes = [
    {
      sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।",
      english: "Where there is Krishna and Arjuna, there is prosperity and victory.",
      source: "Bhagavad Gita"
    },
    {
      sanskrit: "सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्।",
      english: "Speak the truth, speak pleasantly, but never speak unpleasant truth.",
      source: "Ancient Wisdom"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Daily Darshan Section */}
      <DailyDarshan />

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Sacred Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our temple services and connect with divine energy through various spiritual practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={action.title} className={`group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br ${action.color} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <action.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair text-primary group-hover:text-primary/80 transition-colors">
                    {action.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{action.description}</p>
                  <Link to={action.link}>
                    <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 group-hover:border-primary transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Quotes */}
      <section className="py-16 mandala-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Divine Wisdom
            </h2>
            <p className="text-lg text-muted-foreground">
              Find inspiration in ancient Sanskrit wisdom
            </p>
          </div>

          <div className="space-y-8">
            {spiritualQuotes.map((quote, index) => (
              <Card key={index} className={`bg-card/80 backdrop-blur border-primary/20 shadow-lg animate-fade-in`} style={{ animationDelay: `${index * 0.3}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <Sparkles className="w-6 h-6 text-secondary mx-auto mb-4" />
                  </div>
                  <p className="text-xl font-playfair text-primary mb-4 italic">
                    "{quote.sanskrit}"
                  </p>
                  <p className="text-muted-foreground mb-2">
                    {quote.english}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    — {quote.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 lotus-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions about our services? Need guidance on spiritual practices? 
            Our temple priests and staff are here to help you on your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donations">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <HandHeart className="w-5 h-5 mr-2" />
                Gau Seva
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
