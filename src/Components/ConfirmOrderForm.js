import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const ConfirmOrderForm = ({ serviceData }) => {
    const { user, successToast } = useContext(AuthContext);
    const { _id, title, price } = serviceData;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || form.email.value;
        const message = form.message.value;
        const dateAdded = null;

        const order = {
            serviceId: _id,
            serviceTitle: title,
            price,
            customerName: name,
            customerPhone: phone,
            customerEmail: email,
            customerMessage: message,
            dateAdded,
        };

        fetch(`http://localhost:7100/order`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    successToast("Order placed succcesfully");
                }
            })
            .catch((error) => console.error(error));
    };
    return (
        <section className="py-10">
            <div className="container">
                <form
                    onSubmit={handlePlaceOrder}
                    className="grid gap-6 rounded-lg bg-base-200 p-8 md:grid-cols-2 md:p-12 lg:p-20">
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
                            required
                            name="phone"
                            type="tel"
                            placeholder="Your Phone"
                            className="input-bordered input w-full"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            defaultValue={user?.email}
                            readOnly={user ? true : false}
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
