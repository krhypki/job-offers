import OffersListItem from './OffersListItem';
import { useOffersContext } from '../../lib/hooks/contexts';
import Spinner from '../general/Spinner';
import OffersListEmptyState from './OfferListEmptyState';
import { useActiveOfferId } from '../../lib/hooks/useActiveOfferId';

export default function OffersList() {
  const { offers, isLoading } = useOffersContext();
  const activeOfferId = useActiveOfferId();

  if (isLoading) {
    return (
      <div className="self-center mt-auto">
        <Spinner />;
      </div>
    );
  }

  if (!offers.length) {
    return <OffersListEmptyState />;
  }

  return (
    <ul>
      {offers.map((offer) => (
        <OffersListItem
          key={offer.id}
          offer={offer}
          isActive={activeOfferId === offer.id}
        />
      ))}
    </ul>
  );
}
