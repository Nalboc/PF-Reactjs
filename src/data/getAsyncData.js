import products from "./data";
function getAsyncData() {
  console.log("solicitando datos");
  const promiseData = new Promise((resolve, reject) => {
    const errorFatal = false;
    setTimeout(() => {
      if (errorFatal) reject("Algo salió mal");
      console.log("Promesa terminada");
      resolve(products);
    }, 2000);
  });
  console.log("Promesa generada");
  return promiseData;
}
export function getAsyncItemById(itemID) {
  console.log("solicitando producto....", itemID);
  const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedProduct = products.find(
        (item) => item.id === Number(itemID)
      );
      //TODO: VALIDAR SI ENOCNTRAMOS UN PRODUCTO, SINO RECHAZAMOS PROMESA.
      resolve(requestedProduct);
    }, 500);
  });
  console.log("Promesa generada");
  return promiseData;
}
export function getAsyncItemsByCategory(catID) {
  console.log("solicitando productos para....", catID);
  const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedProduct = products.filter(
        (item) => String(item.category) === String(catID)
      );
      resolve(requestedProduct);
    }, 500);
  });
  console.log("Promesa generada");
  return promiseData;
}
export default getAsyncData;
