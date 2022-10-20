import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData()
    const { title, category, description ,image,price}=(product)
    return (
        <div className="w-1/2 mx-auto my-14 rounded-md shadow-md bg-gray-900 text-gray-100">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{ title}</h2>
                    <p className="text-gray-100">{ description}</p>
                    <div className="flex justify-between items-center my-6">
                        <p className="text-gray-100">Category: <small>{category}</small></p>
                        <p className="text-gray-100">Price: <small>{price}</small></p>
                   </div>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Buy Now</button>
            </div>
        </div>
    );
};

export default ProductDetails;