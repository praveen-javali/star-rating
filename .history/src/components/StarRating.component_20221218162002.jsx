import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input type="radio" name="rating" value={} />
            <FaStar className="star" size={100} />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
