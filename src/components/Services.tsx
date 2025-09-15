import { Home, Building, RefreshCw, Layout, Palette, Lightbulb, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Creating beautiful, functional living spaces that reflect your personal style and enhance your daily life.',
      features: ['3D Visualization', 'Material Selection', 'Furniture Layout'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Professional spaces designed to inspire productivity, impress clients, and reflect your brand identity.',
      features: ['Brand Integration', 'Workflow Optimization', 'Client Impressions'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
    },
    {
      icon: RefreshCw,
      title: 'Renovation',
      description: 'Transforming existing spaces into stunning, modern environments with careful attention to detail.',
      features: ['Structural Planning', 'Timeline Management', 'Quality Control'],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
    },
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimizing layouts to maximize functionality, flow, and aesthetic appeal in any environment.',
      features: ['Flow Analysis', 'Storage Solutions', 'Accessibility'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color schemes that create the perfect mood and atmosphere for your space.',
      features: ['Color Psychology', 'Material Matching', 'Lighting Integration'],
      color: 'from-rose-500 to-red-500',
      bgColor: 'from-rose-50 to-red-50',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance functionality and create stunning visual effects.',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Features'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Design Solutions That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-black">
              Transform Spaces
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver comprehensive interior design solutions 
            that exceed expectations and create lasting impressions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group luxury-hover border-0 bg-white/90 backdrop-blur-sm fade-in-up overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-500`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
              
              <CardContent className="p-8 relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-black text-foreground mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-center text-lg">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-black text-foreground mb-6">
              Ready to Transform Your Space?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
              Let's discuss your project and create something extraordinary together. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-4 rounded-xl font-black text-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Get Free Consultation
              </button>
              <button className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-black text-lg hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl">
                View Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;