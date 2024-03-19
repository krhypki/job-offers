import { useState } from 'react';
import BookmarksList from './BookmarksList';
import BookmarksToggle from './BookmarksToggle';

export default function BookmarksWrapper() {
  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleBookmarksToggle = (status?: boolean) => {
    setShowBookmarks(status ?? !showBookmarks);
  };

  return (
    <div className="flex items-center">
      <BookmarksToggle onBookmarksToggle={handleBookmarksToggle} />

      {showBookmarks && <BookmarksList />}
    </div>
  );
}
