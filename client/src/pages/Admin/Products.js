import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import Layout from "../../components/Layout/Layout.js";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get All Products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Error getting products");
    }
  };

  // lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row dashboard">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products</h1>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div
                    className="card m-2"
                    style={{ width: "18rem" }}
                    key={p._id}
                  >
                    <img
                      // src={`/api/v1/product/product-photo/${p._id}`}
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 classname="card-title">{p.name}</h5>
                      <p classname="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
