import { useNotification } from '../../hooks/useNotification';
import styles from './styles.module.css';

const NotificationModal = () => {
  const { notification, isNotificationVisible } = useNotification();

  if (!notification || !isNotificationVisible) return null;

  const typeClass = notification?.type ? styles[notification.type] : '';

  const MAX_LENGTH = 300;
  const truncatedMsg =
    notification.msg.length > MAX_LENGTH
      ? notification.msg.slice(0, MAX_LENGTH) + '…'
      : notification.msg;

  return (
    <div className={`${styles.notificationModal} ${typeClass}`}>
      <div className={styles.content}>
        <span className={styles.title}>{notification.title}</span>
        <span className={styles.message}>{truncatedMsg}</span>
      </div>
    </div>
  );
};

export default NotificationModal;
