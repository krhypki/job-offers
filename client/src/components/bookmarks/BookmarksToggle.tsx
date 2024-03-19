import { TriangleDownIcon } from '@radix-ui/react-icons';
import { useOnClickOutside } from '../../lib/hooks/onClickOutside';
import { useRef } from 'react';

type BookmarksToggleProps = {
  onBookmarksToggle: () => void;
};

export default function BookmarksToggle({
  onBookmarksToggle,
}: BookmarksToggleProps) {
  const bookmarksToggleEl = useRef(null);
  useOnClickOutside(bookmarksToggleEl, () => onBookmarksToggle());

  return (
    <button
      ref={bookmarksToggleEl}
      onClick={onBookmarksToggle}
      className={`
        flex items-center text-sm opacity-75 ml-3 hover-focus:opacity-100
         before:content-[''] before:h-4 before:w-0.5 before:block before:bg-white before:mr-3
    `}
    >
      bookmarks
      <TriangleDownIcon />
    </button>
  );
}
