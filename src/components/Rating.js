import React, { useEffect, useState } from "react";

// styles
import "./Rating.css";

// images
import Star from "../images/star.svg";
import StarFilled from "../images/starFilled.svg";
import LineText from "./LineText";

const Rating = ({ finished, setRate, rate }) => {
  const [star1, setStar1] = useState(Star);
  const [star2, setStar2] = useState(Star);
  const [star3, setStar3] = useState(Star);
  const [star4, setStar4] = useState(Star);
  const [star5, setStar5] = useState(Star);

  useEffect(() => {
    if (rate === 1) {
      setStar1(StarFilled);
      setStar2(Star);
      setStar3(Star);
      setStar4(Star);
      setStar5(Star);
    }
    if (rate === 2) {
      setStar1(StarFilled);
      setStar2(StarFilled);
      setStar3(Star);
      setStar4(Star);
      setStar5(Star);
    }
    if (rate === 3) {
      setStar1(StarFilled);
      setStar2(StarFilled);
      setStar3(StarFilled);
      setStar4(Star);
      setStar5(Star);
    }
    if (rate === 4) {
      setStar1(StarFilled);
      setStar2(StarFilled);
      setStar3(StarFilled);
      setStar4(StarFilled);
      setStar5(Star);
    }
    if (rate === 5) {
      setStar1(StarFilled);
      setStar2(StarFilled);
      setStar3(StarFilled);
      setStar4(StarFilled);
      setStar5(StarFilled);
    }
  }, [rate]);

  const handleChange = (id) => {
    if (!finished) {
      setRate(id);
    }
  };

  return (
    <div className="rating-parent">
      <LineText text={`Star rating for this training`} color={"secondary"} />
      <div className="rating-container">
        <img onClick={() => handleChange(1)} src={star1} alt="star svg" />
        <img onClick={() => handleChange(2)} src={star2} alt="star svg" />
        <img onClick={() => handleChange(3)} src={star3} alt="star svg" />
        <img onClick={() => handleChange(4)} src={star4} alt="star svg" />
        <img onClick={() => handleChange(5)} src={star5} alt="star svg" />
      </div>
    </div>
  );
};

export default Rating;
