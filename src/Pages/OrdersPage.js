import React, { useContext, useEffect, useState } from "react";
import Orders from "../Components/Orders";
import PageHeader from "../Components/PageHeader";
import { AuthContext } from "../Contexts/AuthProvider";

const OrdersPage = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7100/orders?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((error) => console.error(error));
    }, [user?.email]);
    return (
        <div>
            <PageHeader PageHeaderTitle={"Orders"}></PageHeader>
            <h4 className="pt-10 text-center text-2xl font-bold">
                You have {orders.length} orders
            </h4>
            <Orders orders={orders}></Orders>
        </div>
    );
};

export default OrdersPage;
