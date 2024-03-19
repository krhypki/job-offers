import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { PaginationDirection } from '../../../lib/types';

type PaginationButtonProps = {
  direction: PaginationDirection;
  currentPage: number;
  onClick: () => void;
};

export default function PaginationButton({
  direction,
  currentPage,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      onClick={(event) => {
        event.currentTarget.blur();
        onClick();
      }}
      className={`text-[10px] rounded-xl text-secondary-400 bg-secondary-200 py-1 px-2.5 flex gap-1 ${
        direction === 'next' ? 'ml-auto' : ''
      }`}
    >
      {direction === 'prev' && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}

      {direction === 'next' && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
