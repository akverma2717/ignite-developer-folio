import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-background-tertiary border-t border-card-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">
                Portfolio
              </span>
            </div>
            <p className="text-foreground-secondary leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies, 
              cybersecurity, and AI/ML. Building innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-card text-foreground-muted hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Get in Touch
            </h3>
            <div className="space-y-3 text-foreground-secondary">
              <div>
                <p className="font-medium text-foreground mb-1">Email</p>
                <a 
                  href="mailto:your.email@example.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  your.email@example.com
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Location</p>
                <p>India</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-accent font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-foreground-secondary text-sm">
              <span>© {currentYear} Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-foreground-secondary">
              <a 
                href="#" 
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <div className="flex items-center space-x-2">
                <span>Built with</span>
                <span className="text-primary font-medium">React</span>
                <span>+</span>
                <span className="text-secondary font-medium">TypeScript</span>
                <span>+</span>
                <span className="text-accent font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;