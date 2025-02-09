import React from "react";
import "./Modal.css";

const Modal = ({ orderDetails, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu compra se ha completado con éxito.</p>
        <h3>Recibo de compra:</h3>
        <p>
          <strong>Nombre:</strong> {orderDetails.buyer.username}{" "}
          {orderDetails.buyer.surname}
        </p>
        <p>
          <strong>Edad:</strong> {orderDetails.buyer.age}
        </p>
        <p>
          <strong>Total:</strong> ${orderDetails.total.toFixed(2)}
        </p>
        <h4>Artículos:</h4>
        <ul>
          {orderDetails.items.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.count}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
