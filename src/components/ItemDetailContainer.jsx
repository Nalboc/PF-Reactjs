import { useEffect, useState } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);
  return <ItemDetail {...product} />;
}
