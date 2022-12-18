import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <>
            <label>
              <input type="radio" name="rating" key={index}/>
                <FaStar size={100} />
             
            </label>
          </>
        );
      })}
    </div>
  );
};

export default StarRating;
