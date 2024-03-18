import { TriangleDownIcon } from '@radix-ui/react-icons';

export default function BookmarksToggle() {
  return (
    <button
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
