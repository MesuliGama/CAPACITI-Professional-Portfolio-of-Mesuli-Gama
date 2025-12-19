
import { useState, useEffect, useRef } from 'react';

const useOnScreen = (options: IntersectionObserverInit = { threshold: 0.1 }) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Set isVisible to true only once when it becomes intersecting
      // This prevents animations from replaying if scrolling back and forth
      if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, isVisible]); // Depend on isVisible to prevent re-observing once visible

  return [ref, isVisible];
};

export default useOnScreen;
