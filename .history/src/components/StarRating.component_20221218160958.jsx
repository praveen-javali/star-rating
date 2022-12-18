import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <>
            <labe key={index}>
              <input type="radio" name="rating" />
                <FaStar size={100} />
             
            </labe>
          </>
        );
      })}
    </div>
  );
};

export default StarRating;
