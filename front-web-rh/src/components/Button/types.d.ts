type ButtonSize = 'small' | 'medium' | 'large' | 'full';

interface IButtonProps {
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
  borderType?: 'normal' | 'pill';
}
