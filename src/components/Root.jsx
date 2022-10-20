import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const ProductContext = createContext()

const Root = () => {
    const products = useLoaderData()
    return (
        <ProductContext.Provider value={products}>
            <Header />
            <Outlet />
        </ProductContext.Provider>
    );
};

export default Root;