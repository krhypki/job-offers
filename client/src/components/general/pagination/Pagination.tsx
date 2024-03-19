import PaginationButton from './PaginationButton';

type PaginationProps = {
  currentPage: number;
  numberOfPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  numberOfPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-between px-4 pt-3">
      {currentPage > 1 && (
        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          currentPage={currentPage}
          direction="prev"
        />
      )}

      {currentPage < numberOfPages && (
        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          currentPage={currentPage}
          direction="next"
        />
      )}
    </div>
  );
}
