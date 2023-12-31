import * as Yup from "yup";
import { DishBasketDto } from "./Dish";
import { PurchaseDto } from "./CartInfo";

export interface InputInfo {
  label: string;
  isError?: boolean | "";
  errorName?: string;
  type: string;
  name: string;
  disabled?: boolean;
  handleChange: (e: React.ChangeEvent<any>) => void;
  options?: { value: number | string; name: string }[];
  onBlur?: (e: React.FocusEvent<unknown>) => void;
  onInputChange?: (newValue: string) => void;
  defaultValueName?: string;
  classNames?: string;
}

export interface ValueInfo {
  label: string;
  type: string;
  name: string;
  disabled?: boolean;
  options?: { value: number | string; name: string }[];
  defaultValue?: string;
  defaultName?: string;
  onInputChange?: (newValue: string) => void;
}

export interface FormInfo<T> {
  values: ValueInfo[];
  onSubmit: (value: T) => void;
  vaidation: Yup.Schema<any>;
  actionName: string;
  inputClassNames?: string;
}

export interface PurchaseFormInfo {
  onSubmit: (values: PurchaseDto) => void;
  dishes: DishBasketDto[];
  initialValues: PurchaseDto;
}
