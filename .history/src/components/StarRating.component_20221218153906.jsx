import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      <>
        {[...Array(5)].map((star, i) => {
          return (
            <label key={i}>
              <input type="radio" name="rating">
                <FaStar size={100} rati />
              </input>
            </label>
          );
        })}
      </>
    </div>
  );
};

export default StarRating;