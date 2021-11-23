import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";

const Booklist = () => {
  const { AllContext } = useAuth();
  const { user } = AllContext;
  const { email } = user;
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`https://nameless-woodland-81515.herokuapp.com/orders/${email}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [email, control]);

  const deleteOrder = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Do you want to delete your order?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://nameless-woodland-81515.herokuapp.com/delete/${id}`, {
          method: "delete",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire(
                'Deleted!',
                'Your order has been deleted.',
                'success'
              )
              setControl(!control);
            }
          });
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
        <thead style={{ background: "#F5F6FA",textAlign: "center" }}>
          <tr>
            <th>Image</th>
            <th>Service Name</th>
            <th>Status</th>
            <th>Cancellation</th>
          </tr>
        </thead>

        {orders.map((order) => {
          return (
            <tbody key={order._id} style={{ fontWeight: "500" ,textAlign:'center'}}>
              <tr>
                <td>
                  <img width="55px" height="55px" src={`data:image/jpeg;base64,${order?.img}`} alt="" />
                </td>
                <td>{order.title}</td>

                <td>
                  <button
                    style={{ width: "100px" }}
                    className={
                      order.status === "Pending"
                        ? "btn btn-danger"
                        : order.status === "Confirm"
                        ? "btn btn-success"
                        : "btn btn-info"
                    }
                  >
                    {order.status}
                  </button>
                </td>
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
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default Booklist;
