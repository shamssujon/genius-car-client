import React from "react";
import OrderRow from "./OrderRow";
const Orders = ({ orders, handleDelete }) => {
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
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <OrderRow
                                    key={order._id}
                                    order={order}
                                    handleDelete={handleDelete}></OrderRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Orders;
