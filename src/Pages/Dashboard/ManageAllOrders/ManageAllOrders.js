import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [control]);

  const deleteOrder = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Do you want to delete your order?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "delete",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remainingOrder = orders.filter((order) => order._id !== id);
              Swal.fire("Deleted!", "Your order has been deleted.", "success");
              setOrders(remainingOrder);
              setControl(!control);
            }
          });
      }
    });
  };

  const confirmOrder = (id) => {
    fetch(`http://localhost:5000/confirm/${id}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire("Approved", "Order has been Approved", "success");
          setControl(!control);
        }
      });
  };
  return (
    <div
      className="px-2 mt-5 mx-md-2 bg-white"
      style={{ borderRadius: "15px" }}
    >
      <h3 className="text-center fw-bold mb-4">My orders</h3>
      <Table hover borderless responsive>
        <thead style={{ background: "#F5F6FA", textAlign: "center" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Status</th>
            <th>Cancellation</th>
            <th>Confirm Order</th>
          </tr>
        </thead>

        {orders.map((order) => {
          return (
            <tbody
              key={order._id}
              style={{ fontWeight: "500", textAlign: "center" }}
            >
              <tr>
                <td>{order.name}</td>
                <td>{order.email}</td>

                <td>{order.serviceName}</td>
                <td>{order.status}</td>
                <td>
                  <Button
                    onClick={() => deleteOrder(order._id)}
                    variant="outline-danger"
                    className="p-1 ml-3 mb-0"
                  >
                    <i className="fas mx-1 fa-trash"></i>
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => confirmOrder(order._id)}
                    variant="outline-success"
                    className="px-3 ml-3 mb-0"
                  >
                    Confirm
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default ManageAllOrders;
