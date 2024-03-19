import { ToastContainer } from 'react-toastify';
import Main from './components/Main';
import Header from './components/header/Header';
import OffersContextProvider from './contexts/OffersContextProvider';

function App() {
  return (
    <>
      <OffersContextProvider>
        <Header />
        <Main />
      </OffersContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
