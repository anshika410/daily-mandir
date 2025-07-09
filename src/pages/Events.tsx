
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Star, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      name: 'Ganesh Chaturthi',
      date: 'September 19, 2024',
      time: '6:00 AM - 10:00 PM',
      description: 'Grand celebration of Lord Ganesha with elaborate decorations, cultural programs, and community feast.',
      location: 'Main Temple Hall',
      category: 'Major Festival',
      attendees: '500+',
      highlights: ['Eco-friendly Ganesh idol', 'Cultural performances', 'Free community meal', 'Children\'s activities']
    },
    {
      name: 'Navaratri Celebrations',
      date: 'October 15-24, 2024',
      time: '7:00 PM - 10:00 PM',
      description: 'Nine nights of devotion to Goddess Durga with traditional Garba and Dandiya.',
      location: 'Temple Courtyard',
      category: 'Festival Series',
      attendees: '300+',
      highlights: ['Daily Garba sessions', 'Traditional dance', 'Spiritual discourses', 'Prasad distribution']
    },
    {
      name: 'Diwali Maha Lakshmi Pooja',
      date: 'November 12, 2024',
      time: '6:00 PM - 9:00 PM',
      description: 'Special Lakshmi pooja for prosperity and abundance, followed by lamp lighting ceremony.',
      location: 'Main Sanctum',
      category: 'Special Pooja',
      attendees: '200+',
      highlights: ['Lakshmi Kalash Pooja', '1001 diyas lighting', 'Wealth blessing ceremony', 'Sweet distribution']
    },
    {
      name: 'Spiritual Discourse Series',
      date: 'Every Saturday',
      time: '4:00 PM - 5:30 PM',
      description: 'Weekly spiritual talks by learned scholars on various aspects of Hindu philosophy.',
      location: 'Assembly Hall',
      category: 'Weekly Program',
      attendees: '50+',
      highlights: ['Bhagavad Gita teachings', 'Q&A sessions', 'Meditation guidance', 'Spiritual books available']
    }
  ];

  const pastEvents = [
    {
      name: 'Krishna Janmashtami 2024',
      date: 'August 26, 2024',
      description: 'Celebrated with midnight aarti, cultural programs, and Dahi Handi event.',
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      attendees: '800+'
    },
    {
      name: 'Guru Purnima Celebration',
      date: 'July 21, 2024',
      description: 'Honored spiritual teachers and conducted special guru worship ceremonies.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      attendees: '400+'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 mandala-bg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Sacred Events & Festivals
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in celebrating the divine through traditional festivals, spiritual discourses, and community gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Upcoming Celebrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Mark your calendar for these divine celebrations
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.name} className={`group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <h3 className="text-3xl font-playfair font-bold text-primary group-hover:text-primary/80 transition-colors">
                          {event.name}
                        </h3>
                        <Badge variant="outline" className="border-secondary text-secondary">
                          {event.category}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-lg">
                        {event.description}
                      </p>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {event.attendees} Expected
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Event Highlights:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <Star className="w-3 h-3 mr-2 text-secondary" fill="currentColor" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Register Now
                      </Button>
                      <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-gradient-to-br from-background to-primary/5 lotus-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Recent Celebrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Glimpses from our recent festivals and gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={event.name} className={`group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-secondary/5 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {event.attendees} Attended
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                    {event.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </span>
                    <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
                      View Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Stay Connected with Our Events
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming festivals, 
            special events, and spiritual programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Subscribe to Updates
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
              Download Event Calendar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
