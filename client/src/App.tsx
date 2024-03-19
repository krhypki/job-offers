import { ToastContainer } from 'react-toastify';
import Main from './components/Main';
import Header from './components/header/Header';
import OffersContextProvider from './contexts/OffersContextProvider';
import SearchQueryContextProvider from './contexts/SearchQueryContextProvider';
import BookmarksContextProvider from './contexts/BookmarksContextProvider';

function App() {
  return (
    <>
      <SearchQueryContextProvider>
        <OffersContextProvider>
          <BookmarksContextProvider>
            <Header />
            <Main />
          </BookmarksContextProvider>
        </OffersContextProvider>
      </SearchQueryContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;
