export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  imageSrc?: string;
  children?: React.ReactNode;
}
