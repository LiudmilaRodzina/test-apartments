import Button from '../Button';
import styles from './styles.module.css';

const PrefixesList = ({ prefixes, onPress }) => {
  return (
    <div className={styles.list}>
      {prefixes.map((prefix) => (
        <Button
          key={prefix.id}
          className={styles.item}
          onPointerDown={() => onPress(prefix)}
        >
          {prefix.name}
        </Button>
      ))}
    </div>
  );
};

export default PrefixesList;
