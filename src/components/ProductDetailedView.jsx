import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Rating from "./Rating";
import { PulseLoader } from "react-spinners";

function ProductDetailedView() {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const { id } = params;
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      const truncatedText =
        data.description.length > 150
          ? data.description.slice(0, 150 - 3) + "..."
          : data.description;

      data.description = truncatedText;
      setProductDetails(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen my-auto flex flex-col justify-start items-center bg-image">
      <h1 className="text-center lg:mt-[95px] lg:mb-[10px] text-white font-extrabold font-serif sm:text[32px] lg:text-[40px]">
        {productDetails.title}
      </h1>
      <div>
        {loading ? (
          <div className="h-[70vh] flex justify-center items-center">
            <PulseLoader
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="flex sm:flex-col lg:flex-row sm:justify-start lg:justify-around items-center lg:border-[18px] lg:border-blue-300 lg:border-solid lg:w-[900px] lg:h-[500px] sm:w-full">
            <div>
              <img
                className="size-[300px] rounded-lg image"
                src={productDetails.image}
                alt={productDetails.title}
              />
            </div>
            <div className="w-[300px]">
              <div className="flex gap-3 items-center">
                <Rating rating={productDetails.rating.rate} />
                <p className="text-gray-500">
                  ({productDetails.rating.count} reviews)
                </p>
              </div>
              <h1 className="text-gray-800 font-workSans font-semibold lg:text-[20px]">
                {productDetails.title}
              </h1>
              <p className="font-workSans text-gray-600 text-[18px] font-medium">
                {productDetails.description}
              </p>
              <p className="font-workSans text-gray-950 text-[18px] font-medium">
                $ {productDetails.price}
              </p>
              <p className="font-workSans text-gray-950 text-[18px] font-medium">
                {productDetails.category}
              </p>
              <div className="w-full flex justify-around items-center py-2">
                <button className="px-[20px] font-workSans py-[10px] rounded-md border-2 border-solid border-blue-600 hover:bg-blue-500 hover:text-white">
                  Buy Now
                </button>
                <button className="bg-slate-500 px-[20px] py-[10px] rounded-md text-white font-workSans hover:border-2 hover:border-slate-500 hover:text-black hover:bg-transparent">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailedView;
