import React, { useEffect, useRef } from 'react';
import styles from './NewCopy.module.css';

const NewCopy = () => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Parallax and fade effect on scroll
    const handleScroll = () => {
      if (!containerRef.current || !backgroundRef.current) return;
      
      const container = containerRef.current;
      const background = backgroundRef.current;
      
      // Get the container's position relative to viewport
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll position relative to the element
      const scrollPosition = rect.top;
      
      // Parallax effect - move background slightly slower than the container
      const parallaxValue = scrollPosition * 0.4;
      background.style.transform = `translateY(${parallaxValue}px)`;
      
      // Fade in effect when element enters viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate opacity based on position in viewport
        // Full opacity when element is in the middle of the viewport
        const opacity = Math.min(
          1,
          1 - Math.abs(scrollPosition - windowHeight/2) / windowHeight
        );
        container.style.opacity = opacity;
        
        // Add visible class for the reveal animation
        container.classList.add(styles.visible);
      } else if (rect.bottom < 0 || rect.top > windowHeight) {
        // Remove visible class when element is out of viewport
        container.classList.remove(styles.visible);
      }
    };

    // Initial call to set the correct state on load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.backgroundImage} ref={backgroundRef} />
    </div>
  );
};

export default NewCopy;