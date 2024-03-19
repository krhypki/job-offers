import { useOffersContext } from '../../lib/hooks/contexts';

export default function ResultsCount() {
  const { numberOfResults } = useOffersContext();
  return <small>{numberOfResults} results</small>;
}
