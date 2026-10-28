import styles from './styles.module.css';

const Prompt = ({ children }) => {
  return <p className={styles.prompt}>{children}</p>;
};

export default Prompt;
