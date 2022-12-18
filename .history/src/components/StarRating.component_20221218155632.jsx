import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        return (
          <label>
            <input type="radio" name="rating" value="">
              <FaStar size={100} key={i} />
            </input>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
