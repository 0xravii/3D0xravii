import React, { useEffect } from 'react';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'cursor-dot';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      cursor.style.transform = `translate3d(${mouseX - 20}px, ${mouseY - 20}px, 0)`;
      cursorDot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const addHoverEffect = () => {
      cursor.classList.add('hover');
      cursor.classList.add('scale-effect');
    };

    const removeHoverEffect = () => {
      cursor.classList.remove('hover');
      cursor.classList.remove('scale-effect');
    };

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, input, .hover-target');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);

  return null;
};

export default CursorEffect;