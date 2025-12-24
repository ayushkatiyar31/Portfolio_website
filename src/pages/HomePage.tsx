import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/sections/HeroSection";


const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Ayush Katiyar | Full-Stack Developer</title>
        <meta
          name="description"
          content="Ayush Katiyar - Full-Stack Developer & B.Tech CSE Student at KIET. Expert in MERN Stack, React, Node.js. View my portfolio and projects."
        />
        <meta property="og:title" content="Ayush Katiyar | Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer & B.Tech CSE Student. Building scalable web applications with modern technologies." />
        <meta property="og:type" content="website" />
      </Helmet>

      
      <HeroSection />
    </PageTransition>
  );
};

export default HomePage;