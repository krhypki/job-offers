import { createContext, useMemo, useState } from 'react';
import { useFetchData } from '../lib/hooks/useFetchData';
import { Offer, SortBy } from '../lib/types';
import { OFFERS_PER_PAGE } from '../lib/constants';

type OffersContextType = {
  offers: Offer[];
  isLoading: boolean;
  numberOfResults: number;
  currentPage: number;
  numberOfPages: number;
  sortBy: SortBy;
  setCurrentPage: (page: number) => void;
  setSortBy: (sortBy: SortBy) => void;
};

type OffersContextProviderProps = {
  children: React.ReactNode;
};

export const OffersContext = createContext<OffersContextType | null>(null);

export default function OffersContextProvider({
  children,
}: OffersContextProviderProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('recent');
  const [offers, isLoading] = useFetchData<Offer[]>('/job-offers');

  const numberOfResults = offers?.length || 0;
  const numberOfPages = numberOfResults / OFFERS_PER_PAGE;

  const sortedOffers = useMemo(() => {
    return [...(offers || [])].sort((a, b) => {
      if (sortBy === 'recent') {
        return a.daysAgo - b.daysAgo;
      }

      if (sortBy === 'sallary') {
        return b.sallary - a.sallary;
      }

      return 0;
    });
  }, [sortBy, offers]);

  const displayedOffers = useMemo(() => {
    return (
      sortedOffers.slice(
        OFFERS_PER_PAGE * (currentPage - 1),
        OFFERS_PER_PAGE * currentPage,
      ) || []
    );
  }, [sortedOffers, currentPage]);

  return (
    <OffersContext.Provider
      value={{
        offers: displayedOffers,
        numberOfResults,
        isLoading,
        currentPage,
        numberOfPages,
        sortBy,
        setSortBy,
        setCurrentPage,
      }}
    >
      {children}
    </OffersContext.Provider>
  );
}
