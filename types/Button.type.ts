export interface ButtonProps {
  title: String;
  toggle?: Boolean;
  isFull?: true;
  icon?: React.ReactNode;
  onClick?: () => void;
}
