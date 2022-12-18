import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      <>
        {[...Array(5)].map((sta) => {
          return (
            <label key={}>
              <input type="radio" name="rating">
                <FaStar size={100}/>
              </input>
            </label>
          );
        })}
      </>
    </div>
  );
};

export default StarRating;
