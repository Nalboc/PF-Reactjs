import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";
import "./FlexCartContainer.css";

function CartContainer() {
  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    age: "",
  });

  function onInputChange(evt) {
    const inputName = evt.target.name;
    const newUserData = { ...userData };
    newUserData[inputName] = evt.target.value;
    setUserData(newUserData);
  }
  const { cartItems, removeItem, getTotalPrice, countTotalPriceInCart } =
    useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();

    const orderData = {
      buyer: {
        username: userData.username,
        surname: userData.surname,
        age: userData.age,
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);
    console.log("Compra realizada", newOrderID);
  }
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="cart-title">Tu carrito esta vacio</h1>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <h1 className="cart-title">Tu carrito</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">Precio: ${item.price}</p>
              <p className="item-quantity">Unidades: {item.count}</p>
              <p className="item-subtotal">
                Subtotal: ${(item.price * item.count).toFixed(2)}
              </p>
              <button
                className="remove-item-button"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
            <hr />
          </div>
        ))}
        <div className="total">
          <h2>Total: ${countTotalPriceInCart()}</h2>
        </div>
        <form className="checkout-form">
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input
              className="form-input"
              name="username"
              type="text"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Apellido</label>
            <input
              className="form-input"
              name="surname"
              type="text"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Edad</label>
            <input
              className="form-input"
              name="age"
              type="text"
              onChange={onInputChange}
            />
          </div>

          <button
            className="checkout-button"
            disabled={
              !(
                userData.username !== "" &&
                userData.surname !== "" &&
                userData.age !== ""
              )
            }
            onClick={handleCheckout}
          >
            Realizar Compra
          </button>
        </form>
      </div>
    );
  }
}

export default CartContainer;
