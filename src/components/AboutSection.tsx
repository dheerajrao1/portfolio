import { GraduationCap, Calendar } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      institution: "CMR INSTITUTE OF TECHNOLOGY",
      degree: "Computer Science Engineering",
      period: "2022–2026",
      score: "CGPA: 9.06",
      status: "current"
    },
    {
      institution: "ABHYAAS JUNIOR COLLEGE",
      degree: "Intermediate",
      period: "2020–2022",
      score: "955/1000",
      status: "completed"
    },
    {
      institution: "LAYOLA HIGH SCHOOL",
      degree: "High School",
      period: "2014–2020",
      score: "GPA: 10/10",
      status: "completed"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Passionate Computer Science student with a strong foundation in programming and data structures. 
                Adept at solving complex problems and developing efficient solutions. Looking to leverage my skills 
                in development and software engineering in a challenging role.
              </p>
              <p className="text-lg leading-relaxed">
                I enjoy building web applications that solve real-world problems and am constantly learning new 
                technologies to stay current with industry trends. My goal is to contribute to innovative projects 
                that make a positive impact.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9.06</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="card-hover bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg mb-1">
                          {edu.institution}
                        </h4>
                        <p className="text-primary font-medium">{edu.degree}</p>
                      </div>
                      {edu.status === 'current' && (
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="text-primary font-medium">
                        {edu.score}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  {index < education.length - 1 && (
                    <div className="absolute left-4 bottom-0 w-0.5 h-6 bg-border transform translate-y-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;