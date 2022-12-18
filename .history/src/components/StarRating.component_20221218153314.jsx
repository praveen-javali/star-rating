import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      <>
        {[...Array(5)].map(() => {
          return (
            <label>
              <input type="radio" name="rating">
                <
              </input>
            </label>
          );
        })}
      </>
    </div>
  );
};

export default StarRating;
