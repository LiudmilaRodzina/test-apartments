import { BackspaceIcon } from '@heroicons/react/24/solid';
import Button from '../Button';
import styles from './styles.module.css';

const Display = ({ value, setValue, placeholder }) => {
  const handleClear = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  return (
    <div className={styles.display}>
      {value.length === 0 ? (
        <span className={styles.placeholder}>{placeholder}</span>
      ) : (
        <span className={styles.value}>{value.join('')}</span>
      )}
      {value.length > 0 && (
        <Button className={styles.clearButton} onPointerDown={handleClear}>
          <BackspaceIcon className={styles.icon} />
        </Button>
      )}
    </div>
  );
};

export default Display;
