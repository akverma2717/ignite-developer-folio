import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text">Your Name</span>
            </h1>
          </div>

          <div className="fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Full Stack Developer | 3× Smart India Hackathon Finalist
            </p>
          </div>

          <div className="fade-in-up delay-300">
            <p className="text-lg md:text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions with expertise in 
              <span className="text-primary font-medium"> Cybersecurity</span>, 
              <span className="text-secondary font-medium"> Full Stack Development</span>, and 
              <span className="text-accent font-medium"> AI/ML</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up delay-400">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="hero-button group">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button variant="outline" size="lg" className="group bg-card/50 hover:bg-card">
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Resume
              </Button>
              
              <Button variant="ghost" size="lg" className="group text-foreground-secondary hover:text-primary">
                <ExternalLink className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="fade-in-up delay-500 mt-16">
            <div className="flex justify-center">
              <div className="w-6 h-10 border-2 border-foreground-muted rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
              </div>
            </div>
            <p className="text-foreground-muted text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;