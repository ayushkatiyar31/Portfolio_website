import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ayush Katiyar | Full-Stack Developer & B.Tech CS Student</title>
        <meta
          name="description"
          content="Ayush Katiyar is a passionate full-stack developer and B.Tech Computer Science student specializing in React, Node.js, and modern web technologies. View my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Ayush Katiyar, Full-Stack Developer, Web Developer, React Developer, Node.js, Portfolio, B.Tech CS"
        />
        <meta name="author" content="Ayush Katiyar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ayush Katiyar | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Passionate full-stack developer crafting exceptional digital experiences with modern technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ayushkatiyar.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush Katiyar | Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Passionate full-stack developer crafting exceptional digital experiences with modern technologies."
        />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ayush Katiyar",
            jobTitle: "Full-Stack Developer",
            url: "https://ayushkatiyar.com",
            sameAs: [
              "https://github.com/ayushkatiyar",
              "https://linkedin.com/in/ayushkatiyar",
              "https://twitter.com/ayushkatiyar",
            ],
            knowsAbout: ["Web Development", "React", "Node.js", "TypeScript", "MongoDB"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;