import { ChangeEvent, Ref } from "react";

export interface InputProps {
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  title?: string;
  refprop?: Ref<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  bg?: string;
  color?: string;
}
