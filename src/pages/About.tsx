
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, History, Heart, Star } from 'lucide-react';

const About = () => {
  const deities = [
    {
      name: 'Shri Ganesha',
      title: 'Remover of Obstacles',
      description: 'The beloved elephant-headed deity who blesses new beginnings and removes obstacles from our path.',
      significance: 'Patron of arts and sciences, lord of beginnings'
    },
    {
      name: 'Shri Krishna',
      title: 'The Divine Cowherd',
      description: 'The eighth avatar of Vishnu, teacher of the Bhagavad Gita, and embodiment of divine love.',
      significance: 'Guide of dharma, protector of devotees'
    },
    {
      name: 'Mata Durga',
      title: 'Divine Mother',
      description: 'The fierce yet compassionate mother goddess who protects her devotees from evil forces.',
      significance: 'Shakti, divine feminine energy, protector'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 mandala-bg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
              About Our Sacred Temple
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A sanctuary of peace and devotion, our temple has been a beacon of spiritual light for generations, 
              welcoming all seekers on their journey toward the divine.
            </p>
          </div>
        </div>
      </section>

      {/* Temple History */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Temple Architecture"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <History className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-playfair font-bold text-primary">Our Sacred Legacy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1847, our temple stands as a testament to unwavering faith and devotion. 
                  Built by the local community with their own hands and hearts, this sacred space has 
                  witnessed countless prayers, celebrations, and moments of divine connection.
                </p>
                <p>
                  The temple's architecture reflects the traditional Nagara style, with intricate carvings 
                  that tell stories from ancient scriptures. Every stone was placed with devotion, 
                  every carving crafted with reverence for the divine.
                </p>
                <p>
                  Over the decades, our temple has not just been a place of worship, but a center for 
                  community gathering, cultural preservation, and spiritual education. We continue to 
                  serve thousands of devotees who seek solace, guidance, and blessings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Deities */}
      <section className="py-16 bg-gradient-to-br from-background to-primary/5 lotus-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Sacred Deities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the divine forms that grace our temple with their eternal presence and blessings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deities.map((deity, index) => (
              <Card key={deity.name} className={`group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Star className="w-10 h-10 text-primary" fill="currentColor" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-primary">
                    {deity.name}
                  </CardTitle>
                  <p className="text-secondary font-semibold">{deity.title}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{deity.description}</p>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-sm text-primary font-medium">
                      <Heart className="w-4 h-4 inline mr-1" fill="currentColor" />
                      {deity.significance}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Design */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Architectural Marvel
            </h2>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-secondary mr-2" />
              <span className="text-lg text-muted-foreground">Sacred Geometry in Stone</span>
              <Sparkles className="w-6 h-6 text-secondary ml-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Traditional Craftsmanship</h3>
                <p className="text-muted-foreground mb-4">
                  Our temple showcases the finest examples of traditional stone carving, with intricate patterns 
                  that represent cosmic energies and divine forms. Each pillar tells a story, each arch frames 
                  a moment of devotion.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hand-carved stone pillars with floral motifs</li>
                  <li>• Sacred geometry in floor patterns</li>
                  <li>• Traditional Shikhara (temple spire) design</li>
                  <li>• Intricate doorway carvings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Sacred Spaces</h3>
                <p className="text-muted-foreground mb-4">
                  Every space in our temple is designed to enhance spiritual experience, from the peaceful 
                  courtyard for meditation to the sanctum sanctorum where the divine presence is most felt.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Main sanctum (Garbha Griha)</li>
                  <li>• Assembly hall (Mandapa) for gatherings</li>
                  <li>• Prayer courtyard for large ceremonies</li>
                  <li>• Sacred fire altar (Hawan Kund)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
