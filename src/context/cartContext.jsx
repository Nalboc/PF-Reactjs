import { createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }
  function addItem({ id, price, title, count, img, name }) {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === id
    );

    if (existingItemIndex > -1) {
      updatedCartItems[existingItemIndex].count += count;
    } else {
      updatedCartItems.push({
        id,
        price,
        title,
        count,
        img,
        name,
      });
    }

    setCartItems(updatedCartItems);
  }
  function countItemsInCart() {
    return cartItems.reduce((total, item) => total + item.count, 0);
  }
  return (
    <cartContext.Provider
      value={{
        cartItems: cartItems,
        countItemsInCart,
        addItem,
        removeItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
export default cartContext;
