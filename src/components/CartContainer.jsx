import { useContext } from "react";
import cartContext from "../context/cartContext";
function CartContainer() {
  const { cartItems } = useContext(cartContext);

  return (
    <div>
      <h1>Tu carrito</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Precio: ${item.price}</p>
          <p>Unidades: {item.count}</p>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
