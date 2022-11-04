import React from "react";
import image from "../Assets/images/login/login.svg";

const RegisterPage = () => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div className="rounded-lg border p-8 md:p-12 lg:order-2 lg:p-20">
                        <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">Sign Up</h2>
                        <form className="space-y-4">
                            <div className="form-control w-full">
                                <label className="label font-semibold" htmlFor="name">
                                    <span>Name</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="input-bordered input w-full"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label font-semibold" htmlFor="email">
                                    <span>Email</span>
                                </label>
                                <input
                                    required
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    className="input-bordered input w-full"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label font-semibold" htmlFor="password">
                                    <span>Choose Password</span>
                                </label>
                                <input
                                    required
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Your password"
                                    className="input-bordered input w-full"
                                />
                            </div>
                            <div className="grid pt-8">
                                <button className="btn-primary btn">Sign Up</button>
                            </div>
                        </form>
                    </div>

                    <div className="lg:order-1">
                        <img src={image} alt="" className="mx-auto max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
