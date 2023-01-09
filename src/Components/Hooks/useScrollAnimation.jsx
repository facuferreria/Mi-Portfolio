import React, { useContext, createContext, useState, useEffect } from 'react';

const ScrollAnimationContext = createContext();

function ScrollAnimationProvider({ children, threshold }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > threshold && !animationTriggered) {
        setIsAnimating(true);
        setAnimationTriggered(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollAnimationContext.Provider value={{ isAnimating, threshold }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
}

function useScrollAnimation() {
  return useContext(ScrollAnimationContext);
}

export { ScrollAnimationProvider, useScrollAnimation };