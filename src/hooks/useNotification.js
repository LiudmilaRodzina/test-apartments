import { useState, useEffect } from 'react';
import { useWebViewListener } from './useWebViewListener';

export function useNotification() {
  const notification = useWebViewListener('notificationEvent');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setIsNotificationVisible(true);
      if (notification.timeout) {
        const timer = setTimeout(
          () => setIsNotificationVisible(false),
          notification.timeout
        );
        return () => clearTimeout(timer);
      }
    }
  }, [notification]);

  return { notification, isNotificationVisible };
}
