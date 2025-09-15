import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
import VideoBg from '@/assets/AdobeStock_1667938560_Video_HD_Preview.mov';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VideoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-full sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-0"
      >
        <div className="fade-in-up">
          {/* Opaque bar for mobile */}
          <div className="sm:hidden bg-black/60 backdrop-blur-md rounded-2xl px-4 py-6 mb-6">
            <h1 className="text-2xl font-extrabold text-white leading-snug">
              Crafting
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-extrabold">
                Extraordinary
              </span>
              Living Spaces
            </h1>
            <p className="text-sm text-white/90 mt-3 font-medium leading-relaxed">
              Transform your space into a masterpiece of design, functionality, and
              luxury. We create environments that inspire and elevate your daily
              living experience.
            </p>
          </div>

          {/* Normal heading/subheading for larger screens */}
          <div className="hidden sm:block">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-snug md:leading-tight">
              Crafting
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-extrabold">
                Extraordinary
              </span>
              Living Spaces
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl md:max-w-3xl mx-auto font-medium leading-relaxed">
              Transform your space into a masterpiece of design, functionality, and
              luxury. We create environments that inspire and elevate your daily
              living experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              size="lg"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-black/30 bg-white text-black hover:text-white hover:bg-black/70 transition-all duration-300"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 max-w-md sm:max-w-2xl md:max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full mx-auto mb-2 sm:mb-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">150+</div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full mx-auto mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-white/70 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full mx-auto mb-2 sm:mb-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center group cursor-pointer">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-primary transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
