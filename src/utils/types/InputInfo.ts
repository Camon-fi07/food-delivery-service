export interface InputInfo {
  label: string;
  isError?: boolean | "";
  errorName?: string;
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  options?: { value: number | string; name: string }[];
  onBlur?: (e: React.FocusEvent<unknown>) => void;
  onInputChange?: (newValue: string) => void;
  defaultValue?: string;
}
