import OffersListItem from './OffersListItem';
import { useOffersContext } from '../../lib/hooks/contexts';

export default function OffersList() {
  const { offers } = useOffersContext();

  if (!offers) {
    return null;
  }
  return (
    <ul>
      {offers.map((offer) => (
        <OffersListItem key={offer.id} offer={offer} />
      ))}
    </ul>
  );
}
