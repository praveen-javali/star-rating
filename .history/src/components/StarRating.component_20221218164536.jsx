import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => {
                setRating(starValue);
              }}
              onMouseEnter={() => {
                set(starValue);
              }}
              // onMouseEnter={() => {
              //   setHover(starValue);
              // }}
              // onMouseLeave={() => {
              //   setHover(null);
              // }}
            />
            <FaStar
              className="star"
              color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={100}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
