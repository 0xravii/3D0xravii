import React, { useState, useEffect, useCallback } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechs, setVisibleTechs] = useState([]);
  const [hoveredTech, setHoveredTech] = useState(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleTechs(prev => [...prev, entry.target.dataset.tech]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.tech-item');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div 
          className='w-28 h-28 tech-item transform transition-all duration-300 hover:scale-110' 
          key={technology.name}
          data-tech={technology.name}
          onMouseEnter={() => setHoveredTech(technology.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          {visibleTechs.includes(technology.name) && (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
