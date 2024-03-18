import Pagination from '../general/pagination/Pagination';
import OffersList from '../offers/OffersList';
import SidebarTop from './SidebarTop';

export default function Sidebar() {
  return (
    <div className="col-span-4 bg-white py-3">
      <SidebarTop />
      <OffersList />
      <Pagination />
    </div>
  );
}
