import EmptyState from '../general/EmptyState';
import OfferDetailsWrapper from './OfferDetailsWrapper';

type OfferDetailsEmptyStateProps = {
  activeId: number | null;
};

export default function OfferDetailsEmptyState({
  activeId,
}: OfferDetailsEmptyStateProps) {
  return (
    <OfferDetailsWrapper>
      <EmptyState>{!!activeId && <h3>No offer found</h3>}</EmptyState>
    </OfferDetailsWrapper>
  );
}
