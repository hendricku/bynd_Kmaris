export interface AppButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'compact';
  withArrow?: boolean;
  long?: boolean;
  className?: string;
  disabled?: boolean;
}