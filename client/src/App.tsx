import { ToastContainer } from 'react-toastify';
import Main from './components/Main';
import Header from './components/header/Header';
import OffersContextProvider from './contexts/OffersContextProvider';
import SearchQueryContextProvider from './contexts/SearchQueryContextProvider';

function App() {
  return (
    <>
      <SearchQueryContextProvider>
        <OffersContextProvider>
          <Header />
          <Main />
        </OffersContextProvider>
      </SearchQueryContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;
