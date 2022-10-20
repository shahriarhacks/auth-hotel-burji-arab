import React, { useContext } from 'react';
import { ProductContext } from './Root';
import SingleProduct from './SingleProduct';

const Product = () => {
    const products = useContext(ProductContext)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 m-14'>
            {
                products.map(product => <SingleProduct key={product?.id} product={product} />)
            }
        </div>
    );
};

export default Product;