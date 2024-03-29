import React from "react";
import { IoMdStarHalf } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

function StarRating({ rating }) {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const remainder = rating - fullStars;
    const starArray = [];

    // Adding full stars
    for (let i = 0; i < fullStars; i++) {
      starArray.push(
        <span key={i}>
          <MdStarRate size={25} color="gold" />
        </span>
      );
    }

    // Adding partially filled star
    if (remainder > 0) {
      starArray.push(
        <span key="half">
          <IoMdStarHalf size={25} color="gold" />
        </span>
      );
    }

    // Adding empty stars to complete the 5-star rating
    const remainingStars = Math.ceil(5 - rating); // Number of empty stars
    for (let i = 0; i < remainingStars - 1; i++) {
      starArray.push(
        <span key={`empty${i}`} className="text-gray-400">
          <MdOutlineStarBorder size={25} />
        </span>
      );
    }

    return starArray;
  };

  return <div className="flex">{renderStars()}</div>;
}

export default StarRating;
