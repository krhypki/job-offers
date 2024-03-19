import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useFetchData = <T>(endpoint: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [offers, setOffers] = useState<T | null>(null);

  useEffect(() => {
    if (!endpoint) return;

    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/${endpoint}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        let errorMessage = 'Failed to fetch';

        if (error instanceof Error) {
          errorMessage = error.message;
        }
        if (typeof error === 'string') {
          errorMessage = error;
        }

        toast.error(errorMessage);
      }
      setIsLoading(false);
    };

    getData();
  }, [endpoint]);
  return [offers, isLoading] as const;
};
