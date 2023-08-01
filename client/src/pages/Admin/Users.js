import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout.js";
import AdminMenu from "./../../components/Layout/AdminMenu.js";
import axios from "axios";
import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);

  //get All Products
  const getUsers = async () => {
    try {
      const { data } = await axios.get(`/api/v1/get-users`);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      toast.error("Error getting products");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
