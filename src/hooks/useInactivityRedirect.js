import { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useInactivityRedirect({
  timeoutMs = 10000,
  target = '/',
  onInactivity,
  disabled = false,
} = {}) {
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (disabled) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (onInactivity) onInactivity();
        if (location.pathname !== target) {
          navigate(target);
        }
      }, timeoutMs);
    };

    document.addEventListener('pointerdown', resetTimer);
    resetTimer();

    return () => {
      clearTimeout(timeoutRef.current);
      document.removeEventListener('pointerdown', resetTimer);
    };
  }, [navigate, location.pathname, timeoutMs, target, onInactivity, disabled]);
}
