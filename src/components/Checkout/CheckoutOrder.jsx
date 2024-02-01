import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOrderBySnapTokenId } from "../../config/Redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orderBySnapTokenId } = useSelector((state) => state.orderReducer);

  const formatPriceInRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handlePayment = () => {
    window.snap.pay(orderBySnapTokenId[0].snap_token);
  };

  useEffect(() => {
    dispatch(getOrderBySnapTokenId(id));
  }, [dispatch, id]);
  console.log(id);

  console.log(orderBySnapTokenId);

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
          {orderBySnapTokenId.map((item) =>
            item.orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr>
                  <td className="pb-4">
                    <img
                      src={"http://localhost:8000/images/" + order.product.img}
                      alt="product"
                      width="100px"
                    />
                  </td>
                  <td className="pb-4">{order.product.name}</td>
                  <td className="pb-4">{order.quantity}</td>
                  <td className="pb-4">{order.size}</td>
                  <td className="pb-4">{order.color}</td>
                  <td className="pb-4">{formatPriceInRupiah(order.price)}</td>
                </tr>
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>

      <div className="d-flex flex-column justify-content-end align-items-end">
        {orderBySnapTokenId.map((item) => (
          <>
            <h5 key={item.snap_token}>
              Total harga product:{" "}
              {formatPriceInRupiah(item.total_price - item.service_fee)}
            </h5>
            <h5>Biaya layanan: {formatPriceInRupiah(item.service_fee)}</h5>

            <h2>Total: {formatPriceInRupiah(item.total_price)}</h2>
            <Button variant="danger" className="mt-3" onClick={handlePayment}>
              Bayar Sekarang
            </Button>
          </>
        ))}
      </div>
    </Container>
  );
};

export default Checkout;
