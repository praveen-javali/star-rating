import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map(() => {

        return 
        <FaStar size={50} />;
      })}
    </div>
  );
};

export default StarRating;
