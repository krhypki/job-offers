import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const fetchData = async <T>(endpoint: string | null): Promise<T | null> => {
  let data = null;

  try {
    const response = await fetch(`/api/${endpoint}`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    data = await response.json();
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

  return data;
};

export const useFetchData = <T>(endpoint: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<T | null>(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await fetchData<T>(endpoint);
      setItems(data);
      setIsLoading(false);
    };

    if (endpoint) {
      getData();
    }
  }, [endpoint]);
  return [items, isLoading] as const;
};

export const useFetchMultipleItems = <T>(
  endpoints: Array<string | null>,
): [Array<T>, boolean] => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Array<T>>([]);

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);
      const data = await Promise.all(
        endpoints.map(async (endpoint) => {
          if (!endpoint) {
            return null;
          }
          return await fetchData<T>(endpoint);
        }),
      );
      setItems(() => data.filter((el) => el) as T[]);
      setIsLoading(false);
    };

    getItems();
  }, [endpoints]);

  return [items, isLoading] as const;
};
