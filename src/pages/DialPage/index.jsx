import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  InformationCircleIcon,
  LockOpenIcon,
} from '@heroicons/react/20/solid';
import { useInactivityRedirect } from '../../hooks/useInactivityRedirect';
import Display from '../../components/Display';
import KeyPad from '../../components/KeyPad';
import CallModal from '../../components/CallModal';
import Button from '../../components/Button';
import styles from './styles.module.css';

const DialPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const prefixObj = location.state?.prefix;
  const prefix = prefixObj?.prefix ?? '';

  const [value, setValue] = useState([]);
  const [target, setTarget] = useState(null);
  const [isCalling, setIsCalling] = useState(false);

  useInactivityRedirect({
    onInactivity: () => setValue([]),
    disabled: isCalling,
  });

  const handleCall = () => {
    if (value.length === 0) return;

    const dialed = value.join('');

    const targetObj = {
      dialed,
      prefix,
      name: prefixObj?.name,
    };

    setTarget(targetObj);
    setIsCalling(true);
    console.log('targetObj', targetObj);
  };

  const handleCancelCall = () => {
    setIsCalling(false);
    setTarget(null);
    setValue([]);
  };

  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <div className={styles.top}>
          <Display
            value={value}
            setValue={setValue}
            placeholder={prefixObj?.name}
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
              className={styles.right}
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
                '#',
                '0',
                'phone',
              ]}
              onPress={(digit) => {
                if (digit === '#') {
                  navigate('/pin');
                } else {
                  setValue((prev) =>
                    prev.length < 5 ? [...prev, digit] : prev,
                  );
                }
              }}
              handleCall={handleCall}
            />

            {isCalling && target && (
              <CallModal target={target} onCancel={handleCancelCall} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DialPage;
