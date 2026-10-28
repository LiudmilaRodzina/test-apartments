import { Outlet } from 'react-router-dom';
import { useConfig } from '../../hooks/useConfig';
import { useNotification } from '../../hooks/useNotification';
import NotificationModal from '../NotificationModal';
import styles from './styles.module.css';

const FONT_MAP = {
  rubik: "'Rubik', Arial, sans-serif",
  manrope: "'Manrope', Arial, sans-serif",
  comfortaa: "'Comfortaa', Arial, sans-serif",
  ubuntu: "'UbuntuMono', Arial, sans-serif",
  roboto: "'RobotoCondensed', Arial, sans-serif",
  cuprum: "'Cuprum', Arial, sans-serif",
  oswald: "'Oswald', Arial, sans-serif",
  yanone: "'YanoneKaffeesatz', Arial, sans-serif",
  daysone: "'DaysOne', Arial, sans-serif",
  russoone: "'RussoOne', Arial, sans-serif",
  unbounded: "'Unbounded', Arial, sans-serif",
  tektur: "'Tektur', Arial, sans-serif",
  gidole: "'Gidole', Arial, sans-serif",
  caveat: "'Caveat', Arial, sans-serif",
};

const DEFAULT_FONT = "'RobotoCondensed', Arial, sans-serif";

const Layout = () => {
  const { notification, isNotificationVisible } = useNotification();
  const config = useConfig();

  const notificationBackground =
    isNotificationVisible && notification?.type
      ? styles[notification.type]
      : '';

  const isModePage = config?.mode === 'open' || config?.mode === 'closed';

  const modeBackground =
    { open: styles.success, closed: styles.warning }[config?.mode] || '';

  const bgImage = config?.backgroundImage || '';

  const appFont = FONT_MAP[config?.font?.toLowerCase()] || DEFAULT_FONT;

  return (
    <div
      className={`${styles.layout} ${notificationBackground} ${modeBackground}`}
      style={{
        '--custom-bg': !isModePage
          ? config?.backgroundColor || undefined
          : undefined,
        '--bg-image': bgImage ? `url(${bgImage})` : 'none',
        '--app-font': appFont,
      }}
    >
      <NotificationModal />
      <div className={styles.container}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
