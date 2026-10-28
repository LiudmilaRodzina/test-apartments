import { useNavigate } from 'react-router-dom';
import { usePrefixes } from '../../hooks/usePrefixes';
import Header from '../../components/Header';
import ActionBar from '../../components/ActionBar';
import Prompt from '../../components/Prompt';
import PrefixesList from '../../components/PrefixesList';
import styles from './styles.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  const prefixes = usePrefixes();

  const enabledPrefixes = prefixes?.filter((prefix) => prefix.enabled) ?? [];

  return (
    <div className={styles.page}>
      <Header />
      <ActionBar />
      <div className={styles.promptSection}>
        <Prompt>Выберите номер дома</Prompt>
      </div>
      <section className={styles.content}>
        <PrefixesList
          prefixes={enabledPrefixes}
          onPress={(prefix) => navigate('/dial', { state: { prefix } })}
        />
      </section>
    </div>
  );
};

export default HomePage;
