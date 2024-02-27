import { ChangeEvent, FocusEvent, ReactNode } from "react";
import { InputLabel, StyledInput } from "./styles/input-style";

interface InputInterface {
  icon?: ReactNode;
  label: string;
  name: string;
  type?: string
  value?: string;
  placeholder?: string;
  disable?: boolean;
  maxLength?: number

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ ...props }: InputInterface) => {
  return (
    <div>  
      <InputLabel>
        {props.icon}
        <span>{props.label}</span>
      </InputLabel>
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        maxLength={props.maxLength}
        disabled={props.disable}
      />
    </div>
  );
};

export default Input