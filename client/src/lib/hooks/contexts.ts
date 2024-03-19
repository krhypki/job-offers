import { Context, useContext } from 'react';
import { OffersContext } from '../../contexts/OffersContextProvider';
import { SearchQueryContext } from '../../contexts/SearchQueryContextProvider';

const useContextWithErrorHandle = <T>(context: Context<T>, name: string) => {
  const contextData = useContext(context);

  if (!contextData) {
    throw new Error(`${name} must be used within OffersContextProvider`);
  }

  return contextData;
};

export function useOffersContext() {
  return useContextWithErrorHandle(OffersContext, 'useOffersContext');
}

export function useSearchQueryContext() {
  return useContextWithErrorHandle(SearchQueryContext, 'useSearchQuerYContext');
}
