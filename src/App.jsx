import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ChatBot from "./components/ChatBot";
import MusicPlayer from "./components/MusicPlayer";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Blogs />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <ChatBot />
        <MusicPlayer />
      </div>
    </BrowserRouter>
  );
};

export default App;