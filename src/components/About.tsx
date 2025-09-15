import { Award, Users, Star, Palette, Lightbulb, Heart } from 'lucide-react';
import designerPhoto from "@/assets/designer-photo.jpg"; // ✅ Import the designer image

const About = () => {
  const achievements = [
    { icon: Award, title: 'Design Excellence', description: 'Awarded by Interior Design Magazine' },
    { icon: Users, title: 'Client Satisfaction', description: '98% of clients return for more projects' },
    { icon: Star, title: 'Industry Recognition', description: 'Featured in top design publications' },
  ];

  const values = [
    { icon: Palette, title: 'Creative Vision', description: 'Unique designs that reflect your personality' },
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge solutions and sustainable materials' },
    { icon: Heart, title: 'Passion', description: 'Dedicated to creating spaces you\'ll love' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            About Us
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Meet the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-black">
              Design Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate designers dedicated to creating extraordinary spaces 
            that inspire and transform the way you live and work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="fade-in-left">
            <div className="relative">
              <div className="w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden relative group">
                {/* Designer Image */}
<img
  src={designerPhoto}
  alt="Sarah Johnson - Principal Designer"
  className="w-full h-[500px] lg:h-[600px] object-cover transform transition-transform duration-500 group-hover:scale-105"
/>


                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30"></div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/30 rounded-full blur-sm"></div>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sarah Johnson
            </h3>
            <p className="text-xl text-primary mb-6 font-medium">
              Principal Designer & Founder
            </p>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                With over 15 years of experience in luxury interior design, Sarah brings a unique blend of 
                creativity, functionality, and timeless elegance to every project.
              </p>
              
              <p>
                Her philosophy centers on creating spaces that not only look beautiful but truly enhance 
                the way people live and work. Every design tells a story, reflects personality, and 
                transforms ordinary spaces into extraordinary experiences.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Design Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
