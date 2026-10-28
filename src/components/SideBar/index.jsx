import { LockOpenIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styles from './styles.module.css';

const SideBar = ({ rows = 4, disabled }) => {
  const navigate = useNavigate();

  return (
    <section
      className={styles.sideBar}
      style={{
        height: `calc(${rows} * 13rem + ${(rows - 1) * 1.5}rem)`,
      }}
    >
      <Button
        className={styles.link}
        disabled={disabled}
        onPointerDown={() => navigate('/pin')}
      >
        <LockOpenIcon className={styles.icon} />
      </Button>

      <Button
        className={styles.link}
        disabled={disabled}
        onPointerDown={() => navigate('/info')}
      >
        <InformationCircleIcon className={styles.icon} />
      </Button>
    </section>
  );
};

export default SideBar;
