import { useNavigate } from 'react-router-dom';
import { usePrefixes } from '../../hooks/usePrefixes';
import Hero from '../../components/Hero';
import PrefixesList from '../../components/PrefixesList';
import SideBar from '../../components/SideBar';
import styles from './styles.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  const prefixes = usePrefixes();

  const enabledPrefixes = prefixes?.filter((prefix) => prefix.enabled) ?? [];
  const count = enabledPrefixes.length;

  function resolveSidebarRows(count) {
    if (count <= 2) return 2;
    if (count === 3) return 3;
    if (count === 4) return 4;
    if (count <= 6) return 3;
    return 4;
  }

  const sidebarRows = resolveSidebarRows(count);

  return (
    <div className={styles.page}>
      <Hero />
      <section className={styles.content}>
        <div className={styles.left}>
          <SideBar rows={sidebarRows} />
        </div>

        <div className={styles.right}>
          <PrefixesList
            prefixes={enabledPrefixes}
            onPress={(prefix) => navigate('/dial', { state: { prefix } })}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
