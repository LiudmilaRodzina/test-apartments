import { LockOpenIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styles from './styles.module.css';

const ActionBar = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.actionBar}>
      <Button
        className={styles.button}
        onPointerDown={() => navigate('/info')}
      >
        <InformationCircleIcon className={styles.icon} />
        <span>инфо</span>
      </Button>

      <Button
        className={styles.button}
        onPointerDown={() => navigate('/pin')}
      >
        <LockOpenIcon className={styles.icon} />
        <span>пароль</span>
      </Button>
    </section>
  );
};

export default ActionBar;
