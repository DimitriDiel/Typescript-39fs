
export type InputType = "text" | "checkbox" | "date" | "email" | "password";

export interface InputProps {
  id: string;
  name: string;
  type: InputType;
  placeholder: string;
  label: string;
}
