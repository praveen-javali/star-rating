import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map(() => {
        return <FaStar size={} />;
      })}
    </div>
  );
};

export default StarRating;
