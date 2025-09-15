import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);

      const scrollPos = window.scrollY + 100;
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section?.offsetTop <= scrollPos && section?.offsetTop + section?.offsetHeight > scrollPos) {
          setActiveLink(link.name);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
            <a
              href="#home"
              className={`text-3xl font-black tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-primary' : 'text-white'
              } logo`}
            >
              Harmony
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block ml-10">
            <div className="flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-bold py-2 transition-all duration-300 group ${
                    activeLink === link.name
                      ? 'text-primary'
                      : isScrolled
                      ? 'text-primary'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-6 space-y-1 bg-white/98 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border border-border/20">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 font-bold text-black hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg group mobile-link"
                style={{ animation: `fadeInUp 0.3s forwards`, animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-border/20">
              <a
                href="mailto:hello@harmonyspacesco.com"
                className="flex items-center space-x-3 px-4 py-3 text-black hover:text-primary transition-colors duration-300"
              >
                <Mail size={18} />
                <span className="font-medium">hello@harmonyspacesco.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .logo {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
