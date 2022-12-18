import React,{useState} from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating]=useState(null)
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input type="radio" name="rating" value={starValue} onClick={()=>{set}} />
            <FaStar className="star" size={100} />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
