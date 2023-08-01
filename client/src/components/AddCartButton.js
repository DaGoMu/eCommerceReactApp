import React from "react";
import { useCart } from "../context/cart.js";
import toast from "react-hot-toast";

const AddCartButton = () => {
  const [cart, setCart] = useCart();

  return (
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
    </button>
  );
};

export default AddCartButton;
