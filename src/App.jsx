import NavItem from "./components/NavItem/NavItem";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ListCategory from "./components/ListCategory/ListCategory";
import ListNewProduct from "./components/NewProducts/ListNewProduct";
import ListAllProduct from "./components/AllProducts/ListAllProduct";
import Footer from "./components/Footer/Footer";
import DetailProduct from "./components/DetailProducts/DetailProducts";

function App() {
  return (
    <div>
      <NavItem />
      <Jumbotron />
      <ListCategory />
      <ListNewProduct />
      <ListAllProduct />
      <Footer />
      <DetailProduct />
    </div>
  );
}

export default App;
