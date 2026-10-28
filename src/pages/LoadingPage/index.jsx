import styles from './styles.module.css';

const LoadingPage = () => {
  return (
    <div className={styles.page}>
      <span className={styles.text}>Загрузка...</span>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingPage;
