import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function PaginationButton() {
  return (
    <button className="text-[10px] rounded-xl text-secondary-400 bg-secondary-200 py-1 px-2.5 flex gap-1">
      Page 1
      <ArrowRightIcon />
    </button>
  );
}
