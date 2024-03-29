import BookmarksWrapper from '../bookmarks/BookmarksWrapper';
import Heading from '../general/Heading';
import Logo from '../general/Logo';

export default function HeaderTop() {
  return (
    <div className="relative flex text-white mb-4">
      <Heading
        tag="h1"
        variant="h4"
        className="flex items-center gap-1
  "
      >
        <Logo />
        JobOffers
      </Heading>
      <BookmarksWrapper />
    </div>
  );
}
