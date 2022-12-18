import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      <>
        {[...Array(5)].map((star, i) => {
          return (
            <label key={i}>
              <input 
             
                <FaStar size={100} />
             
            </label>
          );
        })}
      </>
    </div>
  );
};

export default StarRating;
