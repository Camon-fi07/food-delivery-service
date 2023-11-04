export interface DropDownInfo {
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  options: { value: number | string; name: string }[];
  onInputChange?: (newValue: string) => void;
  defaultValueName?: string;
  listClassNames?: string;
  classNames?: string;
}

export interface ListCheckedInfo {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: number | string; name: string; checked: boolean }[];
  listClassNames?: string;
  classNames?: string;
}
