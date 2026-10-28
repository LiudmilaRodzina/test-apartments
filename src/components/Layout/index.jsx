import { Outlet } from 'react-router-dom';
import { useConfig } from '../../hooks/useConfig';
import { useNotification } from '../../hooks/useNotification';
import NotificationModal from '../NotificationModal';
import Header from '../Header';
import styles from './styles.module.css';

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

  return (
    <div
      className={`${styles.layout} ${notificationBackground} ${modeBackground}`}
      style={{
        '--custom-bg': !isModePage
          ? config?.backgroundColor || undefined
          : undefined,
        '--bg-image': bgImage ? `url(${bgImage})` : 'none',
      }}
    >
      <NotificationModal />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
