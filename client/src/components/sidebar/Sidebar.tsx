import Pagination from '../general/pagination/Pagination';
import OffersList from '../offers/OffersList';
import SidebarTop from './SidebarTop';

export default function Sidebar() {
  return (
    <div className="max-lg:col-span-12 max-lg:order-1 col-span-4 bg-white py-3">
      <SidebarTop />
      <OffersList />
      <Pagination />
    </div>
  );
}
