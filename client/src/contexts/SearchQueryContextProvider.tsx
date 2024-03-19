import { createContext } from 'react';
import useDebounce from '../lib/hooks/useDebounce';
import { useLocalStorage } from '../lib/hooks/useLocalStorage';

type SearchQueryContextType = {
  query: string;
  debouncedQuery: string;
  onQueryChange: (query: string) => void;
  clearQuery: () => void;
};

type SearchQueryContextProviderProps = {
  children: React.ReactNode;
};

export const SearchQueryContext = createContext<SearchQueryContextType | null>(
  null,
);

export default function SearchQueryContextProvider({
  children,
}: SearchQueryContextProviderProps) {
  const [query, setQuery] = useLocalStorage('searchQuery', '');
  const debouncedQuery = useDebounce(query);

  const clearQuery = () => {
    setQuery('');
  };

  return (
    <SearchQueryContext.Provider
      value={{
        query,
        debouncedQuery,
        onQueryChange: setQuery,
        clearQuery,
      }}
    >
      {children}
    </SearchQueryContext.Provider>
  );
}
