type FontSizeType = 'small' | 'normal' | 'large';

interface ITextInputProps {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  isPassword?: boolean;
  mask?: import('utils/mask').Mask | string | (string | RegExp)[];
  onChange?: (event: import('react').ChangeEvent<HTMLInputElement>) => void;
  fontSize?: FontSizeType;
  value?: string;
}
