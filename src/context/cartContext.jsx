import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  function getTotalPrice() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  }
  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }
  function addItem({ id, price, title, count, img }) {
    const copyCartItems = [...cartItems];
    copyCartItems.push({
      id: id,
      title: title,
      img: img,
      count: count,
      price: price,
    });
    setCartItems(copyCartItems);
  }
  function countItemsInCart() {
    return cartItems.reduce((total, item) => total + item.count, 0);
  }
  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
export default cartContext;
