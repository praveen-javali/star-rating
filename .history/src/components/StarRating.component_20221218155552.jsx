import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        return (
          <label>
            <input type="radio" name="rating" value="" key={i}>
              <FaStar size={100} />
            </input>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
