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
import "react-tooltip/dist/react-tooltip.css";
import CheckoutList from "./components/Checkout/CheckoutList";
import CheckoutOrder from "./components/Checkout/CheckoutOrder";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NavbarFooter />}>
            <Route index element={<Homepages />} />
            <Route path=":id" element={<DetailProduct />} />
            <Route path="cart" element={<CartDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-list" element={<CheckoutList />} />
            <Route path="/order/:id" element={<CheckoutOrder />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Register />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
