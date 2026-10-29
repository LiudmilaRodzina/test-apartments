import { androidActions } from '../../services/androidActions';

const Button = ({
  onPointerDown,
  type = 'button',
  beepSource = '',
  ...props
}) => {
  const beep = () => {
    androidActions.buttonPressed(beepSource);
  };

  const handlePointerDown = (e) => {
    if (props.disabled) return;

    if (e.pointerType === 'touch') e.preventDefault();

    beep();

    if (onPointerDown) onPointerDown(e);
  };

  return <button type={type} onPointerDown={handlePointerDown} {...props} />;
};

export default Button;
