import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <div key={index}>
            <label>
              <input type="radio" name="rating" />
              <FaStar size={100} />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
