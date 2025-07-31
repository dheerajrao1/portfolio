import { Code, Database, Globe, GitBranch, Cpu, Layers } from "lucide-react";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "C",
      level: 85,
      icon: Code,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Python",
      level: 80,
      icon: Code,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "JavaScript",
      level: 75,
      icon: Globe,
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "HTML/CSS",
      level: 90,
      icon: Globe,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "OOPs",
      level: 85,
      icon: Layers,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "SQL",
      level: 70,
      icon: Database,
      color: "from-green-500 to-green-600"
    },
    {
      name: "GitHub",
      level: 80,
      icon: GitBranch,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Node.js",
      level: 75,
      icon: Cpu,
      color: "from-green-600 to-green-700"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="card-hover bg-card border border-border rounded-xl p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="font-semibold text-foreground text-lg">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Ring */}
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                      {/* Background circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-muted"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 32}`}
                        strokeDashoffset={`${2 * Math.PI * 32 * (1 - (isVisible ? skill.level : 0) / 100)}`}
                        className="text-primary transition-all duration-1000 ease-out"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold text-foreground">
                        {isVisible ? skill.level : 0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Express.js', 'MongoDB', 'Django', 'REST APIs', 'Bootstrap', 'Git', 'VS Code', 'Linux'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;