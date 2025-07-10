
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Play, Calendar, Heart, Eye, Download } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Daily Rituals', 'Festivals', 'Architecture', 'Community'];

  const galleryItems = [
    {
      id: 1,
      title: 'Morning Aarti Ceremony',
      category: 'Daily Rituals',
      type: 'image',
      image: '/lovable-uploads/1ecef2f8-6ce7-4547-839e-3b87561aa201.png',
      description: 'Peaceful morning prayers with devotees'
    },
    {
      id: 2,
      title: 'Ganesh Chaturthi Celebration',
      category: 'Festivals',
      type: 'image',
      image: '/lovable-uploads/bbe36438-e0dc-475a-86e6-1f2604c9e4bc.png',
      description: 'Grand celebration with eco-friendly decorations'
    },
    {
      id: 3,
      title: 'Temple Architecture',
      category: 'Architecture',
      type: 'image',
      image: '/lovable-uploads/fca6fec7-d355-4349-87e2-cdc3ebdd5b31.png',
      description: 'Intricate stone carvings and traditional design'
    },
    {
      id: 4,
      title: 'Community Feast',
      category: 'Community',
      type: 'image',
      image: '/lovable-uploads/827caa7a-4ec3-4cae-b75e-07495eb59c2e.png',
      description: 'Devotees sharing blessed food together'
    },
    {
      id: 5,
      title: 'Evening Aarti',
      category: 'Daily Rituals',
      type: 'video',
      image: '/lovable-uploads/84e39c32-d10c-4d52-9266-43add5db3490.png',
      description: 'Live evening prayers and hymns'
    },
    {
      id: 6,
      title: 'Diwali Celebrations',
      category: 'Festivals',
      type: 'image',
      image: '/lovable-uploads/e4602239-9b7d-46ac-bf0d-13be3c968394.png',
      description: 'Temple illuminated with thousands of diyas'
    },
    {
      id: 7,
      title: 'Sacred Pillars',
      category: 'Architecture',
      type: 'image',
      image: '/lovable-uploads/cd0f71fd-fdde-42a1-8c57-4469b6254f83.png',
      description: 'Hand-carved pillars with divine motifs'
    },
    {
      id: 8,
      title: 'Children\'s Program',
      category: 'Community',
      type: 'image',
      image: '/lovable-uploads/5eff0354-08f5-4e31-986a-23268266c542.png',
      description: 'Young devotees learning traditional values'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 mandala-bg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Sacred Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Witness the divine beauty of our temple through captured moments of devotion, 
              architectural marvels, and spiritual celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-r from-background to-primary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${activeCategory === category 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'border-primary/30 text-primary hover:bg-primary/10'
                } transition-all duration-200`}
              >
                <Camera className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className={`group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 animate-fade-in overflow-hidden`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-primary/90 hover:bg-primary text-primary-foreground">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {item.type === 'video' && (
                        <Button size="sm" className="bg-secondary/90 hover:bg-secondary text-secondary-foreground">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      <Button size="sm" className="bg-accent/90 hover:bg-accent text-accent-foreground">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/90 text-primary-foreground text-xs">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Video Icon */}
                  {item.type === 'video' && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-secondary/90 rounded-full p-2">
                        <Play className="w-4 h-4 text-secondary-foreground" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <h3 className="font-playfair text-lg font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-gradient-to-br from-background to-primary/5 lotus-pattern">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Special moments from our most sacred celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 animate-fade-in overflow-hidden">
              <div className="relative">
                <img
                  src="/lovable-uploads/53f470a9-fb29-401e-8980-4d79c47b107b.png"
                  alt="Annual Mahotsav"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-1">Annual Mahotsav 2024</h3>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>October 15-17, 2024</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  A three-day spiritual extravaganza featuring traditional music, dance, 
                  and continuous devotional programs with elaborate decorations and community participation.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Heart className="w-4 h-4 mr-2" />
                  View Full Album
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Media */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Share Your Sacred Moments
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have beautiful photos or videos from temple events? We'd love to feature them in our gallery. 
            Share your captured moments of devotion with our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Camera className="w-5 h-5 mr-2" />
              Submit Your Photos
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
              Download Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
