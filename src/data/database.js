import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5X3h5uVXBi-8gDsjiarUwz4sO0TPz5EE",
  authDomain: "entregafinalreact-a1efa.firebaseapp.com",
  projectId: "entregafinalreact-a1efa",
  storageBucket: "entregafinalreact-a1efa.firebasestorage.app",
  messagingSenderId: "422360027619",
  appId: "1:422360027619:web:68c8a528dbcbe75a9bd0d6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function getAsyncData() {
  const collectionRef = collection(db, "bicicletas");
  const productsSnapshot = await getDocs(collectionRef);
  const documentsData = productsSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return documentsData;
}
export async function getAsyncItemById(itemID) {
  const docRef = doc(db, "bicicletas", itemID);
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  return docData;
}
export async function getAsyncItemsByCategory(catID) {
  const productsColRef = collection(db, "bicicletas");
  const q = query(productsColRef, where("category", "==", catID));
  const productsSnapshot = await getDocs(q);
  const documentsData = productsSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return documentsData;
}
export async function createBuyOrder(orderData) {
  const newOrderDoc = await addDoc(collection(db, "orders"), orderData);

  return newOrderDoc.id;
}
