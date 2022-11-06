import React, { useContext, useEffect, useState } from "react";
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
            <p>You have {orders.length} orders</p>
        </div>
    );
};

export default OrdersPage;
