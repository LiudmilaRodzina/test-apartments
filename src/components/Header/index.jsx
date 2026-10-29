import { useState, useEffect } from 'react';
import { useConfig } from '../../hooks/useConfig';
import fallbackLogo from '../../assets/images/logo.png';
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

      // ru-RU gives "ср, 28.10.26" — mock wants "28.10.26, Ср"
      const [weekday, datePart] = now
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
          weekday: 'short',
        })
        .replace(/\sг\./, '')
        .split(', ');

      setTime(formattedTime);
      setDate(
        `${datePart}, ${weekday.charAt(0).toUpperCase()}${weekday.slice(1)}`,
      );
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

  const { str4, str5, str11, logo } = config;
  const logoSrc = logo || fallbackLogo;

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoSrc} alt="" />

      <div className={styles.content}>
        <div className={styles.datetime}>
          <span className={styles.time}>{time}</span>
          <span className={styles.date}>{date}</span>
        </div>

        <div className={styles.brand}>
          <div className={styles.title}>
            <span>{str4}</span>
            <span>{str5}</span>
          </div>
          <span className={styles.subtitle}>{str11}</span>
        </div>

        <div className={styles.datetimeSpacer} aria-hidden="true">
          <span className={styles.time}>{time}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
