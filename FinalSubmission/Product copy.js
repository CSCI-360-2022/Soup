/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Integer, { useState } from 'react';
import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';

export default function Product({
  _id,
  name,
  price,
  description,
  picture,
  quantity,
}) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [quantityLeft, useCounter] = useState(quantity);

  function addProduct() {
    if (quantityLeft > 0) {
      setSelectedProducts((prev) => [...prev, _id]);
      Increment();
    }
  }

  function Increment() {
    useCounter(quantityLeft - 1);
  }

  return (
    <div className="w-52">
      <div className=" hover:bg-red-400 p-2 rounded-xl">
        <button
          onClick={addProduct}
          className=" text-white py-50 px-50 rounded-xl"
        >
          <img src={picture} alt="" className="rounded-xl" />
        </button>
      </div>
      <div className="mt-2">
        <h3 className="games font-bold text-lg ">{name}</h3>
      </div>
      <p class="tickets"> {quantityLeft} Tickets Remaining</p>

      <div className="flex mt-1">
        <div className="text-2xl font-bold grow">${price}</div>
        <button
          id='addToCart'
          onClick={addProduct}
          className="bg-red-400 hover:bg-red-600 text-white py-1 px-3 rounded-xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
