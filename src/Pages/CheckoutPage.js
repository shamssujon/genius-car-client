import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutPage = () => {
    const serviceData = useLoaderData()
    console.log(serviceData);
    return (
        <div>
            CheckOut
        </div>
    );
};

export default CheckoutPage;