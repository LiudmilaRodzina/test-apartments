import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Button from '../Button';
import styles from './styles.module.css';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button className={styles.homeButton} onPointerDown={() => navigate('/')}>
      <XMarkIcon className={styles.icon} />
    </Button>
  );
};

export default HomeButton;
