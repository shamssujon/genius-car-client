import React from "react";
import { useLoaderData } from "react-router-dom";
import ConfirmOrderForm from "../Components/ConfirmOrderForm";
import PageHeader from "../Components/PageHeader";

const CheckoutPage = () => {
    const serviceData = useLoaderData();
    const { _id, title, price, img } = serviceData;
    return (
        <>
            <PageHeader PageHeaderTitle={"Checkout"} />
            <section className="pt-10">
                <div className="container">
                    <div className="content  rounded-lg bg-base-200 p-8">
                        <h4 className="text-2xl font-bold">You are ordering:</h4>
                        <div className="bg-white p-4 flex items-center gap-4 rounded-md mt-4">
                            <div className="aspect-4/3 w-20">
                                <img src={img} alt="" className="w-full h-full object-cover border rounded-md" />
                            </div>
                            <div>
                                <h5 className="font-bold text-lg">{title}</h5>
                                <p>Price: {price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ConfirmOrderForm serviceData={serviceData} />
        </>
    );
};

export default CheckoutPage;
