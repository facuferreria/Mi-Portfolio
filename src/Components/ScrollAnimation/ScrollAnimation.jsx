import React, { useEffect, useState } from 'react';

function ScrollAnimation({ threshold, children, animationClass, actualClass }) {
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
    <div className={isAnimating ? animationClass : actualClass}>
      {isAnimating ? children : null}
    </div>
  );
}

export default ScrollAnimation;