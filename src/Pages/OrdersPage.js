import React, { useContext, useEffect, useState } from "react";
import Orders from "../Components/Orders";
import PageHeader from "../Components/PageHeader";
import { AuthContext } from "../Contexts/AuthProvider";

const OrdersPage = () => {
    const { user, successToast, logOut } = useContext(AuthContext);

    // Load user specific orders
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7100/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("genius-token")}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                        .then(() => {})
                        .catch(() => {});
                }
                return res.json();
            })
            .then((data) => {
                console.log("load user specific data: ", data);
                setOrders(data);
            })
            .catch((error) => console.error(error));
    }, [user?.email, logOut]);

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

                        const remaining = orders.filter((order) => order._id !== id);
                        setOrders(remaining);
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
