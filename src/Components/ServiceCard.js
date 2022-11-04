import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="relative overflow-hidden rounded-lg border bg-white p-6">
            <div className="mb-4 aspect-5/3 overflow-hidden">
                <img src={img} alt={title} className="h-full w-full rounded-lg object-cover" />
            </div>
            <div>
                <h4 className="mb-3 text-2xl font-bold capitalize">{title}</h4>
                <div className="flex items-center justify-between">
                    <h5 className="text-xl font-bold text-primary">Price : ${price}</h5>
                    <Link className="text-primary">
                        <BsArrowRightShort className="h-8 w-8" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
