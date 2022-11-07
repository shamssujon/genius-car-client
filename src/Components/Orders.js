import React from "react";
import OrderRow from "./OrderRow";
const Orders = ({ orders }) => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="w-full overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Order date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <OrderRow key={order._id} order={order}></OrderRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Orders;
