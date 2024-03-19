import EmptyState from '../general/EmptyState';
import Button from '../general/Button';
import { useSearchQueryContext } from '../../lib/hooks/contexts';

export default function OffersListEmptyState() {
  const { clearQuery } = useSearchQueryContext();

  return (
    <EmptyState>
      <p className="mb-6">No offers found</p>
      <Button onClick={clearQuery}>Clear Query Search</Button>
    </EmptyState>
  );
}
