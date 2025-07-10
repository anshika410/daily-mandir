
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { HandHeart, Heart, Gift, Sparkles, QrCode, CreditCard, Smartphone, CheckCircle } from 'lucide-react';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('');

  const predefinedAmounts = ['₹101', '₹251', '₹501', '₹1001', '₹2001', '₹5001'];
  
  const donationPurposes = [
    { value: 'general', label: 'General Temple Maintenance' },
    { value: 'annadaan', label: 'Annadaan (Free Meals)' },
    { value: 'education', label: 'Spiritual Education Programs' },
    { value: 'festivals', label: 'Festival Celebrations' },
    { value: 'renovation', label: 'Temple Renovation' },
    { value: 'pooja', label: 'Daily Pooja Expenses' },
    { value: 'charity', label: 'Community Welfare' }
  ];

  const impactStats = [
    { title: 'Meals Served', count: '10,000+', description: 'Free meals provided monthly' },
    { title: 'Families Helped', count: '500+', description: 'Assisted through welfare programs' },
    { title: 'Students Educated', count: '200+', description: 'Children in spiritual education' },
    { title: 'Festivals Celebrated', count: '25+', description: 'Annual religious celebrations' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gau Seva Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/3b018f06-9b6e-4dc3-8d8f-504ff90d552a.png"
            alt="Gau Seva Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
              Gau Seva - Sacred Donations
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Support our temple's divine mission and contribute to the spiritual welfare of our community. 
              Every contribution, big or small, helps us serve the divine and our devotees.
            </p>
          </div>
        </div>
        
        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20 shadow-2xl animate-fade-in">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-playfair text-primary">
                Make a Sacred Contribution
              </CardTitle>
              <p className="text-muted-foreground">
                Choose your donation amount and purpose to support our temple
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Donation Amount */}
              <div>
                <Label className="text-lg font-semibold text-primary mb-4 block">
                  Select Donation Amount
                </Label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`${selectedAmount === amount 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'border-primary/30 text-primary hover:bg-primary/10'
                      } transition-all duration-200`}
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="custom-amount" className="text-muted-foreground">
                    Or enter custom amount:
                  </Label>
                  <Input
                    id="custom-amount"
                    placeholder="₹ Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('');
                    }}
                    className="max-w-xs border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              {/* Donation Purpose */}
              <div>
                <Label className="text-lg font-semibold text-primary mb-4 block">
                  Choose Donation Purpose
                </Label>
                <Select value={donationPurpose} onValueChange={setDonationPurpose}>
                  <SelectTrigger className="border-primary/30 focus:border-primary">
                    <SelectValue placeholder="Select where you'd like to contribute" />
                  </SelectTrigger>
                  <SelectContent>
                    {donationPurposes.map((purpose) => (
                      <SelectItem key={purpose.value} value={purpose.value}>
                        {purpose.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Donor Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="donor-name" className="text-primary font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="donor-name"
                    placeholder="Enter your full name"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="donor-email" className="text-primary font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="donor-email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="donor-message" className="text-primary font-medium">
                  Message (Optional)
                </Label>
                <Textarea
                  id="donor-message"
                  placeholder="Share your thoughts or special requests..."
                  className="border-primary/30 focus:border-primary"
                  rows={3}
                />
              </div>

              {/* Payment Methods */}
              <div>
                <Label className="text-lg font-semibold text-primary mb-4 block">
                  Choose Payment Method
                </Label>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 h-16 flex flex-col">
                    <QrCode className="w-6 h-6 mb-1" />
                    <span className="text-sm">UPI/QR Code</span>
                  </Button>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 h-16 flex flex-col">
                    <CreditCard className="w-6 h-6 mb-1" />
                    <span className="text-sm">Credit/Debit Card</span>
                  </Button>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 h-16 flex flex-col">
                    <Smartphone className="w-6 h-6 mb-1" />
                    <span className="text-sm">Net Banking</span>
                  </Button>
                </div>
              </div>

              {/* Donation Button */}
              <div className="text-center pt-6">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg animate-glow">
                  <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                  Donate {selectedAmount || customAmount || 'Now'}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Your donation is secure and helps support our temple's mission
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="relative py-16 bg-gradient-to-br from-background to-primary/5 lotus-pattern overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Your Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              See how your contributions help our community thrive
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={stat.title} className={`text-center bg-gradient-to-br from-card to-secondary/5 border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-primary mb-2">
                    {stat.count}
                  </h3>
                  <p className="font-semibold text-foreground mb-1">{stat.title}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Donation Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Donation Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              What your generous contribution supports
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Daily Temple Services',
                description: 'Support daily aartis, poojas, and maintenance of the temple premises',
                icon: Gift
              },
              {
                title: 'Community Annadaan',
                description: 'Provide free meals to devotees and those in need every day',
                icon: Heart
              },
              {
                title: 'Festival Celebrations',
                description: 'Help organize grand festivals and spiritual celebrations throughout the year',
                icon: Sparkles
              },
              {
                title: 'Educational Programs',
                description: 'Support spiritual education classes for children and adults',
                icon: CheckCircle
              },
              {
                title: 'Temple Maintenance',
                description: 'Preserve the sacred architecture and ensure a clean, peaceful environment',
                icon: HandHeart
              },
              {
                title: 'Community Welfare',
                description: 'Assist families in need and support various charitable activities',
                icon: Heart
              }
            ].map((benefit, index) => (
              <Card key={benefit.title} className={`bg-gradient-to-br from-card to-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Quick Donation via UPI
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Scan the QR code below with any UPI app to make an instant donation. 
            It's quick, secure, and helps you contribute to our sacred mission effortlessly.
          </p>
          
          <Card className="inline-block bg-card/80 backdrop-blur border-primary/20 p-8">
            <div className="w-48 h-48 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-24 h-24 text-primary" />
            </div>
            <p className="text-primary font-semibold mb-2">UPI ID: dailymandir@upi</p>
            <p className="text-sm text-muted-foreground">
              Scan with Google Pay, PhonePe, Paytm, or any UPI app
            </p>
          </Card>
        </div>
        
        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Donations;
