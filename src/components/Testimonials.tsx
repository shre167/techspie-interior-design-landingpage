import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      location: 'New York, NY',
      rating: 5,
      text: 'The team transformed our outdated living room into a modern masterpiece. Their attention to detail and creative vision exceeded all our expectations.',
      project: 'Modern Living Room Renovation',
      image: 'SM',
    },
    {
      name: 'David Chen',
      role: 'CEO, TechStart Inc.',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'Our new office space has completely changed how our team works. The design promotes collaboration while maintaining privacy when needed.',
      project: 'Corporate Office Design',
      image: 'DC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      location: 'Miami, FL',
      rating: 5,
      text: 'The restaurant interior design created the perfect ambiance for our guests. We\'ve seen a 40% increase in customer satisfaction since the renovation.',
      project: 'Restaurant Interior Design',
      image: 'ER',
    },
    {
      name: 'Michael Thompson',
      role: 'Real Estate Developer',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'Working with this team was a game-changer for our luxury condominium project. Their designs helped us sell units 30% faster than projected.',
      project: 'Luxury Condominium Lobby',
      image: 'MT',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-black">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients about 
            their experience working with our design team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`group luxury-hover border-0 bg-white/80 backdrop-blur-sm fade-in-up overflow-hidden relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 relative z-10">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Project */}
                <div className="text-sm text-primary font-medium mb-4">
                  {testimonial.project}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
