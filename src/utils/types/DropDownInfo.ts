export interface DropDownInfo {
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  options: { value: number | string; name: string }[];
}
