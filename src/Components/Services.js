import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <section className="py-10 lg:py-20">
            <div className="container">
                <div className="mx-auto mb-12 space-y-4 text-center lg:w-1/2">
                    <h5 className="text-xl font-bold text-primary">Services</h5>
                    <h2 className="text-3xl font-bold leading-tight md:text-5xl md:leading-tight">
                        Our Services
                    </h2>
                    <p className="text-gray-500">
                        The majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
