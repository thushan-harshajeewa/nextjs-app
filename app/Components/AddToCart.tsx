import Image from 'next/image';
import React from 'react';

const AddToCart = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://via.placeholder.com/150"
          alt="Product"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name</h2>
        <p className="text-gray-500">This is a short description of the product.</p>
        <div className="card-actions justify-between items-center">
          <span className="text-lg font-bold">$99.99</span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
        <h1 className="badge badge-primary mt-2">3</h1>
      </div>
    </div>
  );
};

export default AddToCart;