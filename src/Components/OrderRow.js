import React, { useContext, useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { AuthContext } from "../Contexts/AuthProvider";

const OrderRow = ({ order, handleDelete }) => {
    const { successToast } = useContext(AuthContext);

    // Show Order Details
    const { _id, serviceId, serviceTitle, price, dateAdded } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7100/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setOrderService(data));
    }, [serviceId]);

    // Delete a order
    const handleDelete = (id) => {
        const confirmDelete = window.confirm(`Want to delete ${serviceTitle}?`);

        if (confirmDelete) {
            fetch(`http://localhost:7100/order/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        successToast(`Deleted ${serviceTitle} successfully`);
                    }
                })
                .catch((error) => console.error(error));
        }
    };
    return (
        <tr>
            <td>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn-outline h-6 w-6 rounded-full bg-rose-100 p-0 text-rose-600 transition hover:bg-rose-600 hover:text-white">
                    <BsX className="h-6 w-6" />
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar aspect-4/3 w-20 overflow-hidden rounded-md border">
                        <img src={orderService.img} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold">{serviceTitle}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>${price}</td>
            <td>{dateAdded || "no date"}</td>
            <td>
                <button className="btn-primary btn-sm btn">Pending</button>
            </td>
        </tr>
    );
};

export default OrderRow;
