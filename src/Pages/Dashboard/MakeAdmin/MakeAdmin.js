import React, { useState } from "react";
import Swal from "sweetalert2";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.modifiedCount===1){
            Swal.fire("Admin Add SuccessFully", "", "success");
        }
      });
  };
  return (
    <div className="admin-form shadow mt-4 my-5 text-center">
      <form onSubmit={handleAdminSubmit}>
        <div>
          <input onBlur={handleOnBlur} type="email" placeholder="Enter Email" />
          <button type="submit" class="mx-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
