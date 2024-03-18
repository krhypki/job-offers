import PaginationButton from './PaginationButton';

export default function Pagination() {
  return (
    <div className="flex justify-between px-4 pt-3">
      <PaginationButton />
      <PaginationButton />
    </div>
  );
}
