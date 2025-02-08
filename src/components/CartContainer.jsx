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

  const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

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

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu carrito</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">Precio: ${item.price}</p>
            <p className="item-quantity">Unidades: {item.count}</p>
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

export default CartContainer;
/**TODO:Debe mostrar el total de unidades agregadas al context
Utilizar renderizado condicional para mostrar loaders y mensajes condicionales, como “producto sin stock”, “carrito vacío”, etc.
Como finalización de la experiencia de usuario, brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore
Crear un documento en formato markdown documentando brevemente el proyecto
**/
