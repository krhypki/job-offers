import Sidebar from './sidebar/Sidebar';
import Container from './general/layout/Container';
import GridRow from './general/layout/GridRow';
import OfferDetails from './offers/OfferDetails';

export default function Main() {
  return (
    <main>
      <Container>
        <GridRow className="rounded-xl shadow-sm -mt-6 overflow-hidden min-h-[640px]">
          <Sidebar />
          <OfferDetails />
        </GridRow>
      </Container>
    </main>
  );
}
