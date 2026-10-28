import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import ModeRouter from './ModeRouter';
import DialPage from '../pages/DialPage';
import PinPage from '../pages/PinPage';
import InfoPage from '../pages/InfoPage';

const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ModeRouter />} />
        <Route path="/dial" element={<DialPage />} />
        <Route path="/pin" element={<PinPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default AppRouter;
