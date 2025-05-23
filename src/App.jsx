import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ChatBot from "./components/ChatBot";
import MusicPlayer from "./components/MusicPlayer";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {!isMobile && <Feedbacks />} {/* Conditionally render on non-mobile */}
        <div className="relative z-0">
          <Contact />
          {!isMobile && <StarsCanvas />} {/* Conditionally render on non-mobile */}
        </div>
        <Blogs />
        <Footer />
        {!isMobile && <MusicPlayer />} {/* Conditionally render on non-mobile */}
        <ChatBot />
      </div>
    </BrowserRouter>
  );
};

export default App;