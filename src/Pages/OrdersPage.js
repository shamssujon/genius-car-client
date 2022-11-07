import React, { useContext, useEffect, useState } from "react";
import Orders from "../Components/Orders";
import PageHeader from "../Components/PageHeader";
import { AuthContext } from "../Contexts/AuthProvider";

const OrdersPage = () => {
    const { user, successToast } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7100/orders?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((error) => console.error(error));
    }, [user?.email]);

    // Delete a order
    const handleDelete = (id) => {
        const confirmDelete = window.confirm(`Want to delete?`);

        if (confirmDelete) {
            fetch(`http://localhost:7100/order/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        successToast(`Deleted successfully`);
                    }
                })
                .catch((error) => console.error(error));
        }
    };
    return (
        <div>
            <PageHeader PageHeaderTitle={"Orders"}></PageHeader>
            <h4 className="pt-10 text-center text-2xl font-bold">
                You have {orders.length} orders
            </h4>
            <Orders orders={orders} handleDelete={handleDelete}></Orders>
        </div>
    );
};

export default OrdersPage;
