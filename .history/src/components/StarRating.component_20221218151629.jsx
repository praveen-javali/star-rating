import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
     {[...Array(5)]}
      <FaStar size={100} />
    </div>
  );
};

export default StarRating;
