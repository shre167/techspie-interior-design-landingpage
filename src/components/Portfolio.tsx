import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';

// Import project images
import ModernResidentialSuite from '@/assets/Modern Residential Suite.jpg';
import ExecutiveOfficeSpace from '@/assets/Executive Office Space.jpg';
import LuxuryKitchenDesign from '@/assets/Luxury Kitchen Design.jpg';
import BoutiqueHotelLobby from '@/assets/Boutique Hotel Lobby.jpeg';
import MinimalistLivingRoom from '@/assets/Minimalist Living Room.jpeg';
import CorporateHeadquarters from '@/assets/Corporate Headquarters.jpeg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Modern Residential Suite',
      category: 'Residential',
      image: ModernResidentialSuite,
      description: 'A serene bedroom design featuring contemporary furniture and soft, natural lighting.',
      year: '2024',
      location: 'New York, NY',
      rating: 5,
      features: ['3D Visualization', 'Custom Furniture', 'Smart Lighting'],
      size: '2,500 sq ft',
    },
    {
      title: 'Executive Office Space',
      category: 'Commercial',
      image: ExecutiveOfficeSpace,
      description: 'Professional workspace designed for productivity and sophisticated client meetings.',
      year: '2024',
      location: 'San Francisco, CA',
      rating: 5,
      features: ['Brand Integration', 'Ergonomic Design', 'Acoustic Solutions'],
      size: '5,000 sq ft',
    },
    {
      title: 'Luxury Kitchen Design',
      category: 'Residential',
      image: LuxuryKitchenDesign,
      description: 'A stunning kitchen combining modern appliances with timeless marble and wood elements.',
      year: '2023',
      location: 'Los Angeles, CA',
      rating: 5,
      features: ['Premium Materials', 'Smart Appliances', 'Island Design'],
      size: '1,200 sq ft',
    },
    {
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
      image: BoutiqueHotelLobby,
      description: 'Elegant lobby design that creates a memorable first impression for guests.',
      year: '2023',
      location: 'Miami, FL',
      rating: 5,
      features: ['Luxury Materials', 'Art Integration', 'Guest Experience'],
      size: '3,000 sq ft',
    },
    {
      title: 'Minimalist Living Room',
      category: 'Residential',
      image: MinimalistLivingRoom,
      description: 'Clean, minimalist design that maximizes space and natural light.',
      year: '2023',
      location: 'Seattle, WA',
      rating: 5,
      features: ['Minimalist Design', 'Natural Light', 'Storage Solutions'],
      size: '800 sq ft',
    },
    {
      title: 'Corporate Headquarters',
      category: 'Commercial',
      image: CorporateHeadquarters,
      description: 'Modern corporate environment that reflects company values and culture.',
      year: '2022',
      location: 'Chicago, IL',
      rating: 5,
      features: ['Open Plan', 'Collaboration Spaces', 'Sustainability'],
      size: '15,000 sq ft',
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Our Portfolio
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-black">
              Design Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of exceptional interior design projects that showcase 
            our creativity, expertise, and commitment to excellence.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{project.rating}</span>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-4 h-4 text-foreground" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.size}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to See Your Project Here?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's create something extraordinary together. View our complete portfolio 
              and get inspired for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 group">
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
