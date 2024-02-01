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
import "react-tooltip/dist/react-tooltip.css";
import CheckoutList from "./components/Checkout/CheckoutList";
import CheckoutOrder from "./components/Checkout/CheckoutOrder";
import TransactionList from "./components/Admin/Transaction/Transaction";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<NavbarFooter />}>
          <Route index element={<Homepages />} />
          <Route path=":idUser" element={<Homepages />} />
          <Route path=":idUser/:id" element={<DetailProduct />} />
          <Route path="cart/:idUser" element={<CartDetail />} />
          <Route path="/checkout/:idUser" element={<Checkout />} />
          <Route path="/checkout-list/:idUser" element={<CheckoutList />} />
          <Route path="/order/:id/:idUser" element={<CheckoutOrder />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />}>
          <Route path=":idAdmin" element={<HomeProducts />} />
          <Route path="create/:idAdmin" element={<AddProducts />} />
          <Route path="update/:id" element={<UpdateProducts />} />
          <Route path="read/:id" element={<ReadProducts />} />
          <Route path="transaction/:idAdmin" element={<TransactionList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
