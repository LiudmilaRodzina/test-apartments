import { useConfig } from '../../hooks/useConfig';
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid';
import Hero from '../../components/Hero';
import styles from './styles.module.css';

const modeConfig = {
  open: {
    title: 'Открыто',
    message: 'Дверь открыта, проходите',
    Icon: LockOpenIcon,
  },
  closed: {
    title: 'Дверь закрыта',
    message: 'Режим работы: ПН - ПТ с 9:00 до 18:00',
    Icon: LockClosedIcon,
  },
};

const ModePage = () => {
  const config = useConfig();
  if (!config) return null;
  const { mode } = config;

  const { title, message, Icon } = modeConfig[mode];

  return (
    <div className={styles.page}>
      <Hero />
      <section className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.message}>{message}</span>
      </section>
      {Icon && (
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default ModePage;
