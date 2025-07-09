
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dailymandir.org', 'priest@dailymandir.org'],
      description: 'Send us your queries and requests'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Sacred Temple Road', 'Divine City, State 560001'],
      description: 'Visit us for darshan and blessings'
    },
    {
      icon: Clock,
      title: 'Temple Timings',
      details: ['Morning: 5:00 AM - 12:00 PM', 'Evening: 4:00 PM - 9:00 PM'],
      description: 'Daily darshan and pooja timings'
    }
  ];

  const templeStaff = [
    {
      name: 'Pandit Rajesh Sharma',
      role: 'Head Priest',
      specialization: 'Vedic Rituals & Spiritual Guidance',
      phone: '+91 98765 43210'
    },
    {
      name: 'Pandit Suresh Kumar',
      role: 'Assistant Priest',
      specialization: 'Daily Poojas & Festivals',
      phone: '+91 87654 32109'
    },
    {
      name: 'Mrs. Prema Devi',
      role: 'Temple Manager',
      specialization: 'Administration & Events',
      phone: '+91 76543 21098'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 mandala-bg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Connect With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Reach out to our temple for spiritual guidance, pooja bookings, or any questions 
              about our services. We're here to serve you on your spiritual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className={`text-center bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20 shadow-xl animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="text-primary font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="text-primary font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-primary font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-primary font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-primary font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary font-medium">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please share your thoughts, questions, or requests..."
                    className="border-primary/30 focus:border-primary"
                    rows={5}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Temple Staff & Map */}
            <div className="space-y-8">
              {/* Temple Staff */}
              <Card className="bg-gradient-to-br from-card to-secondary/5 border-primary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-primary">
                    Meet Our Temple Staff
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Our dedicated team is here to assist you
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {templeStaff.map((staff, index) => (
                    <div key={staff.name} className="p-4 bg-background/50 rounded-lg border border-primary/10">
                      <h4 className="font-playfair text-lg font-bold text-primary">
                        {staff.name}
                      </h4>
                      <p className="text-secondary font-semibold text-sm">
                        {staff.role}
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        {staff.specialization}
                      </p>
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-1 text-primary" />
                        <span className="text-foreground">{staff.phone}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card className="bg-gradient-to-br from-card to-accent/5 border-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-primary flex items-center">
                    <Navigation className="w-6 h-6 mr-2" />
                    Find Our Temple
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-primary font-semibold">Interactive Map</p>
                      <p className="text-muted-foreground text-sm">
                        Google Maps integration would be here
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-foreground">Daily Mandir Temple</p>
                    <p className="text-muted-foreground">123 Sacred Temple Road</p>
                    <p className="text-muted-foreground">Divine City, State 560001</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Guidelines */}
      <section className="py-16 bg-gradient-to-br from-background to-primary/5 lotus-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Visitor Guidelines
            </h2>
            <p className="text-lg text-muted-foreground">
              Please follow these guidelines for a peaceful temple visit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dress Code',
                points: ['Modest traditional attire preferred', 'Remove shoes before entering', 'Cover head in main sanctum']
              },
              {
                title: 'Temple Etiquette',
                points: ['Maintain silence during prayers', 'Follow priest instructions', 'Respect other devotees']
              },
              {
                title: 'Photography',
                points: ['Photography allowed in courtyard', 'No flash photography', 'Seek permission for events']
              }
            ].map((guideline, index) => (
              <Card key={guideline.title} className={`bg-gradient-to-br from-card to-primary/5 border-primary/20 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                    {guideline.title}
                  </h3>
                  <ul className="space-y-2">
                    {guideline.points.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
