import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrderBySnapToken } from "../../config/Redux/Action";
import { Link } from "react-router-dom";

const CheckoutList = () => {
  const dispatch = useDispatch();
  const { orderBySnapToken } = useSelector((state) => state.orderReducer);

  const formatPriceInRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  useEffect(() => {
    dispatch(getOrderBySnapToken());
  }, [dispatch]);

  return (
    <Container>
      <div className="" style={{ minHeight: "65vh" }}>
        <table className="w-100 my-5">
          <thead>
            <tr>
              <th style={{ width: "2rem", paddingBottom: "2rem" }}>Product</th>
              <th style={{ width: "2rem", paddingBottom: "2rem" }}>Quantity</th>
              <th style={{ width: "2rem", paddingBottom: "2rem" }}>Total</th>
              <th style={{ width: "2rem", paddingBottom: "2rem" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderBySnapToken.map((item) => (
              <React.Fragment key={item.orders.id}>
                <tr>
                  <td className="pb-4">
                    <img
                      src={"http://127.0.0.1:8000/images/" + item.image}
                      alt="product"
                      width="100px"
                    />
                  </td>
                  <td className="pb-4">{item.total_quantity}</td>
                  <td className="pb-4">
                    {formatPriceInRupiah(item.total_price)}
                  </td>
                  <td className="pb-4">
                    <Link
                      to={`/order/${item.snap_token}`}
                      className="btn btn-danger"
                    >
                      Detail Order
                    </Link>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default CheckoutList;
