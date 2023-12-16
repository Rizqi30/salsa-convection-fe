import { Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import DetailProduct from "./components/DetailProducts/DetailProducts";
import NavbarFooter from "./pages/NavbarFooter";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./index.css";
import Checkout from "./components/Checkout/Checkout";
import CartDetail from "./components/Cart/CartDetail";
import { Provider } from "react-redux";
import { store } from "./config/index";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NavbarFooter />}>
            <Route index element={<Homepages />} />
            <Route path=":id" element={<DetailProduct />} />
            <Route path="cart" element={<CartDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
