import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map(() => {

        return <lable>
           <FaStar size={50} />;
        </lable>
       
      })}
    </div>
  );
};

export default StarRating;
