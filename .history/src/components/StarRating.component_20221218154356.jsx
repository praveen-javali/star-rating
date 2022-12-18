import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      <>
        {[...Array(5)].map((star, i) => {
          return (
            <label key={i}>
              <input name="star" type={"radio"}>

                <input type="ra" name="" value="">
                <FaStar size={100} />
              </input>
            </label>
          );
        })}
      </>
    </div>
  );
};

export default StarRating;
