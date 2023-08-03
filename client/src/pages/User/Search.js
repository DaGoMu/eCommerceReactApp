import React from "react";
import Layout from "../../components/Layout/Layout.js";
import { useSearch } from "../../context/search.js";
import { useCart } from "../../context/cart.js";
import toast from "react-hot-toast";

const Search = () => {
  const [cart, setCart] = useCart();

  const [values, setValues] = useSearch();
  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products found"
              : `Found ${values?.results.length}`}
          </h6>

          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  // src={`/api/v1/product/product-photo/${p._id}`}
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">{p.price}</p>
                  <button className="btn btn-primary">See Details</button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      //    Guardar en local storage para prevenir que se eliminen al actualizar
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
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
      </div>
    </Layout>
  );
};

export default Search;
