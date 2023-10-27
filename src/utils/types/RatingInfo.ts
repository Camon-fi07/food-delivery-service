export interface RatingInfo {
  rating: number;
  canChange: boolean;
  onCLick?: (value: number) => void;
}
