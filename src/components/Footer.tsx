import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
              Annamaneni Dheeraj Rao
            </h3>
            <p className="text-muted-foreground text-sm">
              Aspiring Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/dheerajrao1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/a-dheeraj-rao-5882ab256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="mailto:annamanenidheeraj01@gmail.com"
              className="p-3 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Dheeraj Rao
            </p>
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;