import Container from '../general/Container';

import HeaderTop from './HeaderTop';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-100 to-primary-200 py-12">
      <Container className="flex flex-col items-center">
        <HeaderTop />
        <SearchForm placeholder="Find developer jobs..." />
      </Container>
    </header>
  );
}
