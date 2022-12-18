import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  {
    [...Array(5)].map((star, index) => {
      return (
        <>
          <label>
            <input type="radio" name="rating" value="" key={index}>
              <FaStar size={100} />
            </input>
          </label>
        </>
      );
    });
  }
};

export default StarRating;
