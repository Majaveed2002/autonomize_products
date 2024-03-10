import React from "react";
import StarRating from "./Rating";

function ProductCard(props) {
  const { productDetails } = props;
  const { title, description, category, image, rating, price } = productDetails;
  const { rate, count } = rating;
  const truncatedText =
    description.length > 131
      ? description.slice(0, 131 - 3) + "..."
      : description;

  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    width: "100%",
    height: "300px",
  };

  return (
    <div className="w-[400px] h-[500px] bg-white shadow-lg mb-2 flex flex-col justify-around py-6 px-4 items-center rounded-lg text-center gap-3">
      <div style={containerStyle}></div>
      <div>
        <h1 className="text-[18px] text-gray-900 font-bold font-serif">
          {title}
        </h1>
        <p className="text-blue-500 ">{truncatedText}</p>
        <p className="mt-2 text-gray-950 text-[20px] font-workSans text-left w-full font-semibold">
          $ {price}
        </p>
        <p className="text-gray-700 text-base mb-2 text-left text-[20px] ">
          {category}
        </p>
        <span className="text-left">
          <StarRating rating={rate} />
        </span>
        <p className="text-green-800 text-base font-medium font-workSans text-left text-[18px]">
          Rated by {count} people
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
