import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  deleteCarts,
  getSnapToken,
  storeOrders,
} from "../../config/Redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { selectedItems } = location.state || {};
  const { snapToken } = useSelector((state) => state.orderReducer);
  const [total, setTotal] = useState(0);
  const [biayaLayanan, setBiayaLayanan] = useState(0);

  const sumTotal = (data) => {
    const total = data.reduce(
      (acc, item) => parseInt(acc) + parseInt(item.price),
      0
    );
    setTotal(total);
  };

  const formatPriceInRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleBiayaLayanan = (total) => {
    const biayaLayanan = (total * 10) / 100;
    setBiayaLayanan(biayaLayanan);
  };

  const handlePayment = async () => {
    dispatch(getSnapToken(total + biayaLayanan));
    selectedItems.map((item) => {
      dispatch(deleteCarts(item.cart_id));
    });
  };

  useEffect(() => {
    sumTotal(selectedItems);
    handleBiayaLayanan(total);
  }, [selectedItems, total]);

  useEffect(() => {
    if (snapToken) {
      selectedItems.map((item) => {
        dispatch(storeOrders(snapToken, item));
      });
    }
  }, [dispatch, selectedItems, snapToken]);

  return (
    <Container>
      <table className="w-100 my-5">
        <thead>
          <tr>
            <th style={{ width: "2rem", paddingBottom: "2rem" }}>Product</th>
            <th style={{ width: "2rem", paddingBottom: "2rem" }}>Name</th>
            <th style={{ width: "2rem", paddingBottom: "2rem" }}>Quantity</th>
            <th style={{ width: "2rem", paddingBottom: "2rem" }}>Size</th>
            <th style={{ width: "2rem", paddingBottom: "2rem" }}>Color</th>
            <th style={{ width: "2rem", paddingBottom: "2rem" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((item) => (
            <React.Fragment key={item.cart_id}>
              <tr>
                <td className="pb-4">
                  <img
                    src={
                      "http://localhost:8000/images/" + item.product_data.img
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
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="d-flex flex-column justify-content-end align-items-end">
        <h5>Total harga product: {formatPriceInRupiah(total)}</h5>
        <h5>Biaya layanan: {formatPriceInRupiah(biayaLayanan)}</h5>

        <h2>Total: {formatPriceInRupiah(total + biayaLayanan)}</h2>
        <Button variant="danger" className="mt-3" onClick={handlePayment}>
          Bayar Sekarang
        </Button>
      </div>

      {/* <h1>Payment</h1>
        <Col md={6}>
          <button id="pay-button">Pay!</button>
          <div id="snap-container"></div>
        </Col> */}
    </Container>
  );
};

export default Checkout;
