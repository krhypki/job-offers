import Badge from '../general/Badge';
import Heading from '../general/Heading';
import { Offer } from '../../lib/types';
import BookmarkButton from '../bookmarks/BookmarkButton';

type OfferListItemProps = {
  offer: Offer;
  includeBookmarkBtn?: boolean;
  isActive?: boolean;
};

export default function OffersListItem({
  offer,
  includeBookmarkBtn = true,
  isActive = false,
}: OfferListItemProps) {
  return (
    <li
      className={`text-black border-b py-3.5 px-4 hover:bg-secondary-200 transition-all ${
        isActive ? 'bg-secondary-200' : ''
      }`}
    >
      <a href={`#${offer.id}`} className="flex items-center">
        <Badge>{offer.companyBadge}</Badge>
        <div className="px-3">
          <Heading tag="h3" variant="h6">
            {offer.name}
          </Heading>
          <p className="italic text-sm">{offer.company}</p>
        </div>
        <div className="flex flex-col items-center ml-auto">
          {includeBookmarkBtn && <BookmarkButton id={offer.id} />}
          <time className="text-xs">{offer.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
