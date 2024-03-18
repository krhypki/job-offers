import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import Badge from '../general/Badge';
import Heading from '../general/Heading';

export default function OffersListItem() {
  return (
    <li className="border-b py-3.5 px-4">
      <a href="#" className="flex items-center">
        <Badge>FB</Badge>
        <div className="px-3">
          <Heading tag="h3" variant="h6">
            Junior Software Developer
          </Heading>
          <p className="font-italic text-sm">Facebook</p>
        </div>
        <div className="flex flex-col items-center ml-auto">
          <button className="mb-1">
            <BookmarkFilledIcon className="text-secondary-400" />
          </button>
          <time className="text-xs">2d</time>
        </div>
      </a>
    </li>
  );
}
