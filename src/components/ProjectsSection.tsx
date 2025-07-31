import { ExternalLink, Github, Database, Globe, Server } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Shelter Seek",
      description: "Community-driven shelter task assignment system designed to streamline shelter management and volunteer coordination. Features real-time task assignment, user authentication, and responsive design.",
      technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Real-time task assignment system",
        "User authentication and authorization",
        "Responsive design for all devices",
        "Community-driven volunteer management"
      ],
      githubUrl: "https://github.com/dheerajrao1/",
      liveUrl: "#",
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "College ERP System",
      description: "Centralized role-based system for college administrative tasks. Streamlines student management, course administration, and academic processes with secure authentication and comprehensive reporting.",
      technologies: ["Django", "Django REST Framework", "SQL", "Djoser", "Python"],
      features: [
        "Role-based access control",
        "Student and faculty management",
        "Course and grade management",
        "Comprehensive reporting system"
      ],
      githubUrl: "https://github.com/dheerajrao1/",
      liveUrl: "#",
      category: "Backend",
      status: "In Progress"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/20';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/20';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return Globe;
      case 'Backend':
        return Server;
      case 'Database':
        return Database;
      default:
        return Globe;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <div
                key={project.title}
                className="card-hover bg-card border border-border rounded-xl overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CategoryIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>
                    
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="px-6 pb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="px-6 pb-6">
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary/20 text-secondary-foreground hover:text-primary rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/dheerajrao1/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-filled inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;