import { createContext } from 'react';
import { useLocalStorage } from '../lib/hooks/useLocalStorage';

type BookmarksContextType = {
  bookmarks: number[];
  toggleBookmark: (id: number) => void;
};

type BookmarksContextProviderProps = {
  children: React.ReactNode;
};

export const BookmarksContext = createContext<BookmarksContextType | null>(
  null,
);

export default function BookmarksContextProvider({
  children,
}: BookmarksContextProviderProps) {
  const [bookmarks, setBookkmarks] = useLocalStorage<number[]>('bookmarks', []);

  const toggleBookmark = (id: number) => {
    console.log(id);
    if (bookmarks.includes(id)) {
      setBookkmarks(bookmarks.filter((bookmarkId) => bookmarkId !== id));
    } else {
      setBookkmarks([...bookmarks, id]);
    }
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}
