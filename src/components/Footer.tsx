import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer id="contact" className="bg-accent text-accent-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="fade-in-up">
            <h3 className="text-3xl font-black text-primary mb-4 tracking-tight">Harmony Spaces Co</h3>
            <p className="text-accent-foreground/80 leading-relaxed">
              Transforming spaces with harmony and creating interior designs that inspire modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Residential Design', 'Commercial Design', 'Renovation', 'Space Planning'].map((service) => (
                <li key={service}>
                  <span className="text-accent-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@harmonyspacesco.com"
                className="flex items-center space-x-3 text-accent-foreground/80 hover:text-primary transition-colors duration-200 group"
              >
                <Mail size={18} />
                <span>hello@harmonyspacesco.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-accent-foreground/80 hover:text-primary transition-colors duration-200 group"
              >
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center text-accent-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8 text-center fade-in-up">
          <p className="text-accent-foreground/60">
            © 2024 Harmony Spaces Co. All rights reserved. | Designed with passion for beautiful spaces.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;