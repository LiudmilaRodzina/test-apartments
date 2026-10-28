import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  InformationCircleIcon,
  LockOpenIcon,
} from '@heroicons/react/20/solid';
import { useInactivityRedirect } from '../../hooks/useInactivityRedirect';
import { androidActions } from '../../services/androidActions';
import Display from '../../components/Display';
import KeyPad from '../../components/KeyPad';
import Button from '../../components/Button';
import styles from './styles.module.css';

const PinPage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState([]);

  useInactivityRedirect({ onInactivity: () => setValue([]) });

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
      <section className={styles.content}>
        <div className={styles.top}>
          <Display
            value={value.map(() => '*')}
            setValue={setValue}
            placeholder="введите код"
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <Button className={styles.link} onPointerDown={() => navigate('/')}>
              <ArrowLeftIcon className={styles.icon} />
            </Button>
            <Button
              className={styles.link}
              onPointerDown={() => navigate('/pin')}
            >
              <LockOpenIcon className={styles.icon} />
            </Button>
            <Button
              className={styles.link}
              onPointerDown={() => navigate('/info')}
            >
              <InformationCircleIcon className={styles.icon} />
            </Button>
          </div>
          <div className={styles.right}>
            <KeyPad
              digits={[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                'cross',
                '0',
                'open',
              ]}
              onPress={(digit) => {
                if (digit === 'cross') {
                  navigate('/');
                } else {
                  setValue((prev) =>
                    prev.length < 5 ? [...prev, digit] : prev,
                  );
                }
              }}
              onOpen={handleOpen}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PinPage;
