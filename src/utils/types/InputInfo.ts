export interface InputInfo {
  label: string;
  isError?: boolean | "";
  errorName?: string;
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
  options?: { value: number | string; name: string }[];
}
