import { useContext } from "react";
import cartContext from "../context/cartContext";
export default function CartWidget(props) {
  const context = useContext(cartContext);
  return (
    <div>
      <img src="/carrito-de-compras.png" alt="carrito-compras" />
      {context.countItemsInCart()}
    </div>
  );
}
