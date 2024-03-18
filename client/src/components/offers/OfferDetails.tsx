import {
  BookmarkFilledIcon,
  GlobeIcon,
  IdCardIcon,
  TimerIcon,
} from '@radix-ui/react-icons';
import Badge from '../general/Badge';
import Heading from '../general/Heading';
import OfferImg from './OfferImg';
import OfferFeature from './OfferFeature';
import OfferOtherDetailsRow from './OfferOtherDetailsRow';
import Tile from '../general/Tile';

export default function OfferDetails() {
  const features = [
    { Icon: TimerIcon, text: 'Full-time' },
    { Icon: IdCardIcon, text: '$90,000' },
    { Icon: GlobeIcon, text: 'Global' },
  ];

  const qualifications = [
    'JavaScript',
    'CSS',
    'React',
    'HTML',
    'NoSQL',
    'Node.js',
    'Vue',
  ];

  const reviews = [
    'Nice place to learn the industry.',
    'Knowledgeable coworkers.',
    'Fast-paced but doable.',
    'Good work-from-home policy.',
  ];

  return (
    <section className="max-lg:col-span-12 col-span-8 bg-secondary-300">
      <OfferImg />
      <div className="px-8 max-sm:-mt-24 -mt-14">
        <div className="flex relative z-1 mb-8">
          <div>
            <Badge variant="primary" isLarge>
              FB
            </Badge>
            <div className="flex justify-between items-center mt-4">
              <time className="text-sm">4d</time>
              <BookmarkFilledIcon className="text-secondary-400" />
            </div>
          </div>
          <div className="ml-6">
            <Heading tag="h2" className="text-white">
              Software Developer
            </Heading>
            <p className="text-sm text-white italic mb-4">Facebook</p>
            <p className="text-sm mb-6">
              We're always looking for top talent in software development so we
              want to learn about why you feel that's you, what drives you,
              where you see your career headed, and why you think InsureNow
              could be the right next move for you.
            </p>
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
            {qualifications.map((qualification) => (
              <Tile key={qualification}>{qualification}</Tile>
            ))}
          </div>
        </OfferOtherDetailsRow>

        <OfferOtherDetailsRow heading="Company Reviews">
          <div className="grid sm:grid-cols-2 gap-3">
            {reviews.map((review) => (
              <p key={review} className="text-sm italic">
                {review}
              </p>
            ))}
          </div>
        </OfferOtherDetailsRow>
      </div>
    </section>
  );
}
