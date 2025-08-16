import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH/REPLACE (link clicks, programmatic navigation)
    // Don't interfere with POP (browser back/forward) to preserve scroll position
    if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
      // If there's a hash, try to scroll to that element
      if (location.hash) {
        // Wait for next frame to ensure DOM is updated
        requestAnimationFrame(() => {
          const element = document.getElementById(location.hash.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // Fallback to top if hash target not found
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        });
      } else {
        // No hash, scroll to top immediately
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }

      // Optional: Focus management for accessibility
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.focus({ preventScroll: true });
      }
    }
  }, [location.pathname, location.hash, navigationType]);

  return null;
};

export default ScrollManager;