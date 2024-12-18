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
export default getAsyncData;
