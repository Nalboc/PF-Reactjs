import getAsyncData, { getAsyncItemsByCategory } from "../data/getAsyncData";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  console.log("render de itemlist");
  const { catid } = useParams();
  useEffect(() => {
    const respuestaPromise =
      catid === undefined ? getAsyncData() : getAsyncItemsByCategory(catid);
    console.log(respuestaPromise);
    respuestaPromise
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => alert(error));
  }, [catid]);
  return (
    <div>
      <h1 className="navbar-title">{props.children}</h1>
      <ItemList products={products}></ItemList>
    </div>
  );
}
