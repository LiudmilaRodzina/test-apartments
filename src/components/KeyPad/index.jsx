import { XMarkIcon, PhoneIcon, LockOpenIcon } from '@heroicons/react/24/solid';
import Button from '../Button';
import styles from './styles.module.css';

const KeyPad = ({ digits, onPress, handleCall, onOpen }) => {
  const handlePress = (digit) => {
    if (digit === 'phone') {
      handleCall();
    } else if (digit === 'open') {
      onOpen();
    } else {
      onPress(digit);
    }
  };

  const renderKey = (digit) => {
    let content;
    if (digit === 'phone') {
      content = <PhoneIcon className={`${styles.icon} ${styles.iconPhone}`} />;
    } else if (digit === 'open') {
      content = (
        <LockOpenIcon className={`${styles.icon} ${styles.iconOpen}`} />
      );
    } else if (digit === 'cross') {
      content = <XMarkIcon className={`${styles.icon} ${styles.iconCross}`} />;
    } else {
      content = digit;
    }

    return (
      <Button
        key={digit}
        className={styles.key}
        onPointerDown={(e) => {
          handlePress(digit, e);
        }}
      >
        {content}
      </Button>
    );
  };

  return (
    <div className={styles.keypad}>
      <div className={styles.keys}>{digits.map(renderKey)}</div>
    </div>
  );
};

export default KeyPad;
