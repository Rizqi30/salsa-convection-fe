import Jumbotron from "../components/Jumbotron/Jumbotron";
import ListCategory from "../components/ListCategory/ListCategory";
import ListNewProduct from "../components/NewProducts/ListNewProduct";
import ListAllProduct from "../components/AllProducts/ListAllProduct";

const Homepages = () => {
  return (
    <>
      <Jumbotron />
      <ListCategory />
      <ListNewProduct />
      <ListAllProduct />
    </>
  );
};

export default Homepages;
