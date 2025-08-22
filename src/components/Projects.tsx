import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "PMSSS Scholarship Portal",
      description: "A comprehensive web application for managing scholarship applications with automated verification systems and real-time status tracking.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      category: "Full Stack",
      features: [
        "User authentication & role-based access",
        "Document verification system",
        "Real-time application tracking",
        "Admin dashboard for management"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "Inter-state Student Verification System",
      description: "Blockchain-based verification system for student credentials across different states with tamper-proof record keeping.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Blockchain", "Web3", "Solidity", "Python"],
      category: "Blockchain", 
      features: [
        "Blockchain-based verification",
        "Smart contracts for automation",
        "Inter-state data synchronization",
        "Secure credential storage"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "Ticket/Pass Verification System",
      description: "QR code-based ticket verification system developed during CDAC internship with fraud detection capabilities.",
      image: "/api/placeholder/600/400",
      tags: ["Django", "Python", "QR Code", "PostgreSQL", "Redis"],
      category: "Backend",
      features: [
        "QR code generation & scanning",
        "Real-time fraud detection",
        "Bulk ticket management",
        "Analytics dashboard"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "AI Chatbot for NGO",
      description: "Intelligent chatbot to assist NGO operations with automated response system and multilingual support.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "NLP", "TensorFlow", "Flask", "MongoDB"],
      category: "AI/ML",
      features: [
        "Natural language processing",
        "Multilingual support",
        "Intent recognition",
        "Context-aware responses"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time security monitoring dashboard with threat detection and incident response automation.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Python", "Elasticsearch", "Kibana", "Docker"],
      category: "Security",
      features: [
        "Real-time threat monitoring",
        "Automated incident response",
        "Security metrics visualization",
        "Alert management system"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      title: "Portfolio Management System",
      description: "Modern portfolio website with CMS capabilities and performance optimization features.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Vercel"],
      category: "Frontend",
      features: [
        "Responsive design",
        "CMS integration",
        "SEO optimization",
        "Performance monitoring"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    }
  ];

  const categories = ["All", "Full Stack", "AI/ML", "Blockchain", "Security", "Frontend", "Backend"];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            A showcase of innovative solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="glass-card overflow-hidden tilt-card">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="relative group">
                  <div className="aspect-video rounded-lg overflow-hidden bg-card-border">
                    <div className="w-full h-full bg-gradient-primary opacity-20 flex items-center justify-center">
                      <div className="text-4xl font-bold text-foreground/50">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="glass-card">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-foreground-secondary flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-card-hover text-foreground-secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button className="hero-button">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="bg-card/50 hover:bg-card">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={project.title} className="glass-card p-6 tilt-card group">
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-card-hover text-foreground-muted">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-card-hover text-foreground-muted">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-card/50 hover:bg-card">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
