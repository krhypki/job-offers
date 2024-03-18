import Sidebar from './sidebar/Sidebar';
import Container from './Container';
import GridRow from './GridRow';

export default function Main() {
  return (
    <main>
      <Container>
        <GridRow className="rounded-xl shadow-sm -mt-6 overflow-hidden">
          <Sidebar />
        </GridRow>
      </Container>
    </main>
  );
}
