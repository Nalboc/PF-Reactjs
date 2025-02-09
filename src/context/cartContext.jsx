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
    const itemIndex = copyCartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      copyCartItems[itemIndex].count += count;
    } else {
      copyCartItems.push({
        id: id,
        title: title,
        img: img,
        count: count,
        price: price,
      });
    }
    setCartItems(copyCartItems);
  }
  function countItemsInCart() {
    return cartItems.reduce((total, item) => total + item.count, 0);
  }
  function countTotalPriceInCart() {
    return cartItems
      .reduce((total, item) => total + item.price * item.count, 0)
      .toFixed(2);
  }
  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
        countTotalPriceInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
export default cartContext;
