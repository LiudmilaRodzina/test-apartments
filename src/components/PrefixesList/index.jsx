import Button from '../Button';
import styles from './styles.module.css';

const LAYOUTS = [
  { max: 2, columns: 1, rows: 2, width: '43rem' },
  { max: 3, columns: 1, rows: 3, width: '43rem' },
  { max: 4, columns: 1, rows: 4, width: '43rem' },
  { max: 6, columns: 2, rows: 3 },
  { max: 8, columns: 2, rows: 4 },
];

function resolveLayout(count) {
  return (
    LAYOUTS.find((layout) => count <= layout.max) || LAYOUTS[LAYOUTS.length - 1]
  );
}

const PrefixesList = ({ prefixes, onPress }) => {
  const count = prefixes.length;

  const { columns, rows, width } = resolveLayout(count);

  const cells = Array.from(
    { length: columns * rows },
    (_, index) => prefixes[index] ?? null,
  );

  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        maxWidth: width ?? '100%',
      }}
    >
      {cells.map((prefix, index) =>
        prefix ? (
          <Button
            key={prefix.id}
            className={styles.key}
            onPointerDown={() => onPress(prefix)}
          >
            {prefix.name}
          </Button>
        ) : (
          <div key={`empty-${index}`} className={styles.emptyKey} />
        ),
      )}
    </div>
  );
};

export default PrefixesList;
