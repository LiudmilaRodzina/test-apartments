import { useConfig } from '../../hooks/useConfig';
import { useInactivityRedirect } from '../../hooks/useInactivityRedirect';
import HomeButton from '../../components/HomeButton';
import styles from './styles.module.css';

const InfoPage = () => {
  const config = useConfig();

  // useInactivityRedirect();

  if (!config) return null;
  const { contacts, news } = config;

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <HomeButton />
      </div>

      <div className={styles.content}>
        {contacts && (
          <section className={styles.top}>
            <div
              className={styles.contacts}
              dangerouslySetInnerHTML={{ __html: contacts }}
            />
          </section>
        )}

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
