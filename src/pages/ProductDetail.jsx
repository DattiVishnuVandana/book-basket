import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '../components/Elements/Rating';
import { useTitle } from '../hooks/useTitle';
const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchpro = async () => {
      try {
        const res = await fetch(`http://localhost:8000/products/${id}`);
        const data = await res.json();
        console.log(data);
        setProduct(data);
    
      } catch (err) {
        console.log(err);
      }
    };
        
    fetchpro();
  }, [id]);
useTitle(product.name?product.name:"product")
  return (
    <div className="p-5 m-5">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row h-auto">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <a href="#">
            <img className="p-8 rounded-t-lg w-full max-w-sm object-contain" src={product.poster} alt="product image" />
          </a>
        </div>
        <div className="w-full md:w-1/2 px-5 pb-5 pt-3 flex flex-col justify-between">
          <div>
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product?.name}
              </h5>
            </a>
            <div className="flex flex-wrap items-center mt-2.5 mb-5 gap-2">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Rating rating={product.rating} />
              </div>
              {product.best_seller && (
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                  BEST SELLER
                </span>
              )}
              {product.in_stock && product.best_seller && (
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                  IN STOCK
                </span>
              )}
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 mb-4">{product.long_description}</div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <a
              href="#"
              className="text-white bg-rose-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
