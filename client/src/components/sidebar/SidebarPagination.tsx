import { useOffersContext } from '../../lib/hooks/contexts';
import Pagination from '../general/pagination/Pagination';

export default function SidebarPagination() {
  const { currentPage, setCurrentPage, numberOfPages } = useOffersContext();

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      numberOfPages={numberOfPages}
    />
  );
}
