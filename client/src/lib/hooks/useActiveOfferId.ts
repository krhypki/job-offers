import { useEffect, useState } from 'react';

export function useActiveOfferId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(+id);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => removeEventListener('hashchange', handleHashChange);
  }, []);

  return activeId;
}
