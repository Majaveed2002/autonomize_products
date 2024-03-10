import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import { FadeLoader } from "react-spinners";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-200">
      <div className=" shadow-[0px_0px_10px_10px_#00000024] bg-white p-1 w-full">
        <h1 className="sm:text-[40px]  text-center text-blue-500  text-[48px] font-workSans font-medium ">
          Products
        </h1>
      </div>
      <div>
        {loading ? (
          <div className="h-[70vh] flex justify-center items-center">
            <FadeLoader
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            {products.map((product) => (
              <ProductCard key={product.id} productDetails={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
