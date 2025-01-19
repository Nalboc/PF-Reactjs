import { useContext } from "react";
import cartContext from "../context/cartContext";
import CenterFlexContainer from "./CenterFlexContainer";
function CartContainer() {
  const { cartItems } = useContext(cartContext);

  return (
    <div>
      <CenterFlexContainer>
        <h1>Tu carrito</h1>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Unidades: {item.count}</p>
          </div>
        ))}
      </CenterFlexContainer>
    </div>
  );
}

export default CartContainer;
