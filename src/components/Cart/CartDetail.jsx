import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCarts,
  getCartsByUserId,
} from "../../config/Redux/Action/cartAction";
import { useNavigate, useParams } from "react-router-dom";

const CartDetail = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { cart } = useSelector((state) => state.cartReducer);
  const [refresh, setRefresh] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { idUser } = useParams();

  const formatPriceInRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleClickCheckbox = (e, item) => {
    if (e.target.checked === true) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const newSelectedItems = selectedItems.filter(
        (selectedItem) => selectedItem.cart_id !== item.cart_id
      );
      setSelectedItems(newSelectedItems);
    }
  };

  const getTotalPrice = () => {
    return selectedItems.reduce((total, currentItem) => {
      return total + parseInt(currentItem.price);
    }, 0);
  };

  const handleCheckout = () => {
    nav("/checkout/" + idUser, { state: { selectedItems } });
  };

  const handleDeleteCart = (id) => {
    dispatch(deleteCarts(id));
    setRefresh(!refresh);
  };

  useEffect(() => {
    dispatch(getCartsByUserId(idUser));
    setRefresh(false);
  }, [dispatch, refresh, idUser]);

  return (
    <Container>
      <div className="" style={{ minHeight: "65vh" }}>
        <table className="w-100 my-3">
          <thead>
            <tr>
              <th style={{ width: "0.5rem", paddingBottom: "5rem" }}></th>
              <th style={{ width: "2rem" }}>Product</th>
              <th style={{ width: "2rem" }}>Name</th>
              <th style={{ width: "2rem" }}>Quantity</th>
              <th style={{ width: "2rem" }}>Size</th>
              <th style={{ width: "2rem" }}>Color</th>
              <th style={{ width: "2rem" }}>Total</th>
              <th style={{ width: "2rem" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <React.Fragment key={item.cart_id}>
                <tr>
                  <td className="pb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={item.cart_id}
                        onChange={(e) => handleClickCheckbox(e, item)}
                      />
                    </div>
                  </td>
                  <td className="pb-4">
                    <img
                      src={
                        "http://127.0.0.1:8000/images/" + item.product_data.img
                      }
                      alt="product"
                      width="100px"
                    />
                  </td>
                  <td className="pb-4">{item.product_data.name}</td>
                  <td className="pb-4">{item.quantity}</td>
                  <td className="pb-4">{item.size}</td>
                  <td className="pb-4">{item.color}</td>
                  <td className="pb-4">{formatPriceInRupiah(item.price)}</td>
                  <td className="pb-4">
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteCart(item.cart_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <h3 className="mx-3">Total: {formatPriceInRupiah(getTotalPrice())}</h3>
        <Button variant="danger" className="float-end" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartDetail;
