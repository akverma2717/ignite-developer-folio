import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "CDAC (Centre for Development of Advanced Computing)",
      role: "Software Development Intern",
      location: "Mumbai, India",
      duration: "Jun 2024 - Aug 2024",
      type: "Internship",
      logo: "🏛️",
      description: "Developed a comprehensive ticket verification system with QR code integration and fraud detection capabilities.",
      achievements: [
        "Built QR code-based ticket verification system using Django and Python",
        "Implemented real-time fraud detection algorithms with 95% accuracy",
        "Developed RESTful APIs for mobile application integration",
        "Optimized database queries resulting in 40% performance improvement"
      ],
      technologies: ["Django", "Python", "PostgreSQL", "Redis", "Docker"],
      color: "primary"
    },
    {
      company: "Sure Trust",
      role: "Web Development Intern",
      location: "Remote",
      duration: "Mar 2024 - May 2024",
      type: "Remote Internship",
      logo: "🌐",
      description: "Focused on modern web development practices and full-stack application development.",
      achievements: [
        "Developed responsive web applications using React and Node.js",
        "Collaborated with cross-functional teams on multiple client projects",
        "Implemented CI/CD pipelines using GitHub Actions",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
      color: "secondary"
    },
    {
      company: "Salesforce",
      role: "Developer Program Participant",
      location: "Remote",
      duration: "Jan 2024 - Mar 2024",
      type: "Training Program",
      logo: "☁️",
      description: "Intensive training program focused on Salesforce ecosystem and cloud development.",
      achievements: [
        "Completed Salesforce Developer certification program",
        "Built custom Salesforce applications using Apex and Lightning",
        "Developed integration solutions between Salesforce and external systems",
        "Participated in Salesforce community events and hackathons"
      ],
      technologies: ["Salesforce", "Apex", "Lightning", "SOQL", "REST APIs"],
      color: "accent"
    },
    {
      company: "Cisco Networking Academy",
      role: "Cybersecurity Student",
      location: "Online",
      duration: "Sep 2023 - Dec 2023",
      type: "Certification Program",
      logo: "🔒",
      description: "Comprehensive cybersecurity training covering network security, ethical hacking, and incident response.",
      achievements: [
        "Completed CCNA Security certification with distinction",
        "Mastered network security protocols and implementations",
        "Conducted penetration testing on simulated environments",
        "Developed security policies and incident response procedures"
      ],
      technologies: ["Network Security", "Ethical Hacking", "Cisco IOS", "Wireshark", "Nmap"],
      color: "primary"
    },
    {
      company: "IBM SkillsBuild / Edunet Foundation",
      role: "AI/ML Training Participant",
      location: "Remote",
      duration: "Jun 2023 - Aug 2023",
      type: "Training Program",
      logo: "🤖",
      description: "Comprehensive training in artificial intelligence and machine learning technologies.",
      achievements: [
        "Completed IBM AI/ML certification with honors",
        "Built machine learning models for real-world problems",
        "Implemented deep learning solutions using TensorFlow and PyTorch",
        "Developed AI-powered chatbot for customer service automation"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
      color: "secondary"
    }
  ];

  const achievements = [
    {
      title: "3× Smart India Hackathon Finalist",
      year: "2022-2024",
      description: "Consistently reached national finals in India's premier hackathon competition",
      icon: "🏆"
    },
    {
      title: "IIT Kanpur Cybersecurity Certification",
      year: "2024",
      description: "Advanced cybersecurity training from premier Indian institute",
      icon: "🎓"
    },
    {
      title: "Oracle Cloud Infrastructure Certification",
      year: "2023",
      description: "Professional certification in cloud computing and infrastructure",
      icon: "☁️"
    },
    {
      title: "Microsoft Azure Fundamentals",
      year: "2023",
      description: "Cloud computing fundamentals and Azure services certification",
      icon: "📘"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <Card key={`${exp.company}-${index}`} className="glass-card p-8 tilt-card">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Company Info */}
                <div className="lg:col-span-1 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{exp.logo}</div>
                    <div>
                      <h3 className="font-bold text-foreground">{exp.company}</h3>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${exp.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : ''}
                          ${exp.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/20' : ''}
                          ${exp.color === 'accent' ? 'bg-accent/10 text-accent border-accent/20' : ''}
                        `}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-foreground-secondary">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Role & Description */}
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {exp.role}
                  </h4>
                  <p className="text-foreground-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-foreground-secondary flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="lg:col-span-1">
                  <h5 className="font-medium text-foreground mb-3">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-card-hover text-foreground-muted"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Achievements & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="glass-card p-6 text-center tilt-card">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-primary font-medium mb-2">
                  {achievement.year}
                </p>
                <p className="text-xs text-foreground-secondary leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;