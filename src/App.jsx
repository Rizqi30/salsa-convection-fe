import NavItem from "./components/NavItem/NavItem";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ListCategory from "./components/ListCategory/ListCategory";
import ListNewProduct from "./components/New Product/ListNewProduct";

function App() {
  return (
    <div>
      <NavItem />
      <Jumbotron />
      <ListCategory />
      <ListNewProduct />
    </div>
  );
}

export default App;
