import { useState, useEffect } from 'react';
import { useConfig } from '../../hooks/useConfig';
import styles from './styles.module.css';

const Header = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const config = useConfig();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const formattedDate = now
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
          weekday: 'short',
        })
        .replace(/\sг\./, '')
        .toUpperCase();

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateDateTime();

    const msUntilNextMinute = 60000 - (Date.now() % 60000);
    let interval;

    const timeout = setTimeout(() => {
      updateDateTime();
      interval = setInterval(updateDateTime, 60000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  if (!config) return null;
  const { str1, str2, str3 } = config;

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.top}>
          <span className={styles.str1}>{str1}</span>
          <span className={styles.str2}>{str2}</span>
        </div>
        <span className={styles.str3}>{str3}</span>
      </div>

      <div className={styles.right}>
        <span className={styles.time}>{time}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </header>
  );
};

export default Header;
