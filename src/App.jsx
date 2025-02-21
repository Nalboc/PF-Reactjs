import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section>
                  <ItemListContainer>Tienda de bicicletas</ItemListContainer>
                </section>
              </div>
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            path="/category/:catid"
            element={<ItemListContainer>Catalogo filtrado</ItemListContainer>}
          />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
