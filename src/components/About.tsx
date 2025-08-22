import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    "3× Smart India Hackathon Finalist",
    "Full Stack Developer",
    "Cybersecurity Enthusiast", 
    "AI/ML Practitioner",
    "Open Source Contributor"
  ];

  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "5+", label: "Internships" },
    { value: "20+", label: "Certifications" },
    { value: "3×", label: "Hackathon Finalist" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Passionate developer with a track record of innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className="space-y-6">
            <Card className="glass-card p-8 tilt-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a strong foundation in both 
                  cybersecurity and artificial intelligence. My journey began with a curiosity 
                  about how technology can solve real-world problems.
                </p>
                <p>
                  As a <span className="text-primary font-semibold">3× Smart India Hackathon Finalist</span>, 
                  I've demonstrated my ability to innovate under pressure and deliver impactful solutions. 
                  My expertise spans across multiple domains, from web development to AI/ML implementations.
                </p>
                <p>
                  I believe in continuous learning and have earned certifications from prestigious 
                  institutions like <span className="text-secondary font-semibold">IIT Kanpur</span>, 
                  <span className="text-accent font-semibold"> Cisco</span>, and 
                  <span className="text-primary font-semibold"> Oracle</span>.
                </p>
              </div>
            </Card>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((highlight, index) => (
                <Badge 
                  key={highlight} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-card hover:bg-card-hover transition-colors duration-200"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="glass-card p-6 text-center tilt-card">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground-secondary font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            {/* Professional Associations */}
            <Card className="glass-card p-6 tilt-card">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Professional Associations</h4>
              <div className="space-y-2 text-sm text-foreground-secondary">
                <div className="flex items-center justify-between">
                  <span>Smart India Hackathon Community</span>
                  <span className="text-primary font-medium">2022–2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Celesta'23 IIT Patna Workshop Series</span>
                  <span className="text-secondary font-medium">Participant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cisco Networking Academy</span>
                  <span className="text-accent font-medium">Certified Member</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;