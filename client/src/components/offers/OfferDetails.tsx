import { GlobeIcon, IdCardIcon, TimerIcon } from '@radix-ui/react-icons';
import Badge from '../general/Badge';
import Heading from '../general/Heading';
import OfferImg from './OfferImg';
import OfferFeature from './OfferFeature';
import OfferOtherDetailsRow from './OfferOtherDetailsRow';
import Tile from '../general/Tile';
import { useActiveOfferId } from '../../lib/hooks/useActiveOfferId';
import { useFetchData } from '../../lib/hooks/useFetchData';
import { Offer } from '../../lib/types';
import OfferDetailsWrapper from './OfferDetailsWrapper';
import Spinner from '../general/Spinner';
import OfferDetailsEmptyState from './OfferDetailsEmptyState';
import { currencyFormat } from '../../lib/utils/currency-format';
import BookmarkButton from '../bookmarks/BookmarkButton';

export default function OfferDetails() {
  const activeId = useActiveOfferId();
  const [offer, isLoading] = useFetchData<Offer>(
    activeId ? `/job-offers/${activeId}` : null,
  );

  if (isLoading) {
    return (
      <OfferDetailsWrapper>
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      </OfferDetailsWrapper>
    );
  }

  if (!offer) {
    return <OfferDetailsEmptyState activeId={activeId} />;
  }

  const features = [
    { Icon: TimerIcon, text: offer.duration },
    { Icon: IdCardIcon, text: currencyFormat(offer.salary) },
    { Icon: GlobeIcon, text: offer.location },
  ];

  return (
    <OfferDetailsWrapper>
      <OfferImg />
      <div className="px-8 max-sm:-mt-24 -mt-14">
        <div className="flex relative z-1 mb-8">
          <div>
            <Badge variant="primary" isLarge>
              {offer.companyBadge}
            </Badge>
            <div className="flex justify-between items-center mt-4">
              <time className="text-sm">{offer.daysAgo}d</time>
              <BookmarkButton id={offer.id} />
            </div>
          </div>
          <div className="ml-6">
            <Heading tag="h2" className="text-white">
              {offer.name}
            </Heading>
            <p className="text-sm text-white italic mb-4">{offer.company}</p>
            <p className="text-sm mb-6">{offer.description}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {features.map(({ Icon, text }) => (
                <OfferFeature key={text} Icon={Icon}>
                  {text}
                </OfferFeature>
              ))}
            </div>
          </div>
        </div>
        <OfferOtherDetailsRow heading="Qualifications">
          <div className="flex flex-wrap gap-3">
            {offer.qualifications.map((qualification) => (
              <Tile key={qualification}>{qualification}</Tile>
            ))}
          </div>
        </OfferOtherDetailsRow>

        <OfferOtherDetailsRow heading="Company Reviews">
          <div className="grid sm:grid-cols-2 gap-3">
            {offer.reviews.map((review) => (
              <p key={review} className="text-sm italic">
                {review}
              </p>
            ))}
          </div>
        </OfferOtherDetailsRow>
      </div>
    </OfferDetailsWrapper>
  );
}
