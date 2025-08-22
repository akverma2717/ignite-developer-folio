import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const About = () => {
  const overviewContent = {
    title: "Overview",
    description: "I'm a passionate full-stack developer with expertise across multiple technologies and domains. My experience spans from cybersecurity and AI/ML to building scalable web applications. As a 3× Smart India Hackathon Finalist, I've proven my ability to innovate and deliver impactful solutions under pressure."
  };

  const expertiseAreas = [
    {
      title: "Full Stack Developer",
      icon: "💻", 
      description: "Building modern web applications with React, Node.js, and cutting-edge technologies"
    },
    {
      title: "Cybersecurity Specialist", 
      icon: "🛡️",
      description: "Implementing security best practices and conducting penetration testing"
    },
    {
      title: "Database Analyst",
      icon: "📊",
      description: "Designing efficient database systems and optimizing query performance"
    },
    {
      title: "DevOps Engineer",
      icon: "⚙️", 
      description: "Automating deployments and managing cloud infrastructure with AWS and Docker"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {overviewContent.title}
          </h2>
        </div>

        {/* Overview Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="glass-card p-8 tilt-card">
            <p className="text-lg text-foreground-secondary leading-relaxed text-center">
              {overviewContent.description}
            </p>
          </Card>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={area.title} className="glass-card p-6 text-center tilt-card group hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;