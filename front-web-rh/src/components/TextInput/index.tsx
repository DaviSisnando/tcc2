import { useState, useMemo } from 'react';
import InputMask, { Props } from 'react-input-mask';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import {
  Container,
  LabelTitle,
  TextInputContainer,
  TextInputStyled,
} from 'components/TextInput/styles';
import { Mask } from 'utils/mask';

function TextInput({
  label,
  placeholder,
  maxLength,
  isPassword,
  mask = Mask.Empyt,
  onChange,
  fontSize = 'normal',
  value = '',
}: ITextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const typeInput = useMemo(
    () => (isPassword && !showPassword ? 'password' : 'text'),
    [isPassword, showPassword],
  );

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const EyeIcon = useMemo(() => (showPassword ? FaEyeSlash : FaEye), [showPassword]);

  return (
    <Container>
      {label && <LabelTitle data-testid="test-input-label">{label}</LabelTitle>}
      <TextInputContainer>
        <InputMask
          mask={mask}
          onChange={onChange}
          placeholder={placeholder}
          type={typeInput}
          value={value}
        >
          {(inputProps: Props) => {
            return (
              <TextInputStyled
                {...inputProps}
                onChange={onChange}
                fontSize={fontSize}
                maxLength={maxLength}
                data-testid="test-input"
                value={value}
              />
            );
          }}
        </InputMask>
        {isPassword && (
          <EyeIcon data-testid="test-eye-icon" role="img" size={26} onClick={toggleShowPassword} />
        )}
      </TextInputContainer>
    </Container>
  );
}

export default TextInput;