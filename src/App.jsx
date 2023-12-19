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
import Admin from "./components/Admin/Admin";
import AddProducts from "./components/Admin/Products/AddProducts";
import HomeProducts from "./components/Admin/Products/HomeProducts";
import UpdateProducts from "./components/Admin/Products/UpdateProducts";
import ReadProducts from "./components/Admin/Products/ReadProducts";

function App() {
  return (
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
        <Route path="/admin" element={<Admin />}>
          <Route index element={<HomeProducts />} />
          <Route path="create" element={<AddProducts />} />
          <Route path="update/:id" element={<UpdateProducts />} />
          <Route path="read/:id" element={<ReadProducts />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
