import OffersListItem from './OffersListItem';

export default function OffersList() {
  const offers = [1, 2, 3, 4, 5, 6, 7];
  return (
    <ul>
      {offers.map((offer) => (
        <OffersListItem key={offer} />
      ))}
    </ul>
  );
}
