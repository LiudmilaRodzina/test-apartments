import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useConfig } from '../../hooks/useConfig';
import { useInactivityRedirect } from '../../hooks/useInactivityRedirect';
import Button from '../../components/Button';
import styles from './styles.module.css';

const InfoPage = () => {
  const config = useConfig();
  const navigate = useNavigate();

  useInactivityRedirect();

  if (!config) return null;
  const { contacts, news } = config;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.top}>
          <Button className={styles.link} onPointerDown={() => navigate('/')}>
            <XMarkIcon className={styles.icon} />
          </Button>

          {contacts && (
            <div
              className={styles.contacts}
              dangerouslySetInnerHTML={{ __html: contacts }}
            />
          )}
        </section>

        {news && (
          <section className={styles.bottom}>
            <div
              className={styles.news}
              dangerouslySetInnerHTML={{ __html: news }}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default InfoPage;
