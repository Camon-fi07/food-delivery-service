import { useEffect, useState } from "react";
import style from "./style.module.scss";
import star from "assets/star.svg";
import fillStar from "assets/fillStar.svg";
import halfStar from "assets/halfStar.svg";
import { RatingInfo } from "utils/types/RatingInfo";

export const Rating = (props: RatingInfo) => {
  const [percentRatings, setPercentRatins] = useState<number[]>([]);
  const [hoverElement, setHoverElement] = useState(-1);

  useEffect(() => {
    const percents: number[] = Array(10).fill(0);
    if (props.rating && !props.canChange) {
      let i = 0;
      for (; i < props.rating - 1; i++) {
        percents[i] = 1;
      }
      percents[i] = i !== props.rating ? 1 - (i + 1 - props.rating) : 0;
    }
    if (props.canChange) {
      for (let i = 0; i <= hoverElement; i++) {
        percents[i] = 1;
      }
    }
    setPercentRatins(percents);
  }, [hoverElement, props]);

  return (
    <div className={style.rating}>
      {percentRatings.map((percent, index) => (
        <div
          onClick={() => {
            if (props.onCLick) props.onCLick(index + 1);
          }}
          onMouseEnter={() => {
            if (props.canChange) setHoverElement(index);
          }}
          onMouseLeave={() => {
            if (props.canChange) setHoverElement(-1);
          }}
          className={style.star}
        >
          <img className={style.main_star} src={percent > 0 ? (percent < 1 ? halfStar : fillStar) : star} />
        </div>
      ))}
    </div>
  );
};
