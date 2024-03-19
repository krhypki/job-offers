import { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click', handleClickOutside);
  }, [ref, handler]);
};
