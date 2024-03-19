import { useEffect, useState } from 'react';

export default function useDebounce<T>(initialValue: T, delay = 500): T {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(initialValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [initialValue, delay]);

  return value;
}
