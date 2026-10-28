import { PhoneXMarkIcon } from '@heroicons/react/24/solid';
import Button from '../Button';
import styles from './styles.module.css';

const CancelButton = ({ hangup }) => {
  return (
    <Button className={styles.button} onPointerDown={() => hangup()}>
      <div className={styles.iconWrapper}>
        <PhoneXMarkIcon className={styles.icon} />
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.text}>Отмена</span>
      </div>
    </Button>
  );
};

export default CancelButton;
