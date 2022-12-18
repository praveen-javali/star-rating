import React,{useState} from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const []=useState
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input type="radio" name="rating" value={starValue} />
            <FaStar className="star" size={100} />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
