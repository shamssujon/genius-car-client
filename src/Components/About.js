import React from "react";
import { Link } from "react-router-dom";
import aboutImg1 from "../Assets/images/about_us/person.jpg";
import aboutImg2 from "../Assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <section className="py-10 lg:pt-10 lg:pb-32">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="relative">
                        <img
                            src={aboutImg1}
                            alt=""
                            className="aspect-square h-full w-4/5 rounded-lg object-cover"
                        />
                        <img
                            src={aboutImg2}
                            alt=""
                            className="absolute -bottom-20 right-0 aspect-square h-auto w-3/5 rounded-lg bg-white object-cover p-2 shadow"
                        />
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-xl font-bold text-primary">About Us</h5>
                        <h2 className="text-5xl font-bold leading-tight">
                            We are qualified & of experience in this field
                        </h2>
                        <p className="text-gray-500">
                            There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or
                            randomised words which don't look even slightly believable.
                        </p>
                        <p className="text-gray-500">
                            the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable.
                        </p>
                        <Link className="btn-primary btn h-auto px-6 py-3 text-lg capitalize inline-flex">
                            Get More Info
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
