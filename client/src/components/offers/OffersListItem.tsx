import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import Badge from '../general/Badge';
import Heading from '../general/Heading';
import { Offer } from '../../lib/types';

export default function OffersListItem({ offer }: { offer: Offer }) {
  return (
    <li className="border-b py-3.5 px-4">
      <a href={`#${offer.id}`} className="flex items-center">
        <Badge>{offer.companyBadge}</Badge>
        <div className="px-3">
          <Heading tag="h3" variant="h6">
            {offer.name}
          </Heading>
          <p className="italic text-sm">{offer.company}</p>
        </div>
        <div className="flex flex-col items-center ml-auto">
          <button className="mb-1">
            <BookmarkFilledIcon className="text-secondary-400" />
          </button>
          <time className="text-xs">{offer.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
