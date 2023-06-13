import { ButtonContainer } from 'components/Button/styles';

function Button({
  onClick = () => {},
  children,
  size = 'medium',
  primary = true,
  borderType = 'pill',
}: IButtonProps) {
  return (
    <ButtonContainer borderType={borderType} primary={primary} onClick={onClick} size={size}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
