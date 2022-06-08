import { Route, Routes } from 'react-router-dom';
import {
  Laporan,
  Home,
  NotFound,
  Management,
  Prabayar,
  Pascabayar,
  LaporanPrabayar,
  LaporanPascabayar,
  CRM,
} from './components/pages';
import ToastHandler from './utils/hooks/useToast';

function App() {
  return (
    <>
      <ToastHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<CRM />} />
        {/* Link Laporan */}
        <Route path="/laporan" element={<Laporan />}>
          <Route index element={<LaporanPrabayar />} />
          <Route path="pascabayar" element={<LaporanPascabayar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* End Link Laporan*/}

        {/* Link Manageement*/}
        <Route path="/management" element={<Management />}>
          <Route index element={<Prabayar />} />
          <Route path="pascabayar" element={<Pascabayar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* End Link Manageement*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
