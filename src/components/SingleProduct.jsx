import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { title, price, id,image } = product;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                    <h3 className='text-3xl font-semibold'>${ price}</h3>
                </div>
                <Link to={`products/${id}`}>
                    <button type="button" className="w-full py-3 font-semibold border rounded bg-cyan-600 dark:text-gray-100">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleProduct;