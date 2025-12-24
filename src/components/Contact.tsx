import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute left-1/2 bottom-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg glass-card text-sm text-primary font-mono mb-4">
              <MessageSquare className="w-4 h-4" />
              ./contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              LET'S BUILD SOMETHING <span className="gradient-text">AMAZING</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's turn your ideas into reality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass-card p-6 rounded-xl border-l-2 border-l-primary">
                <h3 className="text-xl font-semibold font-display mb-6">CONTACT INFO</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-mono">Email</p>
                      <a href="mailto:ayush@example.com" className="font-medium hover:text-primary transition-colors">
                        ayush@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-mono">Location</p>
                      <p className="font-medium">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold font-display mb-4">FOLLOW ME</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-6 border-t-2 border-t-primary">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono font-medium mb-2 text-muted-foreground">
                      {"<name>"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono font-medium mb-2 text-muted-foreground">
                      {"<email>"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-mono font-medium mb-2 text-muted-foreground">
                    {"<subject>"}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-mono"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono font-medium mb-2 text-muted-foreground">
                    {"<message>"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none font-mono"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold font-display flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 neon-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      SENDING...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      MESSAGE SENT!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;