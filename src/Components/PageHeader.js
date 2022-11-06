import React from "react";
import bannerImg from "../Assets/images/banner/4.jpg";

const PageHeader = () => {
    return (
        <section className="pt-10">
            <div className="container">
                <div className="relative overflow-hidden rounded-lg p-6 text-white md:p-12 lg:p-24">
                    <img
                        src={bannerImg}
                        alt=""
                        className="absolute inset-0 -z-20 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-90 "></div>
                    <div className="space-y-6 lg:w-1/2">
                        <h2 className="text-3xl font-bold leading-tight md:text-5xl md:leading-tight">
                            Checkout
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
