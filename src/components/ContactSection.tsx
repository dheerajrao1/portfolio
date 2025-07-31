import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_d8txvvj', // service ID
        'template_cmt99nw', // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'xZUDhZQe9EC5d1bq9' // public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "annamanenidheeraj01@gmail.com",
      href: "mailto:annamanenidheeraj01@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9059649080",
      href: "tel:+919059649080"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/dheerajrao1/",
      username: "dheerajrao1"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/a-dheeraj-rao-5882ab256/",
      username: "a-dheeraj-rao"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's work together
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href !== '#' ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      <div>
                        <p className="text-sm text-muted-foreground">{social.label}</p>
                        <p className="text-foreground font-medium">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card-hover bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero-filled flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;