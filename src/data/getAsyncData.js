import products from "./data";
function getAsyncData() {
  const promiseData = new Promise((resolve, reject) => {
    const errorFatal = false;
    setTimeout(() => {
      if (errorFatal) reject("Algo salió mal");
      resolve(products);
    }, 2000);
  });
  return promiseData;
}
export function getAsyncItemById(itemID) {
  const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedProduct = products.find(
        (item) => item.id === Number(itemID)
      );
      //TODO: VALIDAR SI ENOCNTRAMOS UN PRODUCTO, SINO RECHAZAMOS PROMESA.
      resolve(requestedProduct);
    }, 500);
  });
  return promiseData;
}
export function getAsyncItemsByCategory(catID) {
  const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestedProduct = products.filter(
        (item) => String(item.category) === String(catID)
      );
      resolve(requestedProduct);
    }, 500);
  });
  return promiseData;
}
export default getAsyncData;
