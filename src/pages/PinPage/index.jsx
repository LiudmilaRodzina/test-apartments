import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOpenIcon, BackspaceIcon } from '@heroicons/react/20/solid';
import { useInactivityRedirect } from '../../hooks/useInactivityRedirect';
import { androidActions } from '../../services/androidActions';
import HomeButton from '../../components/HomeButton';
import Button from '../../components/Button';
import styles from './styles.module.css';

const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '0'];

const PinPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);

  // useInactivityRedirect({ onInactivity: () => setValue([]) });

  const handleDigit = (digit) => {
    setValue((prev) => (prev.length < 5 ? [...prev, digit] : prev));
  };

  const handleDelete = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const handleOpen = () => {
    const pin = value.join('');
    if (!pin) return;

    try {
      androidActions.openByCode(pin);
      setValue([]);
      navigate('/');
    } catch (error) {
      console.error('PIN error:', error);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <HomeButton />
      </div>

      <div className={styles.content}>
        <div className={styles.panel}>
          <div className={styles.prompt}>
            {value.length === 0 ? (
              <>
                <span>Для открытия введите код +</span>
                <LockOpenIcon className={styles.promptIcon} />
              </>
            ) : (
              <span className={styles.asterisks}>
                {value.map(() => '*').join('')}
              </span>
            )}
          </div>

          <div className={styles.keys}>
            {DIGITS.map((digit) => (
              <Button
                key={digit}
                className={styles.key}
                onPointerDown={() => handleDigit(digit)}
              >
                {digit}
              </Button>
            ))}

            <Button className={styles.key} onPointerDown={handleDelete}>
              <span className={styles.deleteKey}>
                <BackspaceIcon className={styles.deleteIcon} />
                <span className={styles.deleteLabel}>удалить</span>
              </span>
            </Button>
          </div>

          <Button
            className={styles.openButton}
            disabled={value.length === 0}
            onPointerDown={handleOpen}
          >
            <LockOpenIcon className={styles.openIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PinPage;
