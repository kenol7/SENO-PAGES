import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingProvider } from './Context/Loader';
import GlobalLoader from './Context/GlobalLoader';
import HalamanLogin from './Pages/HalamanLogin';
import HalamanRegister from './Pages/HalamanRegister';
import HalamanLKS from './Pages/HalamanLKS';
import HalamanKSB from './Pages/HalamanKSB';
import HalamanVerif from './Pages/HalamanVerifikasiKode';
import Halamansk from './Pages/Halamansk';
import './App.css';
function App() {
  return (
    
 <LoadingProvider>
      <BrowserRouter>
        <GlobalLoader />
        <Routes>
          <Route path="/" element={<HalamanRegister/>} />
          <Route path="/login" element={<HalamanLogin />} />
          <Route path="/register" element={<HalamanRegister />} />
          <Route path="/lupakatasandi" element={<HalamanLKS />} />
          <Route path="/katasandibaru" element={<HalamanKSB />} />
          <Route path="/verifikasikode" element={<HalamanVerif />} />
          <Route path="/syaratdanketentuan" element={<Halamansk />} />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
