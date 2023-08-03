import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useCart } from "../../context/cart.js";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const [cart, setCart] = useCart();

  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getRelatedProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Related Products

  const getRelatedProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {/* <h1>ProductDetails</h1>
      {JSON.stringify(product, null, 4)} */}

      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            // src={`/api/v1/product/product-photo/${product._id}`}
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300px"
            width="350px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Category: {product?.category?.name}</h6>
          <h6>Price: {product.price}</h6>
          <button
            className="btn btn-secondary ms-1"
            onClick={() => {
              setCart([...cart, product]);
              //    Guardar en local storage para prevenir que se eliminen al actualizar
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              toast.success("Item added to cart");
            }}
          >
            Add to cart
          </button>{" "}
        </div>
      </div>
      <hr />
      <div className="row container">
        <h1>Similar Products</h1>
        {/* {JSON.stringify(relatedProducts, null, 4)} */}
        {relatedProducts.length < 1 && (
          <p className="text-center">There is no related products</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
              <img
                // src={`/api/v1/product/product-photo/${p._id}`}
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">{p.price}</p>
                <button
                  className="btn btn-secondary ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    //    Guardar en local storage para prevenir que se eliminen al actualizar
                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
                    toast.success("Item added to cart");
                  }}
                >
                  Add to cart
                </button>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
