import { useConfig } from '../hooks/useConfig';
import LoadingPage from '../pages/LoadingPage';
import ModePage from '../pages/ModePage';
import HomePage from '../pages/HomePage';

const ModeRouter = () => {
  const config = useConfig();

  if (!config) return <LoadingPage />;

  const { mode } = config;

  if (mode === 'open' || mode === 'closed') return <ModePage />;
  return <HomePage />;
};

export default ModeRouter;
