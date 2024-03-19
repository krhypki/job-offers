import OffersList from '../offers/OffersList';
import SidebarPagination from './SidebarPagination';
import SidebarTop from './SidebarTop';

export default function Sidebar() {
  return (
    <div className="max-lg:col-span-12 max-lg:order-1 col-span-4 flex flex-col bg-white py-3">
      <SidebarTop />
      <OffersList />
      <div className="mt-auto">
        <SidebarPagination />
      </div>
    </div>
  );
}
