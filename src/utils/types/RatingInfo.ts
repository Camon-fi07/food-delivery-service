export interface RatingInfo {
  id: string;
  rating: number;
  canChange: boolean;
  onCLick?: (value: number) => void;
}
