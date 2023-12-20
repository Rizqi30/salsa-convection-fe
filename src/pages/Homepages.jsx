import Jumbotron from "../components/Jumbotron/Jumbotron";
import ListCategory from "../components/ListCategory/ListCategory";
import ListNewProduct from "../components/NewProducts/ListNewProduct";
import ListAllProduct from "../components/AllProducts/ListAllProduct";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrderBySnapToken } from "../config/Redux/Action";

const Homepages = () => {
  const dispatch = useDispatch();
  const { orderBySnapToken } = useSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getOrderBySnapToken());
  }, [dispatch]);

  return (
    <>
      <Jumbotron />
      <ListCategory />
      <ListNewProduct />
      <ListAllProduct />
      <div
        className="d-flex justify-content-end align-items-center"
        style={{
          position: "sticky",
          bottom: "2rem",
          right: "2rem",
          marginRight: "2rem",
          fontSize: "2rem",
        }}
      >
        <Link to="/checkout-list" className="text-white">
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Checkout!"
            className="d-flex flex-column bg-danger p-2 rounded position-relative"
          >
            <div
              className="bg-warning"
              style={{
                position: "absolute",
                top: "-0.5rem",
                right: "-0.5rem",
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "50%",
                fontSize: "0.8rem",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {orderBySnapToken.length}
            </div>
            <MdOutlineShoppingCartCheckout />
          </div>
        </Link>
      </div>
      <Tooltip id="my-tooltip" place="left" />
    </>
  );
};

export default Homepages;
