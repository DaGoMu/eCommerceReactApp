import React, { useState, useEffect } from "react";
import useCategory from "../hooks/useCategory.js";
import Layout from "../components/Layout/Layout.js";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout>
      <h1 className="text-center">All Categories</h1>
      <div className="container-fluid ">
        <div className="row">
          {categories?.map((c) => (
            <div className="col-md-6 mt-2 mb-2 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn btn-primary">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
