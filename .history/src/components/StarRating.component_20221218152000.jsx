import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map(() => {
        return (
          <label>
            <FaStar size={50} />;
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
