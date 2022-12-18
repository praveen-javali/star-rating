import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <>
            <label key={index}>
            <input type="radio" name="rating" value="">
              <FaStar size={100} />
            </input></label>
          </>
        );
      })}
    </div>
  );
};

export default StarRating;
