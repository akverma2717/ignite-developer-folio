import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-primary",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 90, icon: "📜" },
      ]
    },
    {
      title: "Backend",
      color: "text-secondary",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Django", level: 80, icon: "🌟" },
        { name: "Express", level: 85, icon: "🚀" },
        { name: "REST APIs", level: 90, icon: "🔗" },
      ]
    },
    {
      title: "Database",
      color: "text-accent",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MySQL", level: 75, icon: "🐬" },
        { name: "Redis", level: 70, icon: "🔴" },
        { name: "Firebase", level: 80, icon: "🔥" },
      ]
    },
    {
      title: "DevOps & Cloud",
      color: "text-primary",
      skills: [
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Git", level: 95, icon: "📝" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "CI/CD", level: 70, icon: "🔄" },
      ]
    },
    {
      title: "Security & AI",
      color: "text-secondary",
      skills: [
        { name: "Cybersecurity", level: 85, icon: "🛡️" },
        { name: "Machine Learning", level: 75, icon: "🤖" },
        { name: "Penetration Testing", level: 70, icon: "🔍" },
        { name: "Network Security", level: 80, icon: "🌐" },
        { name: "Data Analysis", level: 75, icon: "📊" },
      ]
    },
    {
      title: "Tools",
      color: "text-accent",
      skills: [
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 80, icon: "🎯" },
        { name: "Postman", level: 90, icon: "📮" },
        { name: "Jira", level: 75, icon: "📋" },
        { name: "Slack", level: 85, icon: "💬" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background-secondary">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            A comprehensive toolkit built through experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="glass-card p-6 tilt-card"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-foreground-muted">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-card-border rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-2 rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Certifications & Recognition
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "IIT Kanpur", icon: "🎓" },
              { name: "Cisco", icon: "🌐" },
              { name: "Oracle", icon: "🔴" },
              { name: "IBM", icon: "💙" },
              { name: "Microsoft", icon: "🪟" },
              { name: "NPTEL", icon: "📚" },
            ].map((cert, index) => (
              <Card 
                key={cert.name} 
                className="glass-card p-4 text-center tech-icon cursor-pointer"
              >
                <div className="text-2xl mb-2">{cert.icon}</div>
                <div className="text-sm font-medium text-foreground-secondary">
                  {cert.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;