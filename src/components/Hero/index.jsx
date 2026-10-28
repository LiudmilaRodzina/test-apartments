import { useConfig } from '../../hooks/useConfig';
import logo from '../../assets/images/logo.png';
import styles from './styles.module.css';

const Hero = () => {
  const config = useConfig();

  if (!config) return null;
  const { str4, str5, str6, str13, str14, logo } = config;

  return (
    <section
      className={styles.hero}
      style={{
        '--hero-bg': `url(${logo})`,
      }}
    >
      <div className={styles.titleGroup}>
        <div className={styles.mainTitle}>
          <span>{str4}</span>
          <span>{str5}</span>
        </div>
        <span className={styles.subtitle}>{str6}</span>
      </div>

      {!logo && (
        <div className={styles.name}>
          <span className={styles.str13}>{str13}</span>
          <span className={styles.str14}>{str14}</span>
        </div>
      )}
    </section>
  );
};

export default Hero;
