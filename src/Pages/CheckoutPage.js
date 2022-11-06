import React from "react";
import { useLoaderData } from "react-router-dom";
import ConfirmOrderForm from "../Components/ConfirmOrderForm";
import PageHeader from "../Components/PageHeader";

const CheckoutPage = () => {
    const serviceData = useLoaderData();
    // console.log(serviceData);
    return (
        <>
            <PageHeader />
            <ConfirmOrderForm serviceData={serviceData} />
        </>
    );
};

export default CheckoutPage;
