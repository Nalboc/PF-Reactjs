import { useContext } from "react";
import cartContext from "../context/cartContext";
export default function CartWidget(props) {
  const context = useContext(cartContext);
  console.log(context);
  return (
    <div>
      <img src="../public/carrito-de-compras.png" alt="carrito-compras" />
      {context.countItemsInCart()}
    </div>
  );
}
