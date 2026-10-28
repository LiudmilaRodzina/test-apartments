import { useConfig } from '../../hooks/useConfig';
import { useCall } from '../../hooks/useCall';
import { CALL_STATUS } from './callStatusConfig';
import CancelButton from '../CancelButton';
import styles from './styles.module.css';

const CallModal = ({ target, onCancel }) => {
  const config = useConfig();
  const { callEvent, hangup } = useCall(target, onCancel);

  if (!target || !callEvent) return null;

  const { label, icon: Icon } = CALL_STATUS[callEvent] || {
    label: callEvent,
    icon: null,
  };

  return (
    <div className={styles.overlay}>
      <div
        className={styles.callModal}
        style={{ background: config?.backgroundColor }}
      >
        <div className={styles.textWrapper}>
          <span className={styles.text}>{label}</span>
          <span className={styles.number}>{target.name}</span>
          <span className={styles.number}>№ {target.dialed}</span>
        </div>
        {Icon && (
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} />
          </div>
        )}
        <div className={styles.cancelArea}>
          {callEvent === 'End' || callEvent === 'Released' ? null : (
            <CancelButton hangup={hangup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CallModal;
