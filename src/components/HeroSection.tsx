import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import dheerajImage from "@/assets/dheeraj-headshot.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <p className="text-primary font-medium text-lg mb-2 animate-fade-in">Hi! I am</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Annamaneni<br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Dheeraj Rao
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Aspiring Developer | Problem Solver | Tech Enthusiast
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Passionate Computer Science student with a strong foundation in programming and data structures. 
              Building efficient solutions and crafting exceptional user experiences.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <button 
                onClick={scrollToProjects}
                className="btn-hero-filled"
              >
                View Projects
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-hero"
              >
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/1cvwKYdJpQhxuS-kn3ns2F6ECWsJ6rWqz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <a 
                href="mailto:annamanenidheeraj01@gmail.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="tel:9059649080"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/a-dheeraj-rao-5882ab256/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="https://github.com/dheerajrao1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-primary/20 p-2 glow">
                <img 
                  src={dheerajImage}
                  alt="Annamaneni Dheeraj Rao"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;