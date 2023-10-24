export interface MenuSelectorInfo {
  toggleCategory: (values: string) => void;
  setVegetarian: (value: string) => void;
  setSorting: (value: string) => void;
  categories: string[];
  sorting: string;
  vegetarian: boolean;
}
