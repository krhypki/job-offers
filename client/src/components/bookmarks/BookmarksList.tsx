import { useMemo } from 'react';
import { useBookmarkContext } from '../../lib/hooks/contexts';
import { useFetchMultipleItems } from '../../lib/hooks/useFetchData';
import { Offer } from '../../lib/types';
import OffersListItem from '../offers/OffersListItem';
import Spinner from '../general/Spinner';

export default function BookmarksList() {
  const { bookmarks } = useBookmarkContext();
  const bookmarksEndpoints = useMemo(
    () =>
      bookmarks.map((bookmark: number) =>
        bookmark ? `/job-offers/${bookmark}` : null,
      ),
    [bookmarks],
  );

  const [bookmarkedOffers, isLoading] =
    useFetchMultipleItems<Offer>(bookmarksEndpoints);

  console.log(bookmarkedOffers);

  return (
    <div className="text-black absolute top-full left-1/2 -translate-x-1/2 min-h-16 w-[calc(100%_+_64px)] bg-white shadow-lg z-10">
      <ul>
        {isLoading && <Spinner />}
        {!bookmarkedOffers.length && (
          <p className="text-center py-4">No bookmarks added yet.</p>
        )}
        {bookmarkedOffers.map((offer: Offer) => (
          <OffersListItem
            key={offer.id}
            offer={offer}
            includeBookmarkBtn={false}
          />
        ))}
      </ul>
    </div>
  );
}
