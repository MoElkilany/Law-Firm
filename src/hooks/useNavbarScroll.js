/**
 * Custom hook for scroll-based navbar state
 */
import { useState, useEffect } from 'react';

export function useNavbarScroll(scrollThreshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return scrolled;
}

export default useNavbarScroll;