import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./Rating";

function ProductCard(props) {
  const { productDetails } = props;
  const { title, description, category, image, rating, price, id } =
    productDetails;
  const { rate, count } = rating;
  const truncatedText =
    description.length > 80
      ? description.slice(0, 80 - 3) + "..."
      : description;

  return (
    <Link to={`/product/${id}`}>
      <div className="w-[400px] h-[600px] bg-white shadow-lg mb-2 flex flex-col justify-around py-6 px-4 items-center rounded-lg text-center gap-3">
        <div>
          <img src={image} alt="title" className="h-[200px] w-[150px]" />
        </div>
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
          <div className="w-full flex justify-around items-center py-2">
            <button className="px-[20px] font-workSans py-[10px] rounded-md border-2 border-solid border-blue-600 hover:bg-blue-500 hover:text-white">
              Buy Now
            </button>
            <button className="bg-slate-500 px-[20px] py-[10px] rounded-md text-white font-workSans hover:border-2 hover:bg-transparent hover:border-gray-900 hover:text-blue-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
