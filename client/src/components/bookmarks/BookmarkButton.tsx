import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useBookmarkContext } from '../../lib/hooks/contexts';

type BookmarkButtonProps = {
  id: number;
};

export default function BookmarkButton({ id }: BookmarkButtonProps) {
  const { toggleBookmark, bookmarks } = useBookmarkContext();

  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        toggleBookmark(id);
      }}
      className="mb-1"
    >
      <BookmarkFilledIcon
        className={`text-secondary-400 ${
          bookmarks.includes(id) ? 'text-primary-100' : ''
        }`}
      />
    </button>
  );
}
