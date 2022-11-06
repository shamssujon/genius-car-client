import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const ConfirmOrderForm = ({ serviceData }) => {
    const { _id } = serviceData;
    const { user } = useContext(AuthContext);
    return (
        <section className="py-10 md:py-20">
            <div className="container">
                <form className="grid gap-6 rounded-lg bg-base-200 p-8 md:grid-cols-2 md:p-12 lg:p-20">
                    <div className="form-control">
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="input-bordered input w-full"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="input-bordered input w-full"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Your Phone"
                            className="input-bordered input w-full"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            defaultValue={user?.email}
                            readOnly
                            className="input-bordered input w-full"
                        />
                    </div>
                    <div className="form-control md:col-span-2">
                        <textarea
                            rows={3}
                            name="message"
                            className="textarea-bordered textarea text-base"
                            placeholder="Your Message"></textarea>
                    </div>
                    <div className="grid md:col-span-2">
                        <button type="submit" className="btn-primary btn">
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ConfirmOrderForm;
